class Snake {

    constructor (headNode) {
        this._headNode = headNode;
        this._tailNode = null;
        this._color = 3;
        this._length = 1;
        this._defaultDirection = 40;
        this._direction;
    }

    get COLOR () {
        return this._color;
    }

    get Nodes () {
        let node = this._headNode;
        let nodes = [];

        nodes.push(node);
        while (node.Next) {
            node = node.Next;
            nodes.push(node);
        }

        return nodes;
    }

    direction (key) {
        if (Math.abs(parseInt(this._direction) - parseInt(key)) === 2) {
            this._direction = this._direction;
        } else {
            this._direction = key;
        }
    }

    move (food) {
        this._direction = this._direction?this._direction:this._defaultDirection;

        let newHead = new SnakeNode(this._headNode.X, this._headNode.Y, this._headNode, null);

        switch (this._direction) {
            case 37:
                newHead.setX(this._headNode.X-1);
                break;
            case 38:
                newHead.setY(this._headNode.Y-1);
                break;
            case 39:
                newHead.setX(this._headNode.X+1);
                break;
            case 40:
                newHead.setY(this._headNode.Y+1);
        }

        if(Math.abs(newHead.X) >= FIELD_HEIGHT || Math.abs(newHead.Y) >= FIELD_WIDTH
            || newHead.X < 0 || newHead.Y < 0 || this.isSnakeNode()) {
            alert('LOOSE!');
            return false;
        }

        if(newHead.X === food.X && newHead.Y === food.Y) {
            this.grow(food);
            return 'grow';
        } else {

            if(this._length > 1) {

                newHead.setNext(this._headNode);
                newHead.Prev.setPrev(newHead);
                this._headNode = newHead;

                this._tailNode = this._tailNode.Prev;
                this._tailNode.setNext(null);


            } else {
                this._headNode = newHead;
            }
        }

        return true;
    }

    grow (food) {
        let node = new SnakeNode(food.X, food.Y, null, null);

        if (this._length === 1) {

            this._headNode.setPrev(node);
            this._headNode.setNext(null);
            this._tailNode = this._headNode;

            node.setNext(this._tailNode);
            this._headNode = node;
            this._length++;

        } else if (this._length > 1) {

            this._headNode.setPrev(node);
            node.setNext(this._headNode);
            this._headNode = node;


            this._length++;

        }

    }

    isSnakeNode () {
        let result = false;

        if (this._length > 1) {
            let nodes = this.Nodes.splice(1, this._length);
            nodes.forEach(node => {
                if(node !== this._headNode && this._headNode.X === node.X && this._headNode.Y === node.Y) {
                    result = true;
                }
            });
        }

        return result;
    }

}