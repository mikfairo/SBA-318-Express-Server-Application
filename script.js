const myInputElement = document.getElementById("my-input");
const myButtonElement = document.getElementById("my-button");

myButtonElement.addEventListener("click", async () => {
    // console.log(myInputElement.value);
    const response = await fetch("http://localhost:3000/", {
        method:"POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ genre:"Romance" }),
    });
    const data = await response.json();
    console.log(data);

})