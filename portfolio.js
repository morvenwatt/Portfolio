//FUNCTIONAL FUNCTIONS:

const descriptors = ["Zombies?", "Dogs?", "Queen?", "Tetris?", "Yoga?", "Chocolate?", "Language?", "Serial Killer Trivia?", "Puzzles?", "Coding?", "Ultras?", "Books?", "Spyro?", "Sherlock Holmes?", "Stationery?"];
const colours = ["green", "pink", "blue"];
let count = 0;

function rotateHeroDescriptors() {
    setInterval(function () {
        $("span.descriptors").fadeOut(400, function () {
            $(this).html(descriptors[count]).css("color", colours[count]);
            count++;
            if (count == descriptors.length)
                count = 0;
            $(this).fadeIn(400);
        });
    }, 2000);
}

function animateTetrisGrid() {
    $("div.green").fadeTo(1000, 1, function () {
        $(".blue").fadeTo(2000, 1, function () {
            $(".pink").fadeTo(2500, 1, function () {
                $(".yellow").fadeTo(5000, 1)}
            )}
        )}
    )}



// GENERATION FUNCTIONS:  

function generateTetrisGrid() {
    return `
    <div class="yellow"></div>
    <div class="yellow"></div>
    <div class="yellow"></div>
    <div class="pink"></div>
    <div class="green"></div>
    <div class="yellow"></div>
    <div class="blue"></div>
    <div class="pink"></div>
    <div class="green"></div>
    <div class="blue"></div>
    <div class="blue"></div>
    <div class="pink"></div>
    <div class="green"></div>
    <div class="green"></div>
    <div class="blue"></div>
    <div class="pink"></div>
    `
}

function generateHero() {
    return `
    <header class="hero" role="heading">
        <h1>Do you want someone obsessed with ${rotateHeroDescriptors()} 
             Good. You found her. </h1>
    <nav>
    <a class="aboutMe">About Me</a>
    <a class="myProjects">My Projects</a>
    <a class="contactMe">Contact Me</a>
    </nav>
    </header>
    `
}


function generateAboutMePage() {
    return `
    <h2>Scottish Or Bust</h2>
    <p>Hey! I'm Morven. A native Scot living in Scottsdale.</p>
    <img src="tinified/headshot.jpg" id="headshot" alt="picture of my numpty self">
    <p>I figured this would be a good place to put my money where 
    my mouth is and show off my certifications.</p>

    <ol>
        <li>Full Stack Engineering Program, <a href="thinkful">Thinkful</a>(2019)</li>
        <li>MA in Creative Writing, Goldsmiths College London (2012)</li>
        <li>BA in English Language & Literature, Newcastle University (2009)</li>
        <li>Yoga Teaching Certification (500 Hour E-RYT)</li>
        <li>Oh look, a shameless plug to <a href="amazonlink">my book</a> too!</li>
    </ol>

    <p>I’m a full stack developer on a mission to learn as much as I can, 
    in as many languages (programming & spoken) as I can. 
    I can speak: English, French, <img src="tinified/html5.png" class="icon" alt="html5 Logo">, CSS, <img src="tinified/javascript-logo.png" class="icon" alt="Javascript logo"> .  
    I am learning: Japanese, German & Swedish. Ruby, Java & C++. </p>


    <p> I love language structure, development & origins, 
    problem-solving , original fairy-tales, writing, and fitness. 
    So, if you’re looking for someone who can code 
    AND teach the office Yoga then look no further. </p>

    <h3> Some Super-Secret Skills I also happen to have...</h3>
    <ol>
        <li>Like a parrot, I can mimic a ton of accents really well!</li>
        <li>I make incredible vegan/paleo Nutella bites.</li>
        <li>I do have a plan for the Zombie Apocalypse. Obviously.</li>
        <li>I'm great at coming up with scathing comebacks thirty minutes to twenty-four hours after you need them.</li>
        <li>I'm a total planner-nerd. Chore-Whore-Anonymous meetings could be held at my house.</li>
    </ol>

    <img src="tinified/cchcover.jpg" alt="Book Cover Image">
    <img src="tinified/yoga.png" alt="Someone who isn't me doing Yoga">
    `
}

function generateContactMePage() {
    return `
    <h2>Contact Me!</h2>
    <p> You can offer me a job, or just tell me your apocalypse theories. </p>
    
    <ul>
        <li><a href="mailto:morvenwatt@gmail.com">Email Me</a></li>
        <li><a href="LinkedIn"><img src="tinified/linkedIn.png" alt="linked in logo" class="icon"></a></li>
        <li><a href="GitHub"><img src="tinified/github.png" alt="github logo" class="icon"></a></li>
        <li><a href="Instagram"><img src="tinified/instagramlogo.png" alt="instagram logo" class="icon"></a></li>
    </ul>
    `
}

function generateMyProjectsPage() {
    return `
    <h2>My Projects</h2>

    <h3>Pup Quiz</h3>
    <p>This fun quiz takes users through a tricky canine general knowledge quiz, 
    whilst providing them with links to charitable rescues at each answer point. 
    The quiz features multiple choice questions and informative answers for each. </p>

<p> Link to live app: <a href="https://morvenwatt.github.io/dogs/" target="_blank">Pup Quiz</a></p>
<p> Link to repo: <a href="https://github.com/morvenwatt/dogs" target="_blank">GitHub</a></p>

<p> Languages used: <img src="tinified/html5.png" class="icon" alt="html5 Logo">, CSS, <img src="tinified/javascript-logo.png" class="icon" alt="Javascript logo"> & JQUERY.</p>

<img src="tinified/pupQuiz1.png" alt="screenshot of quiz">
<img src="tinified/pupQuiz2.png" alt="screenshot of quiz">
<img src="tinified/pupQuiz3.png" alt="screenshot of quiz">
`
}

//DISPLAY FUNCTIONS: 

function displayHero() {
    $(".hero").html(generateHero());
}

function displayTetrisGrid() {
    $("main").html(generateTetrisGrid());
    animateTetrisGrid();
}

function displayAboutMePage() {
    $("main").attr('class', 'aboutMe').html(generateAboutMePage());
}

function displayContactMePage() {
    $("main").attr('class', 'contactMe').html(generateContactMePage());
}

function displayMyProjectsPage() {
    $("main").attr('class', 'myProjects').html(generateMyProjectsPage());
}


//EVENT HANDLERS:

function handleAboutMeLink() {
    $('main').on('click', 'a.aboutMe', function (event) {
        displayAboutMePage();
    })
}
function handleMyProjectsLink() {
    $('main').on('click', 'a.myProjects', function (event) {
        displayMyProjectsPage();
    })
}
function handleContactMeLink() {
    $('main').on('click', 'a.contactMe', function (event) {
        displayContactMePage();
    })
}

function setUpEventHandlers() {
    handleAboutMeLink();
    handleMyProjectsLink();
    handleContactMeLink();
}

function initializeUI() {
    displayHero();
    rotateHeroDescriptors();
    displayTetrisGrid();
    setUpEventHandlers();
}
$(initializeUI);