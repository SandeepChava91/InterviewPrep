def getMinCost(crew_id, job_id):
    # Write your code here
    mincost = 0

    crew_id.sort()
    job_id.sort()

    print(crew_id)
    print(job_id)

    for x in range(0, len(crew_id)):
        if(job_id[x] > crew_id[x]):
            mincost = mincost + (job_id[x] - crew_id[x])
        else:
            mincost = mincost + (crew_id[x] - job_id[x])


    return mincost
    

# a = [3, 1, 4, 6, 5]
# b = [9, 8, 3, 15, 1]

a = [4,5,1,4,2]
b = [4,4,7,9,0]

# a = [3,8,2,6,9]
# b = [8,1,10,1,4]

print(getMinCost(a, b))