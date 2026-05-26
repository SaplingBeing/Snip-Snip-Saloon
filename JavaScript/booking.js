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
    // Fringe Cut
    $("#fringeTrimBtn").click(function(){
        const name = "Fringe Trim";
        const price = 30;
        // Checks if service is in the list
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#standardCutList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='standardCutBtn']").text("+");
            $(".haircutBtn:not(label[for='fringeTrimBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='standardCutList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='standardCutBtn']").text("-");
            $(".haircutBtn:not(label[for='fringeTrimBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
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
            $("#bookingList").append("<li class='d-flex justify-content-between' id='standardCutList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
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
            $("#bookingList").append("<li class='d-flex justify-content-between' id='scissorCutList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
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
            $("#bookingList").append("<li class='d-flex justify-content-between' id='fadeCutList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
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
            $("#bookingList").append("<li class='d-flex justify-content-between' id='buzzCutList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
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
            $("#bookingList").append("<li class='d-flex justify-content-between' id='trimBeardList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
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
            $("#bookingList").append("<li class='d-flex justify-content-between' id='fullBeardList'>"+name+"<span class='priceText'>NZD"+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='fullBeardBtn']").text("-");
            $("label[for='trimBeardBtn']").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Toner
    $("#tonerBtn").click(function(){
        const name = "Toner";
        const price = 100;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#tonerList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='tonerBtn']").text("+");
            $(".colourBtn:not(label[for='tonerBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='tonerList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='tonerBtn']").text("-");
            $(".colourBtn:not(label[for='tonerBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Global
    $("#globalBtn").click(function(){
        const name = "Global";
        const price = 200;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#globalList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='globalBtn']").text("+");
            $(".colourBtn:not(label[for='globalBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='globalList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='globalBtn']").text("-");
            $(".colourBtn:not(label[for='globalBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Bleach
    $("#bleachBtn").click(function(){
        const name = "Bleach";
        const price = 250;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#bleachList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='bleachBtn']").text("+");
            $(".colourBtn:not(label[for='bleachBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='bleachList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='bleachBtn']").text("-");
            $(".colourBtn:not(label[for='bleachBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Foils
    $("#foilsBtn").click(function(){
        const name = "Foils";
        const price = 300;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#foilsList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='foilsBtn']").text("+");
            $(".colourBtn:not(label[for='foilsBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='foilsList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='foilsBtn']").text("-");
            $(".colourBtn:not(label[for='foilsBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Balayage
    $("#balayageBtn").click(function(){
        const name = "Balayage";
        const price = 400;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#balayageList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='balayageBtn']").text("+");
            $(".colourBtn:not(label[for='balayageBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='balayageList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='balayageBtn']").text("-");
            $(".colourBtn:not(label[for='balayageBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Cold Perm
    $("#coldPermBtn").click(function(){
        const name = "Cold Perm";
        const price = 250;
        // Checks if service is in the list
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#coldPermList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='coldPermBtn']").text("+");
            $(".treatmentBtn:not(label[for='coldPermBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='coldPermList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='coldPermBtn']").text("-");
            $(".treatmentBtn:not(label[for='coldPermBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Digital Perm
    $("#digitalPermBtn").click(function(){
        const name = "Digital Perm";
        const price = 300;
        // Checks if service is in the list
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#digitalPermList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='digitalPermBtn']").text("+");
            $(".treatmentBtn:not(label[for='digitalPermBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='digitalPermList'>"+name+"<span class='priceText'>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='digitalPermBtn']").text("-");
            $(".treatmentBtn:not(label[for='digitalPermBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Keratin Treatment
    $("#keratinBtn").click(function(){
        const name = "Keratin Treatment";
        const price = 500;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#keratinList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='keratinBtn']").text("+");
            $(".treatmentBtn:not(label[for='keratinBtn'])").removeClass("disabled");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='keratinList'>"+name+"<span>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='keratinBtn']").text("-");
            $(".treatmentBtn:not(label[for='keratinBtn'])").addClass("disabled");
        }
        console.log(serviceList);
        console.log(total);
    });
    // Blow Dry
    $("#blowDryBtn").click(function(){
        const name = "Blow Dry (Incl. Shampoo)";
        const price = 50;
        if(serviceList.includes(name) == true){ 
            const index = serviceList.indexOf(name);
            serviceList.splice(index, 1);
            $("#blowDryList").remove();
            total -= price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='blowDryBtn']").text("+");
        }
        else{
            serviceList.push(name);
            $("#bookingList").append("<li class='d-flex justify-content-between' id='blowDryList'>"+name+"<span>NZD "+price+"</span></li>");
            total += price;
            $("#totalPrice").text(total);
            isServiceEmpty();
            $("label[for='blowDryBtn']").text("-");
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
