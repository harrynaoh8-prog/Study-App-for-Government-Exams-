const studyData = {
    "General Knowledge": [
        {
            id: "gk_1",
            title: "Indus Valley Civilization",
            content: `The Indus Valley Civilization (IVC) was a Bronze Age civilization in the northwestern regions of South Asia. It is known for its sophisticated urban planning and elaborate drainage systems. 
            `,
            summary: [
                "Mature phase from 2600-1900 BCE.",
                "First to use a grid system in city planning.",
                "Extensive trade with Mesopotamia."
            ],
            mcqs: [
                { q: "Which city had a dockyard?", a: "Lothal", options: ["Harappa", "Mohenjo-Daro", "Lothal", "Kalibangan"] }
            ]
        },
        {
            id: "gk_2",
            title: "Maurya & Gupta Empires",
            content: `The Maurya Empire was founded by Chandragupta Maurya. The Gupta Empire is considered the 'Golden Age of India'.
            `,
            summary: [
                "Chanakya wrote Arthashastra.",
                "The concept of zero was solidified in the Gupta era."
            ],
            mcqs: [
                { q: "Who was the author of Arthashastra?", a: "Chanakya", options: ["Megasthenes", "Chanakya", "Kalidasa", "Ashoka"] }
            ]
        },
        {
            id: "gk_mah_01",
            title: "General Knowledge: Comprehensive Maharashtra",
            content: `
                <p>Maharashtra, located in the western peninsular region of India, is a powerhouse of the nation's economy and culture. It was officially formed on <b>1 May 1960</b> following the Bombay Reorganisation Act. Mumbai serves as the capital and the financial nerve center of India, while Nagpur is the winter capital.</p>

                <p>Geographically, the state is defined by its diverse terrain. The <b>Konkan</b> coastal strip lies between the Arabian Sea and the <b>Sahyadri Range</b> (Western Ghats). The Western Ghats act as a climatic barrier and the source of great peninsular rivers like the Godavari and Krishna.
                </p>

                <p>The history of Maharashtra is inseparable from the legacy of <b>Chhatrapati Shivaji Maharaj</b>, who established the Maratha Empire in the 17th century. This heritage is preserved in magnificent structures like Raigad Fort and the rock-cut wonders of <b>Ajanta and Ellora Caves</b>.
                </p>

                <p>Economically, Maharashtra is the most industrialized state in India, home to <b>Bollywood</b> and major ports like JNPT.
                </p>
            `,
            summary: [
                "Formed on May 1, 1960 (Maharashtra Day).",
                "Second most populous and third largest state by area in India.",
                "Home to JNPT, India's largest container port.",
                "Major Rivers: Godavari (Dakshin Ganga), Krishna, and Bhima.",
                "UNESCO Sites: Ajanta, Ellora, Elephanta Caves."
            ],
            mcqs: [
                { 
                    q: "On which date was the state of Maharashtra formed?", 
                    a: "1 May 1960", 
                    options: ["15 August 1947", "1 May 1960", "26 January 1950", "1 November 1956"] 
                },
                { 
                    q: "Which mountain range is also known as the Sahyadri Range?", 
                    a: "Western Ghats", 
                    options: ["Satpura Range", "Aravalli Range", "Western Ghats", "Vindhya Range"] 
                },
                { 
                    q: "Which city is the financial capital of India?", 
                    a: "Mumbai", 
                    options: ["New Delhi", "Pune", "Mumbai", "Kolkata"] 
                }
            ]
        }
    ],
    "Mathematics":[ 
        {
            id: "math_1",
            title: "Number System",
            content: `
                <p>The Number System is the foundation of Mathematics. For competitive exams, focus on <b>Divisibility Rules</b>, <b>Unit Digit Calculation</b>, and <b>Remainder Theorem</b>.</p>
                
                <div class="formula-box">
                    <h4><i class="fas fa-square-root-alt"></i> Key Formulas:</h4>
                    <ul>
                        <li>Sum of first 'n' natural numbers = n(n+1)/2</li>
                        <li>Dividend = (Divisor × Quotient) + Remainder</li>
                    </ul>
                </div>
                <p>Understanding prime numbers and composite numbers is essential for simplifying complex equations.</p>
            `,
            summary: [
                "2 is the only even prime number.",
                "Rational numbers can be written as p/q.",
                "Divisibility by 3: Sum of digits must be divisible by 3."
            ],
            mcqs: [
                { q: "What is the unit digit of 23^4?", a: "1", options: ["3", "9", "7", "1"] }
            ]
        },
        {
            id: "math_2",
            title: "Percentage",
            content: `
                <p>Percentage means 'per every hundred'. It is the most important topic for Data Interpretation (DI) in Banking and SSC exams.</p>
                
                

                <div class="formula-box">
                    <h4><i class="fas fa-percentage"></i> Basic Concept:</h4>
                    <p>Percentage Increase = (Increase / Original Value) × 100</p>
                    <p>To convert fraction to %, multiply by 100.</p>
                </div>
            `,
            summary: [
                "1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%.",
                "Successive % change formula: a + b + (ab/100).",
                "If A is 20% more than B, B is 16.66% less than A."
            ],
            mcqs: [
                { q: "Convert 3/4 into percentage.", a: "75%", options: ["60%", "75%", "80%", "85%"] }
            ]
        },
        {
            id: "math_3",
            title: "Profit and Loss",
            content: `
                <p>Profit and Loss is a core arithmetic topic. Profit occurs when the Selling Price (SP) is greater than the Cost Price (CP).</p>
                
                <div class="formula-box">
                    <h4><i class="fas fa-tags"></i> Essential Formulas:</h4>
                    <ul>
                        <li>Profit % = (Profit/CP) × 100</li>
                        <li>SP = [(100 + P%)/100] × CP</li>
                        <li>Discount is always on Marked Price (MP).</li>
                    </ul>
                </div>
                `,
            summary: [
                "Profit/Loss is always calculated on CP unless stated otherwise.",
                "Discount = MP - SP.",
                "Effective Discount = d1 + d2 - (d1*d2/100)."
            ],
            mcqs: [
                { q: "CP = 100, SP = 120. Find Profit %.", a: "20%", options: ["10%", "20%", "25%", "30%"] }
            ]
        }
    ],
      
    "Reasoning": [],
    "English": []
};
