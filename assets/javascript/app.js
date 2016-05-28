$(document).ready(function() {

    // -------------------------------------------------
    //        Global variables
    // -------------------------------------------------
    var questionNumber = 0;
    var roundComplete = false;
    var myAnswer;
    var numCorrect = 0;
    var numWrong = 0;
    var correctAnswer1;
    var timout;
    var triviaArray = [{

            name: "Zootopia",
            video: "Dream Ami.mp4",
            questionLine: "Dream Ami was selected to sing the theme in the Japan release of what movie?",
            correctAnswer: "Zootopia",
            wrongAnswer: ["Outlander", "Animal Mania", "Madagascar"]
        }, {
            name: "Alien4",
            video: " <iframe id='ytplayer ' type='text/html ' width='100% ' height='300px ' src=https://www.youtube.com/embed/UsJjfS-i2zM?autoplay=1&controls=0&enablejsapi=1&fs=0&rel=0&showinfo=0&iv_load_policy=3  ></iframe>",
            questionLine: "Sigourney Weaver stared in this 1979 classic?",
            correctAnswer: "Alien Resurection",
            wrongAnswer: ["Predator", "The Thing", "Dark Skys"]
        }, {
            name: "Yamamoto",
            video: "Uchuu Senkan Yamato Opening.mp4",
            questionLine: "The first episode of this anime was October 6, 1974",
            correctAnswer: "Space ship Yamamoto",
            wrongAnswer: ["Striker - Space Fighter", "Dreadnought", "Gundam Wing"]
        }, {
            name: "Alien3",
            video: "Dream Ami was selected to sing the theme in the Japan release of what movie?",
            questionLine: "Sigourney Weaver stared in this 1979 classic?",
            correctAnswer: "Alien Resurection",
            wrongAnswer: ["Predator", "The Thing", "Dark Skys"]
        }

    ];

    /////////////////////////////////////////////////////////////////////////////////////////////////

    // everything in start button - on clilck change to restart
    // no video
    // no timer at at first



    // setup question array and randomize the order for questions
    var questonOrderArray = [];
    for (i = 0; i < triviaArray.length; i += 1) {
        questonOrderArray[i] = i;
    }
    shuffle(questonOrderArray);


    $(".startButton").on("click", function() {

        // this starts the game
        numCorrect = 0;
        numWrong = 0;

        shuffle(questonOrderArray);
        waitForAnswer();


        function waitForAnswer() {
            //  $(".questions").empty();
            $("video").remove();
            if (questionNumber > triviaArray.length) {
                $('.header').text("Game over click start to continue");
                while (true) {}
            }
            loadData(questonOrderArray[questionNumber]);
            $('.header').text("");
            questionNumber += 1;

            timout = setTimeout(function() { checkAnswer("no answer"); }, 3000);
            $(".ans").hover(function() {
                $(this).css("background-color", "white");
            }, function() {
                $(this).css("background-color", "#33cc33");
            });
            $(".ans").hover(function(e) {});
            $(".ans").click(function() {
                myAnswer = $(this).attr("id");
                console.log(myAnswer)
                roundComplete = true;
                checkAnswer(myAnswer);




            });



        }

        function checkAnswer(userAnswer) {
            clearTimeout(timout);
            if (userAnswer == correctAnswer1) {
                numCorrect += 1;

                $('.header').text("Correct");
                $(".correct").text("Correct: " + numCorrect); // update counter
                $(".answers").empty(); // Clear the answers
                $(".question").empty(); // cleat the question
                //  loadVideo();// show video
                setTimeout(function() { waitForAnswer(); }, 5000);
            } else {
                numWrong += 1;
                $('.header').text("Sorry. The correct answer is " + correctAnswer1);
                $(".wrong").text("Wrong: " + numWrong); // update counter
                $(".answers").empty(); // Clear the answers
                $(".question").empty(); // clear the question
                //loadVideo();// show video
                setTimeout(function() { waitForAnswer(); }, 5000);
            }



        }



    }); // start button

    function loadVideo() {
        $(".questions").html("<video src='" + triviaArray[questonOrderArray[questionNumber]].video + "'  autoplay width='400 '</video>");
    }


    function loadData(qNum) {
        $(".question").empty();
        // change this to append to <ol>
        correctAnswer1 = triviaArray[qNum].correctAnswer;

        $(".question").text(triviaArray[qNum].questionLine);

        $(".answers").append("<p class= 'ans' id ='" + triviaArray[qNum].correctAnswer + "'>" + triviaArray[qNum].correctAnswer + "</p");
        $(".answers").append("<p class= 'ans'  id ='" + triviaArray[qNum].wrongAnswer[0] + "'>" + triviaArray[qNum].wrongAnswer[0] + "</p");
        $(".answers").append("<p class= 'ans'  id ='" + triviaArray[qNum].wrongAnswer[1] + "'>" + triviaArray[qNum].wrongAnswer[1] + "</p");
        $(".answers").append("<p class= 'ans'  id ='" + triviaArray[qNum].wrongAnswer[2] + "'>" + triviaArray[qNum].wrongAnswer[2] + "</p");



    }



    // shuffle question array
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

    }


}); // document ready
