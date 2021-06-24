var name = 'Петья';
var surname ='Васичкин';
var age = 25;

var c = false;
var d = 5;

// a = 456;
// a = prompt ('Напишите значение переменной a')

// if (a == 37) {
//   alert ('a = 37');
// } else {
//   alert ('что-то другое');
// }

// for (var i = 0;i < 5; i++) {
//   alert (i);
// }
// var obj = {
//   'key': 'value',
//   'key': 'value',
//   'key': 'value',
//   'key': 'value'
// }

var user ={
  'name': 'Петья',
  'surname': 'Васичкин',
  'age': 25, 
}

// alert ( user['name'] );

var mas = ['Петья', 'Васичкин', 25];

// alert (mas[2])

function doMagic (a,b) {
  alert (a+b);

}

// doMagic(5,10);


var btn = document.getElementById('btn');
btn.onclick = function () {
  var text = document.querySelector('p.intro');
  text.classList.add('red')
  var img = document.querySelector('.desktop');
  img.style.display = 'none';
  document.querySelector('.skill-change').style.marginLeft = '50px';


}




$(window).scroll(function (){
    $(' .zoom').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+1000){
            $(this).addClass('zoomIn');
        }
    });
});















