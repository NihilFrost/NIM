$(document).ready(function() {


    // $('div.someBlock')
    var line = $(".line");
    var Item = $(".line__item");

    $(".line").on("click", function() {
        // Щёлкаем по линии 
        // Красим линию
        $(this).addClass("line--marked");
        // Ищем все помеченные линии
        let linesOfDiv = $("div.line--marked");
        if (linesOfDiv.length < 1) {

        }
    });

    $(Item).on("click", function(event) {
        // Клик по фишке и передаём её в this

        // let thisParent = $(".line__item").parent(".line"); // Обращаемся к родителю фишки (её диву)
        // thisParent.addClass("line--marked");

        let allItems = $("div.line__item--marked"); // Количество всех выбранных элементов

        if (linesOfDiv.length < 1) {
            // Если выбрана только одна линия - красим текущую фишку
            $(this).toggleClass("line__item--marked");
        } else {
            linesOfDiv.removeClass("line--marked");
            allItems.removeClass("line__item--marked");
        }


    });




});