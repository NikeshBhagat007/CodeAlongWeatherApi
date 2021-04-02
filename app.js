const apikey ="9d4c7c028372b5aa4899a7debd4dbae2";
var msg  = document.getElementById("msg");
function getData()
{
    var input = document.getElementById("city").value;
     const url =`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`;

     fetch(url)
     .then(response => response.json())
     .then(data =>{
         console.log(data);
         document.getElementById("p1").innerHTML = "temp :" +data.main.temp;
         document.getElementById("p2").innerHTML = "temp :" +data.name;
         var icon ="https://api.openweathermap.org/img/w/"+data.weather[0].icon+".png";
         document.getElementById("icon").src =icon;
     })
     .catch(() =>{
         msg.textContent = "Please search for a valid city";
     });
}