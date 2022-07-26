var maze
var playerRight, playerLeft, playerUp, playerDown
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14
var b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26
var b27,b28,b29,b30,b31,b32,b33,b34,b35,b36,b37,b38
var b39,b40,b41,b42,b43,b44,b45,b46
var coin, coinsGroup
var score


function preload() {
  maze = loadImage("images/maze.png")
  playerRight = loadImage("images/player right.png")
  playerLeft = loadImage("images/player left.png")
  playerUp = loadImage("images/player up.png")
  playerDown = loadImage("images/player down.png")
  coinImage = loadImage("images/coin.png")
}

function setup() {
  createCanvas(500,500)
  player = createSprite(10,232,20,20)
  player.scale = 0.06
  player.addImage("right", playerRight)
  player.addImage("left", playerLeft)
  player.addImage("up", playerUp)
  player.addImage("down", playerDown)


  b1 = createSprite(70,63,49,33)
  b1.visible = false

  b2 = createSprite(167,63,49,33)
  b2.visible = false

  b3 = createSprite(333,63,49,33)
  b3.visible = false

  b4 = createSprite(430,63,49,33)
  b4.visible = false

  b5 = createSprite(70,117,46,24)
  b5.visible = false

  b6 = createSprite(430,117,46,24)
  b6.visible = false

  b7 = createSprite(163,363,65,22)
  b7.visible = false

  b8 = createSprite(337,358,65,22)
  b8.visible = false

  b9 = createSprite(0,8,1000,20)
  b9.visible = false

  b10 = createSprite(8,0,20,310)
  b10.visible = false

  b11 = createSprite(500,0,36,310)
  b11.visible = false

  b12 = createSprite(0,500,1000,37)
  b12.visible = false

  b13 = createSprite(0,500,38,379)
  b13.visible = false

  b14 = createSprite(500,500,38,379)
  b14.visible = false

  b15 = createSprite(30,175,125,65)
  b15.visible = false

  b16 = createSprite(30,290,125,65)
  b16.visible = false

  b17 = createSprite(470,175,125,65)
  b17.visible = false

  b18 = createSprite(470,290,125,65)
  b18.visible = false

  b19 = createSprite(27,408,22,22)
  b19.visible = false

  b20 = createSprite(473,403,22,22)
  b20.visible = false

  b21 = createSprite(250,0,25,158)
  b21.visible = false

  b22 = createSprite(250,108,107,22)
  b22.visible = false

  b23 = createSprite(250,135,25,75)
  b23.visible = false

  b24 = createSprite(250,402,107,22)
  b24.visible = false

  b25 = createSprite(250,429,25,75)
  b25.visible = false

  b26 = createSprite(250,307,107,22)
  b26.visible = false
  
  b27 = createSprite(250,335,25,75)
  b27.visible = false

  b28 = createSprite(142,293,20,60)
  b28.visible = false

  b29 = createSprite(358,287,20,60)
  b29.visible = false

  b30 = createSprite(143,170,25,105)
  b30.visible = false

  b31 = createSprite(180,170,58,25)
  b31.visible = false

  b32 = createSprite(358,170,25,105)
  b32.visible = false

  b33 = createSprite(320,170,58,25)
  b33.visible = false

  b34 = createSprite(123,458,150,20)
  b34.visible = false

  b35 = createSprite(145,430,25,75)
  b35.visible = false

  b36 = createSprite(378,458,150,20)
  b36.visible = false

  b37 = createSprite(355,430,25,75)
  b37.visible = false

  b38 = createSprite(72,363,55,22)
  b38.visible = false

  b39 = createSprite(88,389,22,59)
  b39.visible = false

  b40 = createSprite(431,360,55,22)
  b40.visible = false

  b41 = createSprite(418,383,22,59)
  b41.visible = false

  b42 = createSprite(250,280,130,7)
  b42.visible = false

  b43 = createSprite(189,250,7,60)
  b43.visible = false

  b44 = createSprite(312,250,7,60)
  b44.visible = false

  b45 = createSprite(293,218,45,7)
  b45.visible = false

  b46 = createSprite(207,218,45,7)
  b46.visible = false

  coinsGroup = new Group()

  addCoin(115,60,10)
  addCoin(385,60,10)
  addCoin(170,210,4)
  addCoin(330,210,4)
  addCoin(30,35,3)
  addCoin(470,35,3)
  addCoin(30,340,2)
  addCoin(30,430,2)
  addCoin(470,340,2)
  addCoin(470,430,2)
  addCoin(215,335,2)
  addCoin(285,335,2)
  addCoin(325,385,2)
  addCoin(175,385,2)
  addCoin(215,430,2)
  addCoin(280,430,2)
}

function addCoin(a,b,c){
  for(i=0;i<c;i++){
  coin = createSprite(a,b+i*40,10,10)
  //coin.addImage(coinImage)
  //coin.scale = 0.1
  coinsGroup.add(coin)
}
}

function removeCoin(a,b,c){
  for(i=0;i<c;i++){
    coin.delete()
  }
}

function draw() {
  background(0)
  imageMode(CENTER)
  image(maze, width/2, height/2, width, height)
  

  if(keyDown("RIGHT")){
    player.changeImage("right")
    player.x += 2
  }

  if(keyDown("LEFT")){
    player.changeImage("left")
    player.x -= 2
  }
  
  if(keyDown("UP")){
    player.changeImage("up")
    player.y -= 2
  }

  if(keyDown("DOWN")){
    player.changeImage("down")
    player.y += 2
  }

  

  if(player.isTouching(coinsGroup)){
    removeCoin(115,60,10)
    score += 2
  }

  player.collide(b1)
  player.collide(b2)
  player.collide(b3)
  player.collide(b4)
  player.collide(b5)
  player.collide(b6)
  player.collide(b7)
  player.collide(b8)
  player.collide(b9)
  player.collide(b10)
  player.collide(b11)
  player.collide(b12)
  player.collide(b13)
  player.collide(b14)
  player.collide(b15)
  player.collide(b16)
  player.collide(b17)
  player.collide(b18)
  player.collide(b19)
  player.collide(b20)
  player.collide(b21)
  player.collide(b22)
  player.collide(b23)
  player.collide(b24)
  player.collide(b25)
  player.collide(b26)
  player.collide(b27)
  player.collide(b28)
  player.collide(b29)
  player.collide(b30)
  player.collide(b31)
  player.collide(b32)
  player.collide(b33)
  player.collide(b34)
  player.collide(b35)
  player.collide(b36)
  player.collide(b37)
  player.collide(b38)
  player.collide(b39)
  player.collide(b40)
  player.collide(b41)
  player.collide(b42)
  player.collide(b43)
  player.collide(b44)
  player.collide(b45)
  player.collide(b46)
 

  
  drawSprites()
  fill("white")
  text("Score: ",score,20,150)

}



  