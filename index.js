var productdb = (dbname,table)=>{
    const db= new Dexie(dbname);
    db.version(1).stores(table);
    db.open();
    return db;
}
// insert function
const bulkcreate=(dbtable,data)=>{
   let flag= empty(data);
   if(flag){
    dbtable.bulkAdd([data]);
    console.log("les données sont enregistrés avec sucess")
   }else{
    console.log("remplis les données")
   }
   return flag;
}
const empty=object=>{
    let flag=false;
    for (const value in object){
        if(object[value]!="" &&object.hasOwnProperty(value)){
            flag=true;
        }else{
            flag=false;
        }
    }
    return flag;
}
// get data
const getData = (dbtable,fn) => {
    let index = 0;
    let obj = {};
    dbtable.products.count((count) => {
      if (count) {
        dbtable.each(table => {
         
          obj=Sortobj(table);
        fn(obj, index++);
        });
      }else{
        fn(0);
      }
    });
  };

//   sort object
  const Sortobj = sortobj =>{
    let obj={};
    obj={
      id:sortobj.id,
      name:sortobj.name,
      seller:sortobj.seller,
      price:sortobj.price
    }
    return obj;
  }

export default productdb;
export{
    bulkcreate,
    getData
}