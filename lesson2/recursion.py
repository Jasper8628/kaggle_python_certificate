def divide(array):
    if len(array)<=1:
        return array
    else:
        midIndex=len(array)//2
        left=array[0:midIndex]
        right=array[midIndex:len(array)]
        print ("priting left,right:", left,right)
        return merge(divide(left),divide(right))


def merge(left,right):
    result=[]
    while len(left) and len(right):
        if left[0]<=right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
    while len(left):
        result.append(left.pop(0))
    while len(right):
        result.append(right.pop(0))
    print ( "printing result:",result)
    return result


sampleArray=[2,1,5,4,3,5,11,33,5,12,10,9,13,15,88]
divide(sampleArray)
