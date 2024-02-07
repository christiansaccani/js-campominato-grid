function progressiveNum (squares) {

    for (i = 0; i < squares; i++) {

        const newElement = document.createElement("div");
        newElement.innerText = (i + 1);
        document.querySelector(".map-container").append(newElement);
        newElement.classList.add("square");  

        if (squares == 100) {

            newElement.classList.add("hard");        
            
        } else if (squares == 81) {

            newElement.classList.add("medium"); 

        } else if (squares == 49) {

            newElement.classList.add("easy"); 

        }

        newElement.addEventListener("click", function() {

            console.log(this.innerText);
            this.classList.toggle("active");  

            }
        )
    }
}

const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", function() {

    document.querySelector(".map-container").innerHTML = '';   //Per svuotare la pagina corrente al click

    const userChoice = document.querySelector("#difficult-select").value
    console.log(userChoice);

    if (userChoice == "hard") {

        progressiveNum (100);

    } else if (userChoice == "medium") {

        progressiveNum (81);

    } else if (userChoice == "easy") {

        progressiveNum (49);

    }
}
)
