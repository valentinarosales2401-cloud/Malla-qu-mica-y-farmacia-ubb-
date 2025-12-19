// Definición de datos de la carrera (Semestres y Ramos)
// "id" es el identificador único, "req" son los prerrequisitos (ids de otros ramos)
const curriculum = [
    // --- AÑO 1 ---
    {
        semester: "I Semestre",
        subjects: [
            { id: "intro-farmacia", name: "Introducción a la Farmacia", req: [] },
            { id: "alg-trig", name: "Álgebra y Trigonometría", req: [] },
            { id: "quim-gen-1", name: "Química General I", req: [] },
            { id: "bio-gen", name: "Biología General", req: [] },
            { id: "fis-apli", name: "Física Aplicada", req: [] },
            { id: "form-int-1", name: "Formación Integral Oferta Inst.", req: [] }
        ]
    },
    {
        semester: "II Semestre",
        subjects: [
            { id: "etica", name: "Ética Farmacéutica", req: ["intro-farmacia"] },
            { id: "calc", name: "Cálculo Diferencial e Integral", req: ["alg-trig"] },
            { id: "quim-gen-2", name: "Química General II", req: ["quim-gen-1"] },
            { id: "bioquimica", name: "Bioquímica", req: ["bio-gen"] },
            { id: "fisicoquimica", name: "Físico-Química", req: ["fis-apli"] },
            { id: "form-int-2", name: "Formación Integral", req: [] }
        ]
    },
    // --- AÑO 2 ---
    {
        semester: "III Semestre",
        subjects: [
            { id: "farm-soc", name: "Farmacia y Sociedad", req: ["etica"] },
            { id: "quim-analit", name: "Química Analítica", req: ["calc", "quim-gen-2"] },
            { id: "quim-org-1", name: "Química Orgánica I", req: ["quim-gen-2"] },
            { id: "bio-mol", name: "Biología Molecular", req: ["bioquimica"] },
            { id: "histologia", name: "Histología", req: ["bio-gen"] },
            { id: "ing-1", name: "Inglés Comunicacional I", req: [] }
        ]
    },
    {
        semester: "IV Semestre",
        subjects: [
            { id: "analisis-inst", name: "Análisis Instrumental", req: ["quim-analit"] },
            { id: "estadistica", name: "Estadística", req: ["alg-trig"] },
            { id: "quim-org-2", name: "Química Orgánica II", req: ["quim-org-1"] },
            { id: "fisio-1", name: "Fisiología I", req: ["histologia", "bio-mol"] },
            { id: "ing-2", name: "Inglés Comunicacional II", req: ["ing-1"] },
            { id: "form-int-3", name: "Formación Integral", req: [] }
        ]
    },
    // --- AÑO 3 ---
    {
        semester: "V Semestre",
        subjects: [
            { id: "farma-basic", name: "Farmacología Básica: Fitoterapia", req: ["analisis-inst"] },
            { id: "control-cal", name: "Control de Calidad y Análisis Farm.", req: ["analisis-inst", "quim-org-2"] },
            { id: "salud-pub", name: "Salud Pública", req: ["estadistica"] },
            { id: "fisio-2", name: "Fisiología II", req: ["bio-mol", "fisio-1"] },
            { id: "ing-3", name: "Inglés Comunicacional III", req: ["ing-2"] }
        ]
    },
    {
        semester: "VI Semestre",
        subjects: [
            { id: "farma-mol-1", name: "Farmacología Molecular I", req: ["farma-basic"] },
            { id: "farmacoquim-1", name: "Farmacoquímica I", req: ["farma-basic"] },
            { id: "investigacion", name: "Investigación Farmacéutica", req: ["farm-soc"] },
            { id: "fisiopat", name: "Fisiopatología", req: ["fisio-2"] },
            { id: "microbio", name: "Microbiología", req: ["bio-mol", "histologia", "fisio-2"] },
            { id: "ing-4", name: "Inglés Comunicacional IV", req: ["ing-3"] },
            { id: "prac-comu-1", name: "Práctica Farmacia Comunitaria", req: ["farma-basic", "control-cal", "salud-pub", "fisio-2"] }
        ]
    },
    // --- AÑO 4 ---
    {
        semester: "VII Semestre",
        subjects: [
            { id: "farma-mol-2", name: "Farmacología Molecular II", req: ["farma-mol-1"] },
            { id: "farmacoquim-2", name: "Farmacoquímica II", req: ["farmacoquim-1"] },
            { id: "bioq-clin", name: "Bioquímica Clínica", req: ["fisiopat"] },
            { id: "tecno-farm-1", name: "Tecnología Farmacéutica I", req: ["fisicoquimica"] },
            { id: "inmuno", name: "Inmunología Aplicada", req: ["microbio"] },
            { id: "form-int-4", name: "Formación Integral", req: [] }
        ]
    },
    {
        semester: "VIII Semestre",
        subjects: [
            { id: "farma-clin-sis-1", name: "Farmacología Clín. y Terap. Sist. I", req: ["farma-mol-2"] },
            { id: "toxicologia", name: "Toxicología", req: [] }, // No especificado en lista, asumo libre o req anterior implicito
            { id: "biofarm", name: "Biofarmacia y Farmacocinética", req: [] },
            { id: "tecno-farm-2", name: "Tecnología Farmacéutica II", req: [] },
            { id: "form-int-5", name: "Formación Integral", req: [] },
            { id: "prac-comu-int", name: "Práctica Farm. Com. Intermedia", req: [] }
        ]
    },
    // --- AÑO 5 ---
    {
        semester: "IX Semestre",
        subjects: [
            { id: "farma-clin-sis-2", name: "Farmacología Clín. y Terap. Sist. II", req: [] }, // Asumo continuación natural
            { id: "bromato", name: "Bromatología", req: [] },
            { id: "farm-asist", name: "Farmacia Asistencial", req: [] },
            { id: "legis-farm", name: "Legislación Farmacéutica", req: [] },
            { id: "admin-gestion", name: "Admin. y Gestión en Farmacia", req: [] },
            { id: "terapia-cel", name: "Terapia Celular y Génica", req: [] },
            { id: "farmaco-prec", name: "Farmacoterapia de Precisión", req: [] }
        ]
    },
    {
        semester: "X Semestre",
        subjects: [
            { id: "electivo-1", name: "Electivo I", req: [] },
            { id: "electivo-2", name: "Electivo II", req: [] },
            { id: "prac-final", name: "Práctica Farmacia Com. Final", req: [] }
        ]
    },
    // --- AÑO 6 ---
    {
        semester: "XI Semestre",
        subjects: [
            { id: "titulacion", name: "Actividad de Titulación", req: [] }
        ]
    }
];

// Estado de ramos aprobados (se carga del LocalStorage si existe)
let approvedSubjects = JSON.parse(localStorage.getItem('farmaciaProgress')) || [];

// Referencia al contenedor
const container = document.getElementById('malla-container');
const progressText = document.getElementById('progress-text');

// Función principal para renderizar la malla
function renderMalla() {
    container.innerHTML = ''; // Limpiar contenedor
    let totalSubjects = 0;
    let approvedCount = 0;

    curriculum.forEach(semData => {
        // Crear columna de semestre
        const col = document.createElement('div');
        col.className = 'semester-column';

        // Título del semestre
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.textContent = semData.semester;
        col.appendChild(title);

        // Crear tarjetas de ramos
        semData.subjects.forEach(subject => {
            totalSubjects++;
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.textContent = subject.name;

            // Verificar si está aprobado
            if (approvedSubjects.includes(subject.id)) {
                card.classList.add('approved');
                approvedCount++;
            }

            // Evento click
            card.onclick = () => toggleSubject(subject);

            col.appendChild(card);
        });

        container.appendChild(col);
    });

    // Actualizar texto de progreso
    const percentage = Math.round((approvedCount / totalSubjects) * 100);
    progressText.textContent = `${percentage}%`;
}

// Función para manejar el click en un ramo
function toggleSubject(subject) {
    // Si ya está aprobado, lo desmarcamos
    if (approvedSubjects.includes(subject.id)) {
        // Filtramos para quitar el ID
        approvedSubjects = approvedSubjects.filter(id => id !== subject.id);
        
        // Opcional: Desmarcar recursivamente los que dependen de este (lógica estricta)
        // Por simplicidad, solo desmarcamos el actual.
        
        saveAndRender();
        return;
    }

    // Si NO está aprobado, verificamos requisitos
    const missingReqs = subject.req.filter(reqId => !approvedSubjects.includes(reqId));

    if (missingReqs.length > 0) {
        // Buscamos los nombres de los ramos faltantes para mostrar un mensaje amigable
        const missingNames = missingReqs.map(reqId => findSubjectName(reqId));
        alert(`🔒 No puedes aprobar este ramo aún.\n\nRequisitos pendientes:\n- ${missingNames.join('\n- ')}`);
    } else {
        // Si cumple requisitos, aprobamos
        approvedSubjects.push(subject.id);
        saveAndRender();
    }
}

// Función auxiliar para guardar en LocalStorage y renderizar
function saveAndRender() {
    localStorage.setItem('farmaciaProgress', JSON.stringify(approvedSubjects));
    renderMalla();
}

// Función auxiliar para encontrar nombre de ramo por ID
function findSubjectName(id) {
    for (const sem of curriculum) {
        const sub = sem.subjects.find(s => s.id === id);
        if (sub) return sub.name;
    }
    return id;
}

// Función para reiniciar
function resetProgress() {
    if(confirm("¿Estás seguro de querer borrar todo tu progreso?")) {
        approvedSubjects = [];
        saveAndRender();
    }
}

// Inicializar la aplicación
renderMalla();
