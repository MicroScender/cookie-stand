`use strict`;

let cookSales= document.getElementById('sales');
let tableElem= document.createElement('table');
cookSales.appendChild(tableElem);
let hours =['6am', '7am', '8am', '9am', '10am', '11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//borrowed from mdn docs
function randomCustCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

let fishyStores =[];

function storeData(name, minCust, maxCust, avgCook){
  this.name = name;
  this.min = minCust;
  this.max = maxCust;
  this.avg = avgCook;
  this.cust =[];
  this.total = 0;
  this.cookArray = [];
    fishyStores.push(this);
}
console.log (fishyStores);

storeData.prototype.getCust =function(){
  for(let i = 0; i < hours.length; i++){
    let custCount = randomCustCount(this.min, this.max);
      this.cust.push(custCount); 
  }
};
storeData.prototype.totalCook = function(){
  this.getCust ();
    for(let i = 0; i < hours.length; i++){
      let cookies = Math.round(this.cust[i]*this.avg);
      this.total += cookies;
      this.cookArray.push(cookies);
    }
};
storeData.prototype.render = function(){
  this.totalCook();
    let trElem= document.createElement('tr');
      tableElem.appendChild(trElem);
    let thElem= document.createElement('th');
      thElem.textContent= this.name;
      trElem.appendChild(thElem);
    for(let i = 0; i < hours.length; i++){
      let tdElem = document.createElement('td');
        tdElem.textContent = this.cookArray[i];
        trElem.appendChild(tdElem);
    }
    let tdElem = document.createElement('td');
      tdElem.textContent = this.total;
      trElem.appendChild(tdElem);
};

function headRow(){
  let trElem = document.createElement('tr');
    tableElem.appendChild(trElem);
  let thElem = document.createElement('th');
    trElem.appendChild(thElem);
  for(let i =0; i < hours.length; i++){
    let th2Elem =document.createElement('th');
      th2Elem.textContent =hours[i];
      trElem.appendChild(th2Elem);
  }
  let th3Elem = document.createElement('th');
    th3Elem.textContent = 'Total';
    trElem.appendChild(th3Elem);
}

new storeData('Seattle', 23, 65, 6.3);
new storeData('Tokyo', 3, 24, 1.2);
new storeData('Dubai', 3, 24, 1.2);
new storeData('Paris', 20, 38, 3.7);
new storeData('Lima', 2, 16, 4.6);

function rendStoreData(){
  for(let i =0; i < fishyStores.length; i++){
    fishyStores[i].render();
  }
}

headRow();
rendStoreData();

