//setting-box//////////////////////////////////////////////////////

////setting icon
let settingIcon = document.querySelector(".setting-icon");
settingIcon.onclick = function () {
    document.querySelector(".setting-box").classList.toggle("open");
    document.querySelector(".icon").classList.toggle("fa-beat");
};
////setting content

//get local storage
let optionColor = document.querySelectorAll(".color-list li");

let mainColor = localStorage.getItem("main-color");
if (mainColor !== null) {
   document.documentElement.style.setProperty("--main-color" , mainColor);
   
   optionColor.forEach(function(li) {
      li.classList.remove("active");
      if(li.dataset.color === mainColor)
        li.classList.add("active");
   });
   
 };


optionColor.forEach(function(li) {
    li.addEventListener("click" , (e)=> {

        //remove class active from all li 
        optionColor.forEach(function(li) {
            li.classList.remove("active");
        })
        //add class active in the target li
        e.target.classList.add("active");
        //set property in all elements of --main color
        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color);
        //set local storage 
        window.localStorage.setItem("main-color" , e.target.dataset.color);
    })
});

