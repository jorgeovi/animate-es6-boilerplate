class Game {
  constructor() {
    this.PETS_NUMBER = 5;
    this.container;
    this.lastIndex = -1;
  }

  start() {
    console.log('Starting application version ' + VERSION);
    exportRoot.gotoAndStop('app');
    this.container = exportRoot.mcMain;
    this._activateEvents();
  }

  _activateEvents() {
    this.container.buttonCat.addEventListener('click', this._showMePets.bind(this));
    this.container.buttonDog.addEventListener('click', this._showMePets.bind(this));
  }

  _showMePets(e) {
    this.container.mcEmpty.removeAllChildren();
    let n = this._getRandomIndex();
    let picture = (e.currentTarget.name === 'buttonCat') ? this._getACat(n) : this.getADog(n);
    this.container.mcEmpty.addChild(picture);
  }

  _getACat(n) {
    return new lib['mcCat' + n];
  }

  getADog(n) {
    return new lib['mcDog' + n];
  }

  _getRandomIndex() {
    let n = this.lastIndex;
    while (n === this.lastIndex) {
      n =  Math.floor(Math.random() * (this.PETS_NUMBER-1));
    }
    this.lastIndex = n;
    return n;
  }
}

export default Game;