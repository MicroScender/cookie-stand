`use strict`;

let cookSales= document.getElementById('sales');
let tableElem= document.createElement('table');
cookSales.appendChild(tableElem);
let hours =['6am', '7am', '8am', '9am', '10am', '11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//borrowed from mdn docs
// function randomCustCount(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); 
// }

let fishyCookSales =[];

function citySales(city, avgCook, custMin, custMax) {
  this.city = city;
  this.avgCook = avgCook;
  this.custMin = custMin;
  this.custMax = custMax;
  this.cookDaily = [];
  this.cookArray = [],
    fishyCookSales.push(this);
}
citySales.prototype.hourlyGuests = function() {
  return Math.floor(Math.random() * (this.custMax - this.custMin +1) + this.custMin);
};
citySales.prototype.totalCook = function (){
  for (let i =0; i< hours.length; i++) {
    this.cookArray.push(Mat.ceil(this.hourlyGuests() * this.avgCook));
  }
  citySales.prototype.dailyTotal = function () {
    let sum =0;
    for (let i = 0; i < this.cookArray.length; i++) {
      sum += this.cookArray[i];
      this.cookDaily.push(sum);
    }
    return sum;
  };
  citySales.prototype.render = function () {
    let row2 = document.createElement('tr');
    tableElem.appendChild(row2);

    let th2Elem = document.createElement('th');
    th2Elem.textContent = this.city;
    row2.appendChild(td1Elem);

    for (let i = 0; i < hours.length; i++){
      let td1Elem = document.createElement('td');
      td1Elem.textContent = `${this.cookArray[i]}`;
      row2.appendChild(td1Elem);
    }
    let td3Elem = document.createElement('td');
    td3Elem.textContent = `${this.cookDaily[13]}`;
    row2.appendChild(row2);
  };
};

function renderHeader () {
  let tHeadEl = document.createElement('thead');
  tableElem.appendChild(tHeadEl);

  let th1 = document.createElement('th');
  tHeadEl.appendChild(th1);

  for (let i = 0; i < hours.length; i++) {
    let thCol1 = document.createElement('td');
    thCol1.textContent = `${hours[1]}`;
    tHeadEl.appendChild(thCol1);
  }
  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Total';
  tHeadEl.appendChild(th2Elem);
}

new citySales('Seattle', 6.3, 23, 65);
new citySales('Tokyo', 1.2, 3, 24);
new citySales('Dubai', 3.7, 11, 38);
new citySales('Paris', 2.3, 20, 38);
new citySales('Lima', 4.6, 2, 16);

function renderAllCities() {
  for (let i = 0; i < this.fishyCookSales.length; i++) {
    fishyCookSales[i].totalCook();
    fishyCookSales[i].dailyTotal();
    fishyCookSales[i].render();
  }
}

renderHeader();
renderAllCities();

