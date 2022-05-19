`use strict`;

let storeSect = document.getElementById('stores');
let hours =['6am', '7am', '8am', '9am', '10am', '11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//borrowed from mdn docs

function randomCustCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
//  console.log(randomCustCount(0,150));

let Seattle ={
  name: 'Seattle',
  custMin: 23, 
  custMax: 65,
  aveCookCust: 6.3,
  cust: 0,
  total: 0,
  getCust: function(){
    this.cust =randomCustCount(this.custMin, this.custMax);
  },
  cookTotal: function(numCook){
    return Math.round(numCook * this.aveCookCust);
  },
  render: function(){
    let ulElem =document.createElement('ul');
    ulElem.textContent =this.name;
    storeSect.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++){
      let liElem =document.createElement('li');
      this.getCust();
      liElem.textContent =`${hours[i]}: ${this.cookTotal(this.cust)} cookies`;
      this.total += this.cookTotal(this.cust);
      ulElem.appendChild(liElem);
    }
    let liElem =document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  }
};

Seattle.render();
console.log(Seattle);

let Tokyo ={
  name: 'Tokyo',
  custMin: 3,
  custMax: 24,
  aveCookCust: 1.2,
  cust: 0,
  total: 0, 
  getCust: function(){
    this.cust =randomCustCount(this.custMin, this.custMax);
  },
  cookTotal: function(numCook){
    return Math.round(numCook * this.aveCookCust);
  },
  render: function(){
    let ulElem =document.createElement('ul');
    ulElem.textContent =this.name;
    storeSect.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++){
      let liElem =document.createElement('li');
      this.getCust();
      liElem.textContent =`${hours[i]}: ${this.cookTotal(this.cust)} cookies`;
      this.total += this.cookTotal(this.cust);
      ulElem.appendChild(liElem);
    }
    let liElem =document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  }
};

Tokyo.render();
console.log(Tokyo);

let Dubai ={
  name: 'Dubai',
  custMin: 11,
  custMax: 38,
  aveCookCust: 3.7,
  cust: 0,
  total: 0,
  getCust: function(){
    this.cust =randomCustCount(this.custMin, this.custMax);
  },
  cookTotal: function(numCook){
    return Math.round(numCook * this.aveCookCust);
  },
  render: function(){
    let ulElem =document.createElement('ul');
    ulElem.textContent =this.name;
    storeSect.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++){
      let liElem =document.createElement('li');
      this.getCust();
      liElem.textContent =`${hours[i]}: ${this.cookTotal(this.cust)} cookies`;
      this.total += this.cookTotal(this.cust);
      ulElem.appendChild(liElem);
    }
    let liElem =document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  } 
};

Dubai.render();
console.log(Dubai);

let Paris ={
  name: 'Paris',
  custMin: 20,
  custMax: 38,
  aveCookCust: 2.3,
  cust: 0,
  total: 0,
  getCust: function(){
    this.cust =randomCustCount(this.custMin, this.custMax);
  },
  cookTotal: function(numCook){
    return Math.round(numCook * this.aveCookCust);
  },
  render: function(){
    let ulElem =document.createElement('ul');
    ulElem.textContent =this.name;
    storeSect.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++){
      let liElem =document.createElement('li');
      this.getCust();
      liElem.textContent =`${hours[i]}: ${this.cookTotal(this.cust)} cookies`;
      this.total += this.cookTotal(this.cust);
      ulElem.appendChild(liElem);
    }
    let liElem =document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  } 
};

Paris.render();
console.log(Paris);

let Lima ={
  name: 'Lima',
  custMin: 2,
  custMax: 16, 
  aveCookCust: 4.6,
  cust: 0,
  total: 0,
  getCust: function(){
    this.cust =randomCustCount(this.custMin, this.custMax);
  },
  cookTotal: function(numCook){
    return Math.round(numCook * this.aveCookCust);
  },
  render: function(){
    let ulElem =document.createElement('ul');
    ulElem.textContent =this.name;
    storeSect.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++){
      let liElem =document.createElement('li');
      this.getCust();
      liElem.textContent =`${hours[i]}: ${this.cookTotal(this.cust)} cookies`;
      this.total += this.cookTotal(this.cust);
      ulElem.appendChild(liElem);
    }
    let liElem =document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  } 
};

Lima.render();
console.log(Lima);
