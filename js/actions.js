$(function() {
    var cart = $('li.cart');
    var overlay = $('#contentWrap');
    var order = $('#order');
    var payment = $('section.filing div.billing form');
    var addCart = $('button#addtocart');
 
    cart.click(function() {
        if (overlay.is(':empty')) {
            overlay.load('../payment/cart.html #background-overlay');
        };

    });

    addCart.click(function() {
        if (overlay.is(':empty')) {
            overlay.load('../payment/cart.html #background-overlay');
        };

    });

    overlay.on('click', '#exit', function () {
        overlay.empty();
    });

    order.click(function() {
        if (overlay.is(':empty')) {
            overlay.load('../payment/purchase.html #background-overlay');
        };
    });

    overlay.on('change', '#plate-quantity', function () {
        var plateQty = parseInt($("#plate-quantity select").val());
        var cupQty = parseInt($("#cup-quantity select").val());

        var platePrice = Math.floor(plateQty*24.99*100)/100;
        var cupPrice = Math.floor(cupQty*18.99*100)/100;

        $(".plate .item-price").text("$"+platePrice);
        $("#total-price .final").text("$"+(Math.floor((cupPrice+platePrice+12.97)*100)/100));
    });

    overlay.on('change', '#cup-quantity', function () {
        var plateQty = parseInt($("#plate-quantity select").val());
        var cupQty = parseInt($("#cup-quantity select").val());

        var platePrice = Math.floor(plateQty*24.99*100)/100;
        var cupPrice = Math.floor(cupQty*18.99*100)/100;

        $(".cup .item-price").text("$"+cupPrice);
        $("#total-price .final").text("$"+(Math.floor((cupPrice+platePrice+12.97)*100)/100));
    });

    if ($(window).width() < 430) {
        console.log($(window).width());
        $('#mobile-masonry').load('../products/products.html .container');
    };
            
});
