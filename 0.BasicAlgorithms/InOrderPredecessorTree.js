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

    let a = InorderPredecessor(root, 5, undefined);
    // let a = InorderPredecessor(null, 5, undefined);

    console.log(a);
}

function InorderPredecessor(root, num, maxPrevNum) {

    if(root){
        if (root.val < num) {
            maxPrevNum = root.val;
            root = root.right;
            return InorderPredecessor(root, num, maxPrevNum);
        }
        else if (root.val > num) {
            root = root.left;
            return InorderPredecessor(root, num, maxPrevNum);
        }
        else {
            // Found the element
            if (root.left) {
                return root.left.val;
            }

        }
    }

    return maxPrevNum;
}

input();