//Convert CSV to JSON
export function CSVToJSON(csv_data) {  
  if(csv_data !== undefined || csv_data !== null){
    var array = csv_data.split("\r\n");
    let result = [];
    let headers = array[0].split(";")
    for (let i = 1; i < array.length; i++) {
      let obj = {};
      let properties = array[i].split(";")
      for (let j in headers) {
        if (properties[j].includes(".")) {
          obj[headers[j]] = parseFloat(properties[j])
        } else if (properties[j].includes(":") ||  properties[j].includes("-")) {
          obj[headers[j]] = properties[j]
        } else {
          obj[headers[j]] = parseInt(properties[j])
        }
      }
      result.push(obj)
    }
    let json = JSON.stringify(result);
    let json_parsed = JSON.parse(json);
    return json_parsed;
  }  else if (csv_data === undefined || csv_data === null) {
    console.log("Não tem data")
    return []
  }
}
