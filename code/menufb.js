   document.addEventListener('DOMContentLoaded',() => {
       var btn = document.querySelectorAll('.icon');
       console.log(btn);
        var dropdown = document.querySelectorAll('.drop-down')
       for (let i = 0; i  < btn .length; i++ ) {
           btn[i].addEventListener('click',function(){
            // neu chua cho active thi them active va ngc lai
            if (this.classList.contains('active') == 1 ) {
                this.classList.remove('active')
                dropdown[i].classList.remove('active2')
            } else {
                // bo het di nhung thang dang co 
                for (let y = 0; y < btn.length; y++) {
                    btn[y].classList.remove('active');
                    dropdown[y].classList.remove('active2')
                }
                // them active vao thang dc click
                this.classList.add('active');
                for (let z = 0; z < dropdown.length ; z++) {
                    dropdown[z].classList.remove('active2')
                    
                }
                dropdown[i].classList.add('active2');
            }
             })
       }

   },false);