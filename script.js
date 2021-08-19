fetch("https://restcountries.eu/rest/v2/all")
.then(response => response.json())
.then((data)=>{
    let region =[];
    let population=[];
    let details=[];
    let tot_popu=[];
    let accu_popu=[];
    data.filter((reg)=>{
        if(reg.region=="Asia"){
        region.push(reg.name);
        }

        if(reg.population<200000)
        population.push(reg.name);

    });
    
    data.forEach(ele => {
      details.push(ele.name+" " +ele.capital+" "+ ele.flag);
        tot_popu.push(ele.population);
    });
    
   accu_popu=tot_popu.reduce(getsum,0);
  
 
  function getsum(total, num){
      return total+num;
    };

   

    console.log(region);
    console.log(population);
    console.log(data)
    console.log(details)
    console.log(accu_popu);
  
});

    
    



   

