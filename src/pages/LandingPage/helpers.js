export function getElementOffset(element) {
  let de = document.documentElement,
    box = element.getBoundingClientRect(),
    top = box.top + window.pageYOffset - de.clientTop,
    left = box.left + window.pageXOffset - de.clientLeft;
  return {
    top: top,
    left: left
  };
}

var navTop;
export function MenuStylize() {
  if (navTop == null) {
    navTop = document.getElementsByClassName('nav-top-container')[0];
  }
  let currentScrollPosition = window.pageYOffset,
    navHeight = navTop.offsetHeight / 2;
  if (currentScrollPosition > navHeight) {
    navTop.classList.add('show-background');
    return;
  }
  navTop.classList.remove('show-background');
}

let currentHash = 'home';
export function PageHashCheck() {
  var chapters = document.getElementsByClassName('chapter');
  for (let i = 0; i < chapters.length; i++) {
    let hash = chapters[i].id,
      currentScrollPosition = window.pageYOffset,
      currentElementStart_Y = getElementOffset(chapters[i]).top,
      currentElementHeight = chapters[i].offsetHeight,
      currentElementEnd_Y = currentElementStart_Y + currentElementHeight,
      windowHeight = document.body.getBoundingClientRect().height;
    if (
      currentScrollPosition + windowHeight / 2 > currentElementStart_Y &&
      currentScrollPosition + windowHeight / 2 < currentElementEnd_Y &&
      currentHash !== hash
    ) {
      //if executed, this sets the hash, depending on browser compatibility
      if (window.history.replaceState) {
        window.history.replaceState(null, null, '#' + hash);
      } else {
        window.location.hash = hash;
      }
      currentHash = hash;
    }
  }
}

export function setSignupLinkQueryString() {
  const search = window.location.search;

  if (search) {
    document.querySelectorAll('a[href^="/signup').forEach(function(anchor) {
      let clonedAnchor = anchor.cloneNode(true);
      clonedAnchor.setAttribute('href', '/signup' + search);
      anchor.parentNode.replaceChild(clonedAnchor, anchor);
    });
  }
}

export function MenuToggle(action) {
  var menu = document.getElementById('menu-wrapper');
  switch (action) {
    case 'initialize':
      menu.addEventListener('click', function(event) {
        if (event.target.className === 'menu-wrapper menuopen') {
          MenuToggle();
        }
      });
      document
        .getElementById('landing-nav-menu-toggle')
        .addEventListener('click', function() {
          MenuToggle();
        });
      break;
    default:
      let status = menu.getAttribute('data-status');
      if (status === 'closed') {
        menu.setAttribute('data-status', 'open');
        menu.classList.add('menuopen');
        return;
      }
      status = 'closed';
      menu.classList.remove('menuopen');

      menu.setAttribute('data-status', status);
  }
}
