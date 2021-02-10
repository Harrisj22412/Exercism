//1. We create a  prototype of a another function
//2. then we check the iteration to see if it matches
//3. If it does match then we are going to replace it with a different letter.


//Outcome :: return the complement

export const toRna = (strg) => {
  var rna = "";

  for(let i = 0; i < strg.length; i++){
    if(strg[i] === "G"){
      rna += strg[i].replace("G", "C");

    } else if (strg === "C") {

      rna += strg[i].replace("C", "G");

    } else if(strg[i] === "T") {

      rna += strg[i].replace("T", "A");

    } else {
      rna += strg[i].replace("A", "U");
    }
  }

  return rna;
};

module.exports = toRona;
