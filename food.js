class Food {
    constructor (x, y, color = 1) {
        this._x = x;
        this._y = y;
        this._color = color;
    }

    get X () {
        return this._x;
    }

    get Y () {
        return this._y;
    }

    get COLOR () {
        return this._color;
    }
}