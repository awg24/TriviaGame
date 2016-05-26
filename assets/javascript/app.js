$(document).ready(function() {

    // -------------------------------------------------
    //        Global variables
    // -------------------------------------------------


    var triviaArray = [{
            name: "Zootopia",
            video: " <iframe id='ytplayer ' type='text/html ' width='100% ' height='300px ' src=https://www.youtube.com/embed/uVLSe2uhLXo?autoplay=1&controls=0&enablejsapi=1&fs=0&rel=0&showinfo=0&iv_load_policy=3  ></iframe>",
            questionLine: "This video is from the Japan release of what movie?",
            correctAnswer: "Zootopia",
            wrongAnswer: ["Outlander", "Animal Mania", "Madagascar"]
        }

    ];


    loadData();


    function loadData() {
        $("#player").append(triviaArray[0].video);
        $(".question").text(triviaArray[0].questionLine);
     //   $("#answer1").text(triviaArray[0].correctAnswer);

// change this to append to <ol>
        $("ol").append("<li id ='answer1'>" + triviaArray[0].correctAnswer + "</li");
        $("ol").append("<li id ='answer2'>" + triviaArray[0].wrongAnswer[0] + "</li");
        $("ol").append("<li id ='answer3'>" + triviaArray[0].wrongAnswer[1] + "</li");
        $("ol").append("<li id ='answer4'>" + triviaArray[0].wrongAnswer[2] + "</li");
     //   $("#answer2").text(triviaArray[0].wrongAnswer[0]);
     //   $("#answer3").text(triviaArray[0].wrongAnswer[1]);
     //   $("#answer4").text(triviaArray[0].wrongAnswer[2]);
    }




    // class of array?  or aray of classes
    // question type (text, audio, video)
    // correct answer
    // pool of incorrect answers(min 3, prefer 5+)


    // randomize array order ( create new array of questionArray.length)


    //  enter loop for questions for(i = 0; i < questionArray.length; i++)  on game time out break
    // alt is while loop

    $("li").hover(function() {
        $(this).css("background-color", "lightblue");
    }, function() {
        $(this).css("background-color", "white");
    });


    // check which answer is selected
    $("input").on("click", function() {
        $("#log").html($("input:checked").val() + " is checked!");
    });

    // test of array shuffle
    var arr = [1, 2, 3, 4];
    shuffle(arr);
    console.log(arr);


    // shuffle question array
    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


}); // document ready
