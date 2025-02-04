// script.js
document.addEventListener('DOMContentLoaded', () => {
    const studyGuide = {
        motivation: {
            title: "🔥 Let’s Get You Ready to handle this Interview Ri 🔥",
            content: `
                <div class="hype-section">
                    <h2> Lock In Guide! 😘</h2>
                    <p> This is a quick study guide to get you ready to shine!</p>
                    <p1> I am still adding some updates in, I gotchu baby </p1>
                    
                        <div class="motivation-card">
                            <h3>What You’ll Achieve</h3>
                            <ul>
                                <li>Master <strong>Trees & Graphs</strong> like a pro</li>
                                <li>Solve <strong>real Bloomberg problems</strong></li>
                                <li>Nail the <strong>system design round</strong></li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="call-to-action">
                        <h3>Ready to Dive In? 😘</h3>
                        <p>Let’s break this down step by step. You’ve got this!</p>
                    </div>
                </div>
            `
        },
        process: {
            title: "📋 Interview Process",
            content: `
                <h3>What to Expect</h3>
                <div class="process-grid">
                    <div class="phase">
                        <h4>Phone Screen</h4>
                        <ul>
                            <li>45-60 minutes</li>
                            <li>2 Coding Problems</li>
                            <li>Focus: Trees/Graphs</li>
                            <li>Common Questions:
                                <ul>
                                    <li>Validate BST</li>
                                    <li>Number of Islands</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="phase">
                        <h4>Onsite (4 Rounds)</h4>
                        <ol>
                            <li><strong>Coding I:</strong> Tree/Graph Algorithms</li>
                            <li><strong>Coding II:</strong> Advanced Graph Problems</li>
                            <li><strong>System Design:</strong> Real-time Data Systems</li>
                            <li><strong>Behavioral:</strong> STAR Method Questions</li>
                        </ol>
                    </div>
                </div>
            `
        },
        trees: {
            basics: {
                title: "🌳 Tree Fundamentals",
                content: `
                    <h3>What Bloomberg Wants You to Know</h3>
                    <p>Trees represent hierarchical data used in:</p>
                    <ul>
                        <li>Financial instrument structures</li>
                        <li>Organization charts</li>
                        <li>XML/JSON data parsing</li>
                    </ul>
                    
                    <div class="code-comparison">
                        <div class="code-block">
                            <h4>Binary Tree Node</h4>
                            <pre><code class="javascript">class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}</code></pre>
                        </div>
                        <div class="code-block">
                            <h4>BST Validation</h4>
                            <pre><code class="javascript">function isBST(root, min=-Infinity, max=Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isBST(root.left, min, root.val) && 
           isBST(root.right, root.val, max);
}</code></pre>
                        </div>
                    </div>
                `,
                problems: [
                    {
                        title: "Validate BST (LeetCode 98)",
                        link: "https://leetcode.com/problems/validate-binary-search-tree/",
                        bloombergFrequency: "High"
                    },
                    {
                        title: "Flatten Multilevel DLL (LeetCode 430)",
                        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
                        bloombergFrequency: "Very High"
                    }
                ]
            },
            traversals: {
                title: "Tree Traversal Techniques",
                content: `
                    <h3>Must-Know for Bloomberg Interviews</h3>
                    <div class="traversal-visual">
                        <div class="traversal-type">
                            <h4>In-Order (LNR)</h4>
                            <pre><code class="javascript">function inOrder(node) {
    if (node) {
        inOrder(node.left);
        console.log(node.val);
        inOrder(node.right);
    }
}</code></pre>
                            <p>Use case: Get sorted values from BST</p>
                        </div>
                        <div class="traversal-type">
                            <h4>Level-Order (BFS)</h4>
                            <pre><code class="javascript">function levelOrder(root) {
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    return result;
}</code></pre>
                            <p>Use case: Financial risk level analysis</p>
                        </div>
                    </div>
                `,
                problems: [
                    {
                        title: "Binary Tree Level Order (LeetCode 102)",
                        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
                        bloombergFrequency: "Medium"
                    }
                ]
            }
        },
        graphs: {
            basics: {
                title: "🌐 Graph Fundamentals",
                content: `
                    <h3>Key Bloomberg Graph Concepts</h3>
                    <p>Used in:</p>
                    <ul>
                        <li>Financial network analysis</li>
                        <li>Transaction dependency tracking</li>
                        <li>Social network features</li>
                    </ul>
                    
                    <div class="graph-types">
                        <div class="graph-type">
                            <h4>Adjacency List Representation</h4>
                            <pre><code class="javascript">const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: [],
    E: ['B']
};</code></pre>
                        </div>
                        <div class="graph-type">
                            <h4>BFS Shortest Path</h4>
                            <pre><code class="javascript">function shortestPath(graph, start, end) {
    const queue = [[start]];
    const visited = new Set();
    
    while (queue.length) {
        const path = queue.shift();
        const node = path[path.length-1];
        
        if (node === end) return path;
        if (visited.has(node)) continue;
        
        visited.add(node);
        for (const neighbor of graph[node]) {
            queue.push([...path, neighbor]);
        }
    }
    return null;
}</code></pre>
                        </div>
                    </div>
                `,
                problems: [
                    {
                        title: "Number of Islands (LeetCode 200)",
                        link: "https://leetcode.com/problems/number-of-islands/",
                        bloombergFrequency: "High"
                    },
                    {
                        title: "Course Schedule (LeetCode 207)",
                        link: "https://leetcode.com/problems/course-schedule/",
                        bloombergFrequency: "Medium"
                    }
                ]
            },
            advanced: {
                title: "Advanced Graph Algorithms",
                content: `
                    <h3>Bloomberg-Specific Focus Areas</h3>
                    <div class="algorithm">
                        <h4>Dijkstra's Algorithm</h4>
                        <pre><code class="javascript">function dijkstra(graph, start) {
    const distances = {};
    const pq = new PriorityQueue();
    
    for (const vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);
    
    while (!pq.isEmpty()) {
        const { element: current, priority: currentDist } = pq.dequeue();
        
        for (const [neighbor, weight] of graph[current]) {
            const pathDist = currentDist + weight;
            if (pathDist < distances[neighbor]) {
                distances[neighbor] = pathDist;
                pq.enqueue(neighbor, pathDist);
            }
        }
    }
    return distances;
}</code></pre>
                        <p>Use case: Financial network latency optimization</p>
                    </div>
                `,
                problems: [
                    {
                        title: "Network Delay Time (LeetCode 743)",
                        link: "https://leetcode.com/problems/network-delay-time/",
                        bloombergFrequency: "High"
                    }
                ]
            }
        },
        system: {
            title: "⚙️ System Design",
            content: `
                <h3>Real-Time Stock Ticker Design</h3>
                <div class="design-components">
                    <div class="component">
                        <h4>Requirements</h4>
                        <ul>
                            <li>1M+ updates/second</li>
                            <li>&lt;100ms latency</li>
                            <li>Historical data access</li>
                        </ul>
                    </div>
                    <div class="component">
                        <h4>Architecture</h4>
                        <ol>
                            <li>WebSocket for real-time updates</li>
                            <li>Kafka message queue</li>
                            <li>Redis caching layer</li>
                            <li>TimescaleDB for time-series data</li>
                        </ol>
                    </div>
                </div>
                <div class="pro-tip">
                    <strong>Bloomberg Insight:</strong> Focus on efficient delta updates
                    and compression for high-frequency data.
                </div>
            `
        },
        studyPlan: {
            weeks: [
                {
                    title: "Week 1: Tree Mastery",
                    days: [
                        {
                            day: 1,
                            focus: "Binary Tree Basics",
                            tasks: [
                                "Implement tree traversals (DFS/BFS)",
                                "Solve LeetCode 104 (Max Depth)",
                                "Solve LeetCode 226 (Invert Tree)"
                            ]
                        },
                        {
                            day: 2,
                            focus: "BST Operations",
                            tasks: [
                                "Implement BST validation",
                                "Solve LeetCode 98",
                                "Practice insertion/deletion"
                            ]
                        }
                    ]
                },
                {
                    title: "Week 2: Graph Foundations",
                    days: [
                        {
                            day: 1,
                            focus: "BFS/DFS Implementation",
                            tasks: [
                                "Number of Islands (LeetCode 200)",
                                "Clone Graph (LeetCode 133)",
                                "Implement topological sort"
                            ]
                        }
                    ]
                }
            ]
        }
    };

    const main = document.querySelector('main');
    main.innerHTML = `
        <section id="motivation">${studyGuide.motivation.content}</section>
        <section id="process">${studyGuide.process.content}</section>
        <section id="trees">
            ${renderSection([studyGuide.trees.basics, studyGuide.trees.traversals])}
        </section>
        <section id="graphs">
            ${renderSection([studyGuide.graphs.basics, studyGuide.graphs.advanced])}
        </section>
        <section id="system">${studyGuide.system.content}</section>
        <section id="study-plan">
            ${renderStudyPlan(studyGuide.studyPlan.weeks)}
        </section>
    `;

    // Initialize smooth scroll
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update URL without reload
            history.pushState(null, null, targetId);
        });
    });

    // Add interactive elements
    document.querySelectorAll('.code-block').forEach(block => {
        block.addEventListener('click', () => {
            block.classList.toggle('expanded');
        });
    });

    // Syntax highlighting
    hljs.highlightAll();
});

function renderSection(sections) {
    return sections.map(section => `
        <div class="study-section">
            <h2>${section.title}</h2>
            ${section.content || ''}
            ${section.problems ? renderProblems(section.problems) : ''}
        </div>
    `).join('');
}

function renderProblems(problems) {
    return `
        <div class="problem-list">
            <h3>🔍 Bloomberg-Focused Problems</h3>
            <ul>
                ${problems.map(prob => `
                    <li>
                        <a href="${prob.link}" target="_blank">
                            ${prob.title} 
                            <span class="frequency">${prob.bloombergFrequency}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function renderStudyPlan(weeks) {
    return weeks.map(week => `
        <div class="week-card">
            <h3>${week.title}</h3>
            ${week.days.map(day => `
                <div class="day-card">
                    <h4>Day ${day.day}: ${day.focus}</h4>
                    <ul>
                        ${day.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `).join('');
}
