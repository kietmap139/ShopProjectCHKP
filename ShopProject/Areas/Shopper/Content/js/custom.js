(function () {
    $('.add').on('click',function (e){
        var product_id = $(this).attr('pro_id');
        /*var idd = $('#SanPhamID' + product_id).val();*/
        
        $.ajax({
            url: '@Url.Action("GioHang", "ThemVaoGio")',
            data: { SanPhamID : product_id },
            success: function (data) {

                alert('đã thêm');

            },
            error: function (data) {

                alert('error');

            }
        });


    })

});
