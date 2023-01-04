// Very basic server. Our API wont have things such as auth. It is simply a wrapper for serving the client the data needed from the json
var data = require('../datasets/newData.json')
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
  });



app.get('/', function(req, res) {
    res.send('HI, PLEASE USE AN API CLIENT TO EXPLORE THE DATA')
})

// to get data on all park equipment
app.get('/all', function(req, res) {
    res.send(data)
})

// to get data on park equipment in a specific community
app.get(`/community/:communityName`, function(req, res) {
    let communityFilter = req.params.communityName.substring(1).toUpperCase();
    const filterData = (equipment) => {
        return equipment.community_name === communityFilter
    }    
    res.send(data.filter(filterData))
})

// To get data on specific park equipement in a specific community
app.get(`/community/:communityName/:equipmentName`, function(req, res) {
    let communityFilter = req.params.communityName.substring(1).toUpperCase();
    let equipmentFilter = req.params.equipmentName.substring(1).toUpperCase();
    const filterData = (equipment) => {
        return ((equipment.community_name === communityFilter) && (equipment.equipment_name === equipmentFilter))
    }    
    res.send(data.filter(filterData))
})

// To get data on a specific park equipment
app.get(`/equipment/:equipmentName`, function(req, res) {
    let equipmentFilter = req.params.equipmentName.substring(1).toUpperCase();
    const filterData = (equipment) => {
        return equipment.equipment_name === equipmentFilter
    }    
    res.send(data.filter(filterData))
})

// To get data on park equipment in a specific city sector (ex. Northeast, northwest, etc.)
app.get(`/sector/:sectorName`, function(req, res) {
    let sectorFilter = req.params.sectorName.substring(1).toUpperCase();
    const filterData = (equipment) => {
        return equipment.community_sector === sectorFilter
    }    
    res.send(data.filter(filterData))
})

// To get data on specific park equipment in a specifc city sector
app.get(`/sector/:sectorName/:equipmentName`, function(req, res) {
    let sectorFilter = req.params.sectorName.substring(1).toUpperCase();
    let equipmentFilter = req.params.equipmentName.substring(1).toUpperCase();
    const filterData = (equipment) => {
        return ((equipment.community_sector === sectorFilter) && (equipment.equipment_name === equipmentFilter))
    }    
    res.send(data.filter(filterData))
})


app.get('/searchcommunity', function(req, res) {
    let communityFilter = req.query.community_name.toUpperCase();
    let tempData = [];

    for(i in data) {
        if(tempData.indexOf(data[i].community_name) === -1) {
            tempData.push(data[i].community_name)
        }        
    }

    const filterData = (community) => {
        if(communityFilter === '') {
            return false
        } else {
            return community.startsWith(communityFilter, 0)
        }
    }

    res.send(tempData.filter(filterData).sort())
});

app.get('/getAllCommunities', function(req, res) {
    let tempData = [];
    for(i in data) {
        if(tempData.includes(data[i].community_name)) {
            continue
        } else {
            tempData.push(data[i].community_name)
        }
    }
    
    res.send({"data": shuffle(tempData)})

});


// Helper shuffle function to shuffle an array of elements
// Algorithm used is the fihser-yates shuffle https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


app.listen(8080)

