const container =document.querySelector('.container')
const left =document.querySelector('.left');
const right =document.querySelector('.right');

let tabImage =[
    "images/img1.jpg", //0
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"//4
]

let nbr=tabImage.length;
var pos=0;

slide();

function slide() {
    document.slide.src=tabImage[pos];
    if (pos<nbr-1) {
            pos++;
        } else {
            pos=0;
        }
    setTimeout(slide, 5000);
}

right.addEventListener("click", ()=>{
    pos++;
    if(pos > nbr -1){
        pos = 0;
    }
    slide();
});

left.addEventListener('click',()=>{
    slide();
    pos--;
    if (pos < 0) {
        pos = nbr-1;        
    }
    slide();

});
// window.onload=slide;

// function afficherMasquerBouton() {
//     if(pos==1-nbr) 
//         right.style.visibility="hidden";
//     else 
//         right.style.visibility="visible";
//     if(pos==0) 
//         left.style.visibility="hidden";
//     else 
//         left.style.visibility="visible";
// }