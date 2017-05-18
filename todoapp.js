$("#plus").click(function () {
    $(".inputbox").slideToggle(1000);
})

$("#submit").click(function () {
    if($("#submit").html()=="Submit"){
    if($(".textfield").val()!="") {
        var tfield = $(".textfield").val();
        var subdiv = $('<div/>').addClass("subdiv");
        subdiv.append($('<div class="checkdiv"><input type="checkbox" class="cbox"></div>'))
        var output = $('<div class="output"></div>').text(tfield).click(y);
        subdiv.append(output);
        $("#outputdiv").append(subdiv);
        $(".textfield").val("");
        $(".inputbox").slideUp(1000)
    }
    }
    else{
        $("#espan").parent().html($("textarea").val());
        $("#espan").remove();
        $(".textfield").val("");
        $(".inputbox").slideUp(1000)

    }
})

var editable = $('<div/>').addClass("editable");
var img1 = $('<img/>').attr("src", "../image/edit.png").addClass("edit").click(edt)
var img2 = $('<img/>').attr("src", "../image/delete.png").addClass("delete").click(del)
editable.append(img1);
editable.append(img2);

    function y() {
        editable.insertAfter($(this).closest(".output"))
    }

$("#cancel").click(function () {
    $(".inputbox").slideUp(500);
})

function del(){
    $(this).closest(".subdiv").remove();
    console.log("h");
}
function edt(){
    $(".inputbox").slideToggle(1000);
    var edbox=$(this).parent().prev().html()
    console.log(edbox)
    $(".textfield").val(edbox);
    $(this).parent().prev().append($('<span id="espan"></span>'));
    $("#submit").html("Edit");



}

