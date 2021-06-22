let x = document.getElementById('burgers')
let y = document.querySelector('#navbars')
let a =1;

x.addEventListener('click',function(){
    if(a==1){
        document.getElementById("navbars").classList.add('slide');
        a=0;
    }else{
        document.getElementById("navbars").classList.remove('slide');
        a=1;
    }
});