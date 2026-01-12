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
    const catCompleted = topics.filter(t => completedTopics.includes(t.id)).length;
    const catProgress = (catCompleted / topics.length) * 100 || 0;
    document.getElementById('cat-progress-fill').style.width = catProgress + "%";
}

function openStudyMode(topicId) {
    let topic = null;
    for (let cat in studyData) {
        topic = studyData[cat].find(t => t.id === topicId);
        if (topic) break;
    }

    if (!topic) return;

    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('study-view').classList.remove('hidden');

    const contentArea = document.getElementById('study-content-area');
    contentArea.innerHTML = `
        <div class="study-container">
            <h1 class="study-title">${topic.title}</h1>
            <hr>
            <div class="main-text">${topic.content}</div>
            <div class="summary-section">
                <h3><i class="fas fa-list-check"></i> Key Facts</h3>
                <ul>${topic.summary.map(item => `<li>${item}</li>`).join('')}</ul>
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

    // --- REGULATE MARK AS READ BUTTON ---
    const markReadBtn = document.getElementById('mark-read-btn');
    
    // Check if already completed to style the button initially
    if (completedTopics.includes(topicId)) {
        markReadBtn.innerText = "Completed ✅";
        markReadBtn.style.backgroundColor = "#10b981"; // Success Green
    } else {
        markReadBtn.innerText = "Mark as Read & Continue";
        markReadBtn.style.backgroundColor = "#1e293b"; // Default Navy
    }

    markReadBtn.onclick = () => {
        if (!completedTopics.includes(topicId)) {
            completedTopics.push(topicId);
            localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
            
            // Visual feedback
            markReadBtn.innerText = "Saving...";
            setTimeout(() => {
                markReadBtn.innerText = "Completed ✅";
                markReadBtn.style.backgroundColor = "#10b981";
                updateOverallProgress(); 
                renderDashboard();
            }, 500);
        } else {
            // If already read, just go back
            showDashboard();
        }
    };

    window.scrollTo(0, 0);
}

function verifyAnswer(btn, correct) {
    if(btn.innerText === correct) {
        btn.style.backgroundColor = "#10b981";
        btn.style.color = "white";
    } else {
        btn.style.backgroundColor = "#ef4444";
        btn.style.color = "white";
    }
}

function showDashboard() {
    document.getElementById('dashboard-view').classList.remove('hidden');
    document.getElementById('study-view').classList.add('hidden');
}

function updateOverallProgress() {
    // Count total topics across all categories in studyData
    let total = 0;
    for (let cat in studyData) {
        total += studyData[cat].length;
    }
    
    const completedCount = completedTopics.length;
    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    
    const progressText = document.getElementById('overall-progress-text');
    if (progressText) {
        progressText.innerText = `${percent}% Completed`;
    }
}

init();
