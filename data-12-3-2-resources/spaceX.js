const numbers = [65, 44, 12, 4];
console.log(numbers);
// var xx;
const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json(url).then(receivedData => console.log(receivedData));
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));
// d3.json("samples.json").then(function (data) {
    // console.log("hello limei");
    // console.log(data);
// });
d3.json(url).then(spaceXResults => {
    // const numbers = [65, 44, 12, 4];
    const numbers = spaceXResults;
    // xx = spaceXResults[0];
    const newArr = numbers.map(myFunction);
    console.log(newArr);
    function myFunction(num) {
        return {"latitude":num.location.latitude, "longitude":num.location.longitude};
    };

});
// console.log(xx);

// d3.json(url).then(function (data) {
//     console.log(data);
//     console.log(data[0].map(location.latitude));
// });

// const numbers = [65, 44, 12, 4];
// console.log(numbers);
// const newArr = xx.map(myFunction);
// console.log(newArr);
// function myFunction(num) {
//   return num.location.latitude;
// }
