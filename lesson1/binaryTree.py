class Node:
    def __init__(self,value):
        self.value=value
        self.left=None
        self.right=None
    def insert(self,data):
        if self.value==data:
            return False
        elif self.value > data:
            if self.left:
                return self.left.insert(data)
            else:
                self.left=Node(data)
                print data
                return True
        else:
            if self.right:
                return self.right.insert(data)
            else:
                self.right=Node(data)
                print data
                return True

    
class BianryTree:
    def __init__(self):
        self.root=None
    def insertNode(self,data):
        if self.root:
            return self.root.insert(data)
        else:
            self.root=Node(data)
            return True
 


tree=BianryTree()
array1=[1,3,2,6,5,11,8,82,22,32,44,14,21,16,9]
tree.insertNode(array1[7])
for x in array1:
    tree.insertNode(x)


# print(len(array1))