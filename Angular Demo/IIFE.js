//Demo of Immediately Invoked Function Expression in JavaScript
// Good Part  of this code is createworker and worker are not global variables

(function() {
var createworker = function(){
  //Private Variable
  var workcount=0;
  
  //Private Method
  var task1 = function(){
    workcount += 1;
    console.log("task 1 "+ workcount);
  }
  
  //Private Method
  var task2 = function(){
    workcount += 1;
    console.log("task 2 "+ workcount);
  }
  
  return {
    job1:task1,
    job2 : task2    
  };
};

var worker=createworker();
worker.job1();
worker.job2();
worker.job2();
worker.job2();
worker.job1();

}());