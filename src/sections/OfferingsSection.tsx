import React from 'react';
import {
    FaDatabase,
    FaRobot,
    FaClipboardCheck,
    FaLaptopCode,
    FaProjectDiagram,
    FaSyncAlt,
    FaNetworkWired,
    FaChartLine,
    FaPlusCircle,
    FaCheck,
    FaShieldAlt,
    FaUsers,
    FaCogs,
    FaComments,
    FaFileAlt
} from 'react-icons/fa';

const OfferingsSection = () => {
    const offerings = [
        {
            id: 1,
            title: "Base de Talento Verificada",
            description: "Acceda a perfiles validados con información completa sobre habilidades, experiencia y referencias.",
            icon: FaDatabase,
            benefits: ["Verificación de identidad", "Validación de experiencia", "Referencias comprobadas"],
        },
        {
            id: 2,
            title: "Búsqueda Inteligente con IA",
            description: "Encuentre candidatos ideales utilizando algoritmos avanzados de búsqueda y matching predictivo.",
            icon: FaRobot,
            benefits: ["Matching inteligente", "Búsqueda semántica", "Recomendaciones personalizadas"],
        },
        {
            id: 3,
            title: "Evaluación Integral",
            description: "Analice perfiles con métricas detalladas y herramientas de evaluación objetiva.",
            icon: FaClipboardCheck,
            benefits: ["Evaluación técnica", "Análisis de soft skills", "Calificaciones comparativas"],
        },
        {
            id: 4,
            title: "Pruebas Técnicas Automatizadas",
            description: "Automatice la evaluación de habilidades específicas con tests diseñados por expertos.",
            icon: FaLaptopCode,
            benefits: ["Tests técnicos", "Ejercicios prácticos", "Evaluación en tiempo real"],
        },
        {
            id: 5,
            title: "Gestión de Pipeline Visual",
            description: "Monitoree el progreso de cada candidato a través de una interfaz visual e intuitiva.",
            icon: FaProjectDiagram,
            benefits: ["Vista Kanban", "Seguimiento de etapas", "Alertas de progreso"],
        },
        {
            id: 6,
            title: "Integración con Herramientas",
            description: "Conecte nuestra plataforma con sus sistemas actuales para un flujo de trabajo unificado.",
            icon: FaSyncAlt,
            benefits: ["API disponible", "Webhooks", "Sincronización bidireccional"],
        },
        {
            id: 7,
            title: "Gestión de Relaciones",
            description: "Mantenga y desarrolle relaciones con candidatos mediante herramientas de comunicación y seguimiento.",
            icon: FaNetworkWired,
            benefits: ["Base de datos de talento", "Seguimiento automatizado", "Comunicación centralizada"],
        },
        {
            id: 8,
            title: "Analíticas de Mercado",
            description: "Obtenga insights sobre tendencias del mercado laboral y rangos salariales competitivos.",
            icon: FaChartLine,
            benefits: ["Benchmarking salarial", "Tendencias del mercado", "Análisis competitivo"],
        },
        {
            id: 9,
            title: "Módulos Adicionales",
            description: "Amplíe la funcionalidad con módulos especializados según sus necesidades específicas.",
            icon: FaPlusCircle,
            benefits: ["Personalización", "Escalabilidad", "Actualizaciones constantes"],
        }
    ];

    const platformHighlights = [
        {
            title: "Seguridad y Privacidad",
            description: "Implementamos los más altos estándares de seguridad para proteger sus datos y los de sus candidatos.",
            icon: FaShieldAlt,
            color: "purple"
        },
        {
            title: "Colaboración en Equipo",
            description: "Trabaje de manera coordinada con su equipo mediante herramientas de colaboración integradas.",
            icon: FaUsers,
            color: "blue"
        },
        {
            title: "Configuración Flexible",
            description: "Adapte la plataforma a sus procesos específicos con opciones de personalización avanzadas.",
            icon: FaCogs,
            color: "green"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                        <FaFileAlt className="h-5 w-5 text-purple-600" />
                        <span className="text-purple-700 font-medium">Nuestra Oferta</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Una plataforma completa para <span className="text-purple-600">todo tu proceso</span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Integramos todas las herramientas necesarias en una solución unificada, desde la búsqueda inicial hasta la contratación final.
                    </p>
                </div>

                {/* Grid de ofertas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {offerings.map((offering) => (
                        <div
                            key={offering.id}
                            className="group bg-white rounded-xl border border-gray-200 p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Icono */}
                            <div className="mb-6">
                                <offering.icon className={`h-12 w-12 text-purple-600`} />
                            </div>

                            {/* Contenido */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                                    {offering.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {offering.description}
                                </p>

                                {/* Lista de beneficios */}
                                <div className="pt-4 border-t border-gray-100 space-y-3">
                                    {offering.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <FaCheck className="h-5 w-5 text-green-500" />
                                            <span className="text-gray-700 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Indicador de hover */}
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Parte de nuestra solución integral</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección de destacados */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Lo que hace especial a nuestra plataforma
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Características diseñadas pensando en las necesidades reales de los equipos de reclutamiento moderno.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {platformHighlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="group text-center p-6 hover:bg-gray-50 rounded-xl transition-colors duration-300"
                            >
                                <div className={`inline-flex p-4 rounded-xl bg-${highlight.color}-50 mb-6`}>
                                    <highlight.icon className={`h-8 w-8 text-${highlight.color}-600`} />
                                </div>

                                <h4 className="text-lg font-bold text-gray-900 mb-3">
                                    {highlight.title}
                                </h4>

                                <p className="text-gray-600">
                                    {highlight.description}
                                </p>

                                <div className="mt-4">
                                    <div className={`w-8 h-1 bg-${highlight.color}-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sección de enfoque integral */}
                <div className="bg-purple-50 rounded-2xl border border-purple-200 p-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Un enfoque integral para el reclutamiento
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                En lugar de múltiples herramientas desconectadas, ofrecemos una solución unificada que cubre todo el ciclo de contratación. Esto significa menos tiempo integrando sistemas y más tiempo enfocado en encontrar el talento adecuado.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <FaComments className="h-5 w-5 text-purple-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Comunicación centralizada</h4>
                                        <p className="text-gray-600 text-sm">Todo en un solo lugar, sin cambiar entre aplicaciones</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <FaSyncAlt className="h-5 w-5 text-purple-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Datos sincronizados</h4>
                                        <p className="text-gray-600 text-sm">Información actualizada automáticamente en todo el sistema</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <FaChartLine className="h-5 w-5 text-purple-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Reportes unificados</h4>
                                        <p className="text-gray-600 text-sm">Métricas consistentes en todo el proceso de contratación</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-4">
                                    Cómo funciona nuestro enfoque
                                </h4>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                                            1
                                        </div>
                                        <span className="font-medium text-gray-900">Búsqueda y descubrimiento</span>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                                            2
                                        </div>
                                        <span className="font-medium text-gray-900">Evaluación y selección</span>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                                            3
                                        </div>
                                        <span className="font-medium text-gray-900">Gestión del proceso</span>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                                            4
                                        </div>
                                        <span className="font-medium text-gray-900">Análisis y mejora</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="text-sm text-gray-600">
                                        Cada etapa está interconectada, permitiendo un flujo de trabajo continuo y eficiente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferingsSection;