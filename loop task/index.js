function displayNumbers() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  
    for (let i = 10; i >= 1; i--) {
      console.log(i);
    }
  }
  
  displayNumbers();

  function number(){
    for( let i = 1; i<=10; i++){
        console.log(i)
    }
    for(let i = 10; i >= 2; i -= 2 ){
        console.log(i)
    }
  }
  number();


   function num(){
    for(let i = 1; i <= 20 ; i++){
        console.log(i)
    }
    for(let i = 20; i >= 3; i--){
        if(i % 3 === 0){
            console.log(i)
        }
    }
   }
    num()