// Justin D. Grumal 240005134
$(document).ready(function(){
    var serviceList = [];
    var total = 0;
    // Continue Button
    $("#continueBtn").click(function(){
        if($("#navTabServices").hasClass("active")&&total>0){
            $("#navTabStaff").removeClass("disabled").click();
            $("#staffContainer").append("<p id='staffPlaceholder'>No staff selected</p>");
        }
        else if($("#navTabStaff").hasClass("active")&&$(".staff").is(":checked")){
            $("#navTabDateTime").removeClass("disabled").click();
        }
        else if($("#navTabDateTime").hasClass("active")&&$(".time").is(":checked")){
            $("#navTabContact").removeClass("disabled").click();
            $("#continueBtn").text("Submit").prop("type","submit");
        }
    });
    
    // Tabs Function
    $("#navTabServices").click(function(){
        $("button[data-bs-toggle='tab']:not(#navTabServices)").addClass("disabled");
        $("#staffContainer, #dateTimeContainer").empty();
        $(".staff,.time,#agreeTermsConditions").prop("checked",false);
        $(".staffBtn,.timeBtn").removeClass("disabled");
        $(".staffBtn").text("+");
        $(".timeBtn, #timePlaceHolder").removeClass("collapse.show").addClass("collapse");
        $("#datePicker").val("");
        $("#continueBtn").text("Continue").prop("type","button");
    });
    $("#navTabStaff").click(function(){
        $("button[data-bs-toggle='tab']:not(#navTabServices,#navTabStaff)").addClass("disabled");
        $("#dateTimeContainer").empty();
        $(".time,#agreeTermsConditions").prop("checked",false);
        $(".timeBtn").removeClass("disabled");
        $(".timeBtn, #timePlaceHolder").removeClass("collapse.show").addClass("collapse");
        $("#datePicker").val("");
        $("#continueBtn").text("Continue").prop("type","button");
    });
    $("#navTabDateTime").click(function(){
        $("#navTabContact").addClass("disabled");
        $("#agreeTermsConditions").prop("checked",false);
        $("#continueBtn").text("Continue").prop("type","button");
    });

    // Back Button
    $("#backBtn").click(function(){
        if($("#navTabServices").hasClass("active")){
            window.location.href = "./index.html";
        }
        else if($("#navTabStaff").hasClass("active")){
            $("#navTabServices").click();
        }
        else if($("#navTabDateTime").hasClass("active")){
            $("#navTabStaff").click();
        }
        else if($("#navTabContact").hasClass("active")){
            $("#navTabDateTime").click();
        }
    });
    // Exit Button
    $("#exitBtn").click(function(){
        window.location.href = "./index.html";
    })

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
        const name = "Standard Haircut";
        const price = 50;
        // Checks if service is in the list
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#standardCutList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='standardCutBtn']").text("+");
            $(".haircutBtn:not(label[for='standardCutBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='standardCutList'>"+name+"<span>NZ$"+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='standardCutBtn']").text("-");
            $(".haircutBtn:not(label[for='standardCutBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Scisssor Cut
    $("#scissorCutBtn").click(function(){
        const name = "Scissor Cut";
        const price = 80;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#scissorCutList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='scissorCutBtn']").text("+");
            $(".haircutBtn:not(label[for='scissorCutBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='scissorCutList'>"+name+"<span>NZ$"+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='scissorCutBtn']").text("-");
            $(".haircutBtn:not(label[for='scissorCutBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Fade
    $("#fadeCutBtn").click(function(){
        const name = "Fade";
        const price = 70;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#fadeCutList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='fadeCutBtn']").text("+");
            $(".haircutBtn:not(label[for='fadeCutBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='fadeCutList'>"+name+"<span>NZ$"+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='fadeCutBtn']").text("-");
            $(".haircutBtn:not(label[for='fadeCutBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Buzz Cut
    $("#buzzCutBtn").click(function(){
        const name = "Buzz Cut";
        const price = 40;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#buzzCutList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='buzzCutBtn']").text("+");
            $(".haircutBtn:not(label[for='buzzCutBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='buzzCutList'>"+name+"<span>NZ$"+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='buzzCutBtn']").text("-");
            $(".haircutBtn:not(label[for='buzzCutBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Beard Trim
    $("#trimBeardBtn").click(function(){
        const name = "Beard Trim";
        const price = 30;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#trimBeardList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='trimBeardBtn']").text("+");
            $("label[for='fullBeardBtn']").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='trimBeardList'>"+name+"<span>NZ$"+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='trimBeardBtn']").text("-");
            $("label[for='fullBeardBtn']").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Full Shave
    $("#fullBeardBtn").click(function(){
        const name = "Full Shave";
        const price = 50;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#fullBeardList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='fullBeardBtn']").text("+");
            $("label[for='trimBeardBtn']").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='fullBeardList'>"+name+"<span>NZ$"+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='fullBeardBtn']").text("-");
            $("label[for='trimBeardBtn']").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Keratin Treatment
    $("#treatmentBtn").click(function(){
        const name = "Keratin Treatment";
        const price = 500;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#treatmentList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='treatmentBtn']").text("+");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='treatmentList'>"+name+"<span>NZ$"+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='treatmentBtn']").text("-");
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
            $(".staffBtn:not(label[for='noStaffBtn'])").addClass("disabled");
        }
        else{
            $("#staffPlaceholder").text("No staff selected");
            $("label[for='noStaffBtn']").text("+");
            $(".staffBtn:not(label[for='noStaffBtn'])").removeClass("disabled");
        }
    });
    // Marcie Stuward
    $("#marcieStaffBtn").click(function(){
        if($("#marcieStaffBtn").prop("checked")){
            $("#staffPlaceholder").text("Preference: "+$("#marcieStaffBtn").val());
            $("label[for='marcieStaffBtn']").text("-");
            $(".staffBtn:not(label[for='marcieStaffBtn'])").addClass("disabled");
        }
        else{
            $("#staffPlaceholder").text("No staff selected");
            $("label[for='marcieStaffBtn']").text("+");
            $(".staffBtn:not(label[for='marcieStaffBtn'])").removeClass("disabled");
        }
    });
    // Sadie Nguyen
    $("#sadieStaffBtn").click(function(){
        if($("#sadieStaffBtn").prop("checked")){
            $("#staffPlaceholder").text("Preference: "+$("#sadieStaffBtn").val());
            $("label[for='sadieStaffBtn']").text("-");
            $(".staffBtn:not(label[for='sadieStaffBtn'])").addClass("disabled");
        }
        else{
            $("#staffPlaceholder").text("No staff selected");
            $("label[for='sadieStaffBtn']").text("+");
            $(".staffBtn:not(label[for='sadieStaffBtn'])").removeClass("disabled");
        }
    });

    // Date & Time
    datePicker.min = new Date().toLocaleDateString("fr-ca");
    var date = "";
    // Date Picker
    $("#datePicker").on("change",function(){
        date = $('#datePicker').val();
        if(date === ""){
            console.log("No date selected");
            $(".time").prop("checked",false);
            $(".timeBtn, #timePlaceHolder").removeClass("collapse.show").addClass("collapse").removeClass("disabled");
            $("#dateTimeContainer").empty();
            return date;
        }
        else{
            console.log("Date selected");
            $(".timeBtn, #timePlaceHolder").removeClass("collapse").addClass("collapse.show");
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
