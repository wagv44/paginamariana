// Definición de las preguntas
const questions = {
    "Administración y Negocios": [
        { pregunta: "¿Qué es la administración?", opciones: ["Gestión de recursos y personas para alcanzar objetivos", "Estrategia a largo plazo para la sostenibilidad empresarial", "Ciencia del comportamiento organizacional", "Método para reducir costos operativos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el marketing?", opciones: ["Proceso de promoción y venta de productos o servicios", "Actividades enfocadas en la investigación de mercado", "Desarrollo de relaciones a largo plazo con los consumidores", "Optimización de la cadena de suministro"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un análisis FODA?", opciones: ["Evaluación de fortalezas, oportunidades, debilidades y amenazas", "Proceso de identificación de competidores en el mercado", "Método de predicción de precios de productos", "Estudio de la estabilidad política y económica de un país"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es un KPI?", opciones: ["Indicador clave de rendimiento", "Método de análisis de tendencias de consumo", "Proceso para definir la misión empresarial", "Técnica para evaluar el comportamiento del consumidor"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué mide la contabilidad?", opciones: ["Los movimientos financieros de una entidad", "El flujo de efectivo generado por las actividades operativas", "Los costos de los bienes y servicios vendidos", "El valor de los activos fijos"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué es una PYME?", opciones: ["Pequeña y mediana empresa", "Producto Y Medio Electrónico", "Plan Y Metodología Económica", "Pago Y Moneda Electrónica"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué es un plan de negocios?", opciones: ["Documento que detalla objetivos, estrategias y proyecciones de una empresa", "Documento legal de herencia", "Mapa cartográfico", "Contrato laboral"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es la economía?", opciones: ["Ciencia que estudia la producción y consumo de bienes", "Estudio del cuerpo humano", "Diseño de algoritmos", "Derecho constitucional"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué hace un gerente?", opciones: ["Dirige y toma decisiones estratégicas en una empresa", "Investiga enfermedades", "Diseña estructuras", "Desarrolla apps"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el benchmarking?", opciones: ["Comparación con mejores prácticas del sector", "Estudio de fallas internas", "Auditoría legal", "Evaluación psicológica de empleados"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es un presupuesto?", opciones: ["Plan financiero que estima ingresos y gastos", "Tipo de contrato", "Sistema operativo", "Método de enseñanza"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué implica el análisis FODA?", opciones: ["Fortalezas, Oportunidades, Debilidades y Amenazas", "Finanzas, Operaciones, Dirección y Administración", "Filosofía, Organización, Decisión y Acción", "Fondo, Oferta, Demanda y Abastecimiento"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es la ventaja competitiva según Michael Porter?", opciones: ["Capacidad de una empresa para diferenciarse y liderar en costos", "Reducción de personal innecesario", "Uso de tecnología avanzada", "Mayor inversión en publicidad"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es un benchmarking?", opciones: ["Comparación con las mejores prácticas del sector", "Análisis de fallas internas", "Auditoría legal", "Evaluación psicológica de empleados"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Cuál es una función clave del control administrativo?", opciones: ["Medir el desempeño y corregir desviaciones", "Reclutar talento humano", "Diseñar nuevos productos", "Administrar redes sociales"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el análisis PESTEL?", opciones: ["Evaluación de factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales", "Estudio de procesos empresariales", "Planificación de escenarios financieros", "Sistema de evaluación de liderazgo"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es la responsabilidad social empresarial?", opciones: ["Compromiso voluntario con el desarrollo social y ambiental", "Cumplimiento obligatorio de impuestos", "Inversión en tecnología", "Contratación de personal local"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué mide el EBITDA?", opciones: ["Ganancias antes de intereses, impuestos, depreciaciones y amortizaciones", "Costos de producción", "Valor de las acciones", "Nivel de endeudamiento"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Cuál es el propósito de la matriz BCG?", opciones: ["Analizar la posición de productos en el mercado según su participación y crecimiento", "Determinar el perfil del consumidor", "Calcular costos fijos", "Evaluar desempeño individual"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es la cultura organizacional?", opciones: ["Conjunto de valores, normas y prácticas compartidas en una empresa", "Estilo de liderazgo del director", "Número de empleados", "Capacidad financiera de la empresa"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué representa la cadena de valor?", opciones: ["Conjunto de actividades que incrementan el valor del producto o servicio", "Lista de proveedores", "Cadena de producción agrícola", "Flujo de caja mensual"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué significa 'stakeholder'?", opciones: ["Individuo o grupo que afecta o es afectado por las actividades de la empresa", "Accionista mayoritario", "Trabajador temporal", "Consumidor insatisfecho"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el liderazgo transformacional?", opciones: ["Estilo de liderazgo que inspira y motiva a generar cambios positivos", "Control basado en miedo y sanciones", "Delegación total de responsabilidades", "Dirección técnica y operativa"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es la planeación estratégica?", opciones: ["Definición de objetivos a largo plazo y rutas para alcanzarlos", "Contratación de ejecutivos", "Evaluación diaria de ventas", "Capacitación del personal operativo"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué tipo de innovación implica cambios en el modelo de negocio?", opciones: ["Innovación estratégica", "Innovación operativa", "Innovación incremental", "Innovación estética"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué representa el índice de rotación de inventario?", opciones: ["Número de veces que el inventario se renueva en un período", "Tamaño del almacén", "Costo total del producto", "Nivel de satisfacción del cliente"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es la administración del cambio?", opciones: ["Gestión de la transición organizacional frente a nuevas condiciones", "Reducción de costos", "Implementación de tecnología", "Cambio de líderes cada trimestre"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué técnica se utiliza para analizar la rentabilidad de una inversión?", opciones: ["Tasa Interna de Retorno (TIR)", "Benchmarking", "Matriz DOFA", "FODA cruzado"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué significa 'outsourcing'?", opciones: ["Contratación externa de servicios o procesos", "Desvinculación de empleados", "Ampliación del mercado", "Reducción de inventarios"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Cuál es el enfoque del marketing relacional?", opciones: ["Fidelizar clientes mediante relaciones a largo plazo", "Promoción masiva en redes", "Venta directa sin intermediarios", "Reducción de precios"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué analiza un estudio de viabilidad?", opciones: ["Factibilidad económica, técnica y legal de un proyecto", "Número de trabajadores", "Cantidad de sucursales", "Estilo de comunicación del gerente"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué representa el apalancamiento financiero?", opciones: ["Uso de deuda para financiar inversiones", "Incremento en ventas", "Compra de activos", "Capacitación del personal"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es una startup?", opciones: ["Empresa emergente con alto potencial de crecimiento", "Sucursal de gran empresa", "Entidad pública", "Negocio familiar tradicional"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es la ética empresarial?", opciones: ["Principios y valores que rigen el comportamiento dentro de la empresa", "Estilo de liderazgo", "Diseño del producto", "Procedimientos logísticos"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué son los KPIs?", opciones: ["Indicadores clave de desempeño", "Costos proyectados internos", "Factores de riesgo", "Recursos humanos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué implica el liderazgo situacional?", opciones: ["Adaptar el estilo de liderazgo según la situación y madurez del equipo", "Controlar todas las decisiones", "Contratar líderes externos", "Delegar siempre"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es el análisis de brechas?", opciones: ["Comparación entre situación actual y deseada para implementar mejoras", "Análisis de ingresos", "Estudio de mercadeo", "Evaluación legal"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué significa CRM?", opciones: ["Gestión de la relación con los clientes", "Control de recursos materiales", "Contabilidad de resultados mensuales", "Red de comercialización rural"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué evalúa un análisis financiero?", opciones: ["Salud económica de una empresa", "Estilo de liderazgo", "Desempeño de empleados", "Diseño organizacional"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el análisis de costos?", opciones: ["Identificación y clasificación de gastos para optimizar recursos", "Estudio del mercado", "Evaluación del clima laboral", "Diseño publicitario"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué mide el índice de liquidez?", opciones: ["Capacidad de la empresa para cumplir obligaciones a corto plazo", "Nivel de deuda", "Rentabilidad neta", "Grado de innovación"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el canvas de modelo de negocio?", opciones: ["Herramienta visual para describir cómo una empresa crea, entrega y captura valor", "Hoja de cálculo para gastos", "Organigrama", "Formato de entrevistas"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué estudia la microeconomía?", opciones: ["Comportamiento individual de consumidores y empresas", "Política fiscal de un país", "Relaciones internacionales", "Tasa de desempleo global"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué mide el punto de equilibrio?", opciones: ["Nivel de ventas necesario para cubrir costos", "Ganancia total", "Calidad del producto", "Costo variable por unidad"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué implica la teoría de juegos en negocios?", opciones: ["Estudio de decisiones estratégicas entre agentes interdependientes", "Organización de eventos empresariales", "Diseño de videojuegos", "Motivación laboral"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué significa diversificación empresarial?", opciones: ["Ampliación de líneas de productos o servicios para reducir riesgos", "Aumento de precios", "Especialización técnica", "Contratación internacional"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué representa el flujo de caja?", opciones: ["Movimiento de entradas y salidas de efectivo en un periodo", "Cantidad de ventas diarias", "Margen de utilidad", "Número de empleados"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es una fusión empresarial?", opciones: ["Unión de dos o más empresas en una sola entidad", "Creación de una nueva sucursal", "Despido masivo", "Compra de maquinaria"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué significa 'bajo demanda' en modelos de negocio?", opciones: ["Productos o servicios ofrecidos cuando el cliente los solicita", "Altos inventarios disponibles", "Producción en serie", "Comercio tradicional"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Cuál es el enfoque principal del liderazgo servicial?", opciones: ["Priorizar las necesidades del equipo y fomentar su desarrollo", "Controlar desde la jerarquía", "Tomar decisiones unilaterales", "Evitar conflictos"], respuesta: 0, dificultad: 3 }
    ],
    // Aquí puedes agregar otras categorías de preguntas como "Ciencias Básicas y Biomédicas", "Ciencias Jurídicas y Sociales", etc.
    "Ciencias Básicas y Biomédicas": [
        { pregunta: "¿Cuál es la función principal de los glóbulos rojos?", opciones: ["Transportan oxígeno y nutrientes", "Ayudan en la defensa contra infecciones", "Mantienen la temperatura corporal", "Regulan el pH del cuerpo"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Qué órgano humano filtra la sangre?", opciones: ["Riñón", "Páncreas", "Hígado", "Corazón"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Qué tipo de enlace une a los aminoácidos?", opciones: ["Enlace peptídico", "Enlace covalente", "Enlace iónico", "Enlace metálico"], respuesta: 0, dificultad: 2 },
    { pregunta: "¿Qué estudia la biología celular?", opciones: ["Las funciones y estructuras de las células", "Los efectos de las drogas en el cuerpo", "Las enfermedades virales", "La evolución de los seres vivos"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Qué estructura controla la actividad celular?", opciones: ["Núcleo", "Mitocondria", "Citoplasma", "Lisosoma"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Qué es un anticuerpo?", opciones: ["Proteína del sistema inmune que detecta patógenos", "Célula que combate infecciones", "Enzima que descompone las proteínas", "Molécula de grasa que recubre las células"], respuesta: 0, dificultad: 2 },
    { pregunta: "¿Qué es la mitosis?", opciones: ["División celular para producir células idénticas", "Proceso de replicación del ADN", "Movimiento de sustancias a través de la membrana celular", "Regulación de la temperatura celular"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Qué parte del cuerpo produce insulina?", opciones: ["Páncreas", "Hígado", "Riñón", "Estómago"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Cuál es el pH de una solución neutra?", opciones: ["7", "5", "10", "3"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Qué es el ADN?", opciones: ["Material genético que transmite la información hereditaria", "Proteína que da estructura a las células", "Carbohidrato que almacena energía", "Lípido que forma las membranas celulares"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Qué molécula almacena la información genética en los seres vivos?", opciones: ["ADN", "ARN", "Proteínas", "Glucosa"], respuesta: 0 },
    { pregunta: "¿Qué función tiene la mitocondria en una célula?", opciones: ["Producción de energía", "Síntesis de proteínas", "Defensa contra virus", "Formación de la membrana celular"], respuesta: 0 },
    { pregunta: "¿Cuál es la unidad estructural y funcional del sistema nervioso?", opciones: ["Neurona", "Glóbulo rojo", "Linfocito", "Célula muscular"], respuesta: 0 },
    { pregunta: "¿Qué tipo de tejido recubre la superficie del cuerpo y órganos?", opciones: ["Epitelial", "Muscular", "Conectivo", "Óseo"], respuesta: 0 },
    { pregunta: "¿Qué estructura permite el intercambio gaseoso en los pulmones?", opciones: ["Alvéolos", "Bronquios", "Tráquea", "Diafragma"], respuesta: 0 },
    { pregunta: "¿Qué tipo de enlace une los aminoácidos en las proteínas?", opciones: ["Enlace peptídico", "Covalente", "Iónico", "Puente de hidrógeno"], respuesta: 0 },
    { pregunta: "¿Qué célula produce anticuerpos?", opciones: ["Linfocito B", "Macrófago", "Eritrocito", "Neurona"], respuesta: 0 },
    { pregunta: "¿Qué hormona regula los niveles de glucosa en sangre?", opciones: ["Insulina", "Cortisol", "Glucagón", "Adrenalina"], respuesta: 0 },
    { pregunta: "¿Qué es el ciclo de Krebs?", opciones: ["Ruta metabólica que genera ATP", "Proceso de síntesis de proteínas", "Reacción inmunitaria", "Mecanismo de transporte de oxígeno"], respuesta: 0 },
    { pregunta: "¿Qué tipo de célula puede dividirse indefinidamente?", opciones: ["Célula madre", "Neuronas", "Células epiteliales", "Hepatocitos"], respuesta: 0 },
    { pregunta: "¿Qué tipo de sangre es considerado donante universal?", opciones: ["O-", "AB+", "A+", "B+"], respuesta: 0 },
    { pregunta: "¿Qué sistema se encarga de la producción de hormonas?", opciones: ["Endocrino", "Inmunológico", "Digestivo", "Respiratorio"], respuesta: 0 },
    { pregunta: "¿Qué parte del cerebro controla el equilibrio y la coordinación?", opciones: ["Cerebelo", "Hipotálamo", "Corteza frontal", "Amígdala"], respuesta: 0 },
    { pregunta: "¿Cuál es el principal catión intracelular?", opciones: ["Potasio", "Sodio", "Calcio", "Cloro"], respuesta: 0 },
    { pregunta: "¿Qué célula inicia la coagulación sanguínea?", opciones: ["Plaqueta", "Eritrocito", "Neutrófilo", "Linfocito"], respuesta: 0 },
    { pregunta: "¿Qué vitamina es importante para la coagulación?", opciones: ["Vitamina K", "Vitamina A", "Vitamina C", "Vitamina D"], respuesta: 0 },
    { pregunta: "¿Qué es la ósmosis?", opciones: ["Paso de agua a través de una membrana semipermeable", "Transporte de iones a través de canales", "Difusión de glucosa", "Movimiento de proteínas en la célula"], respuesta: 0 },
    { pregunta: "¿Qué órgano produce la bilis?", opciones: ["Hígado", "Páncreas", "Estómago", "Intestino delgado"], respuesta: 0 },
    { pregunta: "¿Qué función tiene el sistema linfático?", opciones: ["Drenaje de líquidos y defensa inmunitaria", "Absorción de nutrientes", "Producción de hormonas", "Descomposición de células viejas"], respuesta: 0 },
    { pregunta: "¿Cuál es el neurotransmisor principal en la sinapsis excitatoria?", opciones: ["Glutamato", "Dopamina", "Serotonina", "GABA"], respuesta: 0 },
    { pregunta: "¿Qué microorganismos no se consideran células vivas?", opciones: ["Virus", "Bacterias", "Hongos", "Protozoos"], respuesta: 0 },
    { pregunta: "¿Cuál es el principal órgano del sistema excretor?", opciones: ["Riñón", "Hígado", "Pulmón", "Estómago"], respuesta: 0 },
    { pregunta: "¿Qué es un antígeno?", opciones: ["Sustancia que desencadena una respuesta inmune", "Molécula de glucosa", "Célula encargada de la defensa", "Hormona que regula el sueño"], respuesta: 0 },
    { pregunta: "¿Cuál es el producto final de la glucólisis?", opciones: ["Piruvato", "Glucosa", "CO₂", "Lactato"], respuesta: 0 },
    { pregunta: "¿Qué componente de la sangre transporta oxígeno?", opciones: ["Hemoglobina", "Glucosa", "Linfocitos", "Plaquetas"], respuesta: 0 },
    { pregunta: "¿Qué enzima descompone el almidón en la saliva?", opciones: ["Amilasa", "Pepsina", "Lipasa", "Tripsina"], respuesta: 0 },
    { pregunta: "¿Qué tipo de célula defiende el cuerpo contra patógenos?", opciones: ["Linfocito", "Eritrocito", "Fibroblasto", "Condrocito"], respuesta: 0 },
    { pregunta: "¿Qué significa homeostasis?", opciones: ["Mantenimiento del equilibrio interno del organismo", "Crecimiento celular descontrolado", "Producción de energía", "Proceso digestivo"], respuesta: 0 },
    { pregunta: "¿Qué tipo de tejido permite el movimiento voluntario?", opciones: ["Muscular esquelético", "Muscular cardíaco", "Epitelial", "Nervioso"], respuesta: 0 },
    { pregunta: "¿Qué es el ATP?", opciones: ["Molécula energética de la célula", "Enzima digestiva", "Ácido nucleico", "Hormona del crecimiento"], respuesta: 0 },
    { pregunta: "¿Qué es la apoptosis?", opciones: ["Muerte celular programada", "Multiplicación celular", "Mutación genética", "Inflamación celular"], respuesta: 0 },
    { pregunta: "¿Cuál es el principal órgano de detoxificación del cuerpo?", opciones: ["Hígado", "Riñón", "Páncreas", "Pulmón"], respuesta: 0 },
    { pregunta: "¿Qué parte del sistema nervioso controla las funciones autónomas?", opciones: ["Sistema nervioso autónomo", "Sistema somático", "Corteza motora", "Sistema límbico"], respuesta: 0 },
    { pregunta: "¿Qué nombre recibe la ciencia que estudia los tejidos?", opciones: ["Histología", "Citología", "Genética", "Microbiología"], respuesta: 0 },
    { pregunta: "¿Qué función tiene el timo en el sistema inmune?", opciones: ["Maduración de linfocitos T", "Filtración de linfa", "Producción de anticuerpos", "Producción de glóbulos rojos"], respuesta: 0 }



    ],
    "Unisimon": [
        { pregunta: "¿En qué año fue fundada la Universidad Simón Bolívar?", opciones: ["1972", "1965", "1975", "1980"], respuesta: 0 },
        { pregunta: "¿Cuántos programas de ingeniería ofrece actualmente la USB?", opciones: ["5", "6", "7", "8"], respuesta: 2 },
        { pregunta: "¿Quién fue el fundador de la Universidad Simón Bolívar?", opciones: ["José Consuegra Higgins", "Gabriel García Márquez", "Álvaro Uribe Vélez", "Carlos Gaviria Díaz"], respuesta: 0 },
        { pregunta: "¿Cuál es la sede principal de la Universidad Simón Bolívar?", opciones: ["Cúcuta", "Barranquilla", "Medellín", "Cartagena"], respuesta: 1 },
        { pregunta: "¿Cuántas facultades tiene actualmente la Universidad Simón Bolívar?", opciones: ["4", "5", "6", "7"], respuesta: 1 },
        { pregunta: "¿Qué nombre recibe el hospital universitario asociado a la USB?", opciones: ["Clínica Simón Bolívar", "Hospital Universidad del Norte", "Clínica Universidad Simón Bolívar", "Hospital Universitario Metropolitano"], respuesta: 2 },
        { pregunta: "¿Cuál es el nombre del actual rector de la Universidad Simón Bolívar (2024)?", opciones: ["José Consuegra Bolívar", "Pedro Consuegra Hernández", "Luis Carlos Galán", "Andrés Pastrana"], respuesta: 0 },
        { pregunta: "¿Qué reconocimiento nacional importante recibió la USB por calidad educativa?", opciones: ["Premio Nacional a la Innovación", "Acreditación Institucional de Alta Calidad Multicampus", "Sello de Excelencia MinTIC", "Premio al Mejor Campus Verde"], respuesta: 1 },
        { pregunta: "¿Cuál es el lema institucional de la Universidad Simón Bolívar?", opciones: ["Educando para el futuro", "Saber, libertad y liderazgo", "Ciencia, mente y sociedad", "Formando agentes de cambio"], respuesta: 1 },
        { pregunta: "¿En qué área académica destaca especialmente la Universidad Simón Bolívar?", opciones: ["Ciencias Astronómicas", "Ingenierías y Ciencias de la Salud", "Bellas Artes y Filosofía", "Ciencias Militares"], respuesta: 1 },
        
        { pregunta: "¿Qué entidad avala los programas de posgrado en Unisimón?", opciones: ["Ministerio de Educación Nacional", "ICFES", "SENA", "Universidad Nacional"], respuesta: 0 },
        { pregunta: "¿Qué facultad ofrece el programa de Psicología en Unisimón?", opciones: ["Ciencias Jurídicas y Sociales", "Ciencias de la Salud", "Ciencias Básicas y Biomédicas", "Ingenierías"], respuesta: 1 },
        { pregunta: "¿Cuál de estos es un programa de posgrado ofrecido por Unisimón?", opciones: ["Maestría en Derecho Médico", "Doctorado en Astronomía", "Especialización en Cocina Gourmet", "Licenciatura en Música Clásica"], respuesta: 0 },
        { pregunta: "¿Qué centro de pensamiento económico tiene su sede en Unisimón?", opciones: ["CEC-Economía Caribe", "Centro de Estudios Bolivarianos", "Observatorio de Desarrollo", "Centro de Economía Aplicada del Caribe"], respuesta: 3 },
        { pregunta: "¿Qué programa NO pertenece a la Facultad de Ingenierías de Unisimón?", opciones: ["Ingeniería Industrial", "Ingeniería de Sistemas", "Ingeniería Civil", "Psicología"], respuesta: 3 },
        { pregunta: "¿Qué medio universitario produce noticias e investigaciones en Unisimón?", opciones: ["Unisimón Digital", "Revista del Saber", "Unisimón al Día", "Informativo Bolivariano"], respuesta: 2 },
        { pregunta: "¿Cuál es una de las principales metas de la investigación en Unisimón?", opciones: ["Transformar la realidad social y económica del Caribe", "Hacer marketing educativo", "Exportar tecnología", "Formar militares"], respuesta: 0 },
        { pregunta: "¿Qué evento académico fomenta la investigación entre estudiantes?", opciones: ["Encuentro de Semilleros", "ExpoEmprende", "Foro de Liderazgo", "Simulacro Universitario"], respuesta: 0 },
        { pregunta: "¿Qué programa ofrece la Facultad de Ciencias Jurídicas y Sociales además de Derecho?", opciones: ["Trabajo Social", "Odontología", "Ingeniería Civil", "Fisioterapia"], respuesta: 0 },
        { pregunta: "¿Qué sede de Unisimón cuenta con modernos laboratorios de simulación clínica?", opciones: ["Cúcuta", "Barranquilla", "Bogotá", "Cartagena"], respuesta: 1 },
        { pregunta: "¿Qué actividad extracurricular promueve el bienestar en Unisimón?", opciones: ["Talleres de arte y deporte", "Viajes al extranjero", "Cursos de cocina", "Club de lectura digital"], respuesta: 0 },
        { pregunta: "¿Qué red académica internacional integra Unisimón?", opciones: ["Red TELSC", "Universia", "Alianza del Pacífico", "Red Ecuatoriana de Universidades"], respuesta: 1 },
        { pregunta: "¿Cuál de estos servicios brinda la Biblioteca José Consuegra Higgins?", opciones: ["Préstamo interbibliotecario", "Seguro médico", "Cursos de inglés", "Consultas psicológicas"], respuesta: 0 },
        { pregunta: "¿Qué nombre recibe la feria institucional de emprendimiento?", opciones: ["Innova Unisimón", "Feria de Ideas", "ExpoTalento", "Crea y Gana"], respuesta: 0 },
        { pregunta: "¿Qué componente académico es obligatorio en todos los programas?", opciones: ["Investigación formativa", "Servicio social obligatorio", "Practicar un deporte", "Cátedra militar"], respuesta: 0 },
        { pregunta: "¿Qué espacio tiene Unisimón para el desarrollo artístico?", opciones: ["Casa de la Cultura Bolivariana", "Salón Creativo", "Centro Cultural José Martí", "Pabellón del Arte"], respuesta: 0 },
        { pregunta: "¿Qué objetivo tiene el programa Unisimón Internacional?", opciones: ["Facilitar intercambios académicos y pasantías en el extranjero", "Exportar talento deportivo", "Vender cursos a otros países", "Traducir tesis al inglés"], respuesta: 0 },
        { pregunta: "¿Cuál de estas publicaciones científicas es de Unisimón?", opciones: ["Revista Científica Salud Uninorte", "Revista Científica del Caribe", "Revista Científica Pensamiento Psicológico", "Revista Innovación & Ciencia"], respuesta: 3 },
        { pregunta: "¿Qué carrera de Unisimón tiene laboratorios de química y biología?", opciones: ["Bacteriología", "Derecho", "Administración", "Diseño Gráfico"], respuesta: 0 },
        { pregunta: "¿Cuál de estas universidades ha tenido convenios activos con Unisimón?", opciones: ["Universidad de Salamanca", "Universidad de Harvard", "Universidad Nacional del Japón", "Universidad Técnica de Lisboa"], respuesta: 0 },
        { pregunta: "¿Qué unidad apoya el desarrollo de habilidades emprendedoras en Unisimón?", opciones: ["Centro de Emprendimiento e Innovación", "Fondo Simón", "Red de Jóvenes Empresarios", "Unidad de Comercio"], respuesta: 0 },
        { pregunta: "¿Cuál de estas carreras está disponible en modalidad virtual en Unisimón?", opciones: ["Administración de Empresas", "Odontología", "Ingeniería Electrónica", "Fisioterapia"], respuesta: 0 },
        { pregunta: "¿Qué proyecto social lidera Unisimón en comunidades vulnerables?", opciones: ["Unisimón Social", "Impacto Caribe", "Bolívar Comunitario", "Programa Raíces"], respuesta: 0 },
        { pregunta: "¿Qué evento institucional celebra el legado del Libertador?", opciones: ["Semana Bolivariana", "Día de la Libertad", "Feria del Saber", "Festival Caribeño"], respuesta: 0 },
        { pregunta: "¿Qué idioma se fomenta como segunda lengua en Unisimón?", opciones: ["Inglés", "Portugués", "Francés", "Italiano"], respuesta: 0 },
        { pregunta: "¿Qué certificación de calidad tiene Unisimón?", opciones: ["ISO 9001", "NOM 035", "IQNet", "ISO 14001"], respuesta: 0 },
        { pregunta: "¿Qué programa tiene un enfoque en negocios globales?", opciones: ["Negocios Internacionales", "Psicología Empresarial", "Economía Regional", "Relaciones Públicas"], respuesta: 0 },
        { pregunta: "¿Cuál es la duración promedio de un pregrado en Unisimón?", opciones: ["5 años", "4 años", "3 años", "2 años"], respuesta: 1 },
        { pregunta: "¿Qué espacio institucional promueve la participación estudiantil?", opciones: ["Representación Estudiantil", "Asamblea Estudiantil", "Unisimón Debate", "Club de Discusión"], respuesta: 0 },
        { pregunta: "¿Qué reconocimiento se le otorgó a José Consuegra Higgins por su labor educativa?", opciones: ["Orden de Boyacá", "Doctor Honoris Causa", "Medalla Simón Bolívar", "Premio Vida y Obra"], respuesta: 2 }




    ],
    "Cultura General": [
        { pregunta: "¿Cuál es la capital de Francia?", opciones: ["París", "Madrid", "Roma", "Londres"], respuesta: 0 },
        { pregunta: "¿Qué planeta es conocido como el planeta rojo?", opciones: ["Marte", "Júpiter", "Saturno", "Venus"], respuesta: 0 },
        { pregunta: "¿Cuántos continentes hay en la Tierra?", opciones: ["7", "5", "6", "8"], respuesta: 0},
        { pregunta: "¿En qué país se encuentra la Gran Muralla?", opciones: ["China", "Japón", "Corea", "India"], respuesta: 0 },
        { pregunta: "¿Cuál es el río más largo del mundo?", opciones: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], respuesta: 0 },
        { pregunta: "¿Qué gas respiramos para vivir?", opciones: ["Oxígeno", "Hidrógeno", "Dióxido de carbono", "Helio"], respuesta: 0 },
        { pregunta: "¿Cuántos días tiene un año?", opciones: ["365", "360", "366", "364"], respuesta: 0 },
        { pregunta: "¿Qué animal es conocido como el rey de la selva?", opciones: ["León", "Tigre", "Elefante", "Gorila"], respuesta: 0 },
        { pregunta: "¿Cuál es el océano más grande del mundo?", opciones: ["Pacífico", "Atlántico", "Índico", "Ártico"], respuesta: 0 },
        { pregunta: "¿Qué instrumento tiene teclas blancas y negras?", opciones: ["Piano", "Guitarra", "Violín", "Flauta"], respuesta: 0 },
        
    { pregunta: "¿Cuál es la capital de Australia?", opciones: ["Canberra", "Sídney", "Melbourne", "Brisbane"], respuesta: 0 },
    { pregunta: "¿En qué continente se encuentra Egipto?", opciones: ["África", "Asia", "Europa", "Oceanía"], respuesta: 0 },
    { pregunta: "¿Quién escribió *Cien años de soledad*?", opciones: ["Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda", "Julio Cortázar"], respuesta: 0 },
    { pregunta: "¿Cuál es el idioma más hablado del mundo?", opciones: ["Chino mandarín", "Inglés", "Español", "Árabe"], respuesta: 0 },
    { pregunta: "¿En qué año llegó el hombre a la Luna?", opciones: ["1969", "1959", "1975", "1982"], respuesta: 0 },
    { pregunta: "¿Qué órgano bombea la sangre en el cuerpo humano?", opciones: ["Corazón", "Pulmón", "Riñón", "Hígado"], respuesta: 0 },
    { pregunta: "¿Quién pintó la Mona Lisa?", opciones: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"], respuesta: 0 },
    { pregunta: "¿Cuál es la moneda oficial de Japón?", opciones: ["Yen", "Won", "Dólar", "Yuan"], respuesta: 0 },
    { pregunta: "¿Qué planeta es conocido como el planeta rojo?", opciones: ["Marte", "Venus", "Júpiter", "Saturno"], respuesta: 0 },
    { pregunta: "¿Cuál es el río más largo del mundo?", opciones: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], respuesta: 1 },
    { pregunta: "¿Qué país inventó el papel?", opciones: ["China", "Egipto", "Grecia", "India"], respuesta: 0 },
    { pregunta: "¿Cuál es el océano más grande?", opciones: ["Pacífico", "Atlántico", "Índico", "Ártico"], respuesta: 0 },
    { pregunta: "¿Cuántos jugadores tiene un equipo de fútbol?", opciones: ["11", "10", "9", "12"], respuesta: 0 },
    { pregunta: "¿Cuál es el metal más ligero?", opciones: ["Litio", "Aluminio", "Oro", "Hierro"], respuesta: 0 },
    { pregunta: "¿Cuál es la fórmula química del agua?", opciones: ["H2O", "O2", "CO2", "NaCl"], respuesta: 0 },
    { pregunta: "¿Qué país tiene forma de bota?", opciones: ["Italia", "Grecia", "México", "Chile"], respuesta: 0 },
    { pregunta: "¿Quién fue Albert Einstein?", opciones: ["Científico físico", "Compositor", "Pintor", "Escritor"], respuesta: 0 },
    { pregunta: "¿Qué día se celebra la independencia de México?", opciones: ["16 de septiembre", "20 de julio", "5 de mayo", "1 de octubre"], respuesta: 0 },
    { pregunta: "¿Cuál es la montaña más alta del mundo?", opciones: ["Everest", "K2", "Aconcagua", "Makalu"], respuesta: 0 },
    { pregunta: "¿Quién escribió *Don Quijote de la Mancha*?", opciones: ["Miguel de Cervantes", "Lope de Vega", "Federico García Lorca", "Rubén Darío"], respuesta: 0 },
    { pregunta: "¿Cuántos continentes hay en el mundo?", opciones: ["7", "5", "6", "8"], respuesta: 0 },
    { pregunta: "¿Cuál es el país con mayor población?", opciones: ["China", "India", "EE.UU.", "Indonesia"], respuesta: 0 },
    { pregunta: "¿Qué instrumento mide la temperatura?", opciones: ["Termómetro", "Barómetro", "Higrómetro", "Anemómetro"], respuesta: 0 },
    { pregunta: "¿En qué país se encuentran las pirámides de Giza?", opciones: ["Egipto", "México", "India", "Irán"], respuesta: 0 },
    { pregunta: "¿Qué científico propuso la teoría de la evolución?", opciones: ["Charles Darwin", "Isaac Newton", "Gregor Mendel", "Louis Pasteur"], respuesta: 0 },
    { pregunta: "¿Qué gas respiramos para vivir?", opciones: ["Oxígeno", "Hidrógeno", "Nitrógeno", "Dióxido de carbono"], respuesta: 0 },
    { pregunta: "¿Cuántos planetas hay en el sistema solar?", opciones: ["8", "9", "10", "7"], respuesta: 0 },
    { pregunta: "¿En qué continente está Brasil?", opciones: ["América del Sur", "Europa", "Asia", "África"], respuesta: 0 },
    { pregunta: "¿Qué animal es el más grande del mundo?", opciones: ["Ballena azul", "Elefante africano", "Jirafa", "Orca"], respuesta: 0 },
    { pregunta: "¿Qué país tiene la Torre Eiffel?", opciones: ["Francia", "Italia", "Inglaterra", "Alemania"], respuesta: 0 },
    { pregunta: "¿Qué obra musical compuso Beethoven mientras estaba sordo?", opciones: ["Novena Sinfonía", "Claro de Luna", "Para Elisa", "Quinta Sinfonía"], respuesta: 0 },
    { pregunta: "¿Qué es la ONU?", opciones: ["Organización de las Naciones Unidas", "Oficina Nacional de Urbanismo", "Organización de Noticias Unidas", "Operación Nuclear Universal"], respuesta: 0 },
    { pregunta: "¿En qué año empezó la Segunda Guerra Mundial?", opciones: ["1939", "1914", "1945", "1929"], respuesta: 0 },
    { pregunta: "¿Qué significa la sigla ADN?", opciones: ["Ácido desoxirribonucleico", "Archivo digital nacional", "Aplicación de datos numéricos", "Agente de desarrollo natural"], respuesta: 0 },
    { pregunta: "¿Qué continente no tiene desiertos?", opciones: ["Europa", "Asia", "Oceanía", "África"], respuesta: 0 },
    { pregunta: "¿Cuál es el país más pequeño del mundo?", opciones: ["Ciudad del Vaticano", "Mónaco", "San Marino", "Liechtenstein"], respuesta: 0 },
    { pregunta: "¿Cuál es el idioma oficial de Brasil?", opciones: ["Portugués", "Español", "Inglés", "Italiano"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Canadá?", opciones: ["Ottawa", "Toronto", "Vancouver", "Montreal"], respuesta: 0 },
    { pregunta: "¿Qué artista pintó el techo de la Capilla Sixtina?", opciones: ["Miguel Ángel", "Rafael", "Da Vinci", "Donatello"], respuesta: 0 },
    { pregunta: "¿Qué gas es esencial para la fotosíntesis?", opciones: ["Dióxido de carbono", "Oxígeno", "Hidrógeno", "Nitrógeno"], respuesta: 0 }


    ],
    "Ciencias Jurídicas y Sociales": [
        { pregunta: "¿Cuál es el objetivo principal del derecho?", opciones: ["Regular conductas", "Imponer castigos", "Redactar leyes", "Hacer juicios"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué rama del derecho aborda el matrimonio?", opciones: ["Civil", "Laboral", "Penal", "Mercantil"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué estudia la criminología?", opciones: ["Causas del delito", "Leyes fiscales", "Sistemas judiciales", "Normas laborales"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué órgano interpreta la Constitución?", opciones: ["Corte Constitucional", "Congreso", "Gobierno", "Registraduría"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un contrato?", opciones: ["Acuerdo con valor legal", "Propuesta comercial", "Ley nacional", "Sentencia judicial"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué regula el derecho penal?", opciones: ["Delitos y sanciones", "Impuestos y tasas", "Normas internacionales", "Actividades laborales"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué es la jurisprudencia?", opciones: ["Criterios judiciales repetidos", "Opiniones académicas", "Reglamentos internos", "Decisiones del Ejecutivo"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué implica el habeas corpus?", opciones: ["Proteger la libertad personal", "Asegurar empleo", "Otorgar ciudadanía", "Cobrar impuestos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el Estado de derecho?", opciones: ["Gobierno sometido a la ley", "Sistema dictatorial", "Asamblea popular", "Poder sin control"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué poder crea las leyes?", opciones: ["Legislativo", "Judicial", "Ejecutivo", "Electoral"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué norma tiene más jerarquía?", opciones: ["Constitución", "Decreto", "Ley ordinaria", "Acuerdo municipal"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué derecho protege la libre expresión?", opciones: ["Fundamental", "Civil", "Penal", "Internacional"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué es una ONG?", opciones: ["Entidad no estatal", "Agencia de gobierno", "Empresa pública", "Fundación comercial"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué regula el derecho laboral?", opciones: ["Relación empleo-trabajador", "Leyes fiscales", "Reformas políticas", "Crímenes menores"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué estudia la sociología jurídica?", opciones: ["Interacción entre ley y sociedad", "Principios financieros", "Normas técnicas", "Reglamentos militares"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué diferencia al derecho público del privado?", opciones: ["Presencia del Estado", "Tipo de sanción", "Uso de contratos", "Duración de juicios"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué rama regula el comercio?", opciones: ["Mercantil", "Civil", "Penal", "Administrativa"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué es la doctrina?", opciones: ["Opinión jurídica fundada", "Sentencia final", "Ley vigente", "Costumbre popular"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el derecho internacional público?", opciones: ["Normas entre Estados", "Reglas de aduana", "Tratados laborales", "Leyes civiles"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué busca el derecho constitucional?", opciones: ["Regular el poder del Estado", "Proteger el comercio", "Castigar delitos", "Dirigir contratos"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué implica la presunción de inocencia?", opciones: ["Inocente hasta prueba contraria", "Culpable por indicios", "Responsabilidad automática", "Obligación de declarar"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué regula el derecho administrativo?", opciones: ["Actos del Estado", "Contratos civiles", "Negocios privados", "Crímenes comunes"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es una norma jurídica?", opciones: ["Regla obligatoria", "Propuesta de ley", "Principio moral", "Tradición oral"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué diferencia al delito doloso?", opciones: ["Existe intención", "Es accidental", "Es leve", "No se castiga"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el derecho subjetivo?", opciones: ["Facultad individual", "Deber legal", "Sanción civil", "Tipo de delito"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué derecho protege la integridad física?", opciones: ["A la vida", "Al voto", "A la propiedad", "A la movilidad"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué significa 'lex posterior derogat priori'?", opciones: ["Ley nueva reemplaza a la vieja", "Todas las leyes son iguales", "Solo rige la costumbre", "Los jueces hacen la ley"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es el derecho procesal?", opciones: ["Normas sobre juicios", "Reglas del comercio", "Leyes del trabajo", "Códigos fiscales"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué función tiene el Ministerio Público?", opciones: ["Investigar delitos", "Crear leyes", "Recaudar impuestos", "Ejecutar presupuestos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el amparo?", opciones: ["Protección de derechos", "Solicitud de empleo", "Ley penal", "Recurso administrativo"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es la mediación?", opciones: ["Resolución pacífica de conflictos", "Sentencia judicial", "Castigo alterno", "Reforma legal"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué regula el derecho civil?", opciones: ["Relaciones entre personas", "Sistema penal", "Poder estatal", "Relaciones internacionales"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué estudia la ciencia política?", opciones: ["El poder y su organización", "Los delitos", "La economía", "El derecho privado"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es el poder judicial?", opciones: ["Administra justicia", "Recauda impuestos", "Gobierna el país", "Elabora leyes"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué protege la igualdad ante la ley?", opciones: ["Tratamiento igualitario", "Salario justo", "Acceso a servicios", "Derecho a viajar"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué órgano sanciona leyes en Colombia?", opciones: ["Congreso", "Presidencia", "Procuraduría", "Registraduría"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué regula el derecho ambiental?", opciones: ["Protección de la naturaleza", "Leyes marítimas", "Riesgos laborales", "Sistema bancario"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué define a un tratado internacional?", opciones: ["Acuerdo entre Estados", "Resolución judicial", "Ley nacional", "Norma local"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es una sanción legal?", opciones: ["Consecuencia por incumplir la ley", "Premio estatal", "Acuerdo amistoso", "Acta de reunión"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué regula el derecho financiero?", opciones: ["Gestión de fondos públicos", "Crímenes económicos", "Seguros privados", "Relaciones familiares"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué derecho protege la participación política?", opciones: ["Derecho al voto", "Derecho civil", "Derecho mercantil", "Derecho tributario"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué estudia la antropología jurídica?", opciones: ["Relación entre derecho y cultura", "Normas laborales", "Evolución penal", "Tasas impositivas"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué poder aplica la ley?", opciones: ["Judicial", "Legislativo", "Electoral", "Constituyente"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué implica la división de poderes?", opciones: ["Separación de funciones estatales", "Gobierno militar", "Reforma educativa", "Derecho penal"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué es una ley orgánica?", opciones: ["Norma que desarrolla la Constitución", "Ley internacional", "Reglamento universitario", "Acuerdo privado"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué estudia el derecho comparado?", opciones: ["Sistemas jurídicos diferentes", "Derecho laboral", "Códigos penales", "Procesos locales"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué principio impide juzgar dos veces por lo mismo?", opciones: ["Non bis in idem", "Lex talionis", "Ratio legis", "Corpus juris"], respuesta: 0, dificultad: 3 }
    ],


    
    "Ciencias de la Salud": [

        { pregunta: "¿Cuál es la unidad funcional básica del sistema nervioso?", opciones: ["Neurona", "Axón", "Sinapsis", "Glía"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Qué tipo de tejido conecta músculos con huesos?", opciones: ["Cartílago", "Ligamento", "Tendón", "Fascia"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Cuál es el principal órgano de desintoxicación del cuerpo humano?", opciones: ["Riñón", "Hígado", "Páncreas", "Intestino grueso"], respuesta: 1, dificultad: 1 },
    { pregunta: "¿Qué tipo de célula es responsable de producir anticuerpos?", opciones: ["Linfocito T", "Macrófago", "Linfocito B", "Monocito"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Cuál es la frecuencia cardíaca normal en reposo de un adulto?", opciones: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"], respuesta: 1, dificultad: 1 },
    { pregunta: "¿Qué vitamina es esencial para la coagulación sanguínea?", opciones: ["Vitamina A", "Vitamina D", "Vitamina E", "Vitamina K"], respuesta: 3, dificultad: 2 },
    { pregunta: "¿Qué estructura del ojo es responsable de enfocar la luz?", opciones: ["Córnea", "Retina", "Cristalino", "Iris"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Cuál es el agente causante de la tuberculosis?", opciones: ["Streptococcus pneumoniae", "Mycobacterium tuberculosis", "Escherichia coli", "Staphylococcus aureus"], respuesta: 1, dificultad: 3 },
    { pregunta: "¿Qué hormona regula el metabolismo basal?", opciones: ["Insulina", "Cortisol", "Tiroxina", "Glucagón"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Cuál es la función principal de los glóbulos rojos?", opciones: ["Combatir infecciones", "Transportar oxígeno", "Regular la temperatura", "Coagular la sangre"], respuesta: 1, dificultad: 1 },
    { pregunta: "¿Qué tipo de articulación es la rodilla?", opciones: ["Bisagra", "Esferoidea", "Silla de montar", "Pivotante"], respuesta: 0, dificultad: 2 },
    { pregunta: "¿Qué tipo de músculo es el corazón?", opciones: ["Esquelético", "Liso", "Cardíaco", "Voluntario"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Cuál es el órgano donde se lleva a cabo la mayor parte de la digestión?", opciones: ["Estómago", "Intestino grueso", "Intestino delgado", "Hígado"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Qué estructura cerebral coordina los movimientos voluntarios?", opciones: ["Hipotálamo", "Cerebelo", "Bulbo raquídeo", "Tálamo"], respuesta: 1, dificultad: 2 },
    { pregunta: "¿Qué tipo de células destruyen patógenos por fagocitosis?", opciones: ["Eosinófilos", "Linfocitos", "Macrófagos", "Plaquetas"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Cuál es la principal vía de transmisión del VIH?", opciones: ["Agua contaminada", "Contacto con objetos", "Fluidos corporales", "Aire"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Qué glándula regula el ciclo del sueño con melatonina?", opciones: ["Tiroides", "Pineal", "Suprarrenal", "Hipófisis"], respuesta: 1, dificultad: 3 },
    { pregunta: "¿Qué tipo de inmunidad se adquiere por vacunación?", opciones: ["Innata", "Pasiva", "Activa", "Natural"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Qué significa la sigla EPOC?", opciones: ["Enfermedad Pulmonar Obstructiva Crónica", "Edema Pulmonar Obstructivo Crónico", "Efecto Postoperatorio Común", "Enfermedad Pleurítica Orgánica Crónica"], respuesta: 0, dificultad: 3 },
    { pregunta: "¿Cuál es la función de la insulina?", opciones: ["Aumentar glucosa", "Reducir glucosa", "Estimular el metabolismo", "Regular el calcio"], respuesta: 1, dificultad: 1 },
    { pregunta: "¿Cuál es el vector del dengue?", opciones: ["Mosca tse-tse", "Mosquito Anopheles", "Mosquito Aedes aegypti", "Pulga Xenopsylla"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Qué componente de la sangre participa en la coagulación?", opciones: ["Eritrocitos", "Plaquetas", "Linfocitos", "Plasma"], respuesta: 1, dificultad: 1 },
    { pregunta: "¿Qué área del cerebro controla el lenguaje?", opciones: ["Área de Broca", "Área de Wernicke", "Hipocampo", "Corteza occipital"], respuesta: 0, dificultad: 3 },
    { pregunta: "¿Qué significa 'hipertensión'?", opciones: ["Presión arterial baja", "Frecuencia cardíaca baja", "Presión arterial alta", "Ritmo respiratorio rápido"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Qué estructura renal filtra la sangre?", opciones: ["Nefrona", "Uréter", "Cápsula suprarrenal", "Glomérulo"], respuesta: 3, dificultad: 2 },
    { pregunta: "¿Qué bacteria causa el tétanos?", opciones: ["Clostridium tetani", "Staphylococcus aureus", "Salmonella typhi", "Vibrio cholerae"], respuesta: 0, dificultad: 3 },
    { pregunta: "¿Cuál es la función de la hemoglobina?", opciones: ["Luchar contra infecciones", "Transportar oxígeno", "Regular hormonas", "Filtrar toxinas"], respuesta: 1, dificultad: 1 },
    { pregunta: "¿Qué estructura controla el equilibrio?", opciones: ["Bulbo raquídeo", "Cerebelo", "Tálamo", "Mesencéfalo"], respuesta: 1, dificultad: 2 },
    { pregunta: "¿Qué hormona produce el páncreas para controlar la glucosa?", opciones: ["Glucagón", "Tiroxina", "Insulina", "Cortisol"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Qué microorganismo causa la malaria?", opciones: ["Virus", "Bacteria", "Hongo", "Protozoo"], respuesta: 3, dificultad: 2 },
    { pregunta: "¿Qué músculo es el principal en la respiración?", opciones: ["Trapecio", "Intercostales", "Diafragma", "Esternocleidomastoideo"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Qué parte del oído se encarga del equilibrio?", opciones: ["Cóclea", "Martillo", "Canales semicirculares", "Tímpano"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Qué estructura regula la temperatura corporal?", opciones: ["Hipotálamo", "Corteza frontal", "Amígdala", "Bulbo raquídeo"], respuesta: 0, dificultad: 2 },
    { pregunta: "¿Qué es la anemia?", opciones: ["Falta de hierro", "Exceso de glóbulos rojos", "Deficiencia de hemoglobina", "Trastorno de coagulación"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Qué parte del cuerpo humano produce la bilis?", opciones: ["Páncreas", "Hígado", "Estómago", "Intestino delgado"], respuesta: 1, dificultad: 1 },
    { pregunta: "¿Cuál es la principal función del sistema linfático?", opciones: ["Transportar oxígeno", "Regular la temperatura", "Drenar líquidos y defender contra infecciones", "Controlar el equilibrio hormonal"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Qué hormona es conocida como la 'hormona del estrés'?", opciones: ["Adrenalina", "Insulina", "Cortisol", "Melatonina"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Qué significa 'iatrogénico'?", opciones: ["De causa desconocida", "Provocado por el tratamiento médico", "De origen hereditario", "Producido por infecciones"], respuesta: 1, dificultad: 3 },
    { pregunta: "¿Cuál es la función del colágeno?", opciones: ["Proteger contra infecciones", "Transporte de oxígeno", "Sostén estructural", "Producción hormonal"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Qué parámetro se mide con el esfigmomanómetro?", opciones: ["Temperatura", "Frecuencia cardíaca", "Presión arterial", "Frecuencia respiratoria"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Qué prueba se usa para diagnosticar la diabetes?", opciones: ["Electrocardiograma", "Glucemia", "Radiografía", "Urocultivo"], respuesta: 1, dificultad: 1 },
    { pregunta: "¿Qué célula detecta los estímulos luminosos?", opciones: ["Célula ciliada", "Bastones y conos", "Neutrófilo", "Glía"], respuesta: 1, dificultad: 2 },
    { pregunta: "¿Cuál es el nombre del hueso más largo del cuerpo?", opciones: ["Fémur", "Tibia", "Húmero", "Peroné"], respuesta: 0, dificultad: 1 },
    { pregunta: "¿Qué estructura conecta al feto con la placenta?", opciones: ["Cordón umbilical", "Amnios", "Útero", "Vellosidades coriónicas"], respuesta: 0, dificultad: 2 },
    { pregunta: "¿Qué significa el prefijo 'bradi-'?", opciones: ["Rápido", "Exceso", "Lento", "Doloroso"], respuesta: 2, dificultad: 2 },
    { pregunta: "¿Qué enfermedad se previene con la vacuna BCG?", opciones: ["Hepatitis", "Sarampión", "Tuberculosis", "Varicela"], respuesta: 2, dificultad: 1 },
    { pregunta: "¿Qué significa 'neoplasia'?", opciones: ["Infección", "Inflamación", "Crecimiento anormal de células", "Atrofia"], respuesta: 2, dificultad: 3 },
    { pregunta: "¿Qué capa de la piel contiene vasos sanguíneos?", opciones: ["Epidermis", "Dermis", "Hipodermis", "Estrato córneo"], respuesta: 1, dificultad: 2 },
    { pregunta: "¿Cuál es el nombre del proceso por el cual las células se dividen?", opciones: ["Meiosis", "Fagocitosis", "Mitosis", "Osmosis"], respuesta: 2, dificultad: 2 }
],

    
    "Ingenierías": [

        { pregunta: "¿Qué es un algoritmo?", opciones: ["Conjunto de pasos para resolver un problema", "Conjunto de herramientas de programación", "Un tipo de arquitectura computacional", "Un lenguaje de bajo nivel"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué lenguaje se usa comúnmente en desarrollo web?", opciones: ["JavaScript", "C#", "Ruby", "PHP"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué mide un multímetro?", opciones: ["Voltaje, corriente y resistencia", "Frecuencia, capacitancia y inductancia", "Potencia, temperatura y humedad", "Velocidad, aceleración y distancia"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es HTML?", opciones: ["Lenguaje de marcado para estructurar páginas web", "Lenguaje de programación para crear aplicaciones", "Sistema operativo para servidores web", "Conjunto de instrucciones para bases de datos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué función tiene un compilador?", opciones: ["Traducir código fuente a código máquina", "Crear interfaces de usuario", "Optimizar consultas a bases de datos", "Desarrollar gráficos interactivos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es una base de datos?", opciones: ["Conjunto organizado de datos para facilitar su acceso", "Sistema operativo para gestionar archivos", "Conjunto de algoritmos de búsqueda", "Red de comunicación para computadoras"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un circuito eléctrico?", opciones: ["Conjunto de elementos interconectados que permiten el paso de corriente", "Conjunto de transistores en una placa de circuito impreso", "Sistema de telecomunicaciones", "Conjunto de computadoras conectadas entre sí"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué componente almacena energía temporalmente en un circuito?", opciones: ["Condensador", "Resistencia", "Inductor", "Diodo"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es una variable en programación?", opciones: ["Espacio en memoria para almacenar datos", "Instrucción para la ejecución de un programa", "Fórmula matemática para calcular valores", "Conjunto de operaciones para manipular datos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Cuál es la función de un sistema operativo?", opciones: ["Gestionar los recursos del computador y proporcionar servicios", "Desarrollar programas de software", "Conectar una computadora a la red de internet", "Interpretar códigos binarios"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué unidad mide la resistencia eléctrica?", opciones: ["Ohmio", "Voltio", "Amperio", "Vatio"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es CAD en ingeniería?", opciones: ["Diseño asistido por computadora", "Conjunto de análisis para procesos industriales", "Sistema de comunicación entre máquinas", "Método de validación de productos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué significa la sigla 'CPU'?", opciones: ["Unidad central de procesamiento", "Conjunto de puertos universales", "Componente de protección unificada", "Unidad de compresión universal"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un puente térmico?", opciones: ["Zona donde se pierde energía por conducción térmica", "Componente usado para conectar dos circuitos eléctricos", "Método para aumentar la resistencia de materiales", "Proceso de refrigeración industrial"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué rama de la ingeniería estudia la eficiencia energética?", opciones: ["Ingeniería energética", "Ingeniería civil", "Ingeniería industrial", "Ingeniería de sistemas"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es un PLC?", opciones: ["Controlador lógico programable", "Proceso de control de flujo de trabajo", "Sistema de comunicaciones en redes", "Algoritmo para la gestión de bases de datos"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es un sensor?", opciones: ["Dispositivo que detecta cambios físicos o químicos", "Componente que controla el flujo eléctrico", "Mecanismo que aumenta la temperatura", "Dispositivo que almacena energía"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué programa se utiliza comúnmente para modelado 3D en ingeniería?", opciones: ["AutoCAD", "SolidWorks", "Photoshop", "Blender"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué mide un osciloscopio?", opciones: ["Señales eléctricas en el tiempo", "Corriente en un circuito cerrado", "Temperatura en un sistema térmico", "Fuerza en un material"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es la ingeniería inversa?", opciones: ["Analizar un producto para entender su funcionamiento", "Desarrollar nuevos productos a partir de otros existentes", "Producir en serie un producto", "Crear dispositivos de seguridad"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es el estrés en materiales?", opciones: ["Fuerza interna por unidad de área", "Tipo de deformación a temperaturas altas", "Velocidad de descomposición de un material", "Desplazamiento de átomos en una estructura"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué hace un ingeniero civil?", opciones: ["Diseña infraestructuras como puentes y carreteras", "Crea sistemas de automatización", "Desarrolla aplicaciones móviles", "Diseña circuitos electrónicos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué tipo de energía produce un panel solar?", opciones: ["Energía eléctrica a partir de la luz solar", "Energía térmica", "Energía química", "Energía mecánica"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un sistema hidráulico?", opciones: ["Mecanismo que usa líquido para transmitir energía", "Circuito eléctrico que usa agua", "Dispositivo para aumentar la presión de un gas", "Sistema de computación para procesamiento de señales"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es la ingeniería mecatrónica?", opciones: ["Integración de mecánica, electrónica y control", "Estudio de materiales para construcción", "Diseño de vehículos eléctricos", "Investigación en nanotecnología"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es un diodo?", opciones: ["Componente que permite el paso de corriente en una sola dirección", "Sensor de temperatura", "Dispositivo para medir presión", "Componente para almacenar datos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué significa 'IoT'?", opciones: ["Internet de las cosas", "Índice óptimo de tecnología", "Inteligencia operacional técnica", "Infraestructura operativa tecnológica"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es una impresora 3D?", opciones: ["Máquina que crea objetos físicos a partir de modelos digitales", "Equipo de corte y grabado de materiales", "Dispositivo para analizar estructuras moleculares", "Instrumento para crear circuitos electrónicos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué campo usa software para simular procesos industriales?", opciones: ["Ingeniería de simulación", "Ingeniería biomédica", "Ingeniería textil", "Ingeniería en sistemas de información"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué mide un manómetro?", opciones: ["Presión", "Corriente", "Velocidad", "Temperatura"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es un robot industrial?", opciones: ["Máquina programable para realizar tareas repetitivas", "Dispositivo autónomo para mover mercancías", "Componente que transmite energía", "Sistema informático para controlar máquinas"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es un sistema de control automático?", opciones: ["Un sistema que regula el comportamiento de un proceso", "Un dispositivo para medir temperatura", "Un tipo de motor", "Una estructura de soporte"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un sensor de proximidad?", opciones: ["Dispositivo que detecta la presencia de un objeto sin contacto físico", "Herramienta para medir temperatura", "Componente para almacenar energía", "Sistema de comunicación inalámbrica"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué significa 'RAM' en una computadora?", opciones: ["Memoria de acceso aleatorio", "Red de área metropolitana", "Rendimiento automático de máquina", "Reproducción activa de memoria"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué tipo de energía usa un generador eólico?", opciones: ["Energía cinética del viento", "Energía térmica", "Energía hidráulica", "Energía solar"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué hace un ingeniero industrial?", opciones: ["Optimiza procesos en fábricas y empresas", "Desarrolla software", "Diseña estructuras de edificios", "Crea dispositivos electrónicos"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué es un puente de transmisión?", opciones: ["Conexión que transporta señales o energía entre componentes", "Un tipo de material de construcción", "Un sistema de refrigeración", "Un tipo de base de datos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué componente electrónico regula el flujo de corriente?", opciones: ["Diodo", "Resistencia", "Condensador", "Motor"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un diodo Zener?", opciones: ["Un diodo que permite la circulación de corriente en una sola dirección y estabiliza el voltaje", "Un tipo de transistor", "Un capacitor de alta capacidad", "Un dispositivo para almacenar energía"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué se entiende por 'circuito en paralelo'?", opciones: ["Un circuito donde los componentes están conectados de manera que el voltaje es constante en cada uno", "Un tipo de generador eléctrico", "Un circuito con componentes conectados en serie", "Un tipo de transformador"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un microprocesador?", opciones: ["El cerebro de un dispositivo que realiza cálculos y procesa información", "Un tipo de memoria", "Un dispositivo de almacenamiento", "Un componente de salida"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Cuál es la función principal de un transformador?", opciones: ["Cambiar el voltaje de la corriente eléctrica", "Medir la resistencia de los componentes", "Almacenar energía eléctrica", "Regular la temperatura de los sistemas eléctricos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un sistema de distribución de energía eléctrica?", opciones: ["Red de cables y equipos que transportan electricidad", "Método para almacenar energía solar", "Dispositivo que convierte corriente continua a alterna", "Red para transmitir señales de comunicación"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es un simulador de procesos en ingeniería?", opciones: ["Software que modela el comportamiento de sistemas industriales o naturales", "Dispositivo de medición de temperatura", "Componente de un robot industrial", "Una máquina para fabricar piezas mecánicas"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué significa 'PLC' en ingeniería?", opciones: ["Controlador lógico programable", "Procesador de lenguaje de computadoras", "Proceso de control lineal", "Punto de control lógico"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué es un autómata programable?", opciones: ["Dispositivo que ejecuta instrucciones automáticas para controlar procesos industriales", "Herramienta para diseñar estructuras", "Dispositivo que mide energía eléctrica", "Un tipo de motor de corriente continua"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué mide un termómetro?", opciones: ["Temperatura", "Presión", "Voltaje", "Corriente"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué tipo de energía usan los paneles solares?", opciones: ["Energía solar", "Energía química", "Energía mecánica", "Energía hidráulica"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué es la fotovoltaica?", opciones: ["Tecnología que convierte la luz solar en electricidad", "Proceso de creación de energía mecánica", "Técnica de almacenamiento de energía", "Método de aislamiento térmico"], respuesta: 0, dificultad: 3 },
        { pregunta: "¿Qué es la ingeniería estructural?", opciones: ["Rama de la ingeniería que diseña y analiza estructuras resistentes", "Estudio de la energía nuclear", "Desarrollo de software", "Creación de dispositivos médicos"], respuesta: 0, dificultad: 2 },
        { pregunta: "¿Qué hace un ingeniero en telecomunicaciones?", opciones: ["Diseña y mantiene sistemas de comunicación a distancia", "Crea piezas mecánicas", "Desarrolla sistemas informáticos", "Gestiona redes sociales"], respuesta: 0, dificultad: 1 },
        { pregunta: "¿Qué es un transistor?", opciones: ["Componente electrónico que amplifica señales eléctricas", "Tipo de batería", "Herramienta de programación", "Elemento para almacenar datos"], respuesta: 0, dificultad: 2 }
    
    
    ]
};

 let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalPoints = 0; // Nueva variable para el puntaje total
let totalCorrectAnswers = 0; // Contador total de respuestas correctas
let timerInterval; // Variable para almacenar el intervalo del cronómetro
let timeLeft = 10; // Tiempo inicial para cada pregunta
let currentLevel = 1; // Nivel actual (1: fácil, 2: medio, 3: difícil)
let correctAnswersInLevel = 0; // Contador de respuestas correctas en el nivel actual

// Configuración de niveles
const LEVELS = {
    EASY: 1,
    MEDIUM: 2,
    HARD: 3
};

// Requisitos para pasar de nivel
const LEVEL_REQUIREMENTS = {
    [LEVELS.EASY]: 4, // 4 respuestas correctas para pasar al nivel medio
    [LEVELS.MEDIUM]: 6, // 6 respuestas correctas para pasar al nivel difícil
    [LEVELS.HARD]: 6  // 6 respuestas correctas para aprobar la trivia
};

// Número de preguntas por nivel
const QUESTIONS_PER_LEVEL = {
    [LEVELS.EASY]: 8, // 8 preguntas en nivel fácil
    [LEVELS.MEDIUM]: 10, // 10 preguntas en nivel medio
    [LEVELS.HARD]: 10  // 10 preguntas en nivel difícil
};

// Puntos por respuesta correcta
const POINTS_PER_CORRECT_ANSWER = 10;

function startGame(category) {
    currentCategory = category;
    currentLevel = LEVELS.EASY;
    correctAnswersInLevel = 0;
    score = 0;
    totalPoints = 0; // Reinicia el puntaje total
    totalCorrectAnswers = 0; // Reinicia el contador total
    
    // Verifica si hay preguntas para esta categoría
    if (!questions[category] || questions[category].length === 0) {
        alert(`¡Lo sentimos! No hay preguntas disponibles para la categoría "${category}" en este momento.`);
        goBackToStart();
        return;
    }
    
    // Inicia el primer nivel
    startLevel(currentLevel);
}

function startLevel(level) {
    currentLevel = level;
    correctAnswersInLevel = 0;

    // Si la categoría es "Unisimon" o "Cultura General", no filtra por dificultad
    const filteredQuestions = ["Unisimon", "Cultura General"].includes(currentCategory)
        ? questions[currentCategory]
        : questions[currentCategory].filter(q => q.dificultad === level);

    if (filteredQuestions.length === 0) {
        alert(`No hay preguntas disponibles para el nivel ${level} en ${currentCategory}`);
        goBackToStart();
        return;
    }

    currentQuestions = shuffle([...filteredQuestions]).slice(0, QUESTIONS_PER_LEVEL[level]);
    currentQuestionIndex = 0;

    showSection('question-screen');
    updateLevelDisplay();
    updateScoreDisplay(); // Actualiza la visualización del puntaje
    showQuestion();
}

function updateScoreDisplay() {
    // Busca o crea el elemento de puntaje
    let scoreElement = document.getElementById('score-display');
    if (!scoreElement) {
        scoreElement = document.createElement('div');
        scoreElement.id = 'score-display';
        scoreElement.style.position = 'absolute';
        scoreElement.style.top = '20px';
        scoreElement.style.right = '20px';
        scoreElement.style.fontSize = '24px';
        scoreElement.style.fontWeight = 'bold';
        scoreElement.style.backgroundColor = '#4CAF50';
        scoreElement.style.color = 'white';
        scoreElement.style.padding = '10px 15px';
        scoreElement.style.borderRadius = '10px';
        scoreElement.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        scoreElement.style.zIndex = '1000';
        
        // Agrega el elemento al contenedor de la pantalla de preguntas
        const questionScreen = document.getElementById('question-screen');
        if (questionScreen) {
            questionScreen.style.position = 'relative';
            questionScreen.appendChild(scoreElement);
        }
    }
    
    scoreElement.textContent = `${totalPoints} pts`;
}

function updateLevelDisplay() {
    // Actualiza la visualización del nivel actual (puedes agregar un elemento en el HTML para mostrar esto)
    const levelText = currentLevel === LEVELS.EASY ? "FÁCIL" : 
                     currentLevel === LEVELS.MEDIUM ? "MEDIO" : "DIFÍCIL";
    
    // Si existe un elemento para mostrar el nivel, actualízalo
    const levelElement = document.getElementById('current-level');
    if (levelElement) {
        levelElement.textContent = `Nivel: ${levelText}`;
    } else {
        // Si no existe, crea un elemento nuevo y agrégalo antes del temporizador
        const newLevelElement = document.createElement('div');
        newLevelElement.id = 'current-level';
        newLevelElement.textContent = `Nivel: ${levelText}`;
        newLevelElement.style.fontSize = '20px';
        newLevelElement.style.fontWeight = 'bold';
        newLevelElement.style.marginBottom = '10px';
        newLevelElement.style.color = currentLevel === LEVELS.EASY ? 'green' : 
                                    currentLevel === LEVELS.MEDIUM ? 'orange' : 'red';
        
        const timerContainer = document.getElementById('timer-container');
        if (timerContainer) {
            timerContainer.parentNode.insertBefore(newLevelElement, timerContainer);
        }
    }
}

function showQuestion() {
    const current = currentQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = current.pregunta;

    const opcionesOriginales = current.opciones.map((op, i) => ({ texto: op, esCorrecta: i === current.respuesta }));
    const opcionesMezcladas = shuffle(opcionesOriginales);

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    opcionesMezcladas.forEach(opcion => {
        const btn = document.createElement('button');
        btn.textContent = opcion.texto;
        btn.classList.add('answer-button');
        btn.onclick = () => {
            clearInterval(timerInterval); // Detiene el cronómetro al responder
            checkAnswer(btn, opcion.esCorrecta);
        };
        answersDiv.appendChild(btn);
    });

    // Reinicia el cronómetro
    timeLeft = 10;
    updateTimerCircle(timeLeft); // Actualiza el círculo al inicio
    document.getElementById('timer-text').textContent = timeLeft;
    clearInterval(timerInterval); // Limpia cualquier cronómetro previo
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerCircle(timeLeft); // Actualiza el círculo en cada segundo
        document.getElementById('timer-text').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Detiene el cronómetro
            checkAnswer(null, false); // Marca como incorrecta si no se responde
        }
    }, 1000);
}

function updateTimerCircle(timeLeft) {
    const totalTime = 10; // Tiempo total del temporizador
    const circle = document.getElementById('timer-progress');
    if (circle) {
        const dashArray = 283; // Circunferencia del círculo (2 * Math.PI * radio)
        const dashOffset = dashArray * (1 - timeLeft / totalTime); // Calcula el desplazamiento
        circle.style.strokeDashoffset = dashOffset;
    }
}

function checkAnswer(buttonClicked, esCorrecta) {
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach(btn => btn.classList.add('disabled'));

    if (buttonClicked) {
        if (esCorrecta) {
            buttonClicked.classList.add('correct');
            score++;
            correctAnswersInLevel++;
            totalCorrectAnswers++; // Incrementa el contador total
            totalPoints += POINTS_PER_CORRECT_ANSWER; // Suma puntos
            updateScoreDisplay(); // Actualiza la visualización del puntaje
        } else {
            buttonClicked.classList.add('incorrect');
        }
    }

    // Muestra la respuesta correcta si no se respondió o fue incorrecta
    if (!esCorrecta) {
        buttons.forEach(btn => {
            if (!btn.classList.contains('incorrect') && btn.textContent === currentQuestions[currentQuestionIndex].opciones[currentQuestions[currentQuestionIndex].respuesta]) {
                btn.classList.add('correct');
            }
        });
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            // Verifica si se cumplen los requisitos para avanzar al siguiente nivel
            checkLevelProgress();
        }
    }, 2000);
}

function checkLevelProgress() {
    const requiredCorrect = LEVEL_REQUIREMENTS[currentLevel];
    
    if (correctAnswersInLevel >= requiredCorrect) {
        // ¡Cumplió los requisitos para este nivel!
        if (currentLevel === LEVELS.HARD) {
            // Si completa el nivel difícil, ha aprobado toda la trivia
            endGame(true);
        } else {
            // Avanza al siguiente nivel
            showLevelCompletionMessage(true);
        }
    } else {
        // No cumplió los requisitos para este nivel
        if (currentLevel === LEVELS.HARD) {
            // No aprobó el nivel difícil
            endGame(false);
        } else {
            // No avanza al siguiente nivel
            showLevelCompletionMessage(false);
        }
    }
}

function showLevelCompletionMessage(success) {
    showSection('end-screen');
    
    const levelText = currentLevel === LEVELS.EASY ? "FÁCIL" : 
                     currentLevel === LEVELS.MEDIUM ? "MEDIO" : "DIFÍCIL";
    
    if (success) {
        const nextLevelText = currentLevel === LEVELS.EASY ? "MEDIO" : "DIFÍCIL";
        document.getElementById('end-message').textContent = 
            `¡Felicidades! Has completado el nivel ${levelText} con ${correctAnswersInLevel} respuestas correctas y ${correctAnswersInLevel * POINTS_PER_CORRECT_ANSWER} puntos. ¡Avanzas al nivel ${nextLevelText}!`;
        
        // Agrega un botón para ir al siguiente nivel
        const endScreen = document.getElementById('end-screen');
        const nextLevelBtn = document.createElement('button');
        nextLevelBtn.classList.add('button');
        nextLevelBtn.textContent = `Ir al nivel ${nextLevelText}`;
        nextLevelBtn.onclick = () => {
            // Elimina el botón personalizado para evitar duplicados
            nextLevelBtn.remove();
            // Avanza al siguiente nivel
            startLevel(currentLevel + 1);
        };
        
        // Agrega el botón después del mensaje
        const existingBtn = endScreen.querySelector('button');
        endScreen.insertBefore(nextLevelBtn, existingBtn);
    } else {
        document.getElementById('end-message').textContent = 
            `Has completado el nivel ${levelText} con ${correctAnswersInLevel} respuestas correctas y ${correctAnswersInLevel * POINTS_PER_CORRECT_ANSWER} puntos. Necesitabas ${LEVEL_REQUIREMENTS[currentLevel]} para avanzar. ¡Sigue practicando!`;
        
        // Asegurarse de que no haya botones personalizados adicionales
        const customBtn = document.getElementById('end-screen').querySelector('button:not(:last-child)');
        if (customBtn) {
            customBtn.remove();
        }
    }
}

function endGame(success) {
    showSection('end-screen');
    
    if (success) {
        document.getElementById('end-message').innerHTML = 
            `¡Felicidades! Has APROBADO la trivia de ${currentCategory}.<br><br>` +
            `<strong>Estadísticas finales:</strong><br>` +
            `• Respuestas correctas totales: ${totalCorrectAnswers}<br>` +
            `• Puntaje total obtenido: ${totalPoints} puntos<br>` +
            `• Respuestas correctas en nivel DIFÍCIL: ${correctAnswersInLevel}`;
    } else {
        document.getElementById('end-message').innerHTML = 
            `Has completado el nivel DIFÍCIL de ${currentCategory}.<br><br>` +
            `<strong>Estadísticas finales:</strong><br>` +
            `• Respuestas correctas totales: ${totalCorrectAnswers}<br>` +
            `• Puntaje total obtenido: ${totalPoints} puntos<br>` +
            `• Respuestas correctas en nivel DIFÍCIL: ${correctAnswersInLevel}<br>` +
            `• Necesitabas ${LEVEL_REQUIREMENTS[LEVELS.HARD]} respuestas correctas para aprobar.<br><br>` +
            `¡Sigue practicando!`;
    }
    
    // Asegurarse de que no haya botones personalizados adicionales
    const customBtn = document.getElementById('end-screen').querySelector('button:not(:last-child)');
    if (customBtn) {
        customBtn.remove();
    }
}

function goBackToStart() {
    clearInterval(timerInterval); // Detiene cualquier temporizador activo
    
    // Elimina el elemento de nivel si existe
    const levelElement = document.getElementById('current-level');
    if (levelElement) {
        levelElement.remove();
    }
    
    // Elimina el elemento de puntaje si existe
    const scoreElement = document.getElementById('score-display');
    if (scoreElement) {
        scoreElement.remove();
    }
    
    // Elimina botones personalizados en la pantalla final
    const customBtn = document.getElementById('end-screen').querySelector('button:not(:last-child)');
    if (customBtn) {
        customBtn.remove();
    }
    
    showSection('home-screen');
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showSection(sectionId) {
    document.querySelectorAll('#home-screen, #start-screen, #general-screen, #unisimon-screen, #question-screen, #end-screen, #random-faculty-screen').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    // Reinicia el mensaje al entrar en la sección de Facultad Aleatoria
    if (sectionId === 'random-faculty-screen') {
        const messageElement = document.getElementById("selected-faculty-message");
        if (messageElement) {
            messageElement.textContent = ""; // Limpia el mensaje
        }
    }
}










//ruleta 

const faculties = [
    { name: "Administración y Negocios", color: "#ff8800" },
    { name: "Ciencias Básicas y Biomédicas", color: "#00ff00" },
    { name: "Ciencias Jurídicas y Sociales", color: "#ff0095" },
    { name: "Ciencias de la Salud", color: "#00eeff" },
    { name: "Ingenierías", color: "#ffee00" }
];

let wheelCanvas, wheelContext, currentAngle = 0, spinning = false;

function drawWheel() {
    wheelCanvas = document.getElementById("wheel");
    wheelContext = wheelCanvas.getContext("2d");
    const numFaculties = faculties.length;
    const arcSize = (2 * Math.PI) / numFaculties;

    faculties.forEach((faculty, index) => {
        const startAngle = index * arcSize;
        const endAngle = startAngle + arcSize;

        wheelContext.beginPath();
        wheelContext.moveTo(150, 150); // Centro del canvas
        wheelContext.arc(150, 150, 150, startAngle, endAngle);
        wheelContext.closePath();

        wheelContext.fillStyle = faculty.color;
        wheelContext.fill();
    });
}

function spinWheel() {
    if (spinning) return; // Evita que se gire mientras ya está girando
    spinning = true;

    const spinTime = Math.random() * 3 + 3; // Tiempo de giro entre 3 y 6 segundos
    const spinAngle = Math.random() * 360 + 720; // Ángulo de giro (mínimo 2 vueltas completas)
    const targetAngle = (currentAngle + spinAngle) % 360;

    let startTime = null;

    function animateWheel(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        const progress = Math.min(elapsed / (spinTime * 1000), 1); // Progreso entre 0 y 1
        const easing = easeOutCubic(progress); // Efecto de desaceleración
        currentAngle = (currentAngle + easing * spinAngle) % 360;

        wheelContext.clearRect(0, 0, 300, 300);
        wheelContext.save();
        wheelContext.translate(150, 150);
        wheelContext.rotate((currentAngle * Math.PI) / 180);
        wheelContext.translate(-150, -150);
        drawWheel();
        wheelContext.restore();

        if (progress < 1) {
            requestAnimationFrame(animateWheel);
        } else {
            spinning = false;
            selectFaculty(targetAngle);
        }
    }

    requestAnimationFrame(animateWheel);
}

function selectFaculty(angle) {
    const numFaculties = faculties.length;
    const arcSize = 360 / numFaculties;
    const selectedIndex = Math.floor((360 - angle) / arcSize) % numFaculties;
    const selectedFaculty = faculties[selectedIndex];

    // Actualiza el mensaje en la página
    const messageElement = document.getElementById("selected-faculty-message");
    messageElement.textContent = `¡La facultad seleccionada es: ${selectedFaculty.name}!`;

    // Espera 5 segundos antes de iniciar el juego
    setTimeout(() => {
        startGame(selectedFaculty.name);
    }, 5000); // 5000 ms = 5 segundos
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Dibuja la ruleta al cargar la página
document.addEventListener("DOMContentLoaded", drawWheel);
