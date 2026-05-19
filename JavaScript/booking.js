// Justin D. Grumal 240005134
$(document).ready(function(){
    var serviceList = [];
    var total = 0;
    // Continue Btn
    $("#conta").click(function(){
        if($("#navTabServices").hasClass("active")&&total>0){
            $("#navTabStaff").removeClass("disabled").click();
            $("#staffContainer").append("<p id='staffPlaceholder'>No staff selected</p>");
        }
        else if($("#noStaffBtn").prop("checked")||$("#marcieStaffBtn").prop("checked")||$("#sadieStaffBtn").prop("checked")){
            console.log("IT WORKS");
            $("#navTabDateTime").removeClass("disabled").click();
        }
    });
    $("#navTabServices").click(function(){
        $("#navTabStaff").addClass("disabled");
        $("#staffContainer").empty();
        $("#noStaffBtn,#marcieStaffBtn,#sadieStaffBtn").prop("checked",false);
        $("label[for='noStaffBtn'],label[for='marcieStaffBtn'],label[for='sadieStaffBtn']").text("+").removeClass("disabled");
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
        if($("#noStaffBtn").prop("checked")){
            $("#staffPlaceholder").text("Preference: None");
            $("label[for='noStaffBtn']").text("-");
            $("label[for='marcieStaffBtn'],label[for='sadieStaffBtn']").addClass("disabled");
        }
        else{
            $("#staffPlaceholder").text("No staff selected");
            $("label[for='noStaffBtn']").text("+");
            $("label[for='marcieStaffBtn'],label[for='sadieStaffBtn']").removeClass("disabled");
        }
    });
    // Marcie Stuward
    $("#marcieStaffBtn").click(function(){
        if($("#marcieStaffBtn").prop("checked")){
            $("#staffPlaceholder").text("Preference: Marcie Stuward");
            $("label[for='marcieStaffBtn']").text("-");
            $("label[for='noStaffBtn'],label[for='sadieStaffBtn']").addClass("disabled");
        }
        else{
            $("#staffPlaceholder").text("No staff selected");
            $("label[for='marcieStaffBtn']").text("+");
            $("label[for='noStaffBtn'],label[for='sadieStaffBtn']").removeClass("disabled");
        }
    });
    // Sadie Nguyen
    $("#sadieStaffBtn").click(function(){
        if($("#sadieStaffBtn").prop("checked")){
            $("#staffPlaceholder").text("Preference: Sadie Nguyen");
            $("label[for='sadieStaffBtn']").text("-");
            $("label[for='noStaffBtn'],label[for='marcieStaffBtn']").addClass("disabled");
        }
        else{
            $("#staffPlaceholder").text("No staff selected");
            $("label[for='sadieStaffBtn']").text("+");
            $("label[for='noStaffBtn'],label[for='marcieStaffBtn']").removeClass("disabled");
        }
    });

    // Date Picker 
    datePicker.min = new Date().toLocaleDateString("fr-ca");
    
    $("#datePicker").on("change",function(){
        if($('#datePicker').val() === ""){
            console.log("No date selected");
            $("label[for='nine'], label[for='ten'], label[for='eleven'], label[for='twelve'], label[for='thirteen']").removeClass("collapse.show").addClass("collapse");
            $("#dateTimeContainer").empty();
        }
        else{
            console.log("Date selected");
            $("label[for='nine'], label[for='ten'], label[for='eleven'], label[for='twelve'], label[for='thirteen']").removeClass("collapse").addClass("collapse.show");
        }
    });

    $("#nine").click(function(){
        if($("#nine").prop("checked")){
            $("#dateTimeContainer").append("<p>Date: "+$('#datePicker').val()+" | Time: 09:00</p>");
            $("label[for='ten'], label[for='eleven'], label[for='twelve'], label[for='thirteen']").addClass("disabled");
        }
        else{
            $("#dateTimeContainer").empty();
            $("label[for='ten'], label[for='eleven'], label[for='twelve'], label[for='thirteen']").removeClass("disabled");
        }
        
    });
    
});
