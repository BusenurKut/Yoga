
$(document).ready(function(){



    // LOADER

    $(window).on("load", function(){

        setTimeout(function(){

            $("#loader").fadeOut();

        },1500);

    });




    // CANLI SAAT

    setInterval(function(){

        let now = new Date();

        $("#clock").text(

            now.toLocaleTimeString()

        );

    },1000);




    // DARK MODE

    $("#darkBtn").click(function(){

        $("body").toggleClass("dark");

    });




    // TOAST MESAJ

    function toastMesaj(text){

        $("#toast")
        .text(text)
        .fadeIn();

        setTimeout(function(){

            $("#toast").fadeOut();

        },2000);

    }




    // REZERVASYON

    let reservationNumber = 0;

    $(".reserveBtn").click(function(){

        let card =
        $(this).closest(".card");

        let lesson =
        card.find("h3").text();

        let quota =
        parseInt(

            card.find(".quota").text()

        );



        if(quota > 0){

            quota--;

            card.find(".quota")
            .text(quota);



            reservationNumber++;

            $("#reservationCount")
            .text(reservationNumber);



            $("#reservationList")
            .append(

                `<li>${lesson}</li>`

            );



            toastMesaj(
                "Rezervasyon başarılı!"
            );

        }

        else{

            toastMesaj(
                "Kontenjan dolu!"
            );

        }

    });




    // FAVORİ

    $(".favBtn").click(function(){

        $(this).text(
            "❤️ Favorilere Eklendi"
        );

    });




    // SEARCH

    $("#searchInput").keyup(function(){

        let value =

        $(this)
        .val()
        .toLowerCase();



        $(".card").filter(function(){

            $(this).toggle(

                $(this)
                .text()
                .toLowerCase()
                .indexOf(value) > -1

            );

        });

    });




    // FILTER

    $("#filter").change(function(){

        let level =
        $(this).val();



        if(level == "all"){

            $(".card").show();

        }

        else{

            $(".card").hide();

            $(".card").filter(function(){

                return $(this)
                .attr("data-level")
                == level;

            }).show();

        }

    });




    // BMI

    $("#bmiBtn").click(function(){

        let kg =
        parseFloat(
            $("#kg").val()
        );

        let boy =
        parseFloat(
            $("#boy").val()
        );



        if(isNaN(kg) || isNaN(boy)){

            $("#bmiResult").text(
                "Bilgileri giriniz"
            );

            return;

        }



        let sonuc =
        kg / (boy * boy);

        sonuc =
        sonuc.toFixed(2);



        $("#bmiResult").text(

            "BMI Sonucu: " + sonuc

        );

    });




    // AI ÖNERİ

    $("#aiBtn").click(function(){

        let mood =
        $("#moodSelect").val();

        let message = "";



        if(mood == "stress"){

            message =
            "Lotus Pose önerilir.";

        }

        else if(mood == "tired"){

            message =
            "Child Pose önerilir.";

        }

        else if(mood == "happy"){

            message =
            "Power Yoga önerilir.";

        }

        else{

            message =
            "Ruh hali seçiniz.";

        }



        $("#aiResult")
        .hide()
        .text(message)
        .fadeIn();

    });




    // ÜYELİK

    $("#registerBtn").click(function(){

        let username =
        $("#username").val();

        let email =
        $("#email").val();



        if(username == "" ||
           email == ""){

            $("#memberResult")
            .text(

                "Bilgileri doldurun"

            );

            return;

        }



        $("#memberResult")
        .text(

            username +
            " başarıyla üye oldu!"

        );



        let member =
        parseInt(

            $("#memberCount").text()

        );



        member++;

        $("#memberCount")
        .text(member);

    });




    // TOP BUTTON

    $(window).scroll(function(){

        if($(this).scrollTop() > 300){

            $("#topBtn").fadeIn();

        }

        else{

            $("#topBtn").fadeOut();

        }

    });




    $("#topBtn").click(function(){

        $("html, body").animate({

            scrollTop:0

        },800);

    });




});
