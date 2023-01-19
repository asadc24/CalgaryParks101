# YYC-PARKS
An app to help find parks in Calgary

Introduction:

YYC-PARKS is a web application aimed to help people find park equipment in the Calgary area. The current iteration of the product features searching based on communities and city sectors, featuring visualized data and an interactive map for each. Users can also view equipment near them (using the Geolocation API).

Technology Used:

Python: Used for manipulating the City of Calgary datasets into a workable format (Datasets referenced below)
 - Libraries used: shapely, geojson
 
Node/ExpressJS: Used for setting up a REST API to call on our frontend

React: Used for developing the frontend
- Libraries used: Tailwind CSS, Chart JS, Mapbox.JS, Geolocation API

Insomnia: General API Endpoint testing


Datasets:

CoC_parks.json is obtained from 
https://data.calgary.ca/Recreation-and-Culture/Parks-Sport-Equipment/da6k-wpxb/data

CoC_community.geojson is obtained from
https://data.calgary.ca/Base-Maps/Community-Boundaries/ab7m-fwn6
