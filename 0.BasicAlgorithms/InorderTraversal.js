

var inorderTraversal = function (root) {
    return inorderTraversalUtil(root, []) || [];
};

function inorderTraversalUtil(root, result) {

    if (root === null) {
        return;
    }

    // Left
    if (root.left) {
        inorderTraversalUtil(root.left, result);
    }

    // root
    result.push(root.val);

    // right
    if (root.right) {
        inorderTraversalUtil(root.right, result);
    }

    return result;
}