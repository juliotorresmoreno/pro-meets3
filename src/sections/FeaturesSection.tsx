import {
    FaSearch,
    FaChartLine,
    FaComments,
    FaRobot,
    FaCheckCircle,
    FaDatabase,
    FaClipboardCheck,
    FaUsers,
} from 'react-icons/fa';

const FeaturesSection = () => {
    const features = [
        {
            id: 1,
            title: "Búsqueda Inteligente de Talento",
            description: "Encuentra candidatos ideales en segundos con nuestro motor de búsqueda con IA que analiza habilidades, experiencia y compatibilidad cultural.",
            icon: FaSearch,
            benefits: ["Búsqueda por competencias", "Filtros avanzados", "Recomendaciones automáticas"],
            bgColor: "bg-purple-50"
        },
        {
            id: 2,
            title: "Evaluación Automatizada",
            description: "Sistemas inteligentes que evalúan candidatos mediante análisis de habilidades técnicas y evaluación de soft skills.",
            icon: FaChartLine,
            benefits: ["Tests técnicos", "Análisis de comportamiento", "Puntuación objetiva"],
            bgColor: "bg-blue-50"
        },
        {
            id: 3,
            title: "Gestión Integral",
            description: "Controla todo el ciclo de contratación desde una sola plataforma, desde el primer contacto hasta la incorporación.",
            icon: FaComments,
            benefits: ["Pipeline visual", "Comunicación unificada", "Seguimiento automatizado"],
            bgColor: "bg-green-50"
        },
        {
            id: 4,
            title: "Base de Datos Centralizada",
            description: "Almacena y organiza todos los perfiles de candidatos en un repositorio seguro y accesible.",
            icon: FaDatabase,
            benefits: ["Perfiles enriquecidos", "Historial completo", "Búsqueda inteligente"],
            bgColor: "bg-orange-50"
        },
        {
            id: 5,
            title: "Colaboración en Equipo",
            description: "Herramientas diseñadas para que todo tu equipo trabaje de manera coordinada y eficiente.",
            icon: FaUsers,
            benefits: ["Comentarios compartidos", "Calificaciones grupales", "Workflows colaborativos"],
            bgColor: "bg-indigo-50"
        },
        {
            id: 6,
            title: "Reportes y Analytics",
            description: "Obtén insights valiosos sobre tus procesos de contratación con dashboards interactivos.",
            icon: FaClipboardCheck,
            benefits: ["Métricas clave", "Tendencias del mercado", "Optimización de procesos"],
            bgColor: "bg-teal-50"
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                        <FaRobot className="h-5 w-5 text-purple-600" />
                        <span className="text-purple-700 font-medium">Tecnología Avanzada</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Características diseñadas para <span className="text-purple-600">contratar mejor</span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Una plataforma completa que transforma cada etapa del reclutamiento con herramientas inteligentes y un diseño intuitivo.
                    </p>
                </div>

                {/* Grid de características */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative bg-white rounded-xl border border-gray-200 p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Icono */}
                            <div className="mb-6">
                                <feature.icon className={`h-12 w-12 text-purple-600`} />
                            </div>

                            {/* Contenido */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Lista de beneficios */}
                                <div className="pt-4 border-t border-gray-100 space-y-3">
                                    {feature.benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <FaCheckCircle className="h-5 w-5 text-green-500" />
                                            <span className="text-gray-700 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Indicador de hover */}
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;