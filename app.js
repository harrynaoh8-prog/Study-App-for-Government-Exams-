let currentCategory = "General Knowledge";
let completedTopics = JSON.parse(localStorage.getItem('completedTopics') || "[]");

function init() {
    renderDashboard();
    updateOverallProgress();
}

function switchCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.toggle('active', li.innerText.includes(cat));
    });
    document.getElementById('category-title').innerText = cat;
    showDashboard();
    renderDashboard();
}

function renderDashboard() {
    const grid = document.getElementById('subsection-grid');
    const topics = studyData[currentCategory] || [];
    grid.innerHTML = topics.map(topic => `
        <div class="sub-card ${completedTopics.includes(topic.id) ? 'completed' : ''}" onclick="openStudyMode('${topic.id}')">
            <h3>${topic.title}</h3>
            <p>${topic.content.substring(0, 80)}...</p>
            <small>${completedTopics.includes(topic.id) ? '✅ Read' : '📖 Start Reading'}</small>
        </div>
    `).join('');
    
    // Update Category Progress Bar
    const catProgress = (topics.filter(t => completedTopics.includes(t.id)).length / topics.length) * 100 || 0;
    document.getElementById('cat-progress-fill').style.width = catProgress + "%";
}

function openStudyMode(topicId) {
    // Find the topic in any of the exam categories
    let topic = null;
    for (let cat in studyData) {
        topic = studyData[cat].find(t => t.id === topicId);
        if (topic) break;
    }

    if (!topic) return;

    // Switch View
    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('study-view').classList.remove('hidden');

    const contentArea = document.getElementById('study-content-area');
    contentArea.innerHTML = `
        <div class="study-container">
            <h1 class="study-title">${topic.title}</h1>
            <hr>
            <div class="main-text">
                ${topic.content}
            </div>
            
            <div class="summary-section">
                <h3><i class="fas fa-list-check"></i> Key Facts to Remember</h3>
                <ul>
                    ${topic.summary.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="quiz-preview">
                <h3><i class="fas fa-question-circle"></i> Self-Assessment</h3>
                ${topic.mcqs.map((m, i) => `
                    <div class="study-mcq">
                        <p><strong>Q${i+1}:</strong> ${m.q}</p>
                        <div class="study-options">
                            ${m.options.map(opt => `<button class="study-opt-btn" onclick="verifyAnswer(this, '${m.a}')">${opt}</button>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

// Helper to check answers inside study mode
function verifyAnswer(btn, correct) {
    if(btn.innerText === correct) {
        btn.style.backgroundColor = "#10b981"; // Success Green
        btn.style.color = "white";
    } else {
        btn.style.backgroundColor = "#ef4444"; // Danger Red
        btn.style.color = "white";
    }
}

function showDashboard() {
    document.getElementById('dashboard-view').classList.remove('hidden');
    document.getElementById('study-view').classList.add('hidden');
}

function updateOverallProgress() {
    // Basic logic for top bar progress
    const totalTopics = 15; // Assume 15 for GK
    const completedCount = completedTopics.length;
    const percent = Math.round((completedCount / totalTopics) * 100);
    document.getElementById('overall-progress-text').innerText = `${percent}% Completed`;
}

init();
