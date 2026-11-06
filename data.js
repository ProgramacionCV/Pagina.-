const PIONEERS_DATA = [
  {
    id: "ada-lovelace",
    name: "Ada Lovelace",
    years: "1815 – 1852",
    title: "La Primera Programadora de la Historia",
    category: "lenguajes",
    tags: ["Ada Lovelace", "Algoritmo", "Máquina Analítica", "Primer Programa", "Babbage", "Pioneras"],
    accent: "from-pink-500 to-rose-600",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    image: "assets/ada-lovelace.png",
    quote: "La máquina analítica teje patrones algebraicos del mismo modo que el telar de Jacquard teje flores y hojas.",
    shortDescription: "Diseñó el primer algoritmo destinado a ser procesado por una máquina, vislumbrando que las computadoras podrían manipular más que simples números.",
    fullBio: "Augusta Ada King, Condesa de Lovelace, fue una matemática y escritora británica. Mientras colaboraba con Charles Babbage en su Máquina Analítica, tradujo y amplió las notas del matemático Luigi Menabrea. En sus célebres 'Notas', incluyó el primer algoritmo de cálculo numérico (los números de Bernoulli), convirtiéndose en la primera persona en escribir software de la historia.",
    keyContributions: [
      "Primer algoritmo informático documentado de la historia (1843).",
      "Concepto de 'computación universal': comprendió que las máquinas podían procesar símbolos, música e imágenes.",
      "Inspiración del lenguaje de programación Ada, creado por el Departamento de Defensa de EE. UU."
    ],
    modernImpact: "Sus notas sembraron la idea de que una computadora no es una simple calculadora aritmética, sino un procesador general de información simbólica.",
    icon: "code"
  },
  {
    id: "alan-turing",
    name: "Alan Turing",
    years: "1912 – 1954",
    title: "Padre de la Ciencia de la Computación y la IA",
    category: "teoria",
    tags: ["Alan Turing", "Máquina de Turing", "Enigma", "Inteligencia Artificial", "Test de Turing", "Criptografía"],
    accent: "from-blue-500 to-cyan-600",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    image: "assets/alan-turing.png",
    quote: "Solo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho por hacer.",
    shortDescription: "Formalizó los conceptos de algoritmo y computación con la Máquina de Turing, rompió el cifrado nazi Enigma y sentó las bases de la inteligencia artificial.",
    fullBio: "Matemático, lógico y criptoanalista británico. Durante la Segunda Guerra Mundial dirigió el equipo de Bletchley Park que descifró los mensajes de la máquina alemana Enigma mediante la máquina electromecánica Bombe, salvando millones de vidas. Su artículo de 1936 definió la 'Máquina de Turing', el modelo teórico universal de toda computadora digital moderna, y en 1950 propuso el Test de Turing para evaluar la inteligencia de las máquinas.",
    keyContributions: [
      "Modelo teórico de la Máquina de Turing Universal (1936).",
      "Descifrado de Enigma y diseño de la máquina 'Bombe'.",
      "Formulación del 'Test de Turing' para la Inteligencia Artificial (1950)."
    ],
    modernImpact: "Toda la teoría computacional moderna y los avances actuales en modelos de lenguaje e inteligencia artificial descienden de sus fundamentos matemáticos.",
    icon: "cpu"
  },
  {
    id: "grace-hopper",
    name: "Grace Hopper",
    years: "1906 – 1992",
    title: "Pionera de los Compiladores y COBOL",
    category: "lenguajes",
    tags: ["Grace Hopper", "Compilador", "COBOL", "Bug", "Navy", "A-0", "Lenguajes de Alto Nivel"],
    accent: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    image: "assets/grace-hopper.jpg",
    quote: "La frase más peligrosa del lenguaje es: 'Siempre se ha hecho así'.",
    shortDescription: "Creó el primer compilador de la historia y defendió que la programación debía escribirse en palabras comprensibles para humanos en lugar de código máquina binario.",
    fullBio: "Científica de la computación estadounidense y contraalmirante de la Marina de los Estados Unidos. Trabajó en la computadora Harvard Mark I. Convencida de que las computadoras debían ser accesibles para las personas no matemáticas, desarrolló el primer enlazador/compilador (A-0) y fue la arquitecta conceptual de COBOL, uno de los lenguajes empresariales y bancarios más influyentes del siglo XX.",
    keyContributions: [
      "Desarrollo del primer compilador de la historia: A-0 System (1952).",
      "Impulsora y diseñadora fundamental del lenguaje COBOL.",
      "Popularizó el término 'debugging' tras extraer una polilla atrapada en un relé de la Mark II."
    ],
    modernImpact: "Gracias a su visión hoy programamos en lenguajes de alto nivel legibles (Python, JavaScript, C, Rust) en lugar de unos y ceros en binario.",
    icon: "terminal"
  },
  {
    id: "margaret-hamilton",
    name: "Margaret Hamilton",
    years: "1936 – Presente",
    title: "Directora de Software del Programa Apolo",
    category: "sistemas",
    tags: ["Margaret Hamilton", "Apolo 11", "NASA", "Ingeniería de Software", "Sistemas en Tiempo Real"],
    accent: "from-violet-500 to-purple-600",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    image: "assets/margaret-hamilton.jpg",
    quote: "No había segundas oportunidades. Teníamos que encontrar formas no solo de hacerlo, sino de hacerlo a prueba de fallos.",
    shortDescription: "Acuñó el término 'Ingeniería de Software' y dirigió el equipo del MIT que programó el software de navegación a bordo que permitió el alunizaje del Apolo 11.",
    fullBio: "Científica de la computación y matemática estadounidense. Lideró la división de ingeniería de software del Laboratorio de Instrumentación del MIT. Diseñó la arquitectura de software tolerante a fallos y procesamiento por prioridades para el Apollo Guidance Computer (AGC). Cuando los radares sobrecargaron el sistema minutos antes del alunizaje, su software descartó tareas secundarias para priorizar el aterrizaje seguro.",
    keyContributions: [
      "Desarrollo del software de vuelo y alunizaje de las misiones Apolo.",
      "Pionera de la arquitectura de software asíncrono y tolerante a fallos.",
      "Creación y legitimación del término y disciplina 'Software Engineering'."
    ],
    modernImpact: "Sus principios de arquitectura resiliente, pruebas exhaustivas y manejo de excepciones son los cimientos del software crítico en aviación, medicina y exploración espacial.",
    icon: "rocket"
  },
  {
    id: "dennis-ritchie",
    name: "Dennis Ritchie",
    years: "1941 – 2011",
    title: "Creador del Lenguaje C y Co-creador de Unix",
    category: "lenguajes",
    tags: ["Dennis Ritchie", "Lenguaje C", "Unix", "Sistemas Operativos", "Bell Labs", "K&R"],
    accent: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    image: "assets/dennis-ritchie.jpg",
    quote: "UNIX es básicamente un sistema operativo sencillo, pero tienes que ser un genio para entender la sencillez.",
    shortDescription: "El arquitecto que forjó la infraestructura digital del planeta al crear el lenguaje C y co-crear el sistema operativo Unix en los míticos Bell Labs.",
    fullBio: "Científico de la computación estadounidense en Bell Labs. Creó el lenguaje C entre 1969 y 1973 para reescribir Unix, convirtiéndolo en el primer sistema operativo portable entre distintas arquitecturas de hardware. Coescribió junto a Brian Kernighan el libro 'The C Programming Language' (K&R). Ganó el Premio Turing en 1983 junto a Ken Thompson.",
    keyContributions: [
      "Creación del lenguaje de programación C, base de C++, Java, C#, Objective-C y PHP.",
      "Co-creación del sistema operativo UNIX y su filosofía de diseño modular.",
      "Portabilidad del software de bajo nivel entre arquitecturas de hardware diversas."
    ],
    modernImpact: "Prácticamente todo sistema moderno (Linux, macOS, iOS, Android, Windows) y sus motores de ejecución están escritos directa o indirectamente en C o inspirados en Unix.",
    icon: "file-code"
  },
  {
    id: "tim-berners-lee",
    name: "Tim Berners-Lee",
    years: "1955 – Presente",
    title: "Inventor de la World Wide Web",
    category: "redes",
    tags: ["Tim Berners-Lee", "World Wide Web", "HTML", "HTTP", "CERN", "W3C", "Internet"],
    accent: "from-sky-500 to-blue-700",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    quote: "Esto es para todos (This is for everyone).",
    shortDescription: "Inventó la World Wide Web en el CERN en 1989: ideó HTML, HTTP, URLs y el primer navegador web, regalando su invento a la humanidad sin cobrar patentes.",
    fullBio: "Científico de la computación británico. Mientras trabajaba en el CERN en Ginebra, concibió un sistema de hipertexto distribuido para que los investigadores compartieran información. Escribió el primer servidor web ('httpd') y el primer navegador-editor ('WorldWideWeb') en una máquina NeXT. Fundó el consorcio W3C para preservar los estándares abiertos de la web.",
    keyContributions: [
      "Invención del protocolo HTTP, el lenguaje HTML y el sistema de identificadores URL.",
      "Primer navegador web y primer servidor web del mundo (1990).",
      "Defensa incondicional de una web abierta, libre de royalties y accesible para todos."
    ],
    modernImpact: "Transformó la red informática de Internet en el tejido social, económico y cultural que conecta hoy a miles de millones de personas.",
    icon: "globe"
  },
  {
    id: "linus-torvalds",
    name: "Linus Torvalds",
    years: "1969 – Presente",
    title: "Creador de Linux y Git",
    category: "sistemas",
    tags: ["Linus Torvalds", "Linux", "Git", "Open Source", "Kernel", "Código Abierto"],
    accent: "from-yellow-500 to-amber-600",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    quote: "Hablar es barato. Enséñame el código (Talk is cheap. Show me the code).",
    shortDescription: "Comenzó Linux como un proyecto personal de estudiante en 1991 y más tarde creó Git, revolucionando la colaboración de software a nivel mundial.",
    fullBio: "Ingeniero de software finlandés-estadounidense. Con apenas 21 años anunció en Usenet que estaba creando un clon libre de Minix/Unix 'solo por diversión, no algo grande'. Ese kernel se convirtió en Linux. En 2005, frustrado con las herramientas de control de versiones existentes, programó la primera versión de Git en unas pocas semanas.",
    keyContributions: [
      "Creación del kernel Linux, impulsando la mayor comunidad de código abierto del mundo.",
      "Creación de Git, el estándar indiscutible de control de versiones para desarrolladores.",
      "Liderazgo técnico pragmático en el mantenimiento de proyectos a escala global."
    ],
    modernImpact: "Linux domina la nube, los supercomputadores, los servidores web, los dispositivos Android y los sistemas embebidos; Git sostiene el trabajo diario de los programadores.",
    icon: "git-branch"
  },
  {
    id: "john-von-neumann",
    name: "John von Neumann",
    years: "1903 – 1957",
    title: "Arquitecto de la Computadora Moderna",
    category: "teoria",
    tags: ["John von Neumann", "Arquitectura Von Neumann", "EDVAC", "Teoría de Juegos", "Hardware"],
    accent: "from-purple-500 to-indigo-700",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    quote: "Si la gente no cree que las matemáticas son simples, es solo porque no se dan cuenta de lo complicada que es la vida.",
    shortDescription: "Definió la arquitectura de 'programa almacenado' donde instrucciones y datos comparten memoria, el principio que rige a casi todas las computadoras actuales.",
    fullBio: "Polímata húngaro-estadounidense con aportaciones titánicas en física cuántica, economía (teoría de juegos) y computación. En su informe 'First Draft of a Report on the EDVAC' (1945), describió formalmente una computadora con CPU, memoria unificada para datos e instrucciones, y dispositivos de entrada/salida: la llamada 'Arquitectura Von Neumann'.",
    keyContributions: [
      "Conceptualización de la Arquitectura Von Neumann (CPU, ALU, Registros, Memoria, E/S).",
      "Fundamentos del cómputo con programas almacenados en memoria electrónica.",
      "Teoría de autómatas autorreplicantes (base teórica de la biología computacional)."
    ],
    modernImpact: "Desde tu teléfono móvil hasta los mayores servidores de inteligencia artificial, casi todo procesador actual sigue la base de la arquitectura von Neumann.",
    icon: "layers"
  },
  {
    id: "claude-shannon",
    name: "Claude Shannon",
    years: "1916 – 2001",
    title: "Padre de la Teoría de la Información",
    category: "teoria",
    tags: ["Claude Shannon", "Teoría de la Información", "Bit", "Álgebra Booleana", "Telecomunicaciones", "Bell Labs"],
    accent: "from-teal-500 to-emerald-700",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    quote: "La información es la resolución de la incertidumbre.",
    shortDescription: "Demostró que el álgebra de Boole podía aplicarse a los circuitos eléctricos y acuñó el término 'bit' como unidad fundamental de la información.",
    fullBio: "Matemático e ingeniero eléctrico estadounidense. En su tesis de maestría de 1937, calificada como una de las más trascendentales de la historia, demostró que los relés eléctricos podían resolver problemas lógicos booleanos (verdadero/falso). En 1948 publicó 'A Mathematical Theory of Communication', fundando formalmente el campo de la teoría de la información y la compresión de datos.",
    keyContributions: [
      "Unión de los circuitos electrónicos con el Álgebra de Boole (compuertas lógicas digitales).",
      "Definición matemática del concepto de información, entropía y el término 'bit'.",
      "Teoremas de capacidad de canal y límites de compresión sin pérdida."
    ],
    modernImpact: "Todo el mundo digital —desde el streaming de video hasta el cifrado y la transmisión inalámbrica 5G/Wi-Fi— se rige por las leyes matemáticas descubiertas por Shannon.",
    icon: "binary"
  },
  {
    id: "barbara-liskov",
    name: "Barbara Liskov",
    years: "1939 – Presente",
    title: "Pionera de la Programación Orientada a Objetos",
    category: "lenguajes",
    tags: ["Barbara Liskov", "Principio de Sustitución", "SOLID", "CLU", "POO", "Premio Turing"],
    accent: "from-fuchsia-500 to-pink-600",
    badgeColor: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
    quote: "Lo que buscamos es modularidad: la capacidad de razonar sobre una pieza de software sin tener que entender todo el resto.",
    shortDescription: "Formuló el Principio de Sustitución de Liskov (la 'L' en los principios SOLID) e inventó los tipos abstractos de datos en lenguajes de programación.",
    fullBio: "Científica de la computación estadounidense y una de las primeras mujeres en obtener un doctorado en Ciencias de la Computación en EE. UU. (Stanford). Como profesora del MIT, creó el lenguaje CLU, precursor fundamental de Java y C++, introduciendo iteradores, tipos de datos abstractos y manejo de excepciones. Recibió el Premio Turing en 2008.",
    keyContributions: [
      "Principio de Sustitución de Liskov (LSP), pilar de la programación orientada a objetos moderna.",
      "Desarrollo de CLU y Argus, lenguajes que introdujeron conceptos clave de tipado y computación distribuida.",
      "Premio A.M. Turing 2008 por sus contribuciones a la fundamentación del diseño de lenguajes y sistemas."
    ],
    modernImpact: "Cualquier desarrollador que diseñe clases, interfaces o aplique buenas prácticas arquitectónicas en Java, C#, TypeScript o Python utiliza a diario los principios ideados por Liskov.",
    icon: "boxes"
  },
  {
    id: "radia-perlman",
    name: "Radia Perlman",
    years: "1951 – Presente",
    title: "La 'Madre de Internet' y Creadora de STP",
    category: "redes",
    tags: ["Radia Perlman", "Spanning Tree Protocol", "STP", "Ethernet", "Redes", "Enrutamiento"],
    accent: "from-cyan-500 to-teal-600",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    quote: "La gente piensa que inventar cosas es muy difícil, pero la mayoría de las veces se trata de ver lo obvio que otros han pasado por alto.",
    shortDescription: "Inventó el Spanning Tree Protocol (STP), el algoritmo que hizo posible las redes de área local Ethernet escalables y los puentes de red fiables.",
    fullBio: "Ingeniera de redes y programadora estadounidense educada en el MIT. Mientras trabajaba en Digital Equipment Corporation (DEC), ideó en un solo fin de semana el algoritmo STP, resolviendo el problema de bucles infinitos en redes de comunicación por conmutación. También escribió un célebre poema explicativo ('Algorhyme'). Posee más de 100 patentes en protocolos de seguridad y enrutamiento.",
    keyContributions: [
      "Invención del algoritmo y protocolo Spanning Tree Protocol (STP, 802.1D).",
      "Pionera en el diseño de protocolos de enrutamiento con estado de enlace (TRILL, IS-IS).",
      "Pionera en educación infantil de programación con el sistema TORTIS (basado en LOGO)."
    ],
    modernImpact: "El protocolo que inventó continúa ejecutándose silenciosamente en conmutadores (switches) y centros de datos de todo el mundo para evitar colapsos de red.",
    icon: "network"
  },
  {
    id: "donald-knuth",
    name: "Donald Knuth",
    years: "1938 – Presente",
    title: "Maestro del Análisis de Algoritmos",
    category: "teoria",
    tags: ["Donald Knuth", "The Art of Computer Programming", "TeX", "Algoritmos", "Complejidad Asintótica"],
    accent: "from-indigo-500 to-blue-600",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    quote: "La optimización prematura es la raíz de todos los males en programación.",
    shortDescription: "Autor de la enciclopedia canónica 'The Art of Computer Programming' y creador del sistema tipográfico TeX, rigorizando el análisis matemático de algoritmos.",
    fullBio: "Científico de la computación estadounidense y profesor emérito en la Universidad de Stanford. Es considerado el padre del análisis riguroso de algoritmos. Popularizó la notación O-grande (Big O) en computación. Descontento con la calidad tipográfica digital para fórmulas matemáticas en los años 70, suspendió la redacción de sus libros para programar TeX y el sistema de fuentes METAFONT.",
    keyContributions: [
      "Obra monumental 'The Art of Computer Programming' (TAOCP), la 'biblia' del diseño de algoritmos.",
      "Creación del sistema tipográfico y de composición digital TeX (y base de LaTeX).",
      "Introducción de la programación letrada (Literate Programming)."
    ],
    modernImpact: "El rigor matemático con el que los programadores analizan la eficiencia de un algoritmo y la forma en que se publican los artículos científicos de matemáticas y física en LaTeX existen gracias a él.",
    icon: "book-open"
  }
];

const HARDWARE_PIONEERS_DATA = [
  {
    id: "charles-babbage",
    name: "Charles Babbage",
    years: "1791 – 1871",
    title: "El Padre de la Computadora Mecánica",
    category: "mecanica-valvulas",
    machine: "Máquina Diferencial & Máquina Analítica",
    tags: ["Charles Babbage", "Máquina Analítica", "Máquina Diferencial", "Engranajes", "Computadora Mecánica", "Pioneros"],
    accent: "from-amber-600 to-yellow-600",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    quote: "Tan pronto como exista una Máquina Analítica, guiará con certeza el curso futuro de la ciencia.",
    shortDescription: "Diseñó en el siglo XIX las primeras máquinas calculadoras mecánicas programables, dotadas de memoria ('almacén') y procesador ('molino').",
    fullBio: "Matemático, filósofo e ingeniero mecánico británico. Frustrado por los constantes errores humanos en las tablas astronómicas y de navegación, concibió la 'Máquina Diferencial' y más tarde la colosal 'Máquina Analítica'. Aunque sus mecanismos de vapor y engranajes no pudieron completarse en su vida por la tecnología de la época, su diseño contenía todos los bloques lógicos de una CPU y memoria modernas.",
    keyContributions: [
      "Diseño de la Máquina Analítica (1837): la primera arquitectura con unidad de procesamiento ('mill') y memoria ('store').",
      "Control de secuencia mediante tarjetas perforadas inspiradas en el telar de Jacquard.",
      "Base conceptual que inspiró el modelo de la computadora universal moderna."
    ],
    modernImpact: "La estructura conceptual que ideó en la época victoriana —separar la memoria del procesamiento— es la misma que estructura cada chip informático actual.",
    icon: "cog"
  },
  {
    id: "konrad-zuse",
    name: "Konrad Zuse",
    years: "1910 – 1995",
    title: "Creador de la Primera Computadora Programable Funcional (Z3)",
    category: "mecanica-valvulas",
    machine: "Z1, Z2, Z3 y Z4",
    tags: ["Konrad Zuse", "Z3", "Computadora Binaria", "Relés Electromecánicos", "Plankalkül", "Alemania"],
    accent: "from-orange-500 to-amber-700",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    quote: "La necesidad es la madre de la invención, pero la pereza es su padre.",
    shortDescription: "Construyó en 1941 la Z3, la primera computadora electromecánica binaria totalmente automática y controlada por programa que realmente funcionó en el mundo.",
    fullBio: "Ingeniero civil e inventor alemán. Cansado de realizar cálculos estructurales a mano en ingeniería aeronáutica, comenzó a construir máquinas en el salón de la casa de sus padres. Su modelo Z3 (1941) utilizaba 2.600 relés telefónicos, aritmética binaria de punto flotante y lectura de programas mediante cinta de película perforada, adelantándose a muchas máquinas anglosajonas de la época.",
    keyContributions: [
      "Construcción de la Z3 (1941): primera computadora automática, binaria y Turing-completa operativa.",
      "Introducción pionera de la representación binaria con punto flotante (mantisa y exponente).",
      "Diseño de 'Plankalkül' (1945), uno de los primeros lenguajes formales de programación de alto nivel del mundo."
    ],
    modernImpact: "Demostró que el sistema binario (1 y 0) con conmutadores electromagnéticos era inmensamente superior a los complejos sistemas decimales para construir computadoras.",
    icon: "cpu"
  },
  {
    id: "eckert-mauchly",
    name: "J. Presper Eckert & John Mauchly",
    years: "1919–1995 / 1907–1980",
    title: "Pioneros de la Computación Electrónica (ENIAC & UNIVAC)",
    category: "mecanica-valvulas",
    machine: "ENIAC, EDVAC & UNIVAC I",
    tags: ["ENIAC", "UNIVAC", "Tubos de Vacío", "Electrónica Digital", "Computadoras Gigantes", "Mauchly", "Eckert"],
    accent: "from-red-500 to-rose-700",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    quote: "La velocidad de los cálculos electrónicos cambiará para siempre lo que los humanos se atrevan a soñar resolver.",
    shortDescription: "Diseñaron y construyeron el ENIAC, la primera computadora digital electrónica de propósito general, y posteriormente la primera computadora comercial: UNIVAC.",
    fullBio: "John Presper Eckert (ingeniero eléctrico) y John William Mauchly (físico) se asociaron en la Escuela Moore de Ingeniería en la Universidad de Pensilvania. En 1945 completaron el ENIAC (Electronic Numerical Integrator and Computer), un monstruo de 30 toneladas con casi 18.000 válvulas de vacío que calculaba 1.000 veces más rápido que cualquier máquina anterior. Luego fundaron la primera empresa comercial de computadoras del mundo.",
    keyContributions: [
      "Creación del ENIAC (1945), hito que inauguró la era de la computación electrónica a gran escala.",
      "UNIVAC I (1951), la primera computadora digital comercial producida en serie para empresas y gobiernos.",
      "Paso crucial de los engranajes mecánicos a los circuitos electrónicos de alta velocidad."
    ],
    modernImpact: "El ENIAC probó al mundo entero que la electrónica podía sustituir con éxito a la mecánica, dando el pistoletazo de salida a la industria informática global.",
    icon: "zap"
  },
  {
    id: "noyce-moore",
    name: "Robert Noyce & Gordon Moore",
    years: "Intel / Silicon Valley",
    title: "Creadores del Microchip y la Ley de Moore",
    category: "microchips",
    machine: "Circuito Integrado de Silicio & Chips Intel",
    tags: ["Robert Noyce", "Gordon Moore", "Intel", "Circuito Integrado", "Microchip", "Silicio", "Ley de Moore"],
    accent: "from-blue-600 to-cyan-500",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    quote: "Si algo funciona, es que ya está obsoleto.",
    shortDescription: "Noyce coinventó el circuito integrado monolítico de silicio (el microchip) y Moore predijo la duplicación exponencial de transistores, fundando juntos Intel.",
    fullBio: "Robert Noyce ('el alcalde de Silicon Valley') ideó en Fairchild Semiconductor cómo fabricar transistores, resistencias y conexiones interconectadas en una sola lámina de silicio mediante planaridad química. Junto al químico Gordon Moore fundaron Intel en 1968. Moore formuló en 1965 la famosa 'Ley de Moore', el motor que guió la aceleración exponencial de potencia y abaratamiento de los procesadores durante más de 50 años.",
    keyContributions: [
      "Co-invención del circuito integrado monolítico de silicio plano (la base de todos los microchips).",
      "Fundación de Intel Corporation (1968), líder mundial en fabricación de microprocesadores.",
      "Formulación de la Ley de Moore: duplicación de transistores cada 18-24 meses."
    ],
    modernImpact: "Sin el circuito integrado plano de silicio, no existirían teléfonos inteligentes, ordenadores portátiles ni la miniaturización tecnológica contemporánea.",
    icon: "microchip"
  },
  {
    id: "federico-faggin",
    name: "Federico Faggin",
    years: "1941 – Presente",
    title: "Diseñador del Primer Microprocesador (Intel 4004)",
    category: "microchips",
    machine: "Intel 4004, 8008, 8080 & Zilog Z80",
    tags: ["Federico Faggin", "Intel 4004", "Microprocesador", "CPU en un Chip", "Zilog Z80", "Silicon Gate"],
    accent: "from-emerald-500 to-cyan-600",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    quote: "El microprocesador fue el salto de tener una máquina repartida en varios tableros a poner el cerebro completo en un solo trozo de silicio.",
    shortDescription: "Diseñó el Intel 4004 (1971), la primera unidad central de procesamiento (CPU) contenida en un único chip de silicio del mundo, y el legendario chip Zilog Z80.",
    fullBio: "Físico e ingeniero electrónico italo-estadounidense. Desarrolló en Fairchild la tecnología Silicon Gate (SGT), que hizo viable la densidad de transistores necesaria. Al unirse a Intel en 1970, lideró el diseño físico y lógico del 4004 (el primer microprocesador comercial del mundo), seguido del 8008 y del influyente 8080. Más tarde fundó Zilog y creó el chip Z80, el corazón de infinidad de computadoras y consolas domésticas de los años 80.",
    keyContributions: [
      "Diseño y liderazgo del desarrollo del Intel 4004: la primera CPU en un solo chip de silicio (1971).",
      "Desarrollo de la tecnología 'Silicon Gate' (SGT) con compuertas de polisilicio autoalineadas.",
      "Creación del procesador Zilog Z80, que motorizó la revolución de las computadoras domésticas y los recreativos (Arcade)."
    ],
    modernImpact: "El concepto de 'microprocesador monocomponente' es el motor absoluto de cada ordenador, servidor, televisor y coche del planeta hoy en día.",
    icon: "circuit-board"
  },
  {
    id: "douglas-engelbart",
    name: "Douglas Engelbart",
    years: "1925 – 2013",
    title: "Inventor del Mouse y Visionario de la Interacción Humana",
    category: "pc-revolution",
    machine: "NLS (oN-Line System) & El Ratón",
    tags: ["Douglas Engelbart", "Mouse", "Ratón", "Interfaz Gráfica", "Hipertexto", "La Madre de Todas las Demos", "Ventanas"],
    accent: "from-violet-600 to-indigo-600",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    quote: "La tecnología debería centrarse en aumentar la inteligencia y la capacidad de resolución de problemas del ser humano.",
    shortDescription: "Inventó el ratón (mouse) de ordenador, el hipertexto interactivo, las ventanas en pantalla y el trabajo colaborativo en tiempo real, presentado en 'La Madre de todas las Demos' (1968).",
    fullBio: "Ingeniero e inventor estadounidense en el Stanford Research Institute (SRI). El 9 de diciembre de 1968 ofreció una presentación de 90 minutos que cambió para siempre la historia: demostró en vivo el primer ratón mecánico de madera, edición de texto hipervinculado en pantalla, videollamadas, pantallas divididas y colaboración remota en red, décadas antes de que el público general conociera esas tecnologías.",
    keyContributions: [
      "Invención de la patente del ratón de computadora (X-Y Position Indicator).",
      "Demostración pionera de hipertexto dinámico, ventanas en pantalla y procesamiento colaborativo.",
      "Transformación del ordenador: de una calculadora de tarjetas frías a una herramienta interactiva en tiempo real."
    ],
    modernImpact: "La forma física e interactiva en la que nos comunicamos con una pantalla (apuntar, hacer clic, seleccionar, trabajar en ventanas e hipervínculos) proviene directamente de su laboratorio.",
    icon: "mouse"
  },
  {
    id: "wozniak-jobs",
    name: "Steve Wozniak & Steve Jobs",
    years: "Apple Computer",
    title: "Pioneros de la Computadora Personal y la GUI Accesible",
    category: "pc-revolution",
    machine: "Apple I, Apple II, Macintosh",
    tags: ["Steve Wozniak", "Steve Jobs", "Apple", "Apple II", "Macintosh", "Computadora Personal", "GUI"],
    accent: "from-amber-500 to-rose-600",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    quote: "Una computadora es para nuestra mente lo más parecido a una bicicleta: amplifica exponencialmente nuestras facultades.",
    shortDescription: "Wozniak diseñó la prodigiosa circuitería del Apple I y Apple II, y Jobs visualizó que la computadora debía ser un electrodoméstico hermoso y accesible para cualquier persona común.",
    fullBio: "Fundadores de Apple Computer en 1976. Steve Wozniak, un genio de la electrónica analógica y digital, diseñó en solitario la arquitectura y la placa del Apple II, la primera computadora personal masiva que ofrecía gráficos en color, teclado integrado y ranuras de expansión. En 1984, Steve Jobs lideró la creación del Macintosh, democratizando definitivamente la interfaz gráfica de usuario, los iconos de escritorio y el ratón para el gran público.",
    keyContributions: [
      "Diseño del Apple II (1977), primer gran éxito comercial de un ordenador personal preensamblado listo para enchufar.",
      "Lanzamiento del Macintosh (1984): primer ordenador accesible con entorno de ventanas, iconos, ratón y tipografía proporcional.",
      "Visión de convertir la máquina informática en una extensión personal, creativa e intuitiva para cualquier usuario."
    ],
    modernImpact: "Convirtieron a la computadora en un objeto cotidiano presente en millones de hogares, escuelas y despachos de todo el mundo.",
    icon: "monitor"
  },
  {
    id: "seymour-cray",
    name: "Seymour Cray",
    years: "1925 – 1996",
    title: "El Padre de la Supercomputación",
    category: "supercomputacion",
    machine: "CDC 6600, CDC 7600, Cray-1, Cray X-MP",
    tags: ["Seymour Cray", "Supercomputadoras", "Cray-1", "CDC 6600", "Procesamiento Vectorial", "Cray Research"],
    accent: "from-cyan-500 to-blue-700",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    quote: "Uno de mis principios más firmes es no comprar nunca nada que no pueda entender.",
    shortDescription: "Diseñó las computadoras más veloces del planeta durante más de tres décadas; sus máquinas definieron el cálculo científico a gran escala, la simulación física y el clima.",
    fullBio: "Ingeniero eléctrico e informático estadounidense. Diseñó la CDC 6600 (1964), considerada la primera supercomputadora de la historia, que superó por diez veces a las máquinas de IBM. En 1972 fundó Cray Research y creó la emblemática Cray-1 (1976), famosa por su icónica silueta circular en forma de 'C' para acortar la longitud de los cables y minimizar el retardo de la velocidad de la luz, refrigerada por freón.",
    keyContributions: [
      "Arquitectura de la CDC 6600 con procesadores periféricos independientes y arquitectura RISC embrionaria.",
      "Diseño de la supercomputadora vectorial Cray-1 y Cray-2 con récords mundiales de gigaflops.",
      "Innovaciones maestras en refrigeración líquida de circuitos de alta densidad y minimización de retrasos por longitud de cable."
    ],
    modernImpact: "Las predicciones climáticas modernas, la aerodinámica espacial, la investigación nuclear y el entrenamiento de grandes modelos de IA se apoyan en los principios de supercomputación que Cray forjó.",
    icon: "activity"
  },
  {
    id: "alan-kay",
    name: "Alan Kay",
    years: "1940 – Presente",
    title: "Visionario del Dynabook y la Interfaz Gráfica Moderna",
    category: "pc-revolution",
    machine: "Dynabook & Xerox Alto (Xerox PARC)",
    tags: ["Alan Kay", "Dynabook", "Xerox PARC", "Smalltalk", "GUI", "Laptop", "Tablet", "Premio Turing"],
    accent: "from-purple-500 to-pink-600",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    quote: "La mejor forma de predecir el futuro es inventarlo.",
    shortDescription: "Concibió en 1968 el 'Dynabook', el antecesor visionario de la laptop y la tablet, e ideó en Xerox PARC las ventanas solapadas y la programación orientada a objetos (Smalltalk).",
    fullBio: "Científico de la computación estadounidense y Premio Turing 2003. En Xerox PARC fue uno de los cerebros detrás de la legendaria computadora experimental Xerox Alto (1973), donde se integró la primera interfaz gráfica con ventanas sobrepuestas, menús contextuales y metáfora de escritorio. Su concepto Dynabook preveía un ordenador portátil plano, ligero y con pantalla táctil/teclado para niños y creativos.",
    keyContributions: [
      "El concepto del 'Dynabook' (1968): diseño conceptual de la computadora portátil (laptop y iPad) décadas antes de su existencia técnica.",
      "Creación de Smalltalk, lenguaje que definió la programación orientada a objetos (POO) pura y las interfaces gráficas dinámicas.",
      "Co-diseño de las ventanas solapadas y los componentes visuales en Xerox Alto que luego inspiraron a Apple y Microsoft."
    ],
    modernImpact: "Cada vez que utilizas una tablet, un portátil o interactúas con ventanas de software que se superponen en tu pantalla, estás utilizando la visión formulada por Alan Kay.",
    icon: "tablet"
  },
  {
    id: "clive-sinclair",
    name: "Sir Clive Sinclair",
    years: "1940 – 2021",
    title: "Democratizador de la Computadora Doméstica (ZX Spectrum)",
    category: "pc-revolution",
    machine: "ZX80, ZX81, ZX Spectrum",
    tags: ["Clive Sinclair", "ZX Spectrum", "Microordenadores", "Home Computer", "Reino Unido", "Democratización"],
    accent: "from-teal-500 to-emerald-600",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    quote: "La innovación radical consiste en tomar algo que costaba miles de dólares y lograr que esté en la mesa de cada familia por menos de cien.",
    shortDescription: "Creó el mítico ZX Spectrum en 1982, un microordenador asequible que introdujo la informática y la programación de videojuegos a millones de jóvenes en Europa.",
    fullBio: "Inventor y empresario británico. En una época en que las computadoras costaban miles de dólares y eran solo para empresas o aficionados acomodados, Sinclair se propuso democratizarlas. Diseñó el ZX80, ZX81 y en 1982 el célebre ZX Spectrum con teclado de goma característico y capacidades de color. Fue el catalizador de la industria europea de los videojuegos y la escuela formativa de una generación entera de programadores e ingenieros de software.",
    keyContributions: [
      "Creación del ZX Spectrum (1982), uno de los microordenadores domésticos más populares e influyentes de Europa.",
      "Reducción extrema de costes de hardware mediante circuitos integrados ULA (Uncommitted Logic Array) personalizados.",
      "Inspiración directa y semillero para miles de futuros creadores de software e ingenieros tecnológicos."
    ],
    modernImpact: "Democratizó el acceso al hardware informático antes que nadie en Europa, demostrando que un ordenador no era un lujo inalcanzable sino una herramienta para la educación popular.",
    icon: "gamepad-2"
  }
];

const COMPONENTS_EVOLUTION_DATA = {
  ram: {
    id: "ram",
    name: "Memoria RAM",
    title: "Evolución de la Memoria de Acceso Aleatorio",
    subtitle: "De los núcleos de ferrita magnética a los módulos DDR5 y la memoria HBM para Inteligencia Artificial",
    icon: "memory-stick",
    accent: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    badgeText: "Velocidad & Volatilidad",
    image: "assets/ram.svg",
    imageCaption: "Módulo moderno de Memoria RAM DDR5 con disipador térmico de aluminio anodizado, contactos dorados y difusor RGB.",
    anatomy: [
      { part: "Barra Difusora RGB", desc: "Iluminación LED personalizable superior con difusión acrílica translúcida." },
      { part: "Disipador de Aluminio", desc: "Carcasa metálica que disipa el calor generado por los chips de memoria bajo alta carga." },
      { part: "Chips de Silicio DRAM", desc: "Circuitos integrados de memoria donde se almacenan físicamente los bits de datos." },
      { part: "Chip Regulador PMIC", desc: "En DDR5, gestiona internamente la regulación de voltaje en el propio módulo." },
      { part: "Contactos Dorados (Pins)", desc: "288 contactos dorados resistentes a la corrosión para transferencia ultrarrápida." }
    ],
    summary: "La memoria RAM (Random Access Memory) es el espacio de trabajo ultrarrápido y volátil donde la CPU almacena las instrucciones y datos en ejecución inmediata. Su historia es una lucha titánica por aumentar la densidad de almacenamiento, reducir los voltajes de consumo y multiplicar por millones el ancho de banda por segundo.",
    generations: [
      {
        era: "1947 – 1960s",
        name: "Tubos Williams y Memoria de Núcleos Magnéticos",
        tech: "Tubos de rayos catódicos & Anillos de ferrita",
        speed: "~10 a 50 kHz (~2 a 10 µs)",
        capacity: "Desde unos pocos bytes hasta 4 KB - 32 KB",
        voltage: "Alto (relés y bobinas)",
        description: "En las primeras computadoras (como el ENIAC o UNIVAC), se usaron líneas de retardo de mercurio y tubos Williams. El gran salto ocurrió con la memoria de núcleos magnéticos (Magnetic Core Memory): diminutos anillos de ferrita ensartados a mano en rejillas de alambre de cobre que se magnetizaban en sentido horario o antihorario para representar 1 o 0. Fue la memoria no volátil de referencia durante dos décadas, incluso en las misiones Apolo.",
        breakthrough: "Acceso aleatorio físico por coordenadas X e Y sin tener que recorrer una cinta secuencialmente."
      },
      {
        era: "1968 – 1970s",
        name: "Nacimiento de la DRAM en Silicio (Intel 1103)",
        tech: "Transistor MOS + Condensador (1T-1C)",
        speed: "~1 MHz a 4 MHz",
        capacity: "1 Kbit (128 bytes) por chip",
        voltage: "12V / 5V",
        description: "En 1968, Robert Dennard (IBM) patentó la celda dinámica de memoria (DRAM) de un solo transistor y un condensador. En 1970, Intel lanzó el legendario chip Intel 1103 (1 Kilobit), que abarató y redujo tanto el tamaño que superó definitivamente a los núcleos magnéticos en la industria.",
        breakthrough: "La celda 1T-1C: al almacenar la carga en un condensador microscópico, requería un ciclo de refresco periódico, pero multiplicaba la densidad por diez."
      },
      {
        era: "1980s – Mediados 1990s",
        name: "Era de los Módulos SIMM, FPM y EDO RAM",
        tech: "SIMM de 30 y 72 contactos",
        speed: "33 MHz a 66 MHz (~60 ns)",
        capacity: "256 KB a 32 MB",
        voltage: "5V",
        description: "Las computadoras personales dejaron de soldar chips DIP individuales en la placa base y adoptaron los módulos SIMM (Single In-line Memory Module). Surgieron la memoria FPM (Fast Page Mode) y luego la EDO RAM (Extended Data Output), que permitía iniciar un nuevo ciclo de lectura mientras se completaba la salida del anterior, acelerando el bus de los procesadores Pentium.",
        breakthrough: "Módulos estandarizados intercambiables que permitieron al usuario ampliar la memoria de su PC sin soldador."
      },
      {
        era: "1993 – 1999",
        name: "La Revolución SDRAM y Módulos DIMM (PC66, PC100, PC133)",
        tech: "Módulos DIMM de 168 pines",
        speed: "66 MHz a 133 MHz",
        capacity: "32 MB a 512 MB",
        voltage: "3.3V",
        description: "La memoria asíncrona no daba abasto ante los veloces procesadores. Nació la SDRAM (Synchronous DRAM): la memoria se sincronizó directamente con el reloj del bus del sistema (FSB). Llegó en el formato DIMM (Dual In-line Memory Module) con contactos eléctricos independientes en ambas caras, duplicando el ancho de bus a 64 bits.",
        breakthrough: "Sincronización con el reloj del bus del sistema, eliminando los tiempos de espera muertos entre la CPU y la RAM."
      },
      {
        era: "2000 – 2013",
        name: "La Era DDR, DDR2 y DDR3 (Double Data Rate)",
        tech: "DDR1 (184 pines), DDR2 (240 pines), DDR3 (240 pines)",
        speed: "200 MHz a 2133 MHz",
        capacity: "128 MB a 8 GB por módulo",
        voltage: "2.5V (DDR) → 1.8V (DDR2) → 1.5V (DDR3)",
        description: "DDR revolucionó la industria al transferir datos dos veces por cada ciclo de reloj (en el flanco de subida y en el de bajada), duplicando el ancho de banda a la misma frecuencia. DDR2 introdujo búfer de precarga de 4 bits y menor consumo. DDR3 elevó la precarga a 8 bits y reinó en toda la era dorada de los procesadores Intel Core i y AMD Phenom/FX.",
        breakthrough: "Transferencia en ambos flancos de reloj (subida y bajada) y duplicación progresiva del búfer de prebúsqueda (Prefetch)."
      },
      {
        era: "2014 – 2020",
        name: "DDR4: Alta Densidad y Frecuencias Superiores a 3200 MHz",
        tech: "DIMM de 288 pines con muesca curva",
        speed: "2133 MHz a 3200+ MHz (hasta 4400 MHz con XMP)",
        capacity: "4 GB a 32 GB por módulo",
        voltage: "1.2V (con perfiles de 1.35V en overclock)",
        description: "DDR4 redujo el voltaje a 1.2V y rediseñó el contacto físico con un conector curvado para facilitar la inserción e impedir tensiones en la placa madre. Introdujo 'Bank Groups' para que los bancos de memoria operaran de manera simultánea e independiente, alimentando a CPUs de muchos núcleos.",
        breakthrough: "Bank Groups y menor consumo de energía, fundamental para la explosión de centros de datos y virtualización."
      },
      {
        era: "2020 – Actualidad & Futuro",
        name: "DDR5 y Memorias Apiladas HBM3e para IA",
        tech: "DDR5 (288 pines con PMIC integrado) & HBM3e en silicio 3D",
        speed: "4800 MT/s a más de 8400 MT/s | HBM: más de 1.2 TB/s",
        capacity: "16 GB a 128 GB por módulo DDR5",
        voltage: "1.1V",
        description: "DDR5 rompió esquemas: cada módulo cuenta con dos subcanales independientes de 32 bits, chip de regulación de voltaje propio (PMIC) en el módulo para no depender de la placa base, y corrección de errores en el chip (On-die ECC). Paralelamente, en supercomputación e IA, la memoria HBM (High Bandwidth Memory) se apila verticalmente en 3D directamente sobre el sustrato del procesador, alcanzando anchos de banda masivos que superan el terabyte por segundo.",
        breakthrough: "PMIC integrado en el módulo, doble subcanal independiente y memorias apiladas 3D (HBM) para Inteligencia Artificial masiva."
      }
    ],
    comparisonTable: {
      headers: ["Generación / Estándar", "Período", "Frecuencia / Tasa", "Ancho de Banda", "Voltaje", "Innovación Clave"],
      rows: [
        ["Núcleos Magnéticos", "1950s - 1960s", "~10 - 50 kHz", "< 0.001 MB/s", "Alto (bobinas)", "Acceso aleatorio por rejilla física de ferritas"],
        ["DRAM Intel 1103", "1970", "1 MHz", "~0.1 MB/s", "12V / 5V", "Celda 1T-1C en chip de silicio monolítico"],
        ["SIMM (FPM / EDO)", "1985 - 1995", "33 - 66 MHz", "Hasta 264 MB/s", "5.0V", "Módulos intercambiables de 30 y 72 contactos"],
        ["SDRAM (DIMM)", "1996 - 1999", "66 - 133 MHz", "Hasta 1.06 GB/s", "3.3V", "Sincronización directa con el bus (FSB)"],
        ["DDR", "2000 - 2002", "200 - 400 MHz", "Hasta 3.2 GB/s", "2.5V", "Transferencia en ambos flancos de reloj (subida/bajada)"],
        ["DDR2", "2003 - 2006", "400 - 800 MHz", "Hasta 6.4 GB/s", "1.8V", "Búfer de precarga de 4 bits y menor calor"],
        ["DDR3", "2007 - 2013", "800 - 2133 MHz", "Hasta 17.0 GB/s", "1.5V", "Búfer de precarga de 8 bits y densidades de 8 GB"],
        ["DDR4", "2014 - 2020", "2133 - 3200+ MHz", "Hasta 25.6 GB/s", "1.2V", "Bank Groups independientes y conector curvado"],
        ["DDR5", "2020 - Presente", "4800 - 8400+ MT/s", "Hasta 67.2+ GB/s", "1.1V", "PMIC integrado en el módulo, 2 subcanales y On-die ECC"],
        ["HBM3e (IA / Servidores)", "2024 - Presente", "> 9.6 Gbps/pin", "> 1.200 GB/s (1.2 TB/s)", "1.1V", "Apilado de chips 3D sobre interposer de silicio"]
      ]
    },
    curiosities: [
      "¿Sabías qué? En las memorias de ferrita de los años 50 y 60, costureras tejían hilos de cobre milimétricos a través de miles de anillos usando microscopios.",
      "El término 'DDR' significa Double Data Rate: lee información tanto cuando la señal eléctrica sube como cuando baja.",
      "La memoria RAM moderna es tan rápida que la luz apenas recorre unos 3 centímetros en el tiempo que le toma completar un ciclo de reloj a un módulo DDR5 a 8000 MT/s."
    ]
  },

  motherboard: {
    id: "motherboard",
    name: "Placa Madre (Motherboard)",
    title: "Evolución de la Placa Madre y Chipsets",
    subtitle: "De los backplanes pasivos y marañas de cables al formato ATX, PCIe 5.0 y los zócalos inteligentes",
    icon: "circuit-board",
    accent: "from-blue-500 to-indigo-600",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    badgeText: "Conectividad & Arquitectura",
    image: "assets/motherboard.svg",
    imageCaption: "Placa Madre moderna formato ATX con zócalo LGA/AM5, disipadores VRM masivos, 4 ranuras DIMM y blindaje PCIe 5.0.",
    anatomy: [
      { part: "Zócalo del Procesador (Socket)", desc: "Matriz de cientos de contactos que conectan la CPU con la memoria y las líneas PCIe." },
      { part: "Fases de Alimentación (VRM)", desc: "Módulos reguladores de voltaje que convierten y filtran la energía para la CPU." },
      { part: "Ranuras DIMM DDR5", desc: "4 canales de memoria de alta velocidad con clips de fijación reforzados." },
      { part: "Ranura Blindada PCIe 5.0 x16", desc: "Bus de altísima velocidad con armadura de acero para tarjetas gráficas pesadas." },
      { part: "Disipadores para M.2 NVMe", desc: "Placas metálicas que enfrían los veloces discos SSD NVMe para evitar estrangulamiento térmico." },
      { part: "Chipset del Sistema (PCH)", desc: "Controlador central para almacenamiento SATA, puertos USB, audio y redes." }
    ],
    summary: "La Placa Base o Placa Madre es la columna vertebral del computador: proporciona la infraestructura de pistas de cobre multicapa, zócalos de procesador (sockets), ranuras de expansión, buses de alta velocidad y alimentación eléctrica que permite a todos los componentes comunicarse armoniosamente.",
    generations: [
      {
        era: "1970s",
        name: "La Era de los Backplanes Pasivos (Bus S-100)",
        tech: "Placas de circuito pasivas con zócalos tipo borde (S-100)",
        speed: "Bus de 2 MHz a 4 MHz (8 bits)",
        formFactor: "Cajas metálicas con rieles para tarjetas",
        features: "Sin CPU ni memoria soldadas en la placa principal",
        description: "En máquinas pioneras como la Altair 8800 o IMSAI, no existía una 'placa madre' inteligente con chipsets. Había un 'Backplane' pasivo: una placa con ranuras de bus S-100 interconectadas por donde circulaban corriente y señales. La CPU iba en una tarjeta enchufable, la memoria en otra, y los puertos en otra, requiriendo complejas marañas de cables puenteados a mano.",
        breakthrough: "Modularidad inicial: la capacidad de agregar tarjetas según el presupuesto del aficionado."
      },
      {
        era: "1981 – 1984",
        name: "IBM Planar Breadboard (IBM PC 5150) y Formato AT",
        tech: "Bus ISA de 8 bits y 16 bits | Placa con chips integrados",
        speed: "4.77 MHz (8088) a 8 MHz (80286)",
        formFactor: "Planar Board original e IBM PC/AT (Advanced Technology)",
        features: "CPU en socket, zócalos para chips de RAM DIP, BIOS en ROM",
        description: "IBM introdujo en 1981 la 'Planar Board' en el IBM PC 5150. Por primera vez, el procesador (Intel 8088), la ROM BIOS, el teclado y los bancos de memoria compartían una misma placa principal con ranuras ISA (Industry Standard Architecture) para periféricos. En 1984, el IBM PC/AT definió las placas grandes 'AT' y 'Baby AT', que dominaron durante más de una década.",
        breakthrough: "Nacimiento del estándar de la placa base moderna integrada con ranuras de expansión compatibles."
      },
      {
        era: "1995",
        name: "La Gran Revolución del Formato ATX (Intel)",
        tech: "Formato ATX (Advanced Technology eXtended)",
        speed: "Buses FSB de 66 MHz a 133 MHz",
        formFactor: "ATX (305 × 244 mm)",
        features: "Panel I/O trasero unificado, rotación de CPU a 90°, encendido por software (Soft Power)",
        description: "Hacia 1995, las placas Baby AT eran un desastre: los cables de los discos duros tapaban el procesador, no había ventilación adecuada y el conector de corriente podía quemar la placa si se conectaba al revés. Intel lanzó la especificación ATX: rotó la placa 90 grados, colocó la CPU junto al flujo de aire de la fuente, creó el panel de conexiones traseras integrado y habilitó apagar o suspender la computadora por software (Soft Power).",
        breakthrough: "El estándar de diseño físico que, 30 años después, sigue siendo la base de todos los gabinetes y fuentes de poder del planeta."
      },
      {
        era: "Fin de los 90s – 2000s",
        name: "La Era del Chipset: Northbridge y Southbridge",
        tech: "Buses AGP (1x-8x), PCI, PCI-X y primeros PCIe 1.0",
        speed: "Buses de 100 MHz a 800+ MHz (FSB)",
        formFactor: "ATX, Micro-ATX (1997), Mini-ITX (VIA 2001)",
        features: "División del chipset en puente norte y puente sur",
        description: "Para manejar procesadores cada vez más rápidos (Pentium III, Pentium 4, Athlon XP/64), la placa base delegó el control en dos chips neurálgicos: el 'Northbridge' (un chip ultrarrápido con disipador que comunicaba la CPU con la memoria RAM y la tarjeta de video AGP/PCIe) y el 'Southbridge' (que controlaba discos duros IDE/SATA, puertos USB, ranuras PCI estándar, sonido y BIOS).",
        breakthrough: "Especialización de buses de alta velocidad dedicados para gráficos y memoria sin saturar los periféricos lentos."
      },
      {
        era: "2010 – 2018",
        name: "Integración en el Silicio de la CPU y Transición a UEFI",
        tech: "PCI Express 3.0/4.0 | M.2 NVMe | UEFI Firmware",
        speed: "Enlaces PCIe de hasta 16 GT/s por línea",
        formFactor: "ATX, Micro-ATX, Mini-ITX, E-ATX",
        features: "Desaparición del Northbridge (absorbido por la CPU), adiós a la BIOS clásica",
        description: "El controlador de memoria RAM y las líneas PCIe para la tarjeta gráfica se trasladaron al interior de la propia CPU, eliminando por completo el Northbridge y dejando solo un chip unificado (PCH o Chipset simple). La arcaica BIOS azul de texto de 1981 fue reemplazada por la interfaz gráfica UEFI (soporte para discos mayores de 2 TB, arranque seguro Secure Boot y control con ratón). Nace el factor de forma M.2 para discos de estado sólido NVMe ultrarrápidos directamente en placa.",
        breakthrough: "Latencias drásticamente reducidas al conectar la memoria y la GPU directamente al procesador, y salto a interfaces UEFI modernas."
      },
      {
        era: "2020 – Actualidad & Futuro",
        name: "Placas Inteligentes: PCIe 5.0, VRMs Monstruosos y Conectividad Oculta",
        tech: "PCIe 5.0, DDR5, Wi-Fi 7, Thunderbolt 4 / USB4, BTF (Back-to-Future)",
        speed: "PCIe 5.0: 32 GT/s (~64 GB/s en x16) | M.2 a 14.000 MB/s",
        formFactor: "ATX moderno, Mini-ITX con PCB de 10-12 capas, formatos con conectores traseros ocultos",
        features: "VRM de 20+ fases de potencia, disipadores masivos con heatpipes, pantallas OLED integradas",
        description: "Las placas madre actuales son obras maestras de la ingeniería eléctrica: con procesadores que consumen más de 250W a plena carga, integran módulos reguladores de voltaje (VRM) de grado aeroespacial, pistas de cobre blindadas de 8 a 12 capas para evitar interferencias en DDR5 y PCIe 5.0, tarjetas de red de 10 Gbps y Wi-Fi 7. Además, estándares como ASUS BTF y MSI Project Zero ocultan todos los cables en la parte trasera de la placa para un ensamblado impecable.",
        breakthrough: "VRMs digitales con disipación masiva, pistas ultradensas para señales de altísima frecuencia y reubicación trasera de conectores."
      }
    ],
    comparisonTable: {
      headers: ["Formato / Estándar", "Período", "Buses Principales", "Disposición del Procesador", "Innovación de Arquitectura"],
      rows: [
        ["Backplane S-100", "1975", "Bus S-100 (2 - 4 MHz)", "En tarjeta hija separada", "Placa pasiva con ranuras sin circuitería activa"],
        ["IBM Planar (PC 5150)", "1981", "ISA 8-bit (4.77 MHz)", "Soldada / Socket en placa", "Primera integración de CPU, BIOS y memoria en una sola placa"],
        ["Formato AT / Baby AT", "1984 - 1994", "ISA 16-bit (8 MHz)", "En el centro de la placa", "Slots de 16 bits para gráficos y tarjetas de sonido"],
        ["Estándar ATX (Intel)", "1995", "PCI (33 MHz) & AGP", "Junto a la fuente de poder", "Rotación a 90°, panel I/O unificado y encendido por software"],
        ["Era Dual Chipset", "1998 - 2008", "AGP 8x y primeros PCIe", "Sockets con disipadores masivos", "División en Northbridge (alta velocidad) y Southbridge"],
        ["Integración CPU / UEFI", "2010 - 2018", "PCIe 3.0 / 4.0 y M.2 NVMe", "Controlador PCIe/RAM dentro de CPU", "Eliminación del Northbridge y paso de BIOS a interfaz UEFI"],
        ["Placas Modernas & BTF", "2020 - Presente", "PCIe 5.0 (32 GT/s) & Wi-Fi 7", "Sockets masivos (LGA1700 / AM5)", "VRM de 20+ fases, PCB de 10-12 capas y conectores traseros ocultos"]
      ]
    },
    curiosities: [
      "¿Sabías qué? En las placas Baby AT antiguas de los años 80 y 90, podías quemar la placa madre si conectabas los cables de la fuente P8 y P9 con los cables negros separados en lugar de juntos al centro.",
      "El término 'Placa Madre' proviene de su rol como placa matriz que aloja a todas las 'placas hijas' (daughterboards) o tarjetas de expansión secundarias.",
      "Una placa madre moderna de gama alta puede tener más de 12 capas de circuitos de cobre aislados dentro de un grosor de menos de 2 milímetros."
    ]
  },

  gpu: {
    id: "gpu",
    name: "Tarjeta Gráfica (GPU)",
    title: "Evolución de la Tarjeta Gráfica y la GPU",
    subtitle: "Del texto monocromo a las aceleradoras 3dfx, los shaders programables, el Ray Tracing y la revolución de la IA",
    icon: "monitor-play",
    accent: "from-purple-500 to-pink-600",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    badgeText: "Cómputo Paralelo & Gráficos",
    image: "assets/gpu.svg",
    imageCaption: "Tarjeta Gráfica moderna de alto rendimiento con sistema de triple ventilador axial, cámara de vapor y bus PCIe 5.0.",
    anatomy: [
      { part: "Triple Ventilador Axial", desc: "Ventiladores aerodinámicos de alta presión estática para disipar cientos de watts de calor." },
      { part: "Radiador y Heatpipes de Cobre", desc: "Tubos de calor sinterizados que distribuyen el calor de la GPU a cientos de aletas de aluminio." },
      { part: "Carcasa y Shroud Blindado", desc: "Estructura exterior metálica con difusor de flujo y acentos de iluminación RGB." },
      { part: "Conector PCIe x16 Reforzado", desc: "Interfaz de bus con contactos dorados para comunicación bidireccional de alto ancho de banda." },
      { part: "Placa Trasera (Metal Backplate)", desc: "Refuerza la rigidez estructural de la tarjeta y colabora en la disipación térmica pasiva." },
      { part: "Salidas de Video (DP / HDMI)", desc: "Soporte para múltiples monitores con resoluciones hasta 8K y altas tasas de refresco." }
    ],
    summary: "La Tarjeta Gráfica ha protagonizado la transformación más asombrosa de toda la computación: nació como un simple circuito para emitir texto en pantallas de fósforo y se ha convertido en el procesador masivamente paralelo más potente de la Tierra, impulsando los videojuegos fotorrealistas y los modelos de Inteligencia Artificial que están redefiniendo el mundo.",
    generations: [
      {
        era: "1981 – 1986",
        name: "De la Terminal Monocroma al Color (MDA, CGA, EGA)",
        tech: "Chips discretos de salida de video TTL (Motorola 6845)",
        resolution: "MDA: Texto 80x25 | CGA: 320x200 (4 colores) | EGA: 640x350 (16 colores)",
        memory: "4 KB a 256 KB de VRAM",
        interface: "Ranura ISA de 8 bits",
        description: "En 1981, el IBM PC ofrecía dos opciones: la tarjeta MDA (solo texto verde o ámbar sin gráficos) o la CGA (Color Graphics Adapter), famosa por su paleta chillona de 4 colores simultáneos (negro, cian, magenta y blanco). En 1984 llegó EGA, aumentando a 16 colores seleccionables de una paleta de 64, suficiente para los primeros juegos gráficos de aventuras de Sierra y LucasArts.",
        breakthrough: "Paso de interfaces exclusivamente de texto a las primeras imágenes fijas y sprites a color en el ordenador personal."
      },
      {
        era: "1987 – 1995",
        name: "La Revolución VGA y SVGA: El Estándar de la Industria",
        tech: "Chips aceleradores 2D (Tseng Labs, S3 Graphics, Cirrus Logic)",
        resolution: "VGA: 320x200 (256 colores) o 640x480 (16 colores) | SVGA: hasta 1024x768",
        memory: "256 KB a 2 MB",
        interface: "Buses ISA de 16 bits, VESA Local Bus (VLB) y PCI",
        description: "En 1987, IBM lanzó el estándar VGA (Video Graphics Array) con el legendario modo 13h (320x200 a 256 colores de una paleta de 262.144 tonos analógicos). Títulos como DOOM, Prince of Persia o Monkey Island 2 cobraron vida gracias a VGA. Surgieron aceleradoras 2D como S3 Trio y Tseng ET4000 que aceleraban el movimiento de ventanas en Windows.",
        breakthrough: "Salida de señal analógica RGB mediante el icónico conector azul D-Sub de 15 pines y soporte nativo para 256 colores simultáneos."
      },
      {
        era: "1996 – 1998",
        name: "La Explosión de la Aceleración 3D y la Era 3dfx Voodoo",
        tech: "Aceleradores 3D dedicados (3dfx Voodoo, Rendition Vérité, Riva 128)",
        resolution: "640x480 y 800x600 con filtrado bilineal de texturas en 3D",
        memory: "4 MB a 12 MB EDO RAM (separada para frame buffer y texturas)",
        interface: "Bus PCI y AGP 1x/2x (API propietaria Glide)",
        description: "Hasta 1996, el cálculo de polígonos 3D lo realizaba la CPU 'por software' (como en el primer Quake), viéndose pixelado y lento. La compañía 3dfx Interactive revolucionó el mundo con la tarjeta Voodoo Graphics: requería conectarse por un cable puente a una tarjeta 2D ordinaria, pero al arrancar un juego 3D, activaba filtrado bilineal suavizado, niebla volumétrica y tasa de cuadros fluidas. Fue un shock visual que cambió la historia del videojuego para siempre.",
        breakthrough: "Rasterización acelerada por hardware dedicado y filtrado bilineal en tiempo real, liberando a la CPU del renderizado 3D."
      },
      {
        era: "1999 – 2005",
        name: "Nace el Término 'GPU' (GeForce 256) y los Shaders Programables",
        tech: "NVIDIA GeForce 256, GeForce 3/4/FX, ATI Radeon 9700 Pro",
        resolution: "1024x768 a 1600x1200 en color de 32 bits",
        memory: "32 MB a 256 MB DDR/GDDR3",
        interface: "AGP 4x/8x y nacimiento de PCI Express (2004)",
        description: "En agosto de 1999, NVIDIA lanzó la GeForce 256 y acuñó el término 'GPU' (Graphics Processing Unit): por primera vez, un solo chip contenía el motor de Transformación e Iluminación (Hardware T&L), renderizado de 4 pipelines y memoria DDR. Con la GeForce 3 (2001) y la legendaria ATI Radeon 9700 Pro (DirectX 9, 2002), se reemplazó el cauce fijo por 'Shaders Programables': los desarrolladores podían escribir programas (Pixel y Vertex Shaders) para simular agua realista, piel, reflejos y sombras dinámicas.",
        breakthrough: "Acuñación del concepto GPU con Hardware T&L y shaders programables que convirtieron a la tarjeta en una máquina de renderizado cinematográfico."
      },
      {
        era: "2006 – 2017",
        name: "Arquitectura Unificada y Cómputo General (GPGPU con CUDA)",
        tech: "NVIDIA GeForce 8800 GTX (G80), serie GTX 1080 (Pascal), AMD Radeon HD 7970",
        resolution: "1080p, 1440p y primeros pasos en 4K UHD",
        memory: "512 MB a 11 GB GDDR5/GDDR5X",
        interface: "PCIe 2.0 y PCIe 3.0 x16",
        description: "La GeForce 8800 GTX (2006) introdujo la arquitectura de shaders unificados: en lugar de tener núcleos separados para vértices y píxeles, empleó cientos de núcleos idénticos ('Stream Processors') capaces de calcular cualquier tarea matemática. NVIDIA presentó CUDA, permitiendo a científicos e investigadores usar la GPU para simulaciones físicas, química computacional, minería de criptomonedas y las primeras redes neuronales profundas (Deep Learning) con AlexNet en 2012.",
        breakthrough: "Cómputo General en GPU (GPGPU con CUDA): la tarjeta gráfica deja de ser solo para juegos y se convierte en el mayor supercomputador matemático paralelo del planeta."
      },
      {
        era: "2018 – Actualidad & Futuro",
        name: "Ray Tracing en Tiempo Real (RTX), Reescalado por IA y la Era de los Modelos Masivos",
        tech: "NVIDIA GeForce RTX (20/30/40/50 series con núcleos RT y Tensor) & Aceleradores de IA (H100, B200)",
        resolution: "4K a 120+ fps con DLSS 3.5, 8K, computación de billones de parámetros",
        memory: "16 GB a 24 GB GDDR6X/GDDR7 | Centros de Datos: 80 GB a 192 GB HBM3e",
        interface: "PCIe 4.0 / 5.0 x16, NVLink de alta velocidad",
        description: "En 2018, NVIDIA presentó la arquitectura Turing (RTX 2080): introdujo trazado de rayos (Ray Tracing) acelerado por hardware para simular el comportamiento físico de la luz y reflejos hiperrealistas, junto con núcleos Tensor para inferencia de Inteligencia Artificial (tecnología DLSS). Hoy, la GPU es el corazón indiscutible de la revolución de la IA generativa: centros de datos enteros con chips NVIDIA Hopper y Blackwell procesan el entrenamiento de los modelos de lenguaje más avanzados del mundo.",
        breakthrough: "Ray Tracing por hardware combinado con Inteligencia Artificial (Tensor Cores / DLSS) y transformación de la GPU en el motor de la IA global."
      }
    ],
    comparisonTable: {
      headers: ["Generación / Hito", "Período", "Resolución & Color", "VRAM Típica", "Tipo de Aceleración", "Revolución Gráfica"],
      rows: [
        ["IBM MDA y CGA", "1981", "Texto / 320x200 (4 colores)", "4 KB - 16 KB", "Sin aceleración gráfica", "Nacimiento de los primeros gráficos a color en el PC"],
        ["Estándar VGA (IBM)", "1987", "320x200 (256 colores) / 640x480", "256 KB - 1 MB", "Aceleración 2D básica", "Modo 13h, conector D-Sub 15 pines y soporte de 256 colores"],
        ["3dfx Voodoo Graphics", "1996", "640x480 o 800x600 en 3D", "4 MB - 12 MB EDO", "Acelerador 3D dedicado", "Polígonos suavizados, niebla volumétrica y API Glide"],
        ["NVIDIA GeForce 256", "1999", "1600x1200 en color 32-bit", "32 MB DDR", "Hardware T&L integrado", "Acuñación formal del término y arquitectura 'GPU'"],
        ["Shaders Programables", "2001 - 2005", "1600x1200 y 1080p", "128 MB - 512 MB GDDR3", "Pixel & Vertex Shaders", "Radeon 9700 / GeForce FX: agua, piel y reflejos dinámicos"],
        ["Arquitectura Unificada (CUDA)", "2006 - 2017", "1080p, 1440p y 4K inicial", "768 MB - 11 GB GDDR5", "Cómputo general (GPGPU)", "GeForce 8800 GTX y CUDA: detonante del Deep Learning en 2012"],
        ["Ray Tracing & Tensor Cores", "2018 - Presente", "4K a 120+ fps con DLSS", "8 GB - 24 GB GDDR6X", "RT Cores + Tensor Cores", "Trazado de rayos físico en tiempo real y reescalado por redes neuronales"],
        ["GPUs de Servidor para IA", "2024 - Presente", "Cómputo masivo FP8/FP16", "80 GB - 192 GB HBM3e", "Aceleradores de Transformers", "Superchips Hopper H100 y Blackwell para Inteligencia Artificial"]
      ]
    },
    curiosities: [
      "¿Sabías qué? El término 'GPU' fue inventado y registrado como marca de marketing por NVIDIA en 1999 con el lanzamiento de la GeForce 256.",
      "Las tarjetas 3dfx Voodoo originales de 1996 no podían mostrar el escritorio de Windows: necesitaban un cable exterior que las conectara a tu tarjeta 2D normal y hacían un característico sonido 'clic' de relé al entrar a un juego 3D.",
      "La Inteligencia Artificial moderna despegó en 2012 cuando los investigadores entrenaron por primera vez una red neuronal profunda (AlexNet) usando dos tarjetas gráficas para juegos GeForce GTX 580."
    ]
  }
};

// Export to window explicitly so all browser scopes have immediate access
if (typeof window !== "undefined") {
  window.PIONEERS_DATA = PIONEERS_DATA;
  window.HARDWARE_PIONEERS_DATA = HARDWARE_PIONEERS_DATA;
  window.COMPONENTS_EVOLUTION_DATA = COMPONENTS_EVOLUTION_DATA;
}



