d3.json("samples.json").then(function(data){
    console.log(data);
});

// Extract wfreq into a new array using .map
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Sort wfreq in descending order using .sort
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    console.log(wfreq);
});

// Delete null values from sorted wfreq array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
    person.wfreq).sort((a,b) => b-a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// Print all of the metadata of the first person in the dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});
