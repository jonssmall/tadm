function treeNode(item, left, right) {
    return {
        item,
        left,
        right
    };
}

function search(tree, item) {
    if (tree === null) {
        return null;
    }

    if (tree.item === item) {
        return tree;
    }

    if (item < tree.item) {
        return search(tree.left, item);
    } else {
        return search(tree.right, item);
    }
}

function minimum(tree) {
    if (tree === null) {
        return null;
    }

    let min = tree;
    while (min.left !== null) {
        min = min.left;
    }
    return min;
}

function maximum(tree) {
    if (tree === null) {
        return null;
    }

    let max = tree;
    while (max.right !== null) {
        max = max.right;
    }
    return max;
}

function traverse(tree, fn) {
    if (tree !== null) {
        traverse(tree.left, fn);
        fn(tree.item);
        traverse(tree.right, fn);
    }
}

function insert(tree, item) {
    if (tree === null) {
        var newNode = treeNode(item, null, null);
        return;
    }

    if (item < tree.item) {
        insert(tree.left, item);
    } else {
        insert(tree.right, item);
    }
}