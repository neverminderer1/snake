class Field {
    constructor (width, height, defaultColor, parentNode, colors) {
        this._width             = width;
        this._height            = height;
        this._defaultColor      = defaultColor;
        this._parentNode        = parentNode;
        this._colors            = colors;
        this._matrix            = this.initMatrix();
    }

    initMatrix () {
        let matrix = [];
        for (let i = 0; i < this._height; i++) {
            matrix.push(new Array(this._width).fill(0));
        }

        return matrix;
    }

    get WIDTH () {
        return this._width;
    }

    get HEIGHT () {
        return this._height;
    }

    init () {
        this._matrix.forEach( (row, rowIndex) => {
            let rowElem = document.createElement('div');

            row.forEach( (rowItem, cellIndex) => {
                let cellElem = document.createElement('div');
                    cellElem.className = 'cell';
                    cellElem.setAttribute('id', `${rowIndex}-${cellIndex}`);

                rowElem.appendChild(cellElem);
            });

            this._parentNode.appendChild(rowElem);
        })
    }

    clear () {
        this._matrix.forEach( row => row.fill(0));
    }

    draw () {
        this._matrix.forEach( (row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                document.getElementById(`${rowIndex}-${cellIndex}`)
                    .style.backgroundColor =
                        (cell === 0)
                            ? this._defaultColor
                            : this._colors[cell];
            })
        })
    }

    mergeFood (food) {
        this._matrix[food.Y][food.X] = food.COLOR;
    }

    mergeSnake (snake) {
        //console.log(snake.Nodes)
        snake.Nodes.forEach(node => {
            this._matrix[node.Y][node.X] = snake.COLOR;
        })

    }
}