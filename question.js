const quizQuestions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "What is the capital city of Brazil?",
    options: [
      { text: "Rio de Janeiro", isCorrect: false },
      { text: "Brasília", isCorrect: true },
      { text: "São Paulo", isCorrect: false },
      { text: "Salvador", isCorrect: false }
    ],
    correctAnswer: "Brasília",
    explanation: "Brasília is the capital of Brazil, designed by Oscar Niemeyer and established in 1960."
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      { text: "William Shakespeare", isCorrect: true },
      { text: "Charles Dickens", isCorrect: false },
      { text: "Jane Austen", isCorrect: false },
      { text: "Mark Twain", isCorrect: false }
    ],
    correctAnswer: "William Shakespeare",
    explanation: "William Shakespeare wrote the famous tragedy 'Romeo and Juliet' in the late 16th century."
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Which planet is closest to the Sun?",
    options: [
      { text: "Venus", isCorrect: false },
      { text: "Mercury", isCorrect: true },
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: false }
    ],
    correctAnswer: "Mercury",
    explanation: "Mercury is the closest planet to the Sun, orbiting at an average distance of about 58 million kilometers."
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "In which year did World War II end?",
    options: [
      { text: "1943", isCorrect: false },
      { text: "1944", isCorrect: false },
      { text: "1945", isCorrect: true },
      { text: "1946", isCorrect: false }
    ],
    correctAnswer: "1945",
    explanation: "World War II ended in 1945 with the surrender of Germany in May and Japan in September."
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "What is the primary source of energy for Earth's climate system?",
    options: [
      { text: "Geothermal energy", isCorrect: false },
      { text: "Solar energy", isCorrect: true },
      { text: "Wind energy", isCorrect: false },
      { text: "Nuclear energy", isCorrect: false }
    ],
    correctAnswer: "Solar energy",
    explanation: "Solar energy from the Sun drives Earth's climate system, influencing weather patterns and temperatures."
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Which element has the atomic number 8?",
    options: [
      { text: "Oxygen", isCorrect: true },
      { text: "Nitrogen", isCorrect: false },
      { text: "Carbon", isCorrect: false },
      { text: "Hydrogen", isCorrect: false }
    ],
    correctAnswer: "Oxygen",
    explanation: "Oxygen has the atomic number 8 on the periodic table, with 8 protons in its nucleus."
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "Who discovered penicillin?",
    options: [
      { text: "Alexander Fleming", isCorrect: true },
      { text: "Marie Curie", isCorrect: false },
      { text: "Thomas Edison", isCorrect: false },
      { text: "Albert Einstein", isCorrect: false }
    ],
    correctAnswer: "Alexander Fleming",
    explanation: "Alexander Fleming discovered penicillin in 1928, revolutionizing antibiotic treatment."
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Which country hosted the 2020 Summer Olympics?",
    options: [
      { text: "Brazil", isCorrect: false },
      { text: "Japan", isCorrect: true },
      { text: "China", isCorrect: false },
      { text: "France", isCorrect: false }
    ],
    correctAnswer: "Japan",
    explanation: "Japan hosted the 2020 Summer Olympics in Tokyo, delayed to 2021 due to the pandemic."
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "What is the largest desert in the world?",
    options: [
      { text: "Sahara", isCorrect: false },
      { text: "Antarctic Desert", isCorrect: true },
      { text: "Gobi", isCorrect: false },
      { text: "Kalahari", isCorrect: false }
    ],
    correctAnswer: "Antarctic Desert",
    explanation: "The Antarctic Desert is the largest desert by area, covering about 13.8 million square kilometers."
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Which scientist proposed the theory of relativity?",
    options: [
      { text: "Isaac Newton", isCorrect: false },
      { text: "Albert Einstein", isCorrect: true },
      { text: "Galileo Galilei", isCorrect: false },
      { text: "Stephen Hawking", isCorrect: false }
    ],
    correctAnswer: "Albert Einstein",
    explanation: "Albert Einstein proposed the theory of relativity, including special and general relativity."
  },
  {
    id: 11,
    type: "multiple-choice",
    question: "What is the main ingredient in guacamole?",
    options: [
      { text: "Tomato", isCorrect: false },
      { text: "Avocado", isCorrect: true },
      { text: "Onion", isCorrect: false },
      { text: "Lime", isCorrect: false }
    ],
    correctAnswer: "Avocado",
    explanation: "Avocado is the primary ingredient in guacamole, a traditional Mexican dip."
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: [
      { text: "Oxygen", isCorrect: false },
      { text: "Nitrogen", isCorrect: true },
      { text: "Carbon dioxide", isCorrect: false },
      { text: "Argon", isCorrect: false }
    ],
    correctAnswer: "Nitrogen",
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere by volume."
  },
  {
    id: 13,
    type: "multiple-choice",
    question: "Who painted the Mona Lisa?",
    options: [
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Claude Monet", isCorrect: false }
    ],
    correctAnswer: "Leonardo da Vinci",
    explanation: "Leonardo da Vinci painted the Mona Lisa, a famous Renaissance artwork."
  },
  {
    id: 14,
    type: "multiple-choice",
    question: "Which country is known as the Land of the Rising Sun?",
    options: [
      { text: "China", isCorrect: false },
      { text: "Japan", isCorrect: true },
      { text: "South Korea", isCorrect: false },
      { text: "Thailand", isCorrect: false }
    ],
    correctAnswer: "Japan",
    explanation: "Japan is called the Land of the Rising Sun due to its eastern location and sunrise views."
  },
  {
    id: 15,
    type: "multiple-choice",
    question: "What is the boiling point of water in Celsius?",
    options: [
      { text: "90°C", isCorrect: false },
      { text: "100°C", isCorrect: true },
      { text: "110°C", isCorrect: false },
      { text: "120°C", isCorrect: false }
    ],
    correctAnswer: "100°C",
    explanation: "Water boils at 100°C at standard atmospheric pressure."
  },
  {
    id: 16,
    type: "multiple-choice",
    question: "Which programming language is known for its use in data analysis?",
    options: [
      { text: "C++", isCorrect: false },
      { text: "Python", isCorrect: true },
      { text: "Java", isCorrect: false },
      { text: "Ruby", isCorrect: false }
    ],
    correctAnswer: "Python",
    explanation: "Python is widely used for data analysis due to libraries like Pandas and NumPy."
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "Who was the first person to walk on the moon?",
    options: [
      { text: "Buzz Aldrin", isCorrect: false },
      { text: "Neil Armstrong", isCorrect: true },
      { text: "Yuri Gagarin", isCorrect: false },
      { text: "John Glenn", isCorrect: false }
    ],
    correctAnswer: "Neil Armstrong",
    explanation: "Neil Armstrong was the first human to walk on the moon in 1969 during the Apollo 11 mission."
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "Which continent is the Sahara Desert located on?",
    options: [
      { text: "Asia", isCorrect: false },
      { text: "Africa", isCorrect: true },
      { text: "Australia", isCorrect: false },
      { text: "South America", isCorrect: false }
    ],
    correctAnswer: "Africa",
    explanation: "The Sahara Desert is located in northern Africa, covering several countries."
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "Which animal is known as the 'King of the Jungle'?",
    options: [
      { text: "Tiger", isCorrect: false },
      { text: "Lion", isCorrect: true },
      { text: "Elephant", isCorrect: false },
      { text: "Gorilla", isCorrect: false }
    ],
    correctAnswer: "Lion",
    explanation: "The lion is often called the 'King of the Jungle' due to its strength and dominance."
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "What is the smallest prime number?",
    options: [
      { text: "0", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "2", isCorrect: true },
      { text: "3", isCorrect: false }
    ],
    correctAnswer: "2",
    explanation: "2 is the smallest prime number, as it is only divisible by 1 and itself."
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Which gas is essential for human respiration?",
    options: [
      { text: "Carbon dioxide", isCorrect: false },
      { text: "Oxygen", isCorrect: true },
      { text: "Nitrogen", isCorrect: false },
      { text: "Helium", isCorrect: false }
    ],
    correctAnswer: "Oxygen",
    explanation: "Oxygen is essential for human respiration, used in cellular processes to produce energy."
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Who invented the telephone?",
    options: [
      { text: "Thomas Edison", isCorrect: false },
      { text: "Alexander Graham Bell", isCorrect: true },
      { text: "Nikola Tesla", isCorrect: false },
      { text: "Guglielmo Marconi", isCorrect: false }
    ],
    correctAnswer: "Alexander Graham Bell",
    explanation: "Alexander Graham Bell is credited with inventing the telephone in 1876."
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Which country is famous for the Eiffel Tower?",
    options: [
      { text: "Italy", isCorrect: false },
      { text: "France", isCorrect: true },
      { text: "Spain", isCorrect: false },
      { text: "Germany", isCorrect: false }
    ],
    correctAnswer: "France",
    explanation: "The Eiffel Tower is located in Paris, France, and is a global cultural icon."
  },
  {
    id: 24,
    type: "multiple-choice",
    question: "What is the main source of energy for Earth's oceans?",
    options: [
      { text: "Tidal forces", isCorrect: false },
      { text: "Solar energy", isCorrect: true },
      { text: "Geothermal energy", isCorrect: false },
      { text: "Wind energy", isCorrect: false }
    ],
    correctAnswer: "Solar energy",
    explanation: "Solar energy drives ocean currents and evaporation, influencing marine ecosystems."
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Which river flows through Egypt?",
    options: [
      { text: "Amazon", isCorrect: false },
      { text: "Nile", isCorrect: true },
      { text: "Mississippi", isCorrect: false },
      { text: "Yangtze", isCorrect: false }
    ],
    correctAnswer: "Nile",
    explanation: "The Nile River flows through Egypt, vital to its agriculture and history."
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Which element is a noble gas?",
    options: [
      { text: "Oxygen", isCorrect: false },
      { text: "Helium", isCorrect: true },
      { text: "Nitrogen", isCorrect: false },
      { text: "Sulfur", isCorrect: false }
    ],
    correctAnswer: "Helium",
    explanation: "Helium is a noble gas, known for its inert properties and use in balloons."
  },
  {
    id: 27,
    type: "multiple-choice",
    question: "Which country is known for the Taj Mahal?",
    options: [
      { text: "India", isCorrect: true },
      { text: "Pakistan", isCorrect: false },
      { text: "Bangladesh", isCorrect: false },
      { text: "Nepal", isCorrect: false }
    ],
    correctAnswer: "India",
    explanation: "The Taj Mahal, a UNESCO World Heritage Site, is located in Agra, India."
  },
  {
    id: 28,
    type: "multiple-choice",
    question: "What does the acronym 'URL' stand for?",
    options: [
      { text: "Universal Resource Locator", isCorrect: true },
      { text: "Uniform Resource Link", isCorrect: false },
      { text: "Universal Reference Link", isCorrect: false },
      { text: "Uniform Reference Locator", isCorrect: false }
    ],
    correctAnswer: "Universal Resource Locator",
    explanation: "URL stands for Universal Resource Locator, used to address resources on the internet."
  },
  {
    id: 29,
    type: "multiple-choice",
    question: "Which mountain is the highest in the world?",
    options: [
      { text: "K2", isCorrect: false },
      { text: "Everest", isCorrect: true },
      { text: "Kangchenjunga", isCorrect: false },
      { text: "Lhotse", isCorrect: false }
    ],
    correctAnswer: "Everest",
    explanation: "Mount Everest, in the Himalayas, is the highest mountain, standing at 8,848 meters."
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Which language is primarily used for Android app development?",
    options: [
      { text: "Python", isCorrect: false },
      { text: "Java", isCorrect: true },
      { text: "Swift", isCorrect: false },
      { text: "C#", isCorrect: false }
    ],
    correctAnswer: "Java",
    explanation: "Java is a primary language for Android app development, used with the Android SDK."
  },
  {
    id: 31,
    type: "multiple-choice",
    question: "What is the chemical formula for table salt?",
    options: [
      { text: "NaCl", isCorrect: true },
      { text: "KCl", isCorrect: false },
      { text: "CaCO3", isCorrect: false },
      { text: "H2SO4", isCorrect: false }
    ],
    correctAnswer: "NaCl",
    explanation: "Table salt is sodium chloride, with the chemical formula NaCl."
  },
  {
    id: 32,
    type: "multiple-choice",
    question: "Which scientist developed the laws of motion?",
    options: [
      { text: "Isaac Newton", isCorrect: true },
      { text: "Galileo Galilei", isCorrect: false },
      { text: "Albert Einstein", isCorrect: false },
      { text: "Nikola Tesla", isCorrect: false }
    ],
    correctAnswer: "Isaac Newton",
    explanation: "Isaac Newton formulated the three laws of motion in the late 17th century."
  },
  {
    id: 33,
    type: "multiple-choice",
    question: "Which country is the largest by land area?",
    options: [
      { text: "China", isCorrect: false },
      { text: "Russia", isCorrect: true },
      { text: "United States", isCorrect: false },
      { text: "Canada", isCorrect: false }
    ],
    correctAnswer: "Russia",
    explanation: "Russia is the largest country by land area, covering about 17.1 million square kilometers."
  },
  {
    id: 34,
    type: "multiple-choice",
    question: "Which programming paradigm is Python known for?",
    options: [
      { text: "Functional", isCorrect: false },
      { text: "Object-oriented", isCorrect: true },
      { text: "Procedural", isCorrect: false },
      { text: "Logic-based", isCorrect: false }
    ],
    correctAnswer: "Object-oriented",
    explanation: "Python supports object-oriented programming, allowing classes and objects."
  },
  {
    id: 35,
    type: "multiple-choice",
    question: "What is the main ingredient in sushi?",
    options: [
      { text: "Rice", isCorrect: true },
      { text: "Noodles", isCorrect: false },
      { text: "Bread", isCorrect: false },
      { text: "Pasta", isCorrect: false }
    ],
    correctAnswer: "Rice",
    explanation: "Sushi is primarily made with vinegared rice, often combined with fish or vegetables."
  },
  {
    id: 36,
    type: "multiple-choice",
    question: "Which planet has the most moons?",
    options: [
      { text: "Jupiter", isCorrect: true },
      { text: "Saturn", isCorrect: false },
      { text: "Uranus", isCorrect: false },
      { text: "Neptune", isCorrect: false }
    ],
    correctAnswer: "Jupiter",
    explanation: "Jupiter has the most known moons, with over 80 discovered as of recent counts."
  },
  {
    id: 37,
    type: "multiple-choice",
    question: "Who wrote 'Pride and Prejudice'?",
    options: [
      { text: "Jane Austen", isCorrect: true },
      { text: "Charlotte Brontë", isCorrect: false },
      { text: "Emily Dickinson", isCorrect: false },
      { text: "Virginia Woolf", isCorrect: false }
    ],
    correctAnswer: "Jane Austen",
    explanation: "Jane Austen wrote 'Pride and Prejudice', published in 1813."
  },
  {
    id: 38,
    type: "multiple-choice",
    question: "Which ocean is the smallest?",
    options: [
      { text: "Atlantic", isCorrect: false },
      { text: "Indian", isCorrect: false },
      { text: "Arctic", isCorrect: true },
      { text: "Southern", isCorrect: false }
    ],
    correctAnswer: "Arctic",
    explanation: "The Arctic Ocean is the smallest ocean, covering about 14 million square kilometers."
  },
  {
    id: 39,
    type: "multiple-choice",
    question: "What is the capital of Italy?",
    options: [
      { text: "Milan", isCorrect: false },
      { text: "Rome", isCorrect: true },
      { text: "Venice", isCorrect: false },
      { text: "Florence", isCorrect: false }
    ],
    correctAnswer: "Rome",
    explanation: "Rome is the capital of Italy, known for its historical landmarks like the Colosseum."
  },
  {
    id: 40,
    type: "multiple-choice",
    question: "Which language is used for styling web pages?",
    options: [
      { text: "HTML", isCorrect: false },
      { text: "CSS", isCorrect: true },
      { text: "JavaScript", isCorrect: false },
      { text: "Python", isCorrect: false }
    ],
    correctAnswer: "CSS",
    explanation: "CSS (Cascading Style Sheets) is used to style and format web pages."
  },
  {
    id: 41,
    type: "multiple-choice",
    question: "Which country is known for the pyramids of Giza?",
    options: [
      { text: "Mexico", isCorrect: false },
      { text: "Egypt", isCorrect: true },
      { text: "Peru", isCorrect: false },
      { text: "Sudan", isCorrect: false }
    ],
    correctAnswer: "Egypt",
    explanation: "The pyramids of Giza, including the Great Pyramid, are located in Egypt."
  },
  {
    id: 42,
    type: "multiple-choice",
    question: "Which animal is the fastest on land?",
    options: [
      { text: "Lion", isCorrect: false },
      { text: "Cheetah", isCorrect: true },
      { text: "Horse", isCorrect: false },
      { text: "Leopard", isCorrect: false }
    ],
    correctAnswer: "Cheetah",
    explanation: "The cheetah is the fastest land animal, capable of running up to 60-70 mph."
  },
  {
    id: 43,
    type: "multiple-choice",
    question: "Which country is the smallest by land area?",
    options: [
      { text: "Monaco", isCorrect: false },
      { text: "Vatican City", isCorrect: true },
      { text: "San Marino", isCorrect: false },
      { text: "Liechtenstein", isCorrect: false }
    ],
    correctAnswer: "Vatican City",
    explanation: "Vatican City is the smallest country, with an area of about 44 hectares."
  },
  {
    id: 44,
    type: "multiple-choice",
    question: "What is the primary source of energy for Earth's winds?",
    options: [
      { text: "Geothermal energy", isCorrect: false },
      { text: "Solar energy", isCorrect: true },
      { text: "Tidal energy", isCorrect: false },
      { text: "Nuclear energy", isCorrect: false }
    ],
    correctAnswer: "Solar energy",
    explanation: "Solar energy drives wind patterns by heating the atmosphere unevenly."
  },
  {
    id: 45,
    type: "multiple-choice",
    question: "Which element is used in pencils?",
    options: [
      { text: "Carbon", isCorrect: false },
      { text: "Graphite", isCorrect: true },
      { text: "Lead", isCorrect: false },
      { text: "Charcoal", isCorrect: false }
    ],
    correctAnswer: "Graphite",
    explanation: "Graphite, a form of carbon, is used in pencils, not lead."
  },
  {
    id: 46,
    type: "multiple-choice",
    question: "Which gas is used in party balloons?",
    options: [
      { text: "Oxygen", isCorrect: false },
      { text: "Helium", isCorrect: true },
      { text: "Nitrogen", isCorrect: false },
      { text: "Carbon dioxide", isCorrect: false }
    ],
    correctAnswer: "Helium",
    explanation: "Helium is a lightweight gas used to make party balloons float."
  },
  {
    id: 47,
    type: "multiple-choice",
    question: "Which country is known for the Great Barrier Reef?",
    options: [
      { text: "Australia", isCorrect: true },
      { text: "Brazil", isCorrect: false },
      { text: "Indonesia", isCorrect: false },
      { text: "Philippines", isCorrect: false }
    ],
    correctAnswer: "Australia",
    explanation: "The Great Barrier Reef, the world's largest coral reef, is off the coast of Australia."
  },
  {
    id: 48,
    type: "multiple-choice",
    question: "Which language is used for iOS app development?",
    options: [
      { text: "Java", isCorrect: false },
      { text: "Swift", isCorrect: true },
      { text: "Python", isCorrect: false },
      { text: "C++", isCorrect: false }
    ],
    correctAnswer: "Swift",
    explanation: "Swift is the primary language for iOS app development, introduced by Apple."
  },
  {
    id: 49,
    type: "multiple-choice",
    question: "Which river is the second longest in the world?",
    options: [
      { text: "Nile", isCorrect: false },
      { text: "Amazon", isCorrect: true },
      { text: "Yangtze", isCorrect: false },
      { text: "Mississippi", isCorrect: false }
    ],
    correctAnswer: "Amazon",
    explanation: "The Amazon River is the second longest river, known for its vast water volume."
  },
  {
    id: 50,
    type: "multiple-choice",
    question: "What does 'HTTP' stand for in web addresses?",
    options: [
      { text: "HyperText Transfer Protocol", isCorrect: true },
      { text: "HighText Transfer Protocol", isCorrect: false },
      { text: "Hyperlink Text Protocol", isCorrect: false },
      { text: "HyperText Terminal Protocol", isCorrect: false }
    ],
    correctAnswer: "HyperText Transfer Protocol",
    explanation: "HTTP stands for HyperText Transfer Protocol, used for transferring data on the web."
  }
];

export default quizQuestions