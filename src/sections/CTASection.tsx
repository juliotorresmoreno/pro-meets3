import Link from 'next/link';

const CTASection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-700">
            <div className="container mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Comienza a usar ProMeets hoy
                </h2>
                
                <p className="text-lg text-purple-100 mb-8">
                    Únete a las empresas que optimizan su proceso de reclutamiento
                </p>
                
                <Link 
                    href="/registro/empresa" 
                    className="inline-block bg-white text-purple-700 px-10 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-md"
                >
                    Crear Cuenta
                </Link>
                
                <p className="mt-4 text-purple-200 text-sm">
                    Sin tarjeta de crédito • Cancelación en cualquier momento
                </p>
            </div>
        </section>
    );
};

export default CTASection;