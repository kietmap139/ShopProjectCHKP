jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
});

jQuery(document).ready(function ($) {
    $(".switcher-btn").click(function () {
        $(".switcher-wrapper").toggleClass("switcher-toggled")
    });
    $("#page").click(function () {
        $(".switcher-wrapper").removeClass("switcher-toggled")
    });
     $('option').mousedown(function (e) {
        e.preventDefault();
        $(this).toggleClass('selected');

        $(this).prop('selected', !$(this).prop('selected'));
        return false;
    });
    $(".btn-themvaogio").click(function () {
        var product_id = $(this).val();
        $.ajax({
            url: '/GioHang/ThemVaoGio?SamPhamID=' + product_id,
            data: { SanPhamID: product_id },
            success: function (data) {
                $("body").load(location.href)
                /*alertify.set('notifier', 'position', 'top-right');
                alertify.success('Current position ');*/
            },
            error: function (data) {
                alert('Sản phẫm lỗi');
            }
        });

    });
    $('.btn-detailthemvaogio').click(function () {
        var product_id = $(this).val();
        var sizemoi = $('.sizemoidetail').val();
        $.ajax({
            url: '/GioHang/ThemVaoGio?SamPhamID=' + product_id + '&sizemoi=' + sizemoi,
            data: { SanPhamID: product_id },
            success: function (data) {
                $(".switcher-wrapper").toggleClass("switcher-toggled")
                $("body").load(location.href)
            },
            error: function (data) {

                alert('Sản phẫm lỗi');

            }
        });

    });
    $('.btn-xoakhoigio').click(function () {
        var product_id_delete = $(this).val();
        $.ajax({
            url: '/GioHang/XoaKhoiGio?SamPhamID=' + product_id_delete,
            data: { SanPhamID: product_id_delete },
            success: function (data) {
                $(".switcher-wrapper").toggleClass("switcher-toggled")
                $('body').load(location.href)
            },
            error: function (data) {

                alert('Sản phẫm lỗi');

            }
        });

    });
    $('.giohangprice').click(function () {
        var product_id = $(this).closest('.formsoluong').find('.idsp').val();
        var soluong = $(this).closest('.formsoluong').find('.soluongsp').val();
        var sizemoi = $(this).closest('.formsoluong').find('#select-size').val();
        $.ajax({
            url: '/GioHang/SuaSoLuong?SamPhamID=' + product_id + '&soluongmoi=' + soluong + '&sizemoi=' + sizemoi,
            data: { SanPhamID: product_id, soluongmoi: soluong, sizemoi: sizemoi },
            success: function (data) {
                $('body').load(location.href);
            },
            error: function (data) {
                alert('Sản phẫm lỗi');
            }
        });
    });

});

