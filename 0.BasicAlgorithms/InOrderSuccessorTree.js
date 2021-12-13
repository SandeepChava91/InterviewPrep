
function Node(val, left, right) {
    this.left = left;
    this.right = right;
    this.val = val;
}

function input() {

    let l3l1 = new Node(2, null, null);
    let l3l2 = new Node(5, null, null);

    let l2l1 = new Node(3, l3l1, l3l2);
    let l1l1 = new Node(9, l2l1, null);


    let r3l1 = new Node(17, null, null);
    let r3l2 = new Node(29, null, null);

    let r2l1 = new Node(18, r3l1, r3l2);
    let r1l1 = new Node(14, null, r2l1);

    let root = new Node(11, l1l1, r1l1);

    let a = InorderSuccessor(root, 11, undefined);
    console.log(a);
}

function InorderSuccessor(root, element, minNextNum) {
    if (element < root.val) {
        minNextNum = root.val;
        if (root.left) {
            root = root.left;
            return InorderSuccessor(root, element, minNextNum);
        }
        else {
            return minNextNum;
        }
    }
    else if (element > root.val) {
        root = root.right;
        return InorderSuccessor(root, element, minNextNum);
    }
    else {
        // Found the element
        if (root.right == null) {
            // if(minNextNum == undefined){
            //     return null;
            // }
            return minNextNum;
        }
        else {
            return InorderSuccessor(root.right, element, minNextNum);
        }

    }
}

input();