 var  obj1 =   { name : "person 1", age : 5};
 var obj2 =  { age : 5 , name:  "person2"};

 var sortedobj1 = JSON.stringify(obj1, object.keys(obj1).sort());
 var sortedobj2 = JSON.stringify(obj2, object.keys(obj2).sort());
 if (sortedeobj1 === sortedobj2)  {
    console.log("The JSON objects are equal");

 } else {
    console.log("The JSON objects are not equal");
 }
