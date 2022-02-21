//修改段落的颜色和字体大小

console.log("test");

let myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
});

fetch('https://bespokecoding.co.uk/bid-prices/',  {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors'
})
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(function (err) {
        console.log(err);
    })

//
// axios.get('https://bespokecoding.co.uk/bid-prices/')
//
// $.get( "https://bespokecoding.co.uk/bid-prices/", function( data ) {
//     alert( "Data Loaded: " + data );
// });

//
// const url = "https://bespokecoding.co.uk/bid-prices/";
// const config = {
//     url,
//     headers: {
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     }
// }
// axios(config)
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });