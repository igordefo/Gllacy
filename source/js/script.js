ymaps.ready(function () {
    var map = new ymaps.Map('map', {
      center: [59.939390, 30.329545],
      zoom: 16,
      scrollZoom: false,//зум при скролле мышью отключен
      controls:[]//элементы контролов отсутствуют (строка поиска, кнопки зума, кнопки типа карты и тд)
    }, {
      searchControlProvider: 'yandex#search'
    }),
    Placemark = new ymaps.Placemark([59.938706, 30.323149], {
      balloonContent: 'Санкт-Петербург, Большая Конюшенная улица, 19/8'
    }, {
      // Опции.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icons/pin.svg',
      // Размеры метки.
      iconImageSize: [80, 140],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-40, -140],
      // Добавляем иконку тени и задаем аналогичные параметры.
      iconShadow: true,
      iconShadowLayout: 'default#image',
      iconShadowImageHref: 'img/icons/pin-shadow.png',
      iconShadowImageSize: [182, 110],
      iconShadowImageOffset: [0, -110]
    });

    map.geoObjects.add(Placemark);
    map.behaviors.disable('scrollZoom');
    map.controls.add('zoomControl');
    var roadcontrolState = map.controls.get('zoomControl').state.get('size');
    map.controls.get('zoomControl').options.set('size', 'small');
  });