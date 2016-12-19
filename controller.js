class Controller {
    constructor (field, snake, interval) {
        this._field = field;
        this._snake = snake;
        this._inteval = interval || 200;
    }

    runGameLoop () {
        let food = new Food(this._field.WIDTH / 2, this._field.HEIGHT / 2);
        let gameInterval = setInterval(() => {

            document.onkeydown = event => {
                this._snake.direction(event.keyCode);
            }

            this._field.clear();

            var move = this._snake.move(food)

            if (!move) {
                clearInterval(gameInterval);
            } else if (move === 'grow') {
                this._inteval -= 50;
            } else {
                this._field.mergeFood(food);
                this._field.mergeSnake(this._snake);
                this._field.draw();
            }

        }, this._inteval);
    }
}