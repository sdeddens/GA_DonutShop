// jQuery Document Ready
$(function() {




var myData = $.ajax({
    url: "http://api.doughnuts.ga/doughnuts?",
    dataType: "jsonp",
    method: "GET",

    success: function(data, textStatus, jqXHR) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
		    $( "#doughnuts" ).append("<li id="+data[i].id + ">"+ data[i].flavor + " | "+data[i].style+"</li>");
    };



    }
});








});
