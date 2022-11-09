var lowerHalfArry = ["url(images/bottom/bottom1.png)", "url(images/bottom/bottom2.png)", "url(images/bottom/bottom3.png)", 
                        "url(images/bottom/bottom4.png)", "url(images/bottom/bottom5.png)", "url(images/bottom/bottom6.png)", 
                        "url(images/bottom/bottom7.png)", "url(images/bottom/bottom8.png)", "url(images/bottom/bottom9.png)", 
                        "url(images/bottom/bottom10.png)", "url(images/bottom/bottom11.png)", "url(images/bottom/bottom12.png)", 
                        "url(images/bottom/bottom13.png)", "url(images/bottom/bottom14.png)", "url(images/bottom/bottom15.png)", 
                        "url(images/bottom/bottom16.png)"]

var upperHalfArry = ["url(images/top/top1.png)", "url(images/top/top2.png)", "url(images/top/top3.png)", "url(images/top/top4.png)", 
                        "url(images/top/top5.png)", "url(images/top/top6.png)", "url(images/top/top7.png)", "url(images/top/top8.png)", 
                        "url(images/top/top9.png)", "url(images/top/top10.png)", "url(images/top/top11.png)", "url(images/top/top12.png)", 
                        "url(images/top/top13.png)", "url(images/top/top14.png)", "url(images/top/top15.png)", "url(images/top/top16.png)",
                        "url(images/top/top17.png)"]

var jacketShirtArry = ["url(images/over/over1.png)", "url(images/over/over2.png)", "url(images/over/over3.png)", "url(images/over/over4.png)", 
                        "url(images/over/over5.png)", "url(images/over/over6.png)", "url(images/over/over7.png)", 
                        "url(images/over/over8.png)", "url(images/over/over9.png)", "url(images/over/over10.png)", "url(images/over/over11.png)", 
                        "url(images/over/over12.png)", "url(images/over/over13.png)", "url(images/over/over14.png)", "url(images/over/over15.png)" ,
                        "url(images/over/over16.png)", "url(images/over/over17.png)", "url(images/over/over18.png)", "url(images/over/over19.png)", 
                        "url(images/over/over20.png)", "url(images/over/over21.png)", "url(images/over/over22.png)", "url(images/over/over23.png)", 
                        "url(images/over/over24.png)", "url(images/over/over25.png)"];

var shoesArry = ["url(images/shoes/shoes1.png)", "url(images/shoes/shoes2.png)", "url(images/shoes/shoes3.png)", "url(images/shoes/shoes4.png)", 
                  "url(images/shoes/shoes5.png)"];
let i = 0;
let x = 0;
let a = 0;
let b = 0;

function clothBoxNext() {
   if (i > upperHalfArry.length){
      return i == Math.max(...upperHalfArry);
   }
   document.getElementsByClassName("clothBox")[0].style.backgroundImage = upperHalfArry[i];
   i++

 }

 function clothBoxPrevious() {

   if (i < 0){
      return i == 1;
   }

   i--
   document.getElementsByClassName("clothBox")[0].style.backgroundImage = upperHalfArry[i-1];

 }

 function clothBox2Next() {

   if (x > lowerHalfArry.length){
      return x == Math.max(...lowerHalfArry);
   }

   document.getElementsByClassName("clothBox2")[0].style.backgroundImage = lowerHalfArry[x];
   x++

 }

 function clothBox2Previous() {

   if (x < 0){
      return x == 1;
   }

   x--
   document.getElementsByClassName("clothBox2")[0].style.backgroundImage = lowerHalfArry[x-1];

 }

 function clothBox3Next() {

   if (a > jacketShirtArry.length){
      return a == Math.max(...jacketShirtArry);
   }

   document.getElementsByClassName("clothBox3")[0].style.backgroundImage = jacketShirtArry[a];
   a++

 }

 function clothBox3Previous() {

   if (a < 0){
      return a == 1;
   }

   a--
   document.getElementsByClassName("clothBox3")[0].style.backgroundImage = jacketShirtArry[a-1];

 }

 function clothBox4Next() {

   if (b > shoesArry.length){
      return b == Math.max(...shoesArry);
   }

   document.getElementsByClassName("clothBox4")[0].style.backgroundImage = shoesArry[b];
   b++

 }

 function clothBox4Previous() {

   if (b < 0){
      return b == 1;
   }

   b--
   document.getElementsByClassName("clothBox4")[0].style.backgroundImage = shoesArry[b-1];

 }

 function randomiseClothing() {

   let amountA = Math.floor(Math.random() * upperHalfArry.length);
   let amountB = Math.floor(Math.random() * lowerHalfArry.length);
   let amountC = Math.floor(Math.random() * jacketShirtArry.length);
   let amountD = Math.floor(Math.random() * shoesArry.length);

   document.getElementsByClassName("clothBox")[0].style.backgroundImage = upperHalfArry[amountA];
   document.getElementsByClassName("clothBox2")[0].style.backgroundImage = lowerHalfArry[amountB];
   document.getElementsByClassName("clothBox3")[0].style.backgroundImage = jacketShirtArry[amountC];
   document.getElementsByClassName("clothBox4")[0].style.backgroundImage = shoesArry[amountD];

 }