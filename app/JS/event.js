/*let btn = document.querySelectorAll('button'),
    body = document.getElementsByTagName('body'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

btn[2].onclick = function() {
    confirm('you pushed first button');
};

btn[0].addEventListener('click', function() {
    let textprompt = prompt('enter something text', ''),
        text = document.createTextNode(textprompt);

    document.body.appendChild(text);
});

btn[1].addEventListener('click', function() {
    btn[0].style.backgroundColor = 'red';
});

btn[0].addEventListener('click', function() {
    btn[2].style.backgroundColor = 'blue';
});

btn[2].addEventListener('click', function() {
    btn[1].style.backgroundColor = 'green';
});

btn[0].addEventListener('mouseenter', function() {
    btn[2].style.backgroundColor = 'green';    
    btn[2].style.width = '200px';
    btn[2].style.height = '200px';
    body[0].style.backgroundColor = 'indianred';
});
btn[1].addEventListener('mouseenter', function() {
    btn[2].style.backgroundColor = 'yellow';
    btn[2].style.width = '100px';
    btn[2].style.height = '100px';
    body[0].style.backgroundColor = 'purple';
});

btn[2].addEventListener('mouseenter', function() {
    btn[2].style.backgroundColor = 'grey';
    btn[2].style.width = '70px';
    btn[2].style.height = '40px';
    body[0].style.backgroundColor = 'burlywood';
    
});

btn[0].addEventListener('click', function(event) {
    console.log(event);
    let target = event.target;
    console.log(' happened btn[0].addEventListener' + event.type + ' on element ' + event.target);
    target.style.display = 'none';
});

wrap.addEventListener('click', function(event) {
    console.log(' happened wrapper.addEventListener' + event.type + ' on element ' + event.target);
    
});

link.addEventListener('click', function(event) {
    event.preventDefault();    
});


btn.forEach(function(item) {
    item.addEventListener('mouseleave', function(){
        console.log('btn.forEach(function(item)');
    });
});


function pageLoadedHandler() {
    console.log('Обработчик   window:');
}

window.onload = pageLoadedHandler;


*/

window.onload = init;
function init() {
    var images = document.getElementsByTagName("img");// Метод возвращает список объектов элементов, соответствующих заданному имени тега.
    for (var i = 0; i < images.length; i++) {
        //images[i].onclick = showAnswer;//если нажать на картинку с данным идентификатором тогда картика заменится на не размытую
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
        console.log(images[i]);
    }
    console.log(images);
}
function showAnswer(eventObj) {//функц
    var image = eventObj.target;//через метод таргет  мы получаем доступ к текущему объекту картинки
    console.log("eventObj  " + eventObj.target);
    var name = image.id;//переменной  name присваеваем индификатор image
    name = "./img/" + name + ".jpg";//добавляем в значение  name путь до нужного файла
    image.src = name;//присваеваем свойству src новый путь файла картинки
    console.log(image);

    //setTimeout(reblur, 500, image);
}

function reblur(eventObj){
    var image = eventObj.target;
    var name = image.id;
    name = "./img/" + name + "blur.jpg";
    image.src = name;
}