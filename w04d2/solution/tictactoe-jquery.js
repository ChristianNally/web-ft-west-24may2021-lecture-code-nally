$(document).ready(function(){  

  function checkForVictory(clickedDOMElement){
    const currentPlayer = $('#nextPlayer').html();
    let rowWin = true;
    $(clickedDOMElement).siblings().each(function(index){
      if (  !$(this).hasClass(currentPlayer)   ) {
        rowWin = false;
      }
    });

    let columnWin = true; // this is fragile state
    // only need to check the column this new square is in
    let columnNum = $(clickedDOMElement).index() + 1;
    console.log(`columnNum:${columnNum}`);

    // the next jquery selector returns all three rows, so 
    // the .children call will select from the children of each
    // row in succession
    $("tr")
      .children("td:nth-of-type(" + columnNum + ")")
      .each(function( index ){
      if (!$(this).hasClass(currentPlayer)){
        columnWin = false;
      };
    });

    console.log(`rowWin:${rowWin} columnWin:${columnWin}`);

    // if any victory type is still true, return true
    return ( rowWin === true 
      || columnWin === true
      );
  }

  $('td').on('click',function(event){

    // Set the square to this player's symbol
    const nextPlayer = $('#nextPlayer').html();
    $(this).addClass(nextPlayer);

    // Is there a winner yet?
    if (checkForVictory(this)) {
      // someone has won!
      $('h2').html('<a href="">Play Again.</a>');
      $('td').off('click');
    } else {
      $(this).off('click');
      // Toggle which player clicks next
      if ('X' === nextPlayer){
        $('#nextPlayer').html('O');
      } else {
        $('#nextPlayer').html('X');
      }
    }

  });

});
