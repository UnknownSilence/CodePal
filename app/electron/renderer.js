// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Declare Array of idea choices prefix.
var ideasPrefix = ['Chess', 'Sound', 'Projectile Motion', 'Tic-Tac-Toe', 'Cookbook', 'Tetris',
    'Publication', 'Grade/GPA', 'White-Hat Virus', 'Animation/Animated', 'Photoshop', 'Art Board',
    'Population', 'Pizza-Themed', 'Homework', 'Analytic', 'Hangman', 'Card', 'Portfolio', 'Number',
    'Rock, Paper, Scissors', 'Address', 'Roman Numeral to Number', 'Text', 'Profession', 'Cities',
    'Fibonacci Sequence', 'Unit', 'Binary/Hexadecimal', 'Sorting', 'Pig Latin', 'IP Address', 'Bank',
    'Money', 'Firebase', 'React', 'Angular', 'Vue.js', 'Electron', 'MP3', 'MP4', 'GIF', 'Pythagorean Theorem',
    'Area', 'Free-Fall', 'HTML/CSS/JS', 'Java', 'Python', 'Future Themed/Based', 'Regex', 'Memory', 'Sliding',
    'Movie', 'T.V. Show', 'War', 'Pong', 'Maze', 'Typing'
];
// Declare Array of idea choices suffix.
var ideasSuffix = ['Game', 'A.I/Neural Network', 'Calculator', 'Web Scraper', 'Manager', 'Replica',
    'Website', 'Puzzle', 'Tracker', 'Alarm', 'To-do List', 'Script', 'Graph', 'Coin Flip', 'Guesser',
    'Virtual Book', 'Converter/Conversion', 'Editor', 'Generator', 'API', 'Magic 8 Ball', 'Translator',
    'Account', 'Admin Panel', 'Scheduler', 'Tool', 'Analyzer', 'Database', 'Application', 'Player', 'Cipher',
    'Encoder', 'Decoder'
];

// Generate a random number based on the array's length.








var GenBtn = document.getElementById('generateBtn');
var ideaContent = document.getElementById('ideas');

GenBtn.addEventListener('click', function () {

    // Clear previous display
    ideaContent.textContent = '';

    // Generate random index # from array length
    var randomNumber1 = Math.floor(Math.random() * ideasPrefix.length);
    var randomNumber2 = Math.floor(Math.random() * ideasSuffix.length);
    // Select a particular indexed item from the array of the number generated
    var randomElement1 = ideasPrefix[randomNumber1];
    var randomElement2 = ideasSuffix[randomNumber2];

    // Test to see if it works
    console.log(randomElement1);
    console.log(randomElement2);


    // D.O.M For prefix display
    var ideaPrefix1 = document.createElement("P"); // Create a p element for prefix
    var IdeaPrefix2 = document.createTextNode(randomElement1); // Create a text node for prefix
    ideaPrefix1.appendChild(IdeaPrefix2); // Append the text to <p> for prefix
    ideaContent.appendChild(ideaPrefix1);




    // D.O.M for suffix display
    var ideaSuffix1 = document.createElement("P"); // Create a p element for suffix
    var IdeaSuffix2 = document.createTextNode(randomElement2); // Create a text node for suffix
    ideaSuffix1.appendChild(IdeaSuffix2); // Append the text to <p> for suffix
    ideaContent.appendChild(ideaSuffix1);


});