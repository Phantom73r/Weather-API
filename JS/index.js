var request=new XMLHttpRequest()
let searchedCountry=document.querySelector('#searchBar')
var searched='london'

searchedCountry.addEventListener('click', ()=>{
    console.log(searchedCountry.value);
    
})
function selectedCountry(){
    searched=searchedCountry.value
    // console.log(searched);
    request.open('GET',`http://api.weatherapi.com/v1/forecast.json?key=0de6f7de7e744564875190752240812&q=${searched}&days=3&aqi=no&alerts=no`)
    request.send()  
console.log(request);

};

var allData=[];

request.responseType="json" // makes the string coming into a json file just like JSON.parse
request.addEventListener('load', ()=>{
allData=request.response.forecast
var box=``
       for(let i=0; i<5;i++){
              box=`
                     <div class="row mt-5 g-3">
                <div class="col-md-4 bg-primary ">
                    <div class="item p-3">
            <div class="card-header text-center border-bottom"> 
            ${allData.forecastday[0].date}
            </div>
                <div class="card-body">
                    <h2 class="display-5 text-capitalize">${request.response.location.name}</h2>
                    <h2 class="display-1 text-center">${allData.forecastday[0].day.maxtemp_c}<sup>o</sup>C</h2>
                    <img src="https://${allData.forecastday[0].day.condition.icon}" width="50px" alt="">
                    <h4 class='mb-3'>
                 ${allData.forecastday[0].day.condition.text}
                    </h4>
                    <div class="d-flex justify-content-center gap-3">
                        <img src="images/icon-umberella.png" alt="">
                        <span>20%</span>
            
                    </h4>
                        <img src="images/icon-compass.png" alt="">
                        <span>20%</span>
                    </h4>
                        <img src="images/icon-wind.png" alt="">
                        <span>20%</span>
                    </div>
                </div>
            
                    </div>
                </div>
                <div class="col-md-4 bg-outline-teritrary">
                    <div class="item  p-3">
                        <div class="card-header text-center border-bottom"> 
            ${allData.forecastday[1].date}
            </div>
                <div class="card-body text-center">
                    <img src="https://${allData.forecastday[1].day.condition.icon}" width="60px" alt="">
                    <h2 class="display-1 text-center">${allData.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
                    <h4 class="display-6 text-center">${allData.forecastday[1].day.mintemp_c}<sup>o</sup>C</h4>

                    <h4>
                ${allData.forecastday[1].day.condition.text}
                    </h4>
         
                </div>
            
                    </div>
                </div>
              
                <div class="col-md-4 bg-danger">
                    <div class="item  p-3">
                                  <div class="card-header text-center border-bottom"> 
            ${allData.forecastday[2].date}
            </div>
                <div class="card-body text-center">
                    <img src="https://${allData.forecastday[2].day.condition.icon}" width="60px" alt="">
                    <h2 class="display-1 text-center">${allData.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
                    <h4 class="display-6 text-center">${allData.forecastday[2].day.mintemp_c}<sup>o</sup>C</h4>

                    <h4>
                ${allData.forecastday[2].day.condition.text}
                    </h4>
         
                </div>
            
                    </div>
                </div>
              
        
            
    

            </div>

`
       }
document.querySelector('.container').innerHTML=box
}
)






