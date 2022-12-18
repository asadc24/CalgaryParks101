// Very basic server. Our API wont have things such as auth. It is simply a wrapper for serving the client the data needed from the json
var data = require('../newData.json')
const express = require('express')
const app = express()


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
    res.send(data.data.filter(filterData))
})

// To get data on specific park equipement in a specific community
app.get(`/community/:communityName/:equipmentName`, function(req, res) {
    let communityFilter = req.params.communityName.substring(1).toUpperCase();
    let equipmentFilter = req.params.equipmentName.substring(1).toUpperCase();
    const filterData = (equipment) => {
        return ((equipment.community_name === communityFilter) && (equipment.equipment_name === equipmentFilter))
    }    
    res.send(data.data.filter(filterData))
})

// To get data on a specific park equipment
app.get(`/equipment/:equipmentName`, function(req, res) {
    let equipmentFilter = req.params.equipmentName.substring(1).toUpperCase();
    const filterData = (equipment) => {
        return equipment.equipment_name === equipmentFilter
    }    
    res.send(data.data.filter(filterData))
})

// To get data on park equipment in a specific city sector (ex. Northeast, northwest, etc.)
app.get(`/sector/:sectorName`, function(req, res) {
    let sectorFilter = req.params.sectorName.substring(1).toUpperCase();
    const filterData = (equipment) => {
        return equipment.sector_name === sectorFilter
    }    
    res.send(data.data.filter(filterData))
})

// To get data on specific park equipment in a specifc city sector
app.get(`/sector/:sectorName/:equipmentName`, function(req, res) {
    let sectorFilter = req.params.sectorName.substring(1).toUpperCase();
    let equipmentFilter = req.params.equipmentName.substring(1).toUpperCase();
    const filterData = (equipment) => {
        return ((equipment.sector_name === sectorFilter) && (equipment.equipment_name === equipmentFilter))
    }    
    res.send(data.data.filter(filterData))
})



app.listen(3000)

