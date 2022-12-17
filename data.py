import shapely
import geojson
import json

f = open('./datasets/CoC_parks.json')
f2 = open('./datasets/CoC_community.geojson')


data = json.load(f)
data2 = geojson.load(f2)

allCommunities = data2.features


# Found 16 to be index of equipment name
# POINT (-114.08759187429528 50.956477873174116) southwood
# Found 21 to be the location
# longitude is [21][2]
# latitude is [21][1]
for i in data['data']:
        temp_community = ""
        temp_sector = ""
        temp_equipment = i[16]
        temp_lat = float(i[21][1])
        temp_long = float(i[21][2])
        temp_coord = (temp_long, temp_lat)
        temp_point = shapely.geometry.Point(temp_coord)
        print(temp_point)
        for community in allCommunities:
                polygons = [shapely.geometry.Polygon(polygon) for polygon in community.geometry['coordinates'][0]]
                multiPolygon = shapely.geometry.MultiPolygon(polygons)
                result = multiPolygon.contains(temp_point)
                if(result):
                        temp_community = community.properties['name']
                        temp_sector = community.properties['sector']
                        print(temp_community)
                        print(temp_sector)





f.close()
f2.close()