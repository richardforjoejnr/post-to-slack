const fs = require('fs');
const { Papa } = require('papaparse');

const json = {
  /* your json data */
};

const jsonToCsv = (json, fileName) => {

      const csv = Papa.parse(json);
      
      fs.writeFileSync(fileName, csv);

}

