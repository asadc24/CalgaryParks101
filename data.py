import json

f = open('data.json')

data = json.load(f)



# Found 16 to be index of equipment name

# Found 16 to be the location


for i in data['data']:
        print(i[16])
        print(i[21])
        print("\n")

f.close()