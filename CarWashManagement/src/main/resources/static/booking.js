function confirmBooking(){
console.log("Manish");
  const service = document.getElementById("serviceName").value;
    const selectDate = document.getElementById("date").value;
    const selectTime = document.getElementById("time").value;
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: selectTime,
            body: selectDate,
            userId: 1
        })
    })
    .then(response => response.json())
    .then(data => alert(data.id))
    .catch(error => console.error("Error:", error));

//  alert("Service: " + service + "\nDate: " + selectDate + "\nTime: " + selectTime);
}