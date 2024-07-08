export const dataArray = async(url) => {

await fetch(url)
.then(res => res.json())
.then(data => { 
  let bodyArr = [];
  for (let i = 0; i < data.results.length; i++) {
  const filtered = Object.keys(data.results[i]).filter((key) => { if(key.includes('name')) {
    bodyArr.push(data.results[i][key])
  } })
  }
  let newBodyArr = [];
  for (let i = 0; i < bodyArr.length; i++) {
    if (bodyArr[i]) {
      newBodyArr.push(bodyArr[i]);
    }
  }
  return newBodyArr;
}) 

}