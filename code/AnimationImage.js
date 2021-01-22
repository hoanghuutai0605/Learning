document.addEventListener('DOMContentLoaded', () => {
    const LEFT = document.querySelector('i.fas.fa-angle-left');
    const RIGHT = document.querySelector('i.fas.fa-angle-right');
    const SLIDE = document.querySelectorAll('ul.list-items li.list-item');
    console.log(SLIDE.length);
    
    var chiSoHienTai = 0;
    var chiSoPhiaTruoc;
    var chiSoPhiaSau;
    // tạo biến để check hiệu ứng Animation 
    var movingStatus = false;
    console.log(movingStatus);
    LEFT.addEventListener('click', () => {
        // nếu check == true thì chuyển thành false còn đang false thì sau khi click sẽ chuyển thành true thì k click dc 
        if (movingStatus == true){return false};
        console.log(movingStatus);
            movingStatus = true;
        for (let i = 0; i < SLIDE.length - 1 ; i++) {
            for (let y = 0; y < SLIDE.length - 1; y++){
                // remove hết class có sẵn để thêm 1 class mới
                SLIDE[chiSoHienTai].classList.remove('toRight');
                SLIDE[chiSoHienTai].classList.remove('out');
                SLIDE[chiSoHienTai].classList.remove('show');
                SLIDE[chiSoHienTai].classList.add('hidden');
            }
        }
        chiSoPhiaTruoc = chiSoHienTai - 1;
        // toán tử 3 ngôi ( = if else) dùng để check biến chiSoHienTai k âm hoặc k nhận giá trị lớn hơn chuỗi và update chiSoHienTai để add class show slide 
        chiSoHienTai = chiSoPhiaTruoc < 0 ?  SLIDE.length - 1  :  chiSoPhiaTruoc;
        console.log("Chỉ số slide hiện tại là : " ,chiSoHienTai);
        for (let y = 0; y < SLIDE.length - 1; y++){
            //  remove đi class hidden 
            SLIDE[chiSoHienTai].classList.remove('hidden');
            SLIDE[chiSoHienTai].classList.remove('out');
        }
        // add class vào để show slide 
        SLIDE[chiSoHienTai].classList.add('show');
        // add Event để trả về giá trị false cho movingStatus để có thẻ click tiếp
        SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd',()=>{
            movingStatus = false;
        })
    })


    
    RIGHT.addEventListener('click', () => {
        if( movingStatus == true){return false}
            movingStatus = true;
        for (let i = 0; i < SLIDE.length - 1 ; i++) {
            for (let y = 0; y < SLIDE.length - 1; y++){
                SLIDE[chiSoHienTai].classList.remove('show');
                SLIDE[chiSoHienTai].classList.remove('hidden');

                SLIDE[chiSoHienTai].classList.remove('toRight');
                SLIDE[chiSoHienTai].classList.add('out');
            }
        }
        chiSoPhiaSau = chiSoHienTai + 1;
        chiSoHienTai = chiSoPhiaSau == SLIDE.length ?  0  :  chiSoPhiaSau;
        console.log("Chỉ số slide hiện tại là : " ,chiSoHienTai);
        for (let y = 0; y < SLIDE.length - 1; y++){
            SLIDE[chiSoHienTai].classList.remove('out');
            SLIDE[chiSoHienTai].classList.remove('hidden');

        }
        SLIDE[chiSoHienTai].classList.add('toRight');
        SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd', () => {
            movingStatus = false
        })
    })

    
}, false)