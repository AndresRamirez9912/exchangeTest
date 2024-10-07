document.addEventListener("DOMContentLoaded", function (event) {
  MenuToggle("initialize");
  PageHashCheck();
  setSignupLinkQueryString();

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  window.onscroll = function () {
    PageHashCheck();
    MenuStylize();
  };

  function setSignupLinkQueryString() {
    const search = location.search;

    if (search) {
      document.querySelectorAll('a[href^="/signup').forEach(function (anchor) {
        let clonedAnchor = anchor.cloneNode(true);
        clonedAnchor.setAttribute('href', "/signup" + search);
        anchor.parentNode.replaceChild(clonedAnchor, anchor);
      });
    }
  }

  // =============================================
  // Helper Functions
  // =============================================
  function getElementOffset(element) {
    let de = document.documentElement,
      box = element.getBoundingClientRect(),
      top = box.top + window.pageYOffset - de.clientTop,
      left = box.left + window.pageXOffset - de.clientLeft;
    return {
      top: top,
      left: left
    };
  }

  // =============================================
  // Menu Toggle
  // =============================================
  var menu;

  function MenuToggle(action) {
    switch (action) {
      case "initialize":
        menu = document.getElementById("menu-wrapper");
        menu.addEventListener("click", function (event) {
          if (event.target.className === "menu-wrapper menuopen") {
            MenuToggle();
          }
        });
        document.getElementById("landing-nav-menu-toggle").addEventListener("click", function () {
          MenuToggle();
        });
        break;
      default:
        let status = menu.getAttribute('data-status');
        if (status == 'closed') {
          menu.setAttribute('data-status', 'open');
          menu.classList.add("menuopen");
          return;
        }
        status = 'closed';
        menu.classList.remove("menuopen");

        menu.setAttribute('data-status', status);
    }
  }

  // =============================================
  // Menu Background (on scroll)
  // =============================================
  var navTop;

  function MenuStylize() {
    if (navTop == null) {
      navTop = document.getElementsByClassName("nav-top-container")[0];
    }
    let currentScrollPosition = window.pageYOffset,
      navHeight = navTop.offsetHeight / 2;
    if (currentScrollPosition > navHeight) {
      navTop.classList.add("show-background");
      return;
    }
    navTop.classList.remove("show-background");
  }

  // =============================================
  // Page Hash
  // =============================================
  var currentHash = "home";

  function PageHashCheck() {
    var chapters = document.getElementsByClassName("chapter");
    for (let i = 0; i < chapters.length; i++) {
      let hash = chapters[i].id,
        currentScrollPosition = window.pageYOffset,
        currentElementStart_Y = getElementOffset(chapters[i]).top,
        currentElementHeight = chapters[i].offsetHeight,
        currentElementEnd_Y = (currentElementStart_Y + currentElementHeight),
        windowHeight = document.body.getBoundingClientRect().height;
      if ((currentScrollPosition + (windowHeight / 2)) > currentElementStart_Y &&
        (currentScrollPosition + (windowHeight / 2)) < currentElementEnd_Y &&
        currentHash != hash) {
        //if executed, this sets the hash, depending on browser compatibility
        if (history.replaceState) {
          history.replaceState(null, null, ("#" + hash));
        } else {
          window.location.hash = (hash);
        }
        currentHash = hash;
      }
    }
  }

  // =============================================
  // Google Maps
  // =============================================
  function initMap() {
    var pos = {
      lat: 40.753206,
      lng: -73.989326
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: pos
    });
    var marker = new google.maps.Marker({
      position: pos,
      map: map
    });
  }

})