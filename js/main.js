$(document).ready(function() {


    $(".line").on("mousedown", function() {
        let line = $(this);
        // let checkedId = line[0]["id"];

        // Помечаем новую линию
        line.addClass("line--marked");

        // Осуществляем поиск всех элементов с классом line--marked
        let linesOfDiv = $("div.line--marked");

        // let bool = linesOfDiv;

        // console.log(bool);

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

    $(".button").on("click", function() {
        let chips = $("div.line__item--marked");
        chips.addClass("line__item--unvisible");
        chips.removeClass("line__item--visible");
        // Надо пересчитать все фишки на каждой строке и результат запихнуть в скрипт
        let id = 1;
        let obj = {};
        let row = 1;
        let countOfChips;
        // result: obj[row] = countOfChips

        while (document.getElementById(id) != null) {
            countOfChips = $(`.line#${id} .line__item--visible`).length;
            obj[row] = countOfChips;
            id++;
            row++;
        }
        console.log(obj);



        let reminder = $(".line#3 .line__item--visible");



    });




});