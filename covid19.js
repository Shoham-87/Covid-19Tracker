var tablebody=document.getElementById('tablebody');
let searchbox=document.getElementById('searchbox');
let searchbtn=document.getElementById('searchbtn');
let str='';
fetch('https://api.covid19api.com/summary').then(response=>response.json()).then(data=>
{
    let countries=data.Countries;
    Array.from(countries).forEach((element,index) => {
        str+=`<tr>
        <th scope="row">${index+1}</th>
        <td>${element.Country}</td>
        <td>${element.TotalConfirmed}</td>
        <td>${element.TotalConfirmed -element.TotalRecovered-element.TotalDeaths}</td>
        <td>${element.TotalRecovered}</td>
      </tr>`;
    
    });
    tablebody.innerHTML=str;
}).catch(()=>
{
    tablebody.innerHTML="Sorry! No Data is Available .Please Check Your Internet Connection";
});
searchbox.addEventListener('input',(e)=>{
    let val=e.target.value;
    str=str.toLowerCase();
    for(let keys in tablebody.children)
    {
        if(tablebody.children[keys].children[1].innerHTML.includes(val))
        {
            tablebody.children[keys].removeAttribute('style')
            
        }
        else{
            
            tablebody.children[keys].style.display='none';
        }
        
    }
    // console.log(tablebody.children[0].children[1].innerHTML);
})