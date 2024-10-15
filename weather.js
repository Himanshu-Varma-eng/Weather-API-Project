APIKEY="0986d175a56d42fe9a950238241110"

const input=document.querySelector('.input-text')
const searchbtn=document.querySelector('.search-btn')

const cityname=document.querySelector('.city-name')
const countryname=document.querySelector('.countryName')
const temp=document.querySelector('.tem')
const loctime=document.querySelector('#loc-time') 
const sup=document.querySelector('#sup')
console.log(sup)

// console.log(input,searchbtn)
// http://api.weatherapi.com/v1/current.json?key=0986d175a56d42fe9a950238241110&q=London&aqi=yes

async function getData(APIKEY, input){
    const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${input}&aqi=yes`)
    return await promise.json()
}
searchbtn.addEventListener('click', async (evt)=>{
   const inputText=input.value;
   document.getElementById('texts-content').style.visibility="visible";
   
   const result=await getData(APIKEY,inputText)
   console.log(result.location.name)
   
   cityname.innerText=`${result.location.name}, ${result.location.region}`;
   countryname.innerText=result.location.country;
//    temp.innerText=`${result.current.temp_c}`;
    temp.innerHTML=`${result.current.temp_c}<sup id="sup">°C</sup>`
   //    sup.innerText = '°C';
//    const sup=document.createElement('sup')
//    sup.innerText='°C'
//    temp.appendChild(sup)
   console.log(sup)
   loctime.innerText=result.location.localtime;
})
