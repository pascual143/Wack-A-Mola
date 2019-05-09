var score = 0
var gameover = false
var lastHole = 0
$(function () {
  $('#start').click(startGame)
  $('.game').on('click','.mole',hitMole)
})

function hitMole(){
  //console.log($(this));
  $(this).parent().find('img').show()
  $(this).hide()
  $(this).parent().find('img').fadeOut(1000)
  score++
  $('.score').text(score)
}


function startGame() {
  makeGameBoard()
  score = 0
  $('.score').text(score)
  startMoles()
  gameover = false
  setTimeout(function () {
    return gameend()
  }, 10000)
}

function startMoles() {
  var jumpUp = $('.hole' + randomHole() + '> .mole')
  var timer = Math.round(Math.random() *1000)+400
  jumpUp.show()
  jumpUp.animate({
    top: '250px'
  }, 1000)
  //console.log(jumpUp);
  setTimeout(function () {
    jumpUp.animate({
      top: '50px'
    }, 1000)
    if(!gameover) startMoles()
  },timer)
}

function randomHole() {
  var hole = Math.floor(Math.random() * $('.hole').length)
  if(hole == lastHole){
    return randomHole()
  }
  lastHole = hole
  return hole
  //console.log(hole);
}

function gameend() {
  gameover = true
  $('.message').html('GAME OVER')
}

function makeGameBoard() {
  var moles = 12
  var html = ' '
  for (var mole = 0; mole < moles; mole++) {
    html += '<div class="hole hole' + mole + '"><div class="mole"></div>'
    html += '<img src="style/images/wack.png" class="wack"><div class="dirt"></div></div>'
  }
  $('.game').html(html)
}
