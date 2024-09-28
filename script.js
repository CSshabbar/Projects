const codeContent = `const coder = {
    name: 'Muhammad Shabbar',
    skills: ['AI', 'Machine Learning', 'Python', 'Django', 'SQL',
    'JavaScript', 'React', 'Azure'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
        return 
            this.hardWorker && this.problemSolver
    }
};`;

// Function to apply syntax highlighting
function highlightSyntax(code) {
    return code
        .replace(/const|let|var|function/g, '<span class="keyword">$&</span>') // Keywords
        .replace(/'([^']*?)'/g, '<span class="string">\'$1\'</span>') // Strings
        .replace(/[\d]+/g, '<span class="number">$&</span>') // Numbers
        .replace(/[\w]+(?=\:)/g, '<span class="property">$&</span>') // Object properties
        .replace(/true|false/g, '<span class="string">$&</span>') // Boolean
        .replace(/\/\/.*$/gm, '<span class="comment">$&</span>'); // Comments
}

// Function to simulate typing effect
function typeCode() {
    const codeOutput = document.getElementById('code-output');
    let index = 0;
    function type() {
        if (index < codeContent.length) {
            // Get the current character
            const char = codeContent[index];
            // Apply syntax highlighting
            const highlightedCode = highlightSyntax(codeContent.slice(0, index + 1));
            codeOutput.innerHTML = highlightedCode; // Use innerHTML for highlighting
            index++;
            setTimeout(type, 25);  // Speed of typing (in ms)
        }
    }
    type();
}

// Trigger the typing effect when the page loads
window.onload = typeCode;




