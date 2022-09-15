$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    // delay: 3000,
    // paginationSpeed: 5000,
    autoplaySpeed:4000,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$(document).ready(function() {
    $(".slideclass").on("click", function(e) {
        e.preventDefault()
        $(this).find(".slide-paragraph").slideToggle([4000]);
        $(this).siblings().find(".slide-paragraph").slideUp([4000]);
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        }
    });
});




    $(".ppl_lalel").on("click",function () {
        $(".ppl_lalel").removeClass("active");
        $(this).addClass("active");
    })

    function next_step(x) {
        // console.log(x);
        if(x == 2){
            zip = $("#zip_code").val();
            var o = "https://ziptasticapi.com/" + zip;
            $.getJSON(o, (function(e) {
                console.log(e.state), console.log(e.city), 
                $('#state_con').val(e.state), 
                $('#city').val(e.city),
                $("#zip_code_two").val(zip); 
            }))
        }
        $("#form_"+(x-1)).fadeOut(200);
        $("#form_"+x).fadeIn(300);
    }

    function prev_step(x) {

        $("#form_"+(x+1)).fadeOut(200);
        $("#form_"+x).fadeIn(300);
    }

    $(".firstBtn").on("click",function(e){
        e.preventDefault();
        $(".formStepProgress li:nth-child(2)").addClass("active_color");
    })
    $(".third_btn").on("click",function(e){
        e.preventDefault();
        $(".formStepProgress li:nth-child(3)").addClass("active_color");
    })
    $(".fourth_next").on("click",function(e){
        e.preventDefault();
        $(".formStepProgress li:nth-child(4)").addClass("active_color");
    })
    $(".fifth_next").on("click",function(e){
        e.preventDefault();
        $(".formStepProgress li:nth-child(5)").addClass("active_color");
    })
    $(".prev_one").on("click",function(e){
        e.preventDefault();
        $(".formStepProgress li:nth-child(2)").removeClass("active_color");
    })
    $(".prev_two").on("click",function(e){
        e.preventDefault();
        $(".formStepProgress li:nth-child(3)").removeClass("active_color");
    })
    $(".prev_three").on("click",function(e){
        e.preventDefault();
        $(".formStepProgress li:nth-child(4)").removeClass("active_color");
    })
    $(".prev_four").on("click",function(e){
        e.preventDefault();
        $(".formStepProgress li:nth-child(5)").removeClass("active_color");
    })
    
    

    
    $("#form_pro").on("submit",function(e){
        e.preventDefault();
        console.log("inin");
        people = $("input[type='radio'][name='people']:checked").val();
        zip = $("#zip_code").val();
        money = $("input[type='radio'][name='money']:checked").val();
        gender = $("input[type='radio'][name='gender']:checked").val();
        month = $('#dob-month option:selected').val();
        day = $('#dob-day option:selected').val();
        year = $("#year_birth").val();
        address = $("#address").val();
        city = $("#city").val();
        state = $('#state_con option:selected').val();
        zip_two = $("#zip_code_two").val();
        first_name = $("#f_name").val();
        last_name = $("#l_name").val();
        email = $("#e_adress").val();
        phone = $("#tel_number").val();
        jQuery.ajax({
            type: "POST",
            url: "php/form_data.php",
            data: {
            people : people,
            zip : zip,
            money : money,
            gender : gender,
            month : month,
            day : day,
            year : year,
            address : address,
            city : city,
            state : state,
            zip_two : zip_two,
            first_name : first_name,
            last_name : last_name,
            email : email,
            phone : phone,  
            },
            success: function(data) {
                console.log(data);
                window.location.href = 'thank-you.php';
                // jQuery("#form_pro")[0].reset();
                // jQuery(".result").html("Submitted!")
            },
            error: function() {
                alert('error handling here');
            }
        });
    });