(function chai(){
    // Named IIFE (Immd. invoked func. expressions )
    console.log(`DB Connected`); 
})();

((name) => {
    // UN-Named IIFE (Immd. invoked func. expressions )
    console.log(`DB Two Connected by ${name}`); 
})(`mayank`)