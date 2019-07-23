//FUNCTIONAL FUNCTIONS:

const descriptors = ["zombies.", "dogs.", "Queen.", "Tetris.", "Yoga.", "chocolate.", "language.", "Jeopardy.", "puzzles.", "coding.", "ultras.", "books.", "Spyro.", "Sherlock.", "Javascript.", "stationery.", "MTB.", "travel."];
let count = 1;

function rotateHeroDescriptors() {
    setInterval(function () {
        $("#rotationText").fadeOut(400, function () {
            $(this).html(descriptors[count]);
            count++;
            if (count == descriptors.length)
                count = 0;
            $("#rotationText").fadeIn(400);
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

        <h1>Hey! I'm Mo, and I'm really into <span id="rotationText">.....</span> 
             </h1>
    <nav>
    <a class="aboutMe">About Me</a>
    <a class="myProjects">My Projects</a>
    <a class="contactMe">Contact Me</a>
    </nav>
    
    `
}


function generateAboutMePage() {
    return `
    <h2>Scottish Or Bust</h2>
    <p>I'm Morven. A native Scot living in Scottsdale.</p>
    <img src="tinified/headshot.png" id="headshot" alt="picture of me">
    <p>I figured this would be a good place to put my money where 
    my mouth is and show off my certifications.</p>

    <ul>
    <img src="tinified/cchcover.png" alt="Book Cover Image" id="bookcover">
        <li>Full Stack Engineering Program, <a href="thinkful">Thinkful</a>(2019).</li>
        <li>MA in Creative Writing, Goldsmiths College London (2012).</li>
        <li>BA in English Lit & Lang, Newcastle University (2009).</li>
        <li>Yoga Teaching Certification (500 Hour E-RYT).</li>
        <li>And look, a shameless plug to <a href="https://www.amazon.com/Curses-Come-Home-stories-Century/dp/186151879X/ref=sr_1_2?keywords=curses+come+home+morven+watt&qid=1563821054&s=gateway&sr=8-2" target="_blank">
        my book</a>!</li>
       
    </ul>
 

    <p>I’m a full stack developer on a mission to learn as much as I can, 
    in as many languages (programming & spoken) as I can. </p>
    <p>I can speak: English, French, HTML, CSS & Javascript.  
    I am learning: Japanese, German & Swedish. Ruby, Java & C++. </p>


    <p> I love language structure, development & origins, 
    problem-solving , original fairy-tales, writing, and fitness. 
    So, if you’re looking for someone who can code 
    AND teach the office Yoga then look no further. </p>
    <img src="tinified/yoga.png" alt="Someone who isn't me doing Yoga" id="yoga">

    <h3>Additional 007 Skillset:</h3>
    <ul>
        <li>Like a parrot, I can mimic a ton of accents really well!</li>
        <li>I make incredible vegan/paleo Nutella bites.</li>
        <li>I do have a plan for the Zombie Apocalypse. Obviously.</li>
        <li>I'm great at coming up with scathing comebacks thirty minutes to twenty-four hours after you need them.</li>
        <li>I'm a total planner-nerd. Chore-Whore-Anonymous meetings could be held at my house.</li>
    </ul>

    `
}

function generateContactMePage() {
    return `
    <h2>Contact Me</h2>
    <p> You can offer me a job, or just tell me your apocalypse theories.
    I'm pretty happy with either one. </p>
    
    <h3><a href="mailto:morvenwatt@gmail.com">Email</a> is the best way to get in touch!</h3>

    <ul>
        <li><a href="https://www.linkedin.com/in/morven-watt-204455186/" target="_blank"><img src="tinified/linkedIn.png" alt="linked in logo" class="icon"></a></li>
        <li><a href="https://github.com/morvenwatt" target="_blank"><img src="tinified/github.png" alt="github logo" class="icon"></a></li>
        <li><a href="https://www.instagram.com/morvenwatt13/?hl=en" target="_blank"><img src="tinified/instagramlogo.png" alt="instagram logo" class="icon"></a></li>
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

<p> Languages used: HTML5, CSS, Javascript & JQuery.</p>

<div class="quizPics">
<img src="tinified/pupQuiz1.png" alt="screenshot of quiz" class="quiz">
<img src="tinified/pupQuiz2.png" alt="screenshot of quiz" class="quiz">
<img src="tinified/pupQuiz3.png" alt="screenshot of quiz" class="quiz">
</div>

<p> Stay tuned for more exciting projects to come! </p>
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
    $('.aboutMe').click (function (event) {
        displayAboutMePage();
    })
}
function handleMyProjectsLink() {
    $('.myProjects').click (function (event) {
        displayMyProjectsPage();
    })
}
function handleContactMeLink() {
    $('.contactMe').click (function (event) {
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