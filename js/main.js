// 1. El diccionario con las traducciones técnicas
const traducciones = {
  es: {
      
      titulo1: "SOBRE MÍ",
      titulo2: "SERVICIOS",
      titulo3: "RESEÑAS",
      titulo4: "CONTACTO",
      texto_0: "<strong>Ingeniero Biomédico,</strong> egresado de la Universidad Autónoma Metropolitana, México.",
      texto_1: "Mi formación integra la electrónica, la biología y la medicina, los pilares fundamentales para la innovación Médica. La meta es preservar la vida a través de la tecnología",
      texto_2: "Fuera del entorno profesional, soy un entusiasta de la exploración y el movimiento:",
      texto_3: "<strong>- Deporte:</strong> Natación y Surf Amateur.",
      texto_4: "<strong>- Exploración:</strong> Me apasiona la Geología detectorista y la Fotografía, actividades que alimentan mi curiosidad por el mundo que nos rodea.",
      texto_5: "Me mantengo en constante formación, con certificaciones en medicina preventiva y lenguajes de programación, herramientas que me permiten crear soluciones digitales personalizadas y eficientes.",
      texto_6: "He realizado cursos relacionados al Covid-19 ante el IMMS, Compranet, así como Criterios ESG y Ventilación Mecánica por HarvardX.",
      texto_7: "He colaborado en más de 10 centros hospitalarios en México, principalmente dentro del sector público, desempeñándome como el enlace en el área de Ingeniería Biomédica.",
      texto_8: "He tenido a mi cargo el apoyo a +40 enfermeras de diferentes Centros Hospitalarios.",
      texto_9: "Mi labor es garantizar que la tecnología sea un aliado confiable para el personal de salud y una garantía para el paciente.",
      texto_10: "<strong>Áreas de especialidad:</strong>",
      texto_11: "<strong>- Soporte Técnico Especializado:</strong> Asistencia directa a médicos y enfermeras en el manejo de equipo crítico.",
      texto_12: "<strong>- Gestión de Tecnología Médica:</strong> Supervisión operativa para asegurar el servicio hospitalario.",
      texto_13: "<strong>- Capacitación y Seguridad:</strong> Formación al personal clínico en el uso correcto para minimizar riesgos.",
      texto_14: "<strong>Procedimientos y Evidencia en Campo.</strong>",
      texto_15: "A continuación, presento una muestra del trabajo realizado en diversas instituciones, donde la precisión técnica y el compromiso con la salud se encuentran:",
      texto_16: "<strong>Soporte Especializado en Equipos de Anestesia.</strong>",
      texto_17: "<strong>- Mantenimiento Preventivo y Correctivo:</strong>  Maximizando la vida útil y confiabilidad del equipo.",
      texto_18: "<strong>- Asistencia en Quirófano:</strong>  Cuidando cada detalle técnico en contacto con el paciente.",
      texto_19: "<strong>- Experiencia Multimarca:</strong>  Especialista en sistemas de soporte vital de marcas líderes como <strong>Dräger y Mindray.</strong>",
      texto_20: "<strong>Sistemas de Laboratorio.</strong>",
      texto_21: "Mantenimiento integral, limpieza profunda y sustitución de refacciones para equipos de laboratorio de marcas de prestigio como <strong>Carl Zeiss, Leica y Dewimed</strong>.",
      texto_22: "El trabajo asegura que esta tecnología esté siempre lista y en perfectas condiciones, permite al personal sanitario ofrecer una atención segura y de calidad a sus pacientes.",
      texto_23: "<strong>Gestión Integral de Monitores de Signos Vitales.</strong>",
      texto_24: "<strong>- Estrategia de Mantenimiento:</strong>  Ejecución de planes preventivos, correctivos y predictivos para asegurar la máxima confiabilidad del monitoreo.</p>",
      texto_25: "<strong>- Optimización de Accesorios:</strong>  Revisión y puesta a punto tanto del equipo principal como de sus componentes críticos (sensores, cables y brazaletes).",
      texto_26: "<strong>- Compatibilidad Multimarca:</strong>  Amplia experiencia en plataformas de tecnología médica como <strong>Philips, Mindray, Nihon Kohden, Biolight y LG.</strong>",
      texto_27: "<strong>Calibración y Soporte de Sistemas de Infusión.</strong>",
      texto_28: "<strong>- Precisión Dosificada:</strong>  Servicios de calibración estricta para bombas de jeringa (syringe pumps) y volumétricas, asegurando un flujo exacto y controlado de medicamentos.</P>",
      texto_29: "<strong>- Seguridad Farmacológica:</strong>  Garantía de repetibilidad y confiabilidad en la entrega de dosis críticas, mitigando riesgos en la terapia intravenosa del paciente.</P>",
      texto_30: "<strong>- Soporte Especializado:</strong>  Experiencia en tecnología de infusión avanzada de marcas globales como <strong>Medcaptain, B. Braun y Becton Dickinson (BD).</strong> </P>",
      texto_31: "<strong>Dispositivos de Desfibrilación Cardiaca.</strong>",
      texto_32: "<strong>- Validación de Energía (Joules):</strong>  Empleo de analizadores externos certificados para medir y verificar que descargas eléctricas cumplan estrictamente con los rangos de energía establecidos por el fabricante para garantizar descargas seguras y efectivas.",
      texto_33: "<strong>- Inspección de Periféricos:</strong>  Aseguramiento de componentes críticos y accesorios esenciales, incluyendo cables de ECG, sensores de SpO2 y sistemas de registro térmico (papel).",
      texto_34: "<strong>- Soporte Multimarca:</strong>  Experiencia en tecnologías de soporte vital de marcas líderes como <strong>ZOLL Medical (Series), Nihon Kohden y Welch Allyn.</strong> ",
      texto_35: "<strong>Tecnologías Médicas Complementarias.</strong> ",
      texto_36: "<strong>Mantenimiento Integral:</strong>  Servicios preventivos y correctivos enfocados en la disponibilidad del equipamiento.",
      texto_37: "<strong>- Gama de Equipos:</strong>  Ventiladores · Ultrasonidos · Rayos X · Cunas · Lámparas Quirúrgicas · Tanques de Oxígeno · Camas Hospitalarias,etc.",
      texto_38: "<strong>- Soluciones Inmediatas:</strong>  Sustitución de refacciones, calibración técnica y gestión de accesorios faltantes para garantizar un funcionamiento seguro.",
      texto_39: "<strong>Mi información de contacto disponible:</strong> ",
      texto_40: "<strong>Doctora Tenanguillo</strong>",
      texto_41: "-Hemodinamia - Anestesióloga -",
      texto_42: "Centro Médico Nacional La Raza - Mexico City - CDMX",
      texto_43: "Respecto al servicio del Ingeniero:",
      texto_44: "Rápida respuesta, eficacia, calidad, compromiso con el Paciente y con el Anestesiólogo.Excelente atención, inmejorable relación laboral.",
      texto_45: "Ampliamente recomendable.",
      texto_46: "<strong>Lic. Rosa Moreno</strong>",
      texto_47: "-Coordinadora Administrativa - Mexico City - CDMX",
      texto_48: "Yo puedo constatar que es un profesional al dar su servicio como Ingeniero Biomédico; no solo en la forma de dar mantenimiento a equipo médico, sino, incluso en el orden de sus reportes.",
      texto_49: "Ingeniero pulcro y detallista.",
      texto_50: "Su trabajo es digno de recomendar.",
      texto_51: "<strong>Lic. Brenda Martínez</strong>",
      texto_52: "Licenciada en Enfermería - IMSS No.8 - Mexico City - CDMX",
      texto_53: "Mi experiencia con el Ingeniero fue a través de una empresa de servicio integral de Anestesia (SIA); brindó un trato excelente, con eficacia para resolver problemáticas, con un excelente servicio.",
      texto_54: "Fue agradable y muy amable trabajar con él.",
      texto_55: "Trabajar con él Ingeniero me facilitó un entorno de buen ambiente laboral.",
      texto_56: "",


  },
  en: {
    
    titulo1: "ABOUT ME",
    titulo2: "SERVICES",
    titulo3: "REVIEWS",
    titulo4: "CONTACT",
    texto_0: "<strong>Biomedical Engineer,</strong> graduated from the Metropolitan Autonomous University, Mexico.",
    texto_1: "My background integrates electronics, biology, and medicine, the fundamental pillars for medical innovation. My goal is to preserve life through technology.",
    texto_2: "Outside of the professional environment, i'm an enthusiast of exploration and movement:",
    texto_3: "<strong>- Sports:</strong> Swimming and amateur Surfing.",
    texto_4: "<strong>- Exploration:</strong> I am passionate about metal detecting Geology and Photography, activities that fuel my curiosity for the world around us.",
    texto_5: "I am in continuous professional development, holding certifications in preventive medicine and programming languages—tools that allow me to create customized and efficient digital solutions.",
    texto_6: "I have completed courses related to COVID-19 from IMSS and Compranet, as well as ESG Criteria and Mechanical Ventilation by HarvardX.",
    texto_7: "I have collaborated with more than 10 hospitals in Mexico, primarily within the public sector, serving as the liaison in the Biomedical Engineering department.",
    texto_8: "I have provided direct support to over 40 nurses across different hospital centers.",
    texto_9: "My mission is to ensure that technology serves as a reliable ally for healthcare personnel and a guarantee of safety for the patient.",
    texto_10: "<strong>Areas of Expertise:<strong>",
    texto_11: "<strong>- Specialized Technical Support:</strong> Direct assistance to physicians and nurses in the operation of critical equipment.",
    texto_12: "<strong>- Medical Technology Management:</strong> Operational supervision to ensure optimal hospital service.",
    texto_13: "<strong>- Training and Safety:</strong> Training clinical staff on proper use to minimize risks.",
    texto_14: "<strong>Procedures and Field Evidence.</strong>",
    texto_15: "Below is a sample of the work carried out in various institutions, where technical precision and commitment to health meet:",
    texto_16: "<strong>Specialized Support for Anesthesia Equipment.</strong>",
    texto_17: "<strong>- Preventive and Corrective Maintenance:</strong> Maximizing equipment lifespan and reliability.",
    texto_18: "<strong>- Operating Room Support:</strong> Taking care of every technical detail in contact with the patient.",
    texto_19: "<strong>- Multi-Brand Expertise:</strong> Specialist in life support systems from leading brands such as <strong>Dräger and Mindray.</strong>",
    texto_20: "<strong>Laboratory Systems.</strong>",
    texto_21: "Comprehensive maintenance, deep cleaning, and spare parts replacement for laboratory equipment from prestigious brands such as <strong>Carl Zeiss, Leica, and Dewimed</strong>.",
    texto_22: "This work ensures that this technology is always ready and in perfect condition, allowing healthcare staff to provide safe and quality care to their patients.",
    texto_23: "<strong>Comprehensive Management of Vital Signs Monitors.</strong>",
    texto_24: "<strong>- Maintenance Strategy:</strong> Execution of preventive, corrective, and predictive plans to ensure maximum monitoring reliability.</p>",
    texto_25: "<strong>- Accessories Optimization:</strong> Inspection and fine-tuning of both the main equipment and its critical components (sensors, cables, and cuffs).",
    texto_26: "<strong>- Multi-Brand Compatibility:</strong> Extensive experience with medical technology platforms such as <strong>Philips, Mindray, Nihon Kohden, Biolight, and LG.</strong>",
    texto_27: "<strong>Calibration and Support for Infusion Systems.</strong>",
    texto_28: "<strong>- Dosing Precision:</strong> Strict calibration services for syringe pumps and volumetric pumps, ensuring exact and controlled medication flow.</P>",
    texto_29: "<strong>- Pharmacological Safety:</strong> Guaranteed repeatability and reliability in the delivery of critical doses, mitigating risks in patient intravenous therapy.</P>",
    texto_30: "<strong>- Specialized Support:</strong> Experience in advanced infusion technology from global brands such as <strong>Medcaptain, B. Braun, and Becton Dickinson (BD).</strong> </P>",
    texto_31: "<strong>Cardiac Defibrillation Devices.</strong>",
    texto_32: "<strong>- Energy Validation (Joules):</strong> Use of certified external analyzers to measure and verify that electrical discharges strictly comply with the energy ranges established by the manufacturer to ensure safe and effective shocks.",
    texto_33: "<strong>- Peripherals Inspection:</strong> Assurance of critical components and essential accessories, including ECG cables, SpO2 sensors, and thermal recording systems (paper).",
    texto_34: "<strong>- Multi-Brand Support:</strong> Experience in life support technologies from leading brands such as <strong>ZOLL Medical (Series), Nihon Kohden, and Welch Allyn.</strong> ",
    texto_35: "<strong>Complementary Medical Technologies.</strong> ",
    texto_36: "<strong>Comprehensive Maintenance:</strong> Preventive and corrective services focused on equipment availability.",
    texto_37: "<strong>- Equipment Range:</strong> Ventilators · Ultrasound · X-Ray · Infant Warmers · Surgical Lights · Oxygen Tanks · Hospital Beds, etc.",
    texto_38: "<strong>- Immediate Solutions:</strong> Spare parts replacement, technical calibration, and management of missing accessories to ensure safe operation.",
    texto_39: "<strong>My contact information available:</strong> ",
    texto_40: "<strong>Dr. Tenanguillo</strong>",
    texto_41: "- Hemodynamics - Anesthesiologist -",
    texto_42: "La Raza National Medical Center - Mexico City - CDMX",
    texto_43: "Regarding the Engineer's service:",
    texto_44: "Quick response, efficiency, quality, commitment to the patient and to the anesthesiologist. Excellent care, unbeatable working relationship.",
    texto_45: "Highly recommended.",
    texto_46: "<strong>Ms. Rosa Moreno</strong>",
    texto_47: "- Administrative Coordinator - Mexico City - CDMX",
    texto_48: "I can attest that he is a professional in his service as a Biomedical Engineer; not only in the way he maintains medical equipment, but even in the orderliness of his reports.",
    texto_49: "A meticulous and detail-oriented engineer.",
    texto_50: "His work is worthy of recommendation.",
    texto_51: "<strong>Ms. Brenda Martínez</strong>",
    texto_52: "Bachelor of Nursing - IMSS No.8 - Mexico City - CDMX",
    texto_53: "My experience with the Engineer was through a comprehensive anesthesia service company (SIA); he provided excellent treatment, with effectiveness in solving problems, with excellent service.",
    texto_54: "It was pleasant and very kind to work with him.",
    texto_55: "Working with the Engineer provided me with a good working environment.",
    texto_56: "",
    


  }
};

// 2. Variables para rastrear el idioma actual
let idiomaActual = 'es';
const boton = document.getElementById('idioma-btn');

// 3. Función que cambia los textos en la pantalla (Modificada a innerHTML)
function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll('[data-translate]');
  
  elementos.forEach(elemento => {
      const clave = elemento.getAttribute('data-translate');
      if (traducciones[idioma][clave]) {
          // Usamos innerHTML en lugar de textContent para respetar las etiquetas HTML y no sobre-escriba lo que tengo en java (como <strong>)
          elemento.innerHTML = traducciones[idioma][clave];
      }
  });
}

// 4. Evento para el botón
boton.addEventListener('click', () => {
  if (idiomaActual === 'es') {
      idiomaActual = 'en';
      boton.textContent = 'ES'; // El botón ahora ofrecerá volver a español
  } else {
      idiomaActual = 'es';
      boton.textContent = 'EN';
  }
  cambiarIdioma(idiomaActual);
});