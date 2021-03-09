'use strict';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
let counter=0;
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);

let totalOfTuition=0;

let objArr=[];

function Student(studentEmail,mobile,tuition){
    this.studentEmail=studentEmail;
    this.mobile=mobile;
    this.tuition=tuition;
    this.age=this.updateAge();
    objArr.push(this);
    

}

Student.prototype.updateAge=function(){
return this.age=getRandomIntInclusive(18,24);
}

function header(){
let tr = document.createElement('tr');
table.appendChild(tr);
let th1 = document.createElement('th');
tr.appendChild(th1);
th1.textContent='id';

let th2 = document.createElement('th');
tr.appendChild(th2);
th2.textContent='Name';


let th3 = document.createElement('th');
tr.appendChild(th3);
th3.textContent='Email';

let th4 = document.createElement('th');
tr.appendChild(th4);
th4.textContent='Mobile';

let th5 = document.createElement('th');
tr.appendChild(th5);
th5.textContent='Age';

let th6 = document.createElement('th');
tr.appendChild(th6);
th6.textContent='Tuition';


}
header();

Student.prototype.render=function(){
counter++;

var sEmails=this.studentEmail.split("@");
var  use=sEmails[0];
var domain=sEmails[0];   

let tr2 = document.createElement('tr');
table.appendChild(tr2);
let td1 = document.createElement('td');
tr2.appendChild(td1);
td1.textContent=counter;

let td2 = document.createElement('td');
tr2.appendChild(td2);
td2.textContent=domain;

let td3 = document.createElement('td');
tr2.appendChild(td3);
td3.textContent=this.studentEmail;

let td4 = document.createElement('td');
tr2.appendChild(td4);
td4.textContent=this.mobile;

let td5 = document.createElement('td');
tr2.appendChild(td5);
td5.textContent=this.age;

let td6 = document.createElement('td');
tr2.appendChild(td6);
td6.textContent=this.tuition;

}

let ahmad = new Student('ahmad@gmail.com',736783 ,'100JD')
ahmad.render();

let paragraph = document.createElement('p');
container.appendChild(paragraph);

Student.prototype.total=function(){
totalOfTuition+=this.tuition;
paragraph.textContent=`Total: ${totalOfTuition}`;
}

let form = document.getElementById('form');
form.addEventListener('submit',eventclilck);

function eventclilck(event){

    event.preventDefault();

let studentEmail = event.target.studentEmail.value;
let mobile = event.target.mobile.value;
mobile=parseInt(mobile);
let tuition = event.target.tuition.value;
tuition=parseInt(tuition);

let newStudent = new Student(studentEmail,mobile,tuition);

newStudent.render();
newStudent.total();
saveData();

}

function saveData(){
    let data = JSON.stringify(objArr);
    localStorage.setItem('allData',data);
}

function getData(){
    let info = localStorage.getItem('allData');
    let information = JSON.parse(info);
    for(let i=0; i<objArr.length; i++){

    }

    if(information){
        objArr=information;
    }
}

getData();
