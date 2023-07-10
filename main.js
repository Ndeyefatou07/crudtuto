import productdb, { bulkcreate } from "./index.js";

let db = productdb("Produits", {
  products: `++id,name,seller,price`,
});

//
const userid = document.getElementById("userid");
const proname = document.getElementById("proname");
const seller = document.getElementById("seller");
const price = document.getElementById("price");

//
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

//
btncreate.onclick = (event) => {
  let flag = bulkcreate(db.products, {
    name: proname.value,
    seller: seller.value,
    price: price.value,
  });
  // console.log(flag);
  proname.value = seller.value = price.value = "";
  getData(db.products,(data)=>{
    userid.value= data.id+1||1;
  }
  
  );
};
// create even on button
btnread.onclick=table;

function table(){
  
}


 