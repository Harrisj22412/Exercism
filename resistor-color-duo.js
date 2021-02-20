import {indexOf} from 'ramda';

export const decodedValue = colorValue => {
   return indexOf(colorValue, COLORS);
}; 
  


export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];














console.log(decodedValues("Black", "Green"));

