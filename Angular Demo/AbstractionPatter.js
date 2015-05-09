//Demo of Abtraction Patter in JavaScript

var work = function()
{
  console.log("Working Hard");
}


var doWork = function(f){
  console.log("Start Work");
  try{
    f();  
  }
  catch(ex)
  {
    console.log(ex);
  }
  
  console.log("End Work");
}

doWork(work);