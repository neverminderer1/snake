class SnakeNode {
    constructor (x, y, prevNode, nextNode) {
        this._x = x;
        this._y = y;
        this._prevNode = prevNode;
        this._nextNode = nextNode;
    }

    get X () {
        return this._x;
    }

    get Y () {
        return this._y;
    }

    get Next () {
        return this._nextNode || null;
    }

    get Prev () {
        return this._prevNode || null;
    }

    setX(x) {
        this._x = x;
    }

    setY(y) {
        this._y = y;
    }

    setNext (node) {
        this._nextNode = node;
    }

    setPrev (node) {
        this._prevNode = node;
    }

}