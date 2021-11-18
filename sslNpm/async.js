var http = require('http'); //change htt to http
var myname = function(){ //Fixed spelling error in function
    return "Here is my IP address";
}

async function callHttpbin() { //added n at the end to match the call later AND made it an async funtion
    let promise = new Promise((resolve, reject) => {
        http.get(
            'http://httpbin.org/ip',
            function(response) {
                var str="";
                response.setEncoding('utf8');
                response.on('data', function(data){
                    str += data;
                });
                response.on('end', function() {
                    var result = JSON.parse(str);
                    myips = result.origin;
                    resolve(myips) //added myips to ()s
                });
            }
            );
        });
        
        let result = await promise;
        return result; //added return --
    }
executeAsyncTask()//Added a function call

async function executeAsyncTask(){ //Made it an async function to use await
    const valueA = await callHttpbin()
    const valueB = myname();
    console.log(valueB+" "+valueA)
} //Added closing bracket
