
function node(value, left, right) {
    this.data = value;
    this.left = left;
    this.right = right;
}

function test() {

    const leaf1 = new node(1, null, null);
    const leaf2 = new node(6, null, null);
    const leaf5 = new node(5, null, null);

    const level11 = new node(2, leaf1, leaf2);
    const root = new node(3, level11, leaf5);

    console.log(isBST(root));
}

function isBST(root) {
    return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

function isBSTUtil(node, min, max) {
    /* an empty tree is BST */
    if (node == null)
        return true;

    // Node data should be between the range
    if (node.data < min || node.data > max)
        return false;

    // Run a recusrion converging the range(reduce left bby -1 and increase right by 1)
    return (isBSTUtil(node.left, min, node.data - 1) && isBSTUtil(node.right, node.data + 1, max));
}

test();