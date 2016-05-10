# poc-map-points

Low-Fi POC for annotating maps

## Thoughts on routes

/           (Welcome Screen)
/maps       (List of Maps)     <- List maps [/api/maps] (Perhaps load preview here)
/parties    (List of Parties)  <- List parties [/api/parties] (Load into app here)
/map/:id    (Single Map)       <- Show map [/api/maps/:mapid] (Load map and points here, players overlay)

## React Router

/edit-players/ (Edit Players (duh)) <- edit all fields


index.html: back

<img src="img/baroviaregion.jpg" width="2010" height="1290" alt="Map: The Lands of Barovia" class="img-master" />
<div id="pin-wrapper"></div>
<div id="app-mount-point"></div>

<script>
  var pinWrapper = document.getElementById('pin-wrapper');
  var pins = [ //watch monitor size
    {x:1502,y:760,content:"The content of Pin One"},
    {x:1290,y:746,content:"The content of Pin Two."}
  ];
  //var domPins = [];
  //tpl = '<div class=""></div>'
  for (var i = 0; i < pins.length; i++) {
    var btn = document.createElement('button');
    var div = document.createElement('div');
    var content = document.createTextNode(pins[i].content);
    var id = 'pin-content-' + i;

    btn.setAttribute('type', 'button');
    btn.setAttribute('data-id', id);
    btn.className = 'pin reset-btn';
    btn.style.left = pins[i].x + 'px';
    btn.style.top = pins[i].y + 'px';
    div.setAttribute('id', id);
    div.appendChild(content);
    div.className = 'pin-text';
    div.style.left = (pins[i].x + 20) + 'px';
    div.style.top = (pins[i].y +20) + 'px';

    pinWrapper.appendChild(btn);
    pinWrapper.appendChild(div);
  }

  pinWrapper.addEventListener('click', pinClick);
  pinWrapper.addEventListener('click', textClick);

  function hasClass(el, className) {
    if (typeof className !== 'string' || /\s/g.test(className)) {
      console.warn('hasClass only accepts a single class string');
      return;
    }
    return el.classList.contains(className);
  }

  function pinClick (event) {
    if (hasClass(event.target, 'pin')) {
      var el = document.getElementById(event.target.getAttribute('data-id'));
      el.style.display = 'block';
    }
  }

  function textClick (event) {
    if (hasClass(event.target, 'pin-text')) {
      event.target.style.display = 'none';
    }
  }
</script>
