const slidepanels=document.querySelector('.slidepanels');
const oneNextBtn=document.querySelector('.nextBtn');
const twoNextBtn=document.querySelector('.next-1');
const thirdNextBtn=document.querySelector('.next-2');
const fourNextBtn=document.querySelector('.next-3');
const fiveNextBtn=document.querySelector('.next-4');

const twoPrevBtn=document.querySelector('.prev-1');
const thirdPrevBtn=document.querySelector('.prev-2');
const fourPrevBtn=document.querySelector('.prev-3');
const fivePrevBtn=document.querySelector('.prev-4');
const sixPrevBtn=document.querySelector('.prev-5');

const submitBtn=document.querySelector('.submit');

const progresscheck=document.querySelectorAll('.step .check');
const bullet=document.querySelectorAll('.step .bullet');

let max=6;
let current=1;



oneNextBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "-20%";
  bullet[current-1].classList.add("active");
  progresscheck[current-1].classList.add("active");
  current += 1;
});
twoNextBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "-50%";
  bullet[current-1].classList.add("active");
  progresscheck[current-1].classList.add("active");
  current += 1;
});
thirdNextBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "-75%";
  bullet[current-1].classList.add("active");
  progresscheck[current-1].classList.add("active");
  current += 1;
});
fourNextBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "-100%";
  bullet[current-1].classList.add("active");
  progresscheck[current-1].classList.add("active");
  current += 1;
});
fiveNextBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "-125%";
  bullet[current-1].classList.add("active");
  progresscheck[current-1].classList.add("active");
  current += 1;
});

  submitBtn.addEventListener("click", function(){
  bullet[current-1].classList.add("active");
  progresscheck[current-1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Thanks for Joining us!");
    location.reload();
  },800)
});




twoPrevBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "0%";
  bullet[current-2].classList.remove("active");
  progresscheck[current-2].classList.remove("active");
  current -= 1;
});
thirdPrevBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "-20%";
  bullet[current-2].classList.remove("active");
  progresscheck[current-2].classList.remove("active");
  current -= 1;
});
fourPrevBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "-50%";
  bullet[current-2].classList.remove("active");
  progresscheck[current-2].classList.remove("active");
  current -= 1;
});
fivePrevBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "-75%";
  bullet[current-2].classList.remove("active");
  progresscheck[current-2].classList.remove("active");
  current -= 1;
});
sixPrevBtn.addEventListener("click", function(){
  slidepanels.style.marginLeft = "-100%";
  bullet[current-2].classList.remove("active");
  progresscheck[current-2].classList.remove("active");
  current -= 1;
});
