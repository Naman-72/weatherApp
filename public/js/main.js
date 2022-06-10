const search = document.getElementById('search');
const cityName = document.getElementById('cityName');
const city_Name = document.getElementById('city_Name');
const dateday = document.getElementById('dateday')
const temp = document.getElementById('temp');
const image_weather = document.getElementById('image_weather');
const getinfo=async(event)=>{
    event.preventDefault();
    let d = new Date();
    dateday.innerHTML= `Today Date: ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    console.log("hello");
    // alert("Hi");
    let cityval = cityName.value;
    console.log(cityval);
    if (cityval == "") {
        // alert("Hi");
        city_Name.innerText = "PLEASE WRITE NAME BEFORE SEARCH";
        temp.innerHTML= "";
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=297a2cb8fd827838138cd5aaa9ea6079`;
            const respone = await fetch(url);
            const data = await respone.json();
            console.log(data);
            const arrdata = [data];
            city_Name.innerHTML = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp.innerHTML = `<span>${arrdata[0].main.temp}</span> <sup>o</sup>C 
            <br>
            ${arrdata[0].weather[0].main}`;
            console.log(arrdata)
            // console.log(arrdata[0].main.temp)
            let tempmood = arrdata[0].weather[0].main;
            if (tempmood=="Clear") {
                image_weather.innerHTML="<i class='fa-solid fa-sun-bright'></i>";
            } else if (tempmood=="Clouds") {
                image_weather.innerHTML="<i class='fa-solid fa-sun-bright'></i>";
            }else if (tempmood=="Rain") {
                image_weather.innerHTML="<i class='fa-solid fa-sun-bright'></i>";
            }else if (tempmood=="Dust") {
                image_weather.innerHTML="<i class='fa-solid fa-sun-bright'></i>";
            }else{
                image_weather.innerHTML="<i class='fa-solid fa-sun-bright'></i>";
            }
        } catch {
            city_Name.innerText = "PLEASE WRITE CITY NAME CORRECTLY ";
            temp.innerHTML= "NOT DEFINED";
        }
    }
}
search.addEventListener('click',getinfo);
