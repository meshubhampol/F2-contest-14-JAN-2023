let inputs=document.getElementsByTagName('input');

document.addEventListener('submit',function(event) {
    event.preventDefault();
});

let errMessage="Error : Please Make sure All the fields are filled before adding in an employee!";

let sucMessage="Success : Employee Added";

let submitbtn=document.getElementById('add-user-btn');
submitbtn.addEventListener('click',checkValidity);

let div=document.createElement('div');
div.style.fontSize='24px';
div.style.marginLeft='0px';
div.style.paddingLeft='0px';

function checkValidity(event) {
    event.preventDefault();
    for(let key of inputs) {
        if(key.value=='' || key.value.charAt(0)==' ') {
            showMessage(errMessage,'red');
            return;
        }
    }
    addEmployee();
}

function showMessage(msg,colour) {
    div.innerHTML='';
    div.style.color=colour;
    div.innerHTML=msg;
    let form=document.getElementsByTagName('form')[0];
    form.append(div);
}

let arr=[];


function addEmployee() {
    showMessage(sucMessage,'#16ff16');
    if(arr.length === 0) {
        document.getElementById('employee-table').remove();
        document.getElementsByClassName('employees-count')[0].remove();
    }

    let employee= {
        id:arr.length+1,
        Name: inputs[0].value,
        Profession: inputs[1].value,
        Age: inputs[2].value
    }
    arr.push(employee);

    let newtable=document.createElement('table');
    newtable.className='employee-table';

    newtable.style.marginLeft='5px';

    let divelement=document.getElementsByClassName('employee-actions')[0];
    divelement.appendChild(newtable);

    let row=newtable.insertRow(-1);

    let cell1=row.insertCell(-1);
    let cell2=row.insertCell(-1);
    let cell3=row.insertCell(-1);
    let cell4=row.insertCell(-1);
    
    cell1.innerHTML = arr.length;
    cell2.innerHTML = 'Name: '+ arr[arr.length-1].Name;
    cell3.innerHTML = 'Profession: '+ arr[arr.length-1].Profession;
    cell4.innerHTML = 'Age: '+arr[arr.length-1].Age;

    let delbtn=document.createElement('button');
    delbtn.setAttribute('id',employee.id);
    newtable.setAttribute('id','table-'+delbtn.id);
    delbtn.innerHTML = 'Delete User';
    delbtn.style.color='black';
    delbtn.style.backgroundColor='white';
    delbtn.style.borderRadius='10px';
    delbtn.style.padding='9px 40px';
    delbtn.style.cursor='pointer';
    let div2=document.createElement('div');
    div2.setAttribute('id','row-content-'+delbtn.id);

    div2.style.minWidth='35%';

    divelement.appendChild(div2);
    div2.appendChild(delbtn);

    console.log(delbtn.id);

    delbtn.addEventListener('click',()=>delRow(arr,delbtn.id));
}

function delRow(arr,id) {
    delete arr[id];
    document.getElementById('table-'+id).remove();
    document.getElementById('row-content-'+id).remove();
}