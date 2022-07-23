var $orders = $('#orders');
var $name = $('#name');
var $email = $('#email');
var $phone = $('#phone');
var $date = $('#date');
var $time = $('#time');
var $people = $('#people');

$.ajax({
    type:'GET',
    url:'/api/orders.json',
    success:function(orders) {
        $.each(orders,function(i,order){
            $orders.append('<li>name: '+ order.name +', name:'+order.name +'</li>');
        });
    },
    error: function() {
        alert('error loading orders');
    }
});

$('#add-order').on('click', function(){

    var order = {
        name: $name.val(),
        drink: $drink.val(),
    };

    $.ajax({
        type: 'POST',
        url:'/api/orders.json',
        data:order,
        success: function(neworder){
            $orders.append('<li>name: '+ neworder.name +', drink:'+neworder.drink +'</li>');
        },
        error: function() {
            alert('error saving order');
        }
    });
});