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
    const topic = studyData[currentCategory].find(t => t.id === topicId);
    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('study-view').classList.remove('hidden');
    
    const contentArea = document.getElementById('study-content-area');
    contentArea.innerHTML = `
        <h1>${topic.title}</h1>
        <div class="reading-text">${topic.content}</div>
        <div class="summary-box">
            <h3>Key Takeaways</h3>
            <ul>${topic.summary.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
    `;

    document.getElementById('mark-read-btn').onclick = () => {
        if(!completedTopics.includes(topicId)) {
            completedTopics.push(topicId);
            localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
        }
        showDashboard();
        renderDashboard();
        updateOverallProgress();
    };
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
