  while (questionNumber < triviaArray.length) {
            loadData(questonOrderArray[questionNumber]); // load Youtube video and create question and answers
     loadData(0); // debug only

      //      var counter = setTimeout(timeUp, 1000 * 10); // set timer for 10 seconds
            questionNumber += 1;


            while (roundComplete == false) {
                // do nothing
            $("li").hover(function() {
            $(this).css("background-color", "lightblue");
        }, function() {
            $(this).css("background-color", "white");
        });

        $("li").hover(function(e) {

        });
        $("li").click(function() {
            console.log($("li").attr("id"));
            roundComplete = true;
        });
               // debugger;
            }
            // execute this on timeout or li click
            if ($("li").attr("id") == triviaArray[qNum].correctAnswer) {
                // if li clicked == correct answer
                // increment correct counter
                //  correct answer!!
                alert('correct');
            } else {
                // wrong answer or time out.
                // increment wrong
                //  Wrong. correct answer is ""
                alert('time is up');
            }
            // reset timer
            // load next question


        }// while






setTimeout(function(){ $(".questions").empty(); }, 3000);


                function timeUp() {
            clearInterval(this.counter);
            roundComplete = true;
            alert('time is up');
        }



        