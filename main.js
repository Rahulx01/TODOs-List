function add(){
    tits = document.getElementById("title").value;
    desc = document.getElementById('Description').value;
    document.write("fuck u bitch");
if(tits == "" || tits == null){
    document.getElementById("titleDesc").innerHTML = "🥶 Please Suggest a Title! ";
}
else{
    if(localStorage.getItem('itemsJson') == null){
        itemJsonArray = [];
        itemJsonArray.push([tits,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tits,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    update();
    document.getElementById("titleDesc").innerHTML = "Added successfully🙂";
   
}
}

function update(){

if(localStorage.getItem('itemsJson') != null){
document.getElementById("tableHead").innerHTML = `
<tr>
<th scope="col">Sno.</th>
<th scope="col">Title</th>
<th scope="col">Description</th>
<td><button type="submit" class="btn btn-primary bg-black" onclick="clearList()">Clear</button></td>
</tr>`
itemJsonArrayStr = localStorage.getItem('itemsJson');
itemJsonArray = JSON.parse(itemJsonArrayStr);
let str = "";
itemJsonArray.forEach((element,index) => {
str+=`
    <tr>
    <th scope="row"> ${index+1} </th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-primary btn-sm" onclick = 'eventDelete(${index})' >Delete</button></td>
</tr>

`

});
document.getElementById('tableBody').innerHTML = str;
} 
else{
document.getElementById("tableBody").innerHTML = "";
}
}

function eventDelete(delteIndex){
itemJsonArray.pop(delteIndex);
localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
update();
}

window.onload = function(){
update();
}

function clearList(){
localStorage.clear();
update();
}