/// <reference path="C:\Users\athomsen\Downloads\jquery.js" />

var template = $('<div><input class="legit" type="checkbox"/></div>');


$("ul.offer-list li.module").each(function () {

    var newStuff = template.clone();

    $(this).prepend(newStuff);

});

$('<div id="clickit" style="border-radius:3px;color:red;position:fixed; top:10px; right:10px; border:gray 1px solid; cursor:pointer; padding:5px; background:white;">Click To Dump</div>').appendTo("body");

$("#clickit").click(function () {

    $("input.legit:checked").each(function () {

        var link = $(this).parent().parent().find("a[itemprop=name]");

        var url = link.attr("href");

        var begin = url.lastIndexOf(".9.") + 3;

        var id = url.substr(begin, url.length - 11 - begin);

        console.log("db.Orders.findOne({\"_id\" : \"%s\"}{\"zipCode\":\"0\"})",id);

    });

});