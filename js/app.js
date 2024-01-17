const apiKey = "f19708aa56754806be0162554241101";
document.getElementById("serchBtn").addEventListener("click", () => {
    let serchVal = document.getElementById("serchTxt").value;

    let reop = {
        methord: 'GET'
    };

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${serchVal}`, reop)
        .then(responce => responce.json())
        .then(data => {
           
            
            
            document.getElementById("cityLbl").innerHTML = data["location"]["name"];
            document.getElementById("tempLbl").innerHTML = data["current"]["temp_c"]+"<span>°C</span>";
            document.getElementById("textLbl").innerHTML = data["current"]["condition"]["text"];
            document.getElementById("countryLbl").innerHTML = data["location"]["country"];
            document.getElementById("iconimg").src = data["current"]["condition"]["icon"];
            alert(data["error"]["message"]);
        })
        .then(error => console.log("error", error))
})