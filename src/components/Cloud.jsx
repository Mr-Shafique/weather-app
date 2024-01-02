



const weather = () => {

  let apikey ="2f5cd21393e7cd4ca5a15c7f9b72dc4c";

  function search(){
    let input = document.querySelector("input").value;

    if (input === "") {
      alert("Please enter a location");
    }
    else{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=Metric&appid=${apikey}`
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Process the data here
        let temp = data.main.temp;
        let weather = data.weather[0].main;
        let humidity = data.main.humidity;
        let wind = data.wind.speed;
        let city = data.name;

        document.querySelector("#temp").innerHTML = temp + "°C";
        document.querySelector("#weather").innerHTML = weather;
        document.querySelector("#humidity").innerHTML = humidity + "%";
        document.querySelector("#wind").innerHTML = wind + "km/h";
        





        console.log(temp, weather, humidity, wind, city);

      });

    
    }
  }

  return (
    <div className="md:w-[500px] w-[99%] bg-[#211563] h-[90%] rounded-xl flex flex-col items-center p-12 mt-10">
      <div className="w-[90%] flex relative items-center gap-2">
      <input type="text" placeholder="Enter location"  className="w-[80%] p-4 text-xl focus:outline-none bg-cyan-100 rounded-full h-14"/>
      <div className="w-auto bg-cyan-100 h-full flex items-center justify-center rounded-full" onClick={()=>{search()}}>
      <img src="./images/search.png" alt=""  className="flex right-0 w-7 mx-4" />
      </div>
      </div>
      <div className="mt-4">
        <img src="./images/cloud.png" alt="" />
      </div>
      <div className="mt-4">
        <h1 className="text-6xl font-bold text-white" id="temp">20°C</h1>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white" id="weather">Cloudy</h1>
      </div>
     <div className="flex w-full mt-4 justify-between">
      
      <div className="flex gap-4 ">
        <img src="./images/humidity.png" alt=""  className="object-contain"/>
        <div>
          <h1 className="font-semibold md:text-3xl text-sm text-white" id="humidity">0</h1>
          <h1 className="font-semibold md:text-3xl text-sm text-white">Humidity </h1>
        </div>
      </div>
      <div className="flex gap-4 ">
        <img src="./images/wind.png" alt="" className="object-contain" />
        <div>
          <h1 className="font-semibold md:text-3xl text-sm text-white" id="wind">0</h1>
          <h1 className="font-semibold md:text-3xl text-sm text-white">wind speed </h1>
        </div>
      </div>
     </div>
    </div>
  )
}

export default weather