//borrowed from mdn docs


function randomCustCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
//  console.log(randomCustCount(0,150));

let Seattle ={
  minCust: 23, 
  maxCust: 65,
  aveCookCust: 6.3,

  // // getMin: function(){
  // //   this.minCust =`${randomCustCount()}`
  // // },
  // // getMax: function(){
  // //   this.maxCust =`${randomCustCount()}`
  // // },
  // // getCook: function(){
  // //   this.aveCookCust =`${randomCustCount()}`
  // }  
};
// Seattle.getMin();
// Seattle.getMax();
// Seattle.getCook();
console.log(Seattle);

let Tokyo ={
  minCust: 3,
  maxCust: 24,
  aveCookCust: 1.2,
};

console.log(Tokyo);

let Dubai ={
  minCust: 11,
  maxCust: 38,
  aveCookCust: 3.7,
};

console.log(Dubai);

let Paris ={
  minCust: 20,
  maxCust: 38,
  aveCookCust: 2.3,
};

console.log(Paris);

let Lima ={
  minCust: 2,
  maxCust: 16, 
  aveCookCust: 4.6,
};

console.log(Lima);