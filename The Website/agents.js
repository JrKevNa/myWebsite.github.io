$(document).ready(function()
{
    var slideIndex = 1;
    displaySlide(slideIndex);

    $(".next").on("click", function()
    {
        displaySlide(slideIndex += 1);
    })
    $(".previous").on("click", function()
    {
        displaySlide(slideIndex += -1);
    })

    $("#btn1").on("click", function()
    {
        displaySlide(slideIndex = 1);
    })
    $("#btn2").on("click", function()
    {
        displaySlide(slideIndex = 2);
    })
    $("#btn3").on("click", function()
    {
        displaySlide(slideIndex = 3);
    })
    $("#btn4").on("click", function()
    {
        displaySlide(slideIndex = 4);
    })

    function displaySlide(n) 
    {
        let totalslides = $(".slide");
        let totaldots = $(".footerdotbgr");
        let totalskills = $(".skill-char");
        
        if (n > totalslides.length) 
        {
            slideIndex = 1;
        }
        if (n < 1) 
        {
            slideIndex = totalslides.length;
        }

        totalslides.addClass("display").css({"display" : "none", "transition" : "5s"})
        //totalslides.addClass("display").css({"visibility" : "hidden", "transition" : "5s"})
        totalskills.addClass("display").css({"display" : "none", "transition" : "5s"})
        totaldots.removeClass(" active")
        
        totalslides[slideIndex-1].style.display = "block";
        //totalslides[slideIndex-1].style.visibility = "visible";
        //totalslides[slideIndex-1].className += " display";

        totaldots[slideIndex-1].className += " active";
        
        totalskills[slideIndex-1].style.display = "flex";
        //totalskills[slideIndex-1].style.visibility = "visible";
        //totalskills[slideIndex-1].className += " display";
    }
});