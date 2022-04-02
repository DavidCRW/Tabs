/* Data module */
const buttons = document.querySelectorAll(".btn");
const text = document.querySelectorAll(".text");
const history = document.getElementById("history");
const vision = document.getElementById("vision");
const goals = document.getElementById("goals");

/* Basic */
(function webBasic(){
    vision.classList.add("hidden")
    goals.classList.add("hidden")
})()

buttons.forEach(btn=> {
    btn.addEventListener("click", () =>{
        const btnData = btn.dataset.id;

        buttons.forEach(btn => {
        btn.classList.remove("active")
        });

        if(btnData == "history"){
            vision.classList.add("hidden");
            goals.classList.add("hidden");
            history.classList.remove("hidden");
            btn.classList.add("active");
            
        }else if(btnData == "vision"){
            history.classList.add("hidden");
            goals.classList.add("hidden");
            vision.classList.remove("hidden");
            btn.classList.add("active");

        }else if(btnData == "goals"){
            goals.classList.remove("hidden");
            history.classList.add("hidden");
            vision.classList.add("hidden");
            btn.classList.add("active");
        }
    })
});