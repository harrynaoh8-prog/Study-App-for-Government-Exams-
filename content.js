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
    "Mathematics": [// Inside studyData["Mathematics"]
[
    {
        id: "math_1",
        title: "Number System",
        content: `
            <p>The Number System is the foundation of Mathematics. It involves the study of different types of numbers and their properties. Key classifications include Natural Numbers, Whole Numbers, Integers, Rational, and Irrational numbers. In competitive exams, topics like <b>Divisibility Rules</b>, <b>Unit Digit Calculation</b>, and <b>Remainder Theorem</b> are frequently asked.</p>
            
            <div class="formula-box">
                <h4><i class="fas fa-square-root-alt"></i> Key Formulas:</h4>
                <ul>
                    <li>Sum of first 'n' natural numbers = n(n+1)/2</li>
                    <li>Sum of squares of first 'n' natural numbers = n(n+1)(2n+1)/6</li>
                    <li>Dividend = (Divisor × Quotient) + Remainder</li>
                </ul>
            </div>
            
            <p>Understanding the placement of digits (Face Value vs Place Value) is essential for solving complex simplification problems quickly.</p>
        `,
        summary: [
            "Real numbers include both Rational and Irrational numbers.",
            "Prime numbers have exactly two factors (1 and itself).",
            "0 is neither positive nor negative.",
            "The only even prime number is 2."
        ],
        mcqs: [
            { q: "What is the sum of the first 20 natural numbers?", a: "210", options: ["200", "210", "220", "190"] }
        ]
    },
    {
        id: "math_2",
        title: "Percentage",
        content: `
            <p>Percentage is a way of expressing a number as a fraction of 100. It is widely used in Data Interpretation and Profit & Loss. To convert a fraction into a percentage, multiply by 100. To convert a percentage into a fraction, divide by 100.</p>
            
            

            <div class="formula-box">
                <h4><i class="fas fa-percentage"></i> Basic Concept:</h4>
                <p>Percentage Increase = (Increase / Original Value) × 100</p>
                <p>Percentage Decrease = (Decrease / Original Value) × 100</p>
            </div>
        `,
        summary: [
            "Fraction 1/2 = 50%, 1/4 = 25%, 1/8 = 12.5%.",
            "If A is x% more than B, then B is [x/(100+x)]*100% less than A.",
            "Successive percentage change: (a + b + ab/100)%."
        ],
        mcqs: [
            { q: "What is 20% of 25% of 400?", a: "20", options: ["10", "20", "40", "50"] }
        ]
    },
    {
        id: "math_3",
        title: "Profit and Loss",
        content: `
            <p>Profit and Loss deals with the price of a product in the market. <b>Cost Price (CP)</b> is the price at which an item is purchased, and <b>Selling Price (SP)</b> is the price at which it is sold. If SP > CP, it is a Profit; if CP > SP, it is a Loss.</p>
            
            <div class="formula-box">
                <h4><i class="fas fa-tags"></i> Essential Formulas:</h4>
                <ul>
                    <li>Profit % = (Profit/CP) × 100</li>
                    <li>Loss % = (Loss/CP) × 100</li>
                    <li>Selling Price = [(100 + Profit%)/100] × CP</li>
                </ul>
            </div>
        `,
        summary: [
            "Profit or Loss is always calculated on the Cost Price (CP).",
            "Discount is always calculated on the Marked Price (MP).",
            "SP = Marked Price - Discount."
        ],
        mcqs: [
            { q: "A man buys an item for ₹500 and sells it for ₹600. What is his profit percentage?", a: "20%", options: ["10%", "15%", "20%", "25%"] }
        ]
    },
    {
        id: "math_4",
        title: "Simple & Compound Interest",
        content: `
            <p>Interest is the cost of borrowing money. <b>Simple Interest (SI)</b> is calculated only on the principal amount, while <b>Compound Interest (CI)</b> is calculated on the principal plus the accumulated interest of previous periods (Interest on Interest).</p>
            
            

            <div class="formula-box">
                <h4><i class="fas fa-chart-line"></i> Formulas:</h4>
                <p>SI = (P × R × T) / 100</p>
                <p>CI Amount = P(1 + R/100)^T</p>
            </div>
        `,
        summary: [
            "Principal (P) is the initial amount.",
            "In SI, interest remains constant every year.",
            "CI is always greater than or equal to SI for the same period and rate."
        ],
        mcqs: [
            { q: "Find the SI on ₹1000 at 10% per annum for 2 years.", a: "₹200", options: ["₹100", "₹200", "₹150", "₹250"] }
        ]
    },
    {
        id: "math_5",
        title: "Time and Work",
        content: `
            <p>Time and Work problems usually deal with finding the efficiency of individuals or groups. The core concept is that <b>Work Done = Time Taken × Efficiency</b>. If a person can do a piece of work in 'n' days, then their one day's work is 1/n.</p>
            
            <div class="formula-box">
                <h4><i class="fas fa-users-cog"></i> Efficiency Rule:</h4>
                <p>If A can do work in 'x' days and B in 'y' days, together they can do it in (xy) / (x+y) days.</p>
            </div>
        `,
        summary: [
            "Total Work is often assumed as the LCM of time taken by individuals.",
            "Efficiency is inversely proportional to time taken.",
            "Work done by a group (M1D1H1/W1 = M2D2H2/W2)."
        ],
        mcqs: [
            { q: "A can do a work in 10 days, B in 15 days. Together they do it in?", a: "6 days", options: ["5 days", "6 days", "7 days", "8 days"] }
        ]
    }
]],
    "Reasoning": [],
    "English": []
};
