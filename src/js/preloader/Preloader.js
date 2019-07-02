class Preloader {
  constructor () {
    this.anchoBarra = $('#barraPreloader').width();
    this._maqueta();
    this._iniciaListener();
  }

  update(progreso) {
    let porcentaje = Math.round(progreso.progress * 100);
    let elTexto = 'LOADING ' + porcentaje + '%...';
    $('#textoPreloader').text(elTexto);
    let ancho = (porcentaje * this.anchoBarra) / 100;
    $('#barraPreloader').css('width', ancho+'px');
  }

  onPreloadComplete() {
    $('#grupoPreloader').hide();
    window.game.start();
  }

  _maqueta() {
    $('#barraPreloader').css('width', '0px');
    $('#textoPreloader').text('LOADING 0%...');
  }

  _iniciaListener() {
    if (window.loader) window.loader.addEventListener('progress', this.update.bind(this));
      else {
        console.log('createjs loader not yet ready, retrying in 100ms');
        setTimeout(this._iniciaListener.bind(this), 100);
    }
  }
}

export default Preloader;