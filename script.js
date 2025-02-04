// script.js
document.addEventListener('DOMContentLoaded', () => {
    const content = {
        process: `
            <h2 id="process">📋 Interview Process</h2>
            <div class="process-grid">
                <div class="phase">
                    <h3>Phone Screen</h3>
                    <ul>
                        <li>1-2 Coding Questions</li>
                        <li>Focus: Trees/Graphs</li>
                        <li>LeetCode Medium Level</li>
                    </ul>
                </div>
                <!-- Add other phases similarly -->
            </div>
        `,
        concepts: `
            <h2 id="concepts">🌳 Core Concepts</h2>
            <h3>Trees</h3>
            <div class="concept-card">
                <h4>Binary Search Tree (BST)</h4>
                <p>Left ≤ Root ≤ Right</p>
                <div class="code-block">
                    <pre><code class="python">def isValidBST(root):
    def helper(node, min, max):
        if not node: return True
        if node.val <= min or node.val >= max: return False
        return helper(node.left, min, node.val) and helper(node.right, node.val, max)
    return helper(root, float('-inf'), float('inf'))</code></pre>
                </div>
            </div>
            <!-- Add graph concepts -->
        `,
        plan: `
            <h2 id="plan">📅 6-Week Study Plan</h2>
            <div class="study-plan">
                <div class="week-card">
                    <h3>Week 1-2: Tree Fundamentals</h3>
                    <a href="https://leetcode.com/problems/validate-binary-search-tree/" class="problem-link">
                        Validate BST (LeetCode 98)
                    </a>
                    <!-- Add more problems -->
                </div>
                <!-- Add other weeks -->
            </div>
        `,
        // Add other sections
    };

    // Render content
    const main = document.querySelector('main');
    main.innerHTML = Object.values(content).join('');

    // Syntax highlighting
    hljs.highlightAll();

    // Smooth scroll
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});