// filesystem package/module
import fs from 'fs'; 
// path 
import path from 'path';

// use path to build a filepath to our data subdirectory
const dataDir = path.join( process.cwd(), "data" );

// console.log(dataDir);

export default function handler(req, res) {
  const filepath = path.join( dataDir, "persons.json" );
  const filepath2 = path.join( dataDir, "persons2.json" );

  const jsondata = fs.readFileSync( filepath, "utf8" );
  const jsondata2 = fs.readFileSync( filepath2, "utf8" );

  const jsonObj = JSON.parse( jsondata );
  const jsonObj2 = JSON.parse( jsondata2 );
  const jsonObj3 = jsonObj.concat(jsonObj2);

  jsonObj3.sort(
    function(a,b) {
      return a.name.localeCompare(b.name);
    }
  );

  res.status(200).json( jsonObj );
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//https://cs5513-week05-jaruwanpatt.srjcethanwilde.repl.co/api/get