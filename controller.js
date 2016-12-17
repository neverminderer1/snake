class Controller {
    constructor (field, snake, interval = 200) {
        this._field = field;
        this._snake = snake;
        this._inteval = interval;
    }

    runGameLoop () {
        let food = new Food(this._field.WIDTH / 2, this._field.HEIGHT / 2);

        let gameInterval = setInterval(() => {
            console.log('running');

            this._field.clear();
            this._field.mergeFood(food);
            this._field.draw();
        }, this._interval)
    }
}