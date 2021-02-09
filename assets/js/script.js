let acc = document.getElementsByClassName("question__accordion-btn");

for (let i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active-acc");
    let panel = this.nextElementSibling;
    // console.log(panel);
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}






const arrCounter = [[200, 400, 800],[600, 1200, 2400],[1200, 2400, 4800],[2400, 4800, 9600]];

let tabLinks = document.querySelectorAll('.tabs-links');
let itemCount = document.querySelectorAll('.item__count');
let countMouth = document.querySelectorAll('.count__mouth')

tabLinks.forEach((item, index) => {
  item.addEventListener('click', () => {
    let btnIndex = index;
    tabLinks.forEach(elem => {
      elem.classList.remove('active-tabs')
    });
    item.classList.toggle("active-tabs");
    
    itemCount.forEach((item, index) => {
      item.textContent = `${arrCounter[btnIndex][index]}р`
    })

    countMouth.forEach(item => {
      item.textContent = `${item.textContent}`
    })
  
  })
});








function openForWhom(evt, ForWhom) {
  let choiceBtn = document.querySelectorAll('.choice__btn')
  let choiceContainer = document.querySelectorAll(".choice__container");
  
  choiceBtn.forEach(item => {
    item.addEventListener('click', () => {
      choiceBtn.forEach(elem => {
        elem.classList.remove('choice__btn-active')
      });
      item.classList.toggle("choice__btn-active");
    
    })
  });


  for (let i = 0; i < choiceContainer.length; i++) {
    choiceContainer[i].style.display = "none";
  }
  document.getElementById(ForWhom).style.display = "block";
  evt.currentTarget.className += " choice__btn-active";
  
}
document.getElementById("defaultOpen").click();







const menuIcon = document.querySelector('.header__burger');
const navbar = document.querySelector('.header__content');


menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
  menuIcon.classList.toggle('btn-active');
  
})






let arrIcon = ['assets/images/man.png','assets/images/brand.png','assets/images/shopping-bag.png'];
let btnImg = document.querySelectorAll('.choice__btn-img');

btnImg.forEach((item, index) => {
  item.style.backgroundImage = `url('${arrIcon[index]}')`;
})



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};