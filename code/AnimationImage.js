document.addEventListener('DOMContentLoaded', () => {
    const LEFT = document.querySelector('i.fas.fa-angle-left');
    const RIGHT = document.querySelector('i.fas.fa-angle-right');
    const SLIDE = document.querySelectorAll('ul.list-items li.list-item');
    console.log(SLIDE.length);
    
    var chiSoHienTai = 0;
    // var chiSoPhiaTruoc;
    // var chiSoPhiaSau;
    // tạo biến để check hiệu ứng Animation 
    // var movingStatus = false;
    // console.log(movingStatus);
    // LEFT.addEventListener('click', () => {
    //     // nếu check == true thì chuyển thành false còn đang false thì sau khi click sẽ chuyển thành true thì k click dc 
    //     if (movingStatus == true){return false};
    //     // console.log(movingStatus);
    //         movingStatus = true;
    //     for (let i = 0; i < SLIDE.length - 1 ; i++) {
    //         for (let y = 0; y < SLIDE.length - 1; y++){
    //             // remove hết class có sẵn để thêm 1 class mới
    //             SLIDE[chiSoHienTai].classList.remove('toRight');
    //             SLIDE[chiSoHienTai].classList.remove('out');
    //             SLIDE[chiSoHienTai].classList.remove('show');
    //             SLIDE[chiSoHienTai].classList.add('hidden');
    //         }
    //     }
    //     chiSoHienTai = chiSoHienTai - 1;
    //     // toán tử 3 ngôi ( = if else) dùng để check biến chiSoHienTai k âm hoặc k nhận giá trị lớn hơn chuỗi và update chiSoHienTai để add class show slide 
    //     chiSoHienTai = chiSoHienTai < 0 ?  SLIDE.length - 1  :  chiSoHienTai;
    //     console.log("Chỉ số slide hiện tại là : " ,chiSoHienTai);
    //     for (let y = 0; y < SLIDE.length - 1; y++){
    //         //  remove đi class hidden 
    //         SLIDE[chiSoHienTai].classList.remove('hidden');
    //         SLIDE[chiSoHienTai].classList.remove('out');
    //     }
    //     // add class vào để show slide 
    //     SLIDE[chiSoHienTai].classList.add('show');
    //     // add Event để trả về giá trị false cho movingStatus để có thẻ click tiếp
    //     SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd',()=>{
    //         movingStatus = false;
    //     })
    // })


    
    // RIGHT.addEventListener('click', () => {
    //     if( movingStatus == true){return false}
    //         movingStatus = true;
    //     for (let i = 0; i < SLIDE.length - 1 ; i++) {  
    //         for (let y = 0; y < SLIDE.length - 1; y++){
    //             SLIDE[chiSoHienTai].classList.remove('show');
    //             SLIDE[chiSoHienTai].classList.remove('hidden');

    //             SLIDE[chiSoHienTai].classList.remove('toRight');
    //             SLIDE[chiSoHienTai].classList.add('out');
    //         }
    //     }
    //     // chiSoPhiaSau = chiSoHienTai + 1;
    //     // chiSoHienTai = chiSoPhiaSau == SLIDE.length ?  0  :  chiSoPhiaSau;
    //     //Ruts gon
    //     chiSoHienTai = chiSoHienTai + 1;
    //     chiSoHienTai = chiSoHienTai == SLIDE.length ?  0  :  chiSoHienTai;
    //     console.log("Chỉ số slide hiện tại là : " ,chiSoHienTai);
    //     for (let y = 0; y < SLIDE.length - 1; y++){
    //         SLIDE[chiSoHienTai].classList.remove('out');
    //         SLIDE[chiSoHienTai].classList.remove('hidden');

    //     }
    //     SLIDE[chiSoHienTai].classList.add('toRight');
    //     SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd', () => {
    //         movingStatus = false
    //     })
    // })
    //======================================================================================== //========================================================================================
     //======================================================================================== //========================================================================================
     // Phần Nâng Cao
    // var  movingStatus = false;
    // function leftOrRight(button){
    //     if( movingStatus == true){return false};
    //     movingStatus = true;
    //     for (let i = 0; i < SLIDE.length - 1; i++) {
    //         SLIDE[chiSoHienTai].classList.remove('show');
    //         SLIDE[chiSoHienTai].classList.remove('toRight');
            
    //     }
    //     if (button == 'left'){
    //         SLIDE[chiSoHienTai].classList.add('hidden');
    //         chiSoHienTai = chiSoHienTai -1;
    //         chiSoHienTai = chiSoHienTai < 0 ? SLIDE.length - 1 : chiSoHienTai;

    //     }else{
    //         SLIDE[chiSoHienTai].classList.add('out');
    //         chiSoHienTai = chiSoHienTai +1;
    //         chiSoHienTai = chiSoHienTai > SLIDE.length -1 ? chiSoHienTai = 0 : chiSoHienTai;
    //     }
    //     for (let y = 0; y < SLIDE.length - 1; y++) {
    //         SLIDE[chiSoHienTai].classList.remove('hidden');
    //         SLIDE[chiSoHienTai].classList.remove('out');


            
    //     }
    //     if(button == 'left'){
    //         SLIDE[chiSoHienTai].classList.add('show');
    //         SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd',()=>{
    //             movingStatus = false;
    //         })
    //     }else{
    //         SLIDE[chiSoHienTai].classList.add('toRight');
    //         SLIDE[chiSoHienTai].addEventListener('webkitAnimationEnd',()=>{
    //             movingStatus = false;
    //         })
    //     }

    // };

    // LEFT.addEventListener('click',()=>{
    //     leftOrRight('left');
    // })
    // RIGHT.addEventListener('click',() => {
    //     leftOrRight('right');
    // })
 //======================================================================================== //========================================================================================
  //======================================================================================== //========================================================================================
   //======================================================================================== //========================================================================================
   //Auto slide
   // var controlBtns = 0;
   var autoSlide = setInterval(()=>{
      for (let i = 0; i < SLIDE.length - 1 ; i++) {
          SLIDE[chiSoHienTai].classList.remove('show');
      }
      SLIDE[chiSoHienTai].classList.add('hidden');
      // controlBtns[presentIndex].classList.remove('active');
      chiSoHienTai = chiSoHienTai - 1;
      chiSoHienTai = chiSoHienTai > chiSoHienTai < 0 ? 0 : presentIndex;

      for (let y = 0; y < SLIDE.length - 1; y++){
          SLIDE[chiSoHienTai].classList.remove('hidden');
      }
      SLIDE[chiSoHienTai].classList.add('show');
      // controlBtns[presentIndex].classList.add('active');

      
  },3000);
    
}, false)