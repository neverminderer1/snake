class Controller {
    constructor (field, snake, interval) {
        this._field = field;
        this._snake = snake;
        this._inteval = interval || 150;
    }

    randomField (min, max) {
        var rand = min +Math.random() * (max + 1 - min);
        return Math.round(rand);
    }

    runGameLoop () {
        this.food = new Food(this.randomField(1, this._field.WIDTH), this.randomField(1, this._field.HEIGHT));
        var movementInterval;
        let gameInterval = () => {

            document.onkeydown = event => {
                this._snake.direction(event.keyCode);
            }

            this._field.clear();

            let move = this._snake.move(this.food);

            if (!move) {
                clearInterval(movementInterval);
                return false;
            } else if (move === 'grow') {
                this._inteval -= 10;
                this.food = new Food(this.randomField(1, this._field.WIDTH), this.randomField(1, this._field.HEIGHT));
                movementInterval = setInterval(gameInterval, this._inteval);
            } else {
                this._field.mergeFood(this.food);
                this._field.mergeSnake(this._snake);
                this._field.draw();
            }

        };

        clearInterval(movementInterval);
        movementInterval = setInterval(gameInterval, this._inteval);
    }
}