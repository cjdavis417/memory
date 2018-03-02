var numberOfCards;
var cardHeight = 200;

$('#game-board, #exit-game').hide()

function startGame() {
    $('#welcome-screen').fadeOut(2000);
    $('#game-board, #exit-game').delay(2000).fadeIn(2000);
    gameSetup();
}

function cardWidth(cHeight)  {
    var cardRatio = 63 / 88;
    var cWidth;
    return cdWidth = cHeight * cardRatio;
}

function gameExit() {
    $('#game-board, #exit-game').fadeOut(2000);
    $('#welcome-screen').delay(2000).fadeIn(2000);
}

function gameSetup() {
    numberOfCards = 10;
    for (i = 0; i < numberOfCards; i++) {
        var $card = $("<div class='card flipper manual' id='memory_card_" + i + "' onclick='gameTurn()'><div class='face'></div><div class='back'></div></div>");
        
        //$card.height(cardHeight).width(cardWidth(cardHeight));
        $("#button-container").append($card);
    }

    // $.fn.cards = function(i){
    //     var html=''
    //     for(var card=0; card < i; card++){
    //         html +='<div class="card flipper manual"><div class="face" onclick="gameTurn()"></div><div class="back" onclick="gameTurn()"></div></div>'
    //     }
    //     return $(html).prependTo(this)
    // }

    $(function(){
        var g=$('#game').cards(10)
    })

    // var animations;
    // $.fn.flip = function(cmd) {
    //     return this.each(function() {
    //         if (cmd=='on') {
    //             animations++
    //             $(this).addClass('flipped')
    //         } else if (cmd=='off'){
    //             $(this).removeClass('flipped')
    //         }
    //     });
    // }
}

function gameTurn() {
    console.log("card selected");
}
