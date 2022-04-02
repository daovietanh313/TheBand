var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
// Đặt cái biến headerHeight để web vừa mở lên cái là nó lấy ngay giá trị height đầu tiên 
var headerHeight = header.clientHeight;
// Đóng mở mobile menu
mobileMenu.onclick = function() {
    // gán isClosed là giá trị  height đầu tiên lúc mở web
    var isClosed = header.clientHeight === headerHeight;
    // Khúc này nó sẽ so sánh, khi click chuột vào mobileMenu thì nếu mà cái header thuộc tính height đúng bằng với isClosed thì cái header sẽ được CSS Lại = 'auto' và ngược lại là null 
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
// Tự động đóng khi chọn menu 
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick= function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu) {
            header.style.height = null;
        } else {
            event.prevenDefault();
        }
        
    }
}