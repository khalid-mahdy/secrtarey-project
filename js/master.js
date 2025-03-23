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


//change pargraph option in the login page p-1 , p-2 and p-3///////////////////////////

//get the pragraph Elements//////
let pargraphOption = document.querySelectorAll(".welcome p");
let pargraphOne = document.querySelector(".p-1");
let pargraphTwo = document.querySelector(".p-2");
let pargraphThree = document.querySelector(".p-3");

//create array contains prgraph Elements
let pragraphArray = [pargraphOne , pargraphTwo , pargraphThree];
console.log(pragraphArray);


    //create index of pragraph Array elements

    // while(index <) {
    //     if (index > pragraphArray.length - 1)
    //         index = 0;
    let interval = 2000;
    for (let index = 0; index < pragraphArray.length; index++) {
        let prevIndex = (index - 1 + pragraphArray.length) % pragraphArray.length;
            console.log(`current Index: ${index}`);
            console.log(`prev Index: ${prevIndex}`);
            console.log('---------------------');
    setInterval(() => {
        if (pragraphArray[prevIndex].classList.contains("active")) {
            pragraphArray[prevIndex].classList.remove("active");
        }
        pragraphArray[index].classList.add("active");
    },interval += 2000);


        // setInterval(() => {
        //     pragraphArray[index].classList.add("active")
        // } , 2000)
        // index += 1;
    }