
var parentsAnswers = [];
var siblingsAnswers = [];
var userTotal = 0;


var computeAnswerTotal = function(array1,array2) {
  var allAnswers = [];
  var answerTotal = 0;

  allAnswers = parentsAnswers.concat(siblingsAnswers);

  for (var value = 0; value < allAnswers.length; value += 1) {
    userTotal += allAnswers[value];
  }

  answerTotal = userTotal;

  return userTotal;

}



$(document).ready(function(){

  $("form#questions").submit(function(event){
    event.preventDefault();

    $("div.tellFortune").empty();
    parentsAnswers = [];
    siblingsAnswers = [];
    userTotal=0;


    $("input:checkbox[name=parents]:checked").each(function(){
      parentsAnswers.push(parseInt($(this).val()));
    });
    $("input:checkbox[name=siblings]:checked").each(function(){
      siblingsAnswers.push(parseInt($(this).val()));
    });

    computeAnswerTotal(parentsAnswers,siblingsAnswers);

    console.log(userTotal);

    if (userTotal >= 90) {
      $("h1#fortuneHead").text("You are definitely going to have a series of unfortunate events!");
      $("img#fortuneImage").removeAttr("src alt").attr({"src": "img/octpus.jpg", "alt": "scary"});
    } else if (userTotal >= 50) {
      $("h1#fortuneHead").text("You may have a few unfortnate events, don't go swimming on a full stomach!");
      $("img#fortuneImage").removeAttr("src alt").attr({"src": "img/lakeLach.png", "alt": "lake lach with leeches"});
    } else if (userTotal >= 20) {
      $("h1#fortuneHead").text("Make sure you know where your parents are at all times!");
      $("img#fortuneImage").removeAttr("src alt").attr({"src": "img/killing.jpeg", "alt": "olaf with knives"});
    } else {
      $("h1#fortuneHead").text("Whew! You're in the clear. Life looks great for you!");
      $("img#fortuneImage").removeAttr("src alt").attr({"src": "img/whew.jpeg", "alt": "pretty in pink"});
    }

    $("form#questions").hide();
    $("div#tellFortune").show();

  });
  $("button#tryAgain").click(function(){
    $("form#questions").show();
    $("div#tellFortune").hide();

  });
});

// var parents1 = parseInt($('input#parents1:checked').val());
// var parents2 = parseInt($('input#parents2:checked').val());
// var parents3 = parseInt($('input#parents3:checked').val());
// var parents4 = parseInt($('input#parents4:checked').val());

// var parentsAnswers = [];

// parentsAnswers.push(parents1,parents2,parents3,parents4);
//
// spent too much time trying to do this with a for loop and/or a .forEach loop. As i understand it, not being able to make the array first by gathering all the inputs that have been checked makes it so the for or .forEach doesnt work. .each can traverse all the specified inputs and make the array for looping
