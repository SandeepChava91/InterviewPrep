

var inorderTraversal = function (root) {
    return inorderTraversalUtil(root, []) || [];
};

function inorderTraversalUtil(root, result) {

    if (root === null) {
        return;
    }

    // root
    result.push(root.val);

    // Left
    if (root.left) {
        inorderTraversalUtil(root.left, result);
    }

    // right
    if (root.right) {
        inorderTraversalUtil(root.right, result);
    }

    return result;
}