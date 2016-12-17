const FIELD_WIDTH   = 46,
      FIELD_HEIGHT  = 46,
      FIELD_COLOR   = '#2b2b2b';
      COLORS        = ['', 'red', 'orange', 'yellow', 'green', 'azure', 'blue', 'violet'];


document.addEventListener('DOMContentLoaded', () => {
    let fieldContainer = document.getElementById('field');
    let field = new Field(FIELD_WIDTH, FIELD_HEIGHT, FIELD_COLOR, fieldContainer, COLORS);

    field.init();

    let controller = new Controller(field, null);
    controller.runGameLoop();
});
