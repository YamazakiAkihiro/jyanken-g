function myGame(){
myNumber = document.getElementById("mySelect").selectedIndex;
hisNumber = Math.floor(Math.random()*3);
if( hisNumber == 0 ){
hisHand = "グー";
img1 = new Image(); 
img1.src = "img/gu.gif";
}
if( hisNumber == 1 ){
hisHand = "チョキ";
img1 = new Image(); 
img1.src = "img/choki.gif";
}
if( hisNumber == 2 ){
hisHand = "パー";
img1 = new Image(); 
img1.src = "img/pa.gif";
}
if( myNumber - hisNumber == -2 ){
judge = "あなたの 負け";
}
if( myNumber - hisNumber == -1 ){
judge = "あなたの 勝ち";
}
if( myNumber - hisNumber == 0 ){
judge = "両者の 引き分け";
}
if( myNumber - hisNumber == 1 ){
judge = "あなたの 負け";
}
if( myNumber - hisNumber == 2 ){
judge = "あなたの 勝ち";
}
document.getElementById("message1").innerHTML = "相手の選択は "+hisHand;
document.getElementById("message2").innerHTML = img1.src;
document.getElementById("message3").innerHTML = "勝敗の結果は "+judge;
}
