let data;

async function init(){
  let link = "https://data.cityofnewyork.us/resource/25th-nujf.json";
  info = await fetch(link);
  data = await info.json();
}

function causes(){
  let a=0; b = 0, d = 0, e = 0, other = 0;
  let choice = "pie"
  for (let i=0; i < data.length; i ++){
    let c = data[i]
    if (c.ethcty == "ASIAN AND PACIFIC ISLANDER"){
      a++;
    }else if (c.ethcty == "WHITE NON HISPANIC"){
      b++;
    }else if (c.ethcty == "BLACK NON HISPANIC"){
      d++
    }else if (c.ethcty == "HISPANIC"){
      e++;
    }else{
      other++;
    }
  }
  let charts =[ ["Asian and Pacific Islander", a], ["White", b], ["Black", d], ["Hispanic", e],]
  console.log(charts)
  displayChart(charts, 'chart', "pie")


 
}
