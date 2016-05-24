$(document).ready(function() {

// -------------------------------------------------
//				Global variables
// -------------------------------------------------




// class of array?  or aray of classes
// question type (text, audio, video)
// correct answer
// pool of incorrect answers(min 3, prefer 5+)


// randomize array order ( create new array of questionArray.length)


//  enter loop for questions for(i = 0; i < questionArray.length; i++)  on game time out break
// alt is while loop

// create audio player
// create video player or youtube player
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '180',
          width: '320',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

//startVideo();
      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }




      function startVideo() {
        player.startVideo();
      }

      function stopVideo() {
        player.stopVideo();
      }




// test of array shuffle
var arr = [1, 2, 3, 4];
shuffle(arr);
console.log(arr);


// shuffle question array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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


