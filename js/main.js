$(document).ready(function() {



    // $(".line").on("click", function() {
    //     // Щёлкаем по линии 
    //     // Красим линию
    //     $(this).addClass("line--marked");
    //     // Ищем все помеченные линии
    //     lol = $(this);
    //     console.log(lol);
    //     let linesOfDiv = $("div.line--marked");
    //     if (linesOfDiv.length < 1) {

    //     }
    // });

    $(".line").on("mousedown", function() {
        let line = $(this);
        let checkedId = line[0]["id"];

        // Помечаем новую линию
        line.addClass("line--marked");

        // Осуществляем поиск всех элементов с классом line--marked
        let linesOfDiv = $("div.line--marked");

        let bool = linesOfDiv;

        console.log(bool);

        // Если количество помеченных линий > 1
        if (linesOfDiv.length > 1) {
            // Отменяем все выделенные линии и все помеченные фишки
            linesOfDiv.removeClass("line--marked");

            // Удаляем отметки всех фишек
            let chips = $("div.line__item--marked");
            chips.removeClass("line__item--marked");
            line.addClass("line--marked");
        }



    });

    $(".line__item").on("mouseup", function() {
        let chip = $(this);
        chip.toggleClass("line__item--marked");
    });

    // $(Item).on("mouseup", function() {
    //     let chip = $(this);
    //     chip.toggleClass("line__item--marked");
    // });



    // $(Item).on("click", function(event) {
    //     // Клик по фишке и передаём её в this

    //     let thisParent = $(".line__item").parent(".line"); // Обращаемся к родителю фишки (её диву)
    //     // thisParent.addClass("line--marked");

    //     let allItems = $("div.line__item--marked"); // Количество всех выбранных элементов

    //     if (linesOfDiv.length < 1) {
    //         // Если выбрана только одна линия - красим текущую фишку
    //         $(this).toggleClass("line__item--marked");
    //     } else {
    //         linesOfDiv.removeClass("line--marked");
    //         allItems.removeClass("line__item--marked");
    //     }


    // });




});