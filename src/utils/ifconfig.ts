// lib/network-info.ts
export interface NetworkInfo {
    ip: string;
    country?: string;
    countryCode?: string;
    region?: string;
    regionName?: string;
    city?: string;
    zip?: string;
    lat?: number;
    lon?: number;
    timezone?: string;
    isp?: string;
    org?: string;
    as?: string;
    userAgent?: string;
    language?: string;
    referer?: string;
    host?: string;
    connection?: string;
    encoding?: string;
    dnt?: string;
    proxy?: boolean;
    vpn?: boolean;
    hosting?: boolean;
    mobile?: boolean;
    browser?: {
        name?: string;
        version?: string;
        engine?: string;
    };
    os?: {
        name?: string;
        version?: string;
    };
    device?: {
        type?: string;
        vendor?: string;
        model?: string;
    };
    location?: {
        accuracy?: number;
        continent?: string;
        continentCode?: string;
        currency?: string;
        languages?: string[];
        callingCode?: string;
    };
}

// Servicio principal para obtener información de red
export async function getNetworkInfo(): Promise<NetworkInfo> {
    try {
        const [ipInfo, geoInfo, proxyInfo] = await Promise.allSettled([
            getIpInfo(),
            getGeoLocation(),
            checkProxy(),
        ]);

        const networkInfo: NetworkInfo = {
            ip: ipInfo.status === 'fulfilled' ? ipInfo.value.ip : 'Unknown',
            ...(geoInfo.status === 'fulfilled' ? geoInfo.value : {}),
            ...(proxyInfo.status === 'fulfilled' ? proxyInfo.value : {}),
        };

        // Enriquecer con información del navegador
        const browserInfo = getBrowserInfo();
        networkInfo.userAgent = browserInfo.userAgent;
        networkInfo.browser = browserInfo.browser;
        networkInfo.os = browserInfo.os;
        networkInfo.device = browserInfo.device;
        networkInfo.language = browserInfo.language;

        return networkInfo;
    } catch (error) {
        console.error('Error getting network info:', error);
        return getFallbackNetworkInfo();
    }
}

// Función para obtener la IP pública
export async function getIpInfo(): Promise<{ ip: string }> {
    try {
        // Intentar múltiples servicios por si uno falla
        const services = [
            'https://ifconfig.me/ip',
            'https://api.ipify.org?format=json',
            'https://api64.ipify.org?format=json',
            'https://ipinfo.io/ip',
        ];

        for (const service of services) {
            try {
                const response = await fetch(service, {
                    headers: { 'Accept': 'application/json' },
                    cache: 'no-store',
                });

                if (response.ok) {
                    if (service.includes('ipify')) {
                        const data = await response.json();
                        return { ip: data.ip };
                    } else {
                        const text = await response.text();
                        return { ip: text.trim() };
                    }
                }
            } catch (e) {
                continue; // Intentar con el siguiente servicio
            }
        }

        throw new Error('All IP services failed');
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error(`Failed to get IP: ${errorMessage}`);
    }
}

// Función para obtener geolocalización
export async function getGeoLocation(): Promise<Partial<NetworkInfo>> {
    try {
        // Usar ip-api.com (gratuito, sin API key necesario)
        const response = await fetch('http://ip-api.com/json/', {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'fail') {
            throw new Error(data.message);
        }

        return {
            country: data.country,
            countryCode: data.countryCode,
            region: data.region,
            regionName: data.regionName,
            city: data.city,
            zip: data.zip,
            lat: data.lat,
            lon: data.lon,
            timezone: data.timezone,
            isp: data.isp,
            org: data.org,
            as: data.as,
        };
    } catch (error) {
        console.warn('Geolocation failed:', error);

        // Intentar con ipinfo.io como respaldo
        try {
            const response = await fetch('https://ipinfo.io/json', {
                cache: 'no-store',
            });

            if (response.ok) {
                const data = await response.json();
                const [lat, lon] = data.loc?.split(',') || [];

                return {
                    country: data.country,
                    city: data.city,
                    region: data.region,
                    zip: data.postal,
                    lat: lat ? parseFloat(lat) : undefined,
                    lon: lon ? parseFloat(lon) : undefined,
                    timezone: data.timezone,
                    org: data.org,
                };
            }
        } catch (fallbackError) {
            console.warn('Fallback geolocation also failed:', fallbackError);
        }

        return {};
    }
}

// Función para detectar proxy/VPN
export async function checkProxy(): Promise<{ proxy?: boolean; vpn?: boolean; hosting?: boolean }> {
    try {
        // Usar ipinfo.io para datos de proxy
        const response = await fetch('https://ipinfo.io/json', {
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-store',
        });

        if (response.ok) {
            const data = await response.json();

            // Detectar hosting/VPN basado en el ISP
            const isp = data.org?.toLowerCase() || '';
            const hostingProviders = ['digitalocean', 'amazon', 'google', 'microsoft', 'linode', 'vultr', 'ovh', 'hetzner'];
            const vpnProviders = ['expressvpn', 'nordvpn', 'surfshark', 'pia', 'ipvanish', 'vyprvpn', 'protonvpn'];

            const hosting = hostingProviders.some(provider => isp.includes(provider));
            const vpn = vpnProviders.some(provider => isp.includes(provider));

            // Chequear encabezados comunes de proxy
            const proxyHeaders = await checkProxyHeaders();

            return {
                proxy: proxyHeaders || hosting || vpn,
                vpn,
                hosting,
            };
        }

        return {};
    } catch (error) {
        console.warn('Proxy detection failed:', error);
        return {};
    }
}

// Chequear encabezados de proxy comunes
async function checkProxyHeaders(): Promise<boolean> {
    try {
        // Crear una petición a un endpoint que devuelva headers
        const response = await fetch('https://httpbin.org/headers', {
            cache: 'no-store',
        });

        if (response.ok) {
            const data = await response.json();
            const headers = data.headers;

            // Encabezados comunes de proxy
            const proxyIndicators = [
                'x-forwarded-for',
                'x-real-ip',
                'cf-connecting-ip',
                'x-cluster-client-ip',
                'via',
                'forwarded',
            ];

            return proxyIndicators.some(header => headers[header]);
        }

        return false;
    } catch (error) {
        return false;
    }
}

// Obtener información del navegador
export function getBrowserInfo() {
    if (typeof window === 'undefined') {
        return {
            userAgent: 'Server-side',
            browser: {},
            os: {},
            device: {},
            language: 'en',
        };
    }

    const userAgent = window.navigator.userAgent;
    const language = window.navigator.language || window.navigator.languages?.[0] || 'en';

    // Detectar navegador
    let browser = {};
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
        browser = { name: 'Chrome', engine: 'Blink' };
    } else if (userAgent.includes('Firefox')) {
        browser = { name: 'Firefox', engine: 'Gecko' };
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        browser = { name: 'Safari', engine: 'WebKit' };
    } else if (userAgent.includes('Edg')) {
        browser = { name: 'Edge', engine: 'Blink' };
    }

    // Detectar SO
    let os = {};
    if (userAgent.includes('Windows')) {
        os = { name: 'Windows' };
    } else if (userAgent.includes('Mac')) {
        os = { name: 'macOS' };
    } else if (userAgent.includes('Linux')) {
        os = { name: 'Linux' };
    } else if (userAgent.includes('Android')) {
        os = { name: 'Android' };
    } else if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) {
        os = { name: 'iOS' };
    }

    // Detectar dispositivo
    let device = {};
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent);

    if (isMobile) {
        device = { type: 'mobile' };
    } else if (isTablet) {
        device = { type: 'tablet' };
    } else {
        device = { type: 'desktop' };
    }

    return {
        userAgent,
        browser,
        os,
        device,
        language,
    };
}

// Información de fallback
function getFallbackNetworkInfo(): NetworkInfo {
    return {
        ip: '127.0.0.1',
        country: 'Unknown',
        city: 'Unknown',
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server-side',
        language: typeof window !== 'undefined' ? window.navigator.language : 'en',
        proxy: false,
        vpn: false,
        hosting: false,
        mobile: /Mobi|Android/i.test(typeof window !== 'undefined' ? window.navigator.userAgent : ''),
    };
}

// Función para obtener información detallada de ifconfig.me
export async function getIfconfigMeData() {
    try {
        // ifconfig.me tiene diferentes endpoints
        const endpoints = {
            ip: 'https://ifconfig.me/ip',
            all: 'https://ifconfig.me/all.json',
            ua: 'https://ifconfig.me/ua',
            port: 'https://ifconfig.me/port',
            country: 'https://ifconfig.me/country',
            city: 'https://ifconfig.me/city',
            headers: 'https://ifconfig.me/headers',
        };

        const responses = await Promise.allSettled(
            Object.entries(endpoints).map(async ([key, url]) => {
                try {
                    const response = await fetch(url, {
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                            'Accept': key === 'all' ? 'application/json' : 'text/plain',
                        },
                        cache: 'no-store',
                    });

                    if (response.ok) {
                        if (key === 'all') {
                            return { [key]: await response.json() };
                        } else {
                            return { [key]: (await response.text()).trim() };
                        }
                    }
                    return { [key]: null };
                } catch (error) {
                    return { [key]: null };
                }
            })
        );

        const result: Record<string, unknown> = {};
        responses.forEach((response) => {
            if (response.status === 'fulfilled') {
                Object.assign(result, response.value);
            }
        });

        return result;
    } catch (error) {
        console.error('Error getting ifconfig.me data:', error);
        return {};
    }
}