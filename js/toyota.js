// click vào btn của mục tính năng sẽ hiển thị đúng nội dung
(function() {
    let featureListSafe = $('.feature-list__safes')
    let featureListOperate = $('.feature-list__operates')
    let btnOperate = $('.btn-operate')
    let btnSafe = $('.btn-safe')
    btnOperate.click(function() {
        featureListSafe.hide()
        featureListOperate.show()
    })
    btnSafe.click(function() {
        featureListSafe.show()
        featureListOperate.hide()
    })
}())


!(function() {
    let header = $('.header')
    let menuInfo = $('.menu-info')
    $(window).scroll(function() {
        if (($('html,body').scrollTop()) > 393) {
            header.hide()
            menuInfo.addClass('position-fixed')
            menuInfo.css({
                top: 0,
                right: 0,
                left: 0
            })
        } else {
            header.show()
            menuInfo.removeClass("position-fixed")
        }
    })

}());
// click vào btn của mục Phụ kiện sẽ hiển thị đúng nội dung
(function() {
    let accessoryListExterior = $('.accessory-list__exteriors')
    let accessoryListUltility = $('.accessory-list__ultilitys')
    let accessoryListAccessory = $('.accessory-list__accessorys')

    let btnExterior = $('.btn-exterior')
    let btnUltility = $('.btn-ultility')
    let btnAccessory = $('.btn-accessory')
    btnExterior.click(function() {
        accessoryListAccessory.hide()
        accessoryListUltility.hide()
        accessoryListExterior.show()
    })
    btnUltility.click(function() {
        accessoryListAccessory.hide()
        accessoryListUltility.show()
        accessoryListExterior.hide()
    })
    btnAccessory.click(function() {
        accessoryListAccessory.show()
        accessoryListUltility.hide()
        accessoryListExterior.hide()
    })
}())
// click vao đăng ký lái thử mở lên bảng đắng kí
    const buyBtns = document.querySelectorAll('.js-register-car')
    const modal = document.querySelector('.js-modal')
    const modalClose = document.querySelector('.js-modal-close')
    const modalContatiner = document.querySelector('.js-modal-container')
    function showBuyTickets(){
        modal.classList.add('open')
    }
    function hideBuyTickets(){
        modal.classList.remove('open')
    }

    for (const buyBtn of buyBtns){
        buyBtn.addEventListener('click', showBuyTickets)
    }

    modalClose.addEventListener('click', hideBuyTickets)
    modal.addEventListener('click', hideBuyTickets)
    modalContatiner.addEventListener('click', function(event) {
        event.stopPropagation()
    })