function list(item, next) {
    return {
        item,
        next
    };
}

function search(list, item) {
    if (list === null) {
        return null;
    }

    if (list.item === item) {
        return list;
    } else {
        return search(list.next, item);
    }
}

function insert(currentList, newItem) {
    return list(newItem, currentList);
}

function predecessor(list, itemToPrecede) {
    if (list === null || list.next === null) {
        return null;
    }

    if (list.next.item === itemToPrecede) {
        return list;
    } else {
        return predecessor(list.next, itemToPrecede);
    }
}

function remove(list, item) {
    var node = search(list, item);

    if (node !== null) {
        var predNode = predecessor(list, node);
        if (predNode === null) {
            list = node.next;
        } else {
            predNode.next = node.next;
        }
    }
}

function reverse(listNode) {
    if (listNode === null) {
        return null;
    }

    if (listNode.next === null) {
        return listNode;
    }

    var nextNode = listNode.next;
    listNode.next = null;
    var rest = reverse(nextNode);
    nextNode.next = listNode;
    return rest;
}