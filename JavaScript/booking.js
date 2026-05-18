// Justin D. Grumal 240005134
$(document).ready(function(){
    var serviceList = [];
    var total = 0;

    $("#conta").click(function(){
        if(total > 0){
            $("#navTabStaff").removeClass("disabled").click();
        }
    });
    $("#navTabServices").click(function(){
        $("#navTabStaff").addClass("disabled");
    });

    // Services
    // If no services is selected, a msg will display
    function isServiceEmpty(){
        if(serviceList.length === 0){
            $("#bookingPlaceHolder").removeClass("collapse").addClass("collapse.show");
        }
        else{
            $("#bookingPlaceHolder").removeClass("collapse.show").addClass("collapse");
        }
    }
    // Standard Haircut
    $("#standardCutBtn").click(function(){
        // Checks if service is in the list
        if(serviceList.includes("standardHaircut") == true){ 
            const target = "standardHaircut";
            const index = serviceList.indexOf(target);
            serviceList.splice(index, 1);
            $("#standardCutList").remove();
            total -= 50;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="standardCutBtn"]').text("+");
            $('label[for="scissorCutBtn"],label[for="fadeCutBtn"],label[for="buzzCutBtn"]').removeClass("disabled");
        }
        else{
            serviceList.push("standardHaircut");
            $("#bookingList").append("<li class='d-flex justify-content-between' id='standardCutList'>Standard Haircut<span class='preferredStaff'></span><span>$50</span></li>");
            total += 50;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="standardCutBtn"]').text("-");
            $("label[for='scissorCutBtn'],label[for='fadeCutBtn'],label[for='buzzCutBtn']").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Scisssor Cut
    $("#scissorCutBtn").click(function(){
        if(serviceList.includes("scissorCut") == true){ 
            const target = "scissorCut";
            const index = serviceList.indexOf(target);
            serviceList.splice(index, 1);
            $("#scissorCutList").remove();
            total -= 80;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="scissorCutBtn"]').text("+");
            $('label[for="standardCutBtn"],label[for="fadeCutBtn"],label[for="buzzCutBtn"]').removeClass("disabled");
        }
        else{
            serviceList.push("scissorCut");
            $("#bookingList").append("<li id='scissorCutList'>Scissor Cut</li>");
            total += 80;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="scissorCutBtn"]').text("-");
            $('label[for="standardCutBtn"],label[for="fadeCutBtn"],label[for="buzzCutBtn"]').addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Fade
    $("#fadeCutBtn").click(function(){
        if(serviceList.includes("fadeCut") == true){ 
            const target = "fadeCut";
            const index = serviceList.indexOf(target);
            serviceList.splice(index, 1);
            $("#fadeCutList").remove();
            total -= 70;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="fadeCutBtn"]').text("+");
            $('label[for="scissorCutBtn"],label[for="standardCutBtn"],label[for="buzzCutBtn"]').removeClass("disabled");
        }
        else{
            serviceList.push("fadeCut");
            $("#bookingList").append("<li id='fadeCutList'>Fade</li>");
            total += 70;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="fadeCutBtn"]').text("-");
            $('label[for="scissorCutBtn"],label[for="standardCutBtn"],label[for="buzzCutBtn"]').addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Buzz Cut
    $("#buzzCutBtn").click(function(){
        if(serviceList.includes("buzzCut") == true){ 
            const target = "buzzCut";
            const index = serviceList.indexOf(target);
            serviceList.splice(index, 1);
            $("#buzzCutList").remove();
            total -= 40;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="buzzCutBtn"]').text("+");
            $('label[for="scissorCutBtn"],label[for="fadeCutBtn"],label[for="standardCutBtn"]').removeClass("disabled");
        }
        else{
            serviceList.push("buzzCut");
            $("#bookingList").append("<li id='buzzCutList'>Buzz Cut</li>");
            total += 40;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="buzzCutBtn"]').text("-");
            $('label[for="scissorCutBtn"],label[for="fadeCutBtn"],label[for="standardCutBtn"]').addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Beard Trim
    $("#trimBeardBtn").click(function(){
        if(serviceList.includes("trimBeard") == true){ 
            const target = "trimBeard";
            const index = serviceList.indexOf(target);
            serviceList.splice(index, 1);
            $("#trimBeardList").remove();
            total -= 30;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="trimBeardBtn"]').text("+");
            $('label[for="fullBeardBtn"]').removeClass("disabled");
        }
        else{
            serviceList.push("trimBeard");
            $("#bookingList").append("<li class='d-flex justify-content-between' id='trimBeardList'>Beard Trim<span class='preferredStaff'></span><span>$30</span></li>");
            total += 30;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="trimBeardBtn"]').text("-");
            $('label[for="fullBeardBtn"]').addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Full Shave
    $("#fullBeardBtn").click(function(){
        if(serviceList.includes("fullBeard") == true){ 
            const target = "fullBeard";
            const index = serviceList.indexOf(target);
            serviceList.splice(index, 1);
            $("#fullBeardList").remove();
            total -= 50;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="fullBeardBtn"]').text("+");
            $('label[for="trimBeardBtn"]').removeClass("disabled");
        }
        else{
            serviceList.push("fullBeard");
            $("#bookingList").append("<li id='fullBeardList'>Full Shave</li>");
            total += 50;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $('label[for="fullBeardBtn"]').text("-");
            $('label[for="trimBeardBtn"]').addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Keratin Treatment
    $("#treatmentBtn").click(function(){
        if(serviceList.includes("treatment") == true){ 
            const target = "treatment";
            const index = serviceList.indexOf(target);
            serviceList.splice(index, 1);
            $("#treatmentList").remove();
            total -= 500;
            $("#totalPrice").text(total);
            isServiceEmpty();
        }
        else{
            serviceList.push("treatment");
            $("#bookingList").append("<li id='treatmentList'>Keratin Treatment</li>");
            total += 500;
            $("#totalPrice").text(total);
            isServiceEmpty();
        }
        console.log(serviceList);
        console.log(total);
    });

    // Staff
    // No Prefference
    $("#noStaffBtn").click(function(){
        if($(".preferredStaff").is(":empty")){
            $(".preferredStaff").text("No Preference");
            $("label[for='noStaffBtn']").text("Selected")
        }
        else{
            $(".preferredStaff").empty();
            $("label[for='noStaffBtn']").text("Select")
        }
        
    });
});
