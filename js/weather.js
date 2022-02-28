const token = '7c35a1b3b43c09f3b980e677f029f045'

const bgimg = 'https://c4.wallpaperflare.com/wallpaper/134/37/127/seasons-spring-summer-winter-wallpaper-preview.jpg';
document.body.style.backgroundImage = `url(${bgimg})`;
document.body.style.backgroundSize = "cover"

SubmitButton()

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    let zipCode = document.getElementById("zipCode").value;
    doAPICall(zipCode);
    console.log(document.getElementById('zipCode'));
};

function SubmitButton(){
    let button = document.getElementById("button");
    button.addEventListener('click', (e)=>handleSubmit(e));
};

function fahrenheit(k){
    f = ((k-273.15)*1.8)+32
    return f
}

async function doAPICall(zipCode){
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${token}`);
    console.log(result);

    result = result.data;
        
    let high = result.main.temp_max;
    console.log(high);
    let fhigh = fahrenheit(high);
    console.log(fhigh);
    let low = result.main.temp_min;
    console.log(low);
    let flow = fahrenheit(low);
    console.log(flow);
    let forecast = result.weather[0].description;
    console.log(forecast);
    let humidity = result.main.humidity;
    console.log(humidity);

       

    li = document.createElement('li');
    

    //High
    hi=document.getElementById('high');
    hi.innerText=`High: ${fhigh}`;

    //Low
    lo=document.getElementById('low');
    lo.innerText=`Low: ${flow}`;

    //Forecast
    fore=document.getElementById('fore');
    fore.innerText=`Forecast: ${forecast}`;

    //Humidity
    hum=document.getElementById('hum');
    hum.innerText=`Humidity: ${humidity}`;

    
};
