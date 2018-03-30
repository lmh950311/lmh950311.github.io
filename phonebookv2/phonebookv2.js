var pb = new Array();
var tableArr = new Array();
var lnArr = new Array();
var fnArr = new Array();
var pnArr = new Array();


function add_row(p) {
  var my_tbody = document.getElementById('my-tbody');
  var row = my_tbody.insertRow( my_tbody.rows.length );
  var objInputButton = document.createElement("input");
  objInputButton.setAttribute("type", "button");
  objInputButton.setAttribute("value", "Del");
  objInputButton.setAttribute("onclick", "delRow(this);");
  objInputButton.setAttribute("id","Del");
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = p.lastName;
  cell2.innerHTML = p.firstName;
  cell3.innerHTML = p.phoneNumber;
  cell4.appendChild(objInputButton);



}

var t = 0;
document.getElementById('savebtn').onclick = function() {
  var p = new Object();
  p.lastName = document.getElementById('ln').value;
  p.firstName = document.getElementById('fn').value;
  p.phoneNumber = document.getElementById('pn').value;
  

  pb.push(p);
  lnArr.push(document.getElementById('ln').value);
  fnArr.push(document.getElementById('fn').value);
  pnArr.push(document.getElementById('pn').value);

  add_row(p);

  tableArr.push(t);
  t++;
}


function delRow(d){ 
  var i=d.parentNode.parentNode.rowIndex;
  document.getElementById('my-tbody').deleteRow(i-1);
  pb.splice(i-1,1);
  tableArr.splice(i-1,1);
}

function tableDel() {
  var my_tbody = document.getElementById('my-tbody');
var row = my_tbody.insertRow( my_tbody.rows.length );
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

  while (my_tbody.rows.length > 0) {
    my_tbody.deleteRow( my_tbody.rows.length-1 );
    tableArr.splice(0,1);
  }
}

function newTable() {
  var my_tbody = document.getElementById('my-tbody');
  var row = my_tbody.insertRow( my_tbody.rows.length );
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = pb[j].lastName;
  cell2.innerHTML = pb[j].firstName;
  cell3.innerHTML = pb[j].phoneNumber;
  cell4.innerHTML = "<input id='Del' value='Del' type='button' onclick='delRow(this)'/>";
}

document.getElementById('searchBtn').onclick = function() {
tableDel();
 

 t=0;
  for(j=0; j<pb.length; j++) {
 
    if(pb[j].lastName == document.getElementById('searchTxt').value) {
      var my_tbody = document.getElementById('my-tbody');
      var row = my_tbody.insertRow( my_tbody.rows.length );
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = "<b>"+"<span style='color:#FF0000'>" + pb[j].lastName +"</span>"+"<b>";
      cell2.innerHTML = pb[j].firstName;
      cell3.innerHTML = pb[j].phoneNumber;
      cell4.innerHTML = "<input id='Del' value='Del' type='button' onclick='delRow(this)'/>";
      tableArr.push(t);
    } else {
      newTable();
      tableArr.push(t);
    }
    t++;
  }
}

function lnSort() {
  lnArr.sort();
  tableDel();

  for(i=0; i<lnArr.length; i++) {
    
    for(j=0; j<lnArr.length; j++) {

      if(lnArr[i] == pb[j].lastName) {
       newTable();
      }
    }
  }
}

function fnSort() {
  fnArr.sort();
  tableDel();

  for(i=0; i<fnArr.length; i++) {
    
    for(j=0; j<fnArr.length; j++) {

      if(fnArr[i] == pb[j].firstName) {
       newTable();
      }
    }
  }
}

function pnSort() {
  pnArr.sort();
  tableDel();

  for(i=0; i<pnArr.length; i++) {
    
    for(j=0; j<pnArr.length; j++) {

      if(pnArr[i] == pb[j].phoneNumber) {
       newTable();
      }
    }
  }
}