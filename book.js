window.onload = loadAddress;

function loadAddress() {


var data = JSON.parse(localStorage.getItem("addressArray"));

//alert(typeof(data));



var tableData = data.map(record => (
    `  <tr>
        <td>${record.fullname}</td>
        <td>${record.address}</td>
        <td>${record.city}</td>
        <td>${record.state}</td>
        <td>${record.zip}</td>
        <td>${record.phone}</td>
        <td><input type="button" onclick='deleteAddress("${record.fullname}")' value ="delete" class="delete_address_button"> </td>
        <td><input type="button" onclick='updateAddress("${record.fullname}")' value ="edit" class="update_address_button"> </td>
      </tr>
    `
  )).join('');
  console.log(tableData);
  
  var tbody = document.querySelector('#body');
  tbody.innerHTML = tableData;


}

function addAddress(){
    var fullname=document.getElementById('username').value;
    var address=document.getElementById('address').value;
    var city=document.getElementById('city').value;
    var state=document.getElementById('state').value;
    var zip=document.getElementById('zip').value;
    var phone=document.getElementById('phone').value;

    const record ={
        fullname : fullname,
        address : address,
        city : city,
        state : state,
        zip : zip,
        phone : phone

    }

    var addressArray = JSON.parse(localStorage.getItem('addressArray') || "[]");

    addressArray.push(record);

    window.localStorage.setItem("addressArray",JSON.stringify(addressArray))

}


function deleteAddress(fullname) {
    var data = JSON.parse(localStorage.getItem("addressArray"));

    localStorage.removeItem("addressArray");
    var newAddressArray =[];
    data.forEach(element => {
        if(element.fullname != fullname)
            newAddressArray.push(element);
    });
    window.localStorage.setItem("addressArray",JSON.stringify(newAddressArray))

};
   
    

    

 