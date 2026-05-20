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
        else if($("#navTabStaff").hasClass("active")&&($("#noStaffBtn").prop("checked")||$("#marcieStaffBtn").prop("checked")||$("#sadieStaffBtn").prop("checked"))){
            $("#navTabDateTime").removeClass("disabled").click();
        }
        else if($("#navTabDateTime").hasClass("active")&&$(".time:checked").length>0){
            $("#navTabContact").removeClass("disabled").click();
            $("#conta").text("Submit").prop('type', 'submit');
        }
    });
    $("#navTabServices").click(function(){
        $("#navTabStaff").addClass("disabled");
        $("#staffContainer").empty();
        $("#noStaffBtn,#marcieStaffBtn,#sadieStaffBtn").prop("checked",false);
        $(".staff").text("+").removeClass("disabled");
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
            $("#staffPlaceholder").text("Preference: "+$("#noStaffBtn").val());
            $("label[for='noStaffBtn']").text("-");
            $(".staff:not(label[for='noStaffBtn'])").addClass("disabled");
        }
        else{
            $("#staffPlaceholder").text("No staff selected");
            $("label[for='noStaffBtn']").text("+");
            $(".staff:not(label[for='noStaffBtn'])").removeClass("disabled");
        }
    });
    // Marcie Stuward
    $("#marcieStaffBtn").click(function(){
        if($("#marcieStaffBtn").prop("checked")){
            $("#staffPlaceholder").text("Preference: "+$("#marcieStaffBtn").val());
            $("label[for='marcieStaffBtn']").text("-");
            $(".staff:not(label[for='marcieStaffBtn'])").addClass("disabled");
        }
        else{
            $("#staffPlaceholder").text("No staff selected");
            $("label[for='marcieStaffBtn']").text("+");
            $(".staff:not(label[for='marcieStaffBtn'])").removeClass("disabled");
        }
    });
    // Sadie Nguyen
    $("#sadieStaffBtn").click(function(){
        if($("#sadieStaffBtn").prop("checked")){
            $("#staffPlaceholder").text("Preference: "+$("#sadieStaffBtn").val());
            $("label[for='sadieStaffBtn']").text("-");
            $(".staff:not(label[for='sadieStaffBtn'])").addClass("disabled");
        }
        else{
            $("#staffPlaceholder").text("No staff selected");
            $("label[for='sadieStaffBtn']").text("+");
            $(".staff:not(label[for='sadieStaffBtn'])").removeClass("disabled");
        }
    });

    // Date Picker 
    datePicker.min = new Date().toLocaleDateString("fr-ca");
    var date = "";
    $("#datePicker").on("change",function(){
        date = $('#datePicker').val();
        if(date === ""){
            console.log("No date selected");
            $(".time").prop("checked",false);
            $(".timeBtn").removeClass("collapse.show").addClass("collapse").removeClass("disabled");
            $("#dateTimeContainer").empty();
            return date;
        }
        else{
            console.log("Date selected");
            $(".timeBtn").removeClass("collapse").addClass("collapse.show");
            return date;
        }
    });
    // Nine
    $("#nine").click(function(){
        if($("#nine").prop("checked")){
            $("#dateTimeContainer").append("<p>Date: "+date+" | Time: "+$("#nine").val()+"</p>");
            $(".timeBtn:not(label[for='nine'])").addClass("disabled");
        }
        else{
            $("#dateTimeContainer").empty();
            $(".timeBtn:not(label[for='nine']").removeClass("disabled");
        }
    });
    // Ten
    $("#ten").click(function(){
        if($("#ten").prop("checked")){
            $("#dateTimeContainer").append("<p>Date: "+date+" | Time: "+$("#ten").val()+"</p>");
            $(".timeBtn:not(label[for='ten'])").addClass("disabled");
        }
        else{
            $("#dateTimeContainer").empty();
            $(".timeBtn:not(label[for='ten']").removeClass("disabled");
        }
    });
    // Eleven
    $("#eleven").click(function(){
        if($("#eleven").prop("checked")){
            $("#dateTimeContainer").append("<p>Date: "+date+" | Time: "+$("#eleven").val()+"</p>");
            $(".timeBtn:not(label[for='eleven'])").addClass("disabled");
        }
        else{
            $("#dateTimeContainer").empty();
            $(".timeBtn:not(label[for='eleven']").removeClass("disabled");
        }
    });
    // Twelve
    $("#twelve").click(function(){
        if($("#twelve").prop("checked")){
            $("#dateTimeContainer").append("<p>Date: "+date+" | Time: "+$("#twelve").val()+"</p>");
            $(".timeBtn:not(label[for='twelve'])").addClass("disabled");
        }
        else{
            $("#dateTimeContainer").empty();
            $(".timeBtn:not(label[for='twelve']").removeClass("disabled");
        }
    });
    // Thirteen
    $("#thirteen").click(function(){
        if($("#thirteen").prop("checked")){
            $("#dateTimeContainer").append("<p>Date: "+date+" | Time: "+$("#thirteen").val()+"</p>");
            $(".timeBtn:not(label[for='thirteen'])").addClass("disabled");
        }
        else{
            $("#dateTimeContainer").empty();
            $(".timeBtn:not(label[for='thirteen']").removeClass("disabled");
        }
    });
});
