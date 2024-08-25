let moduleBtn = document.querySelector(".search-button");
let module = document.querySelector(".module-container");
let moduleBtnClose = document.querySelector(".btn-close");
let body = document.querySelector(".body");
let lastFocus

function modalShow () {
  lastFocus = document.activeElement;
  module.setAttribute('tabindex', '0');
  module.focus();
}

moduleBtn.addEventListener('click', function() {
  module.classList.add("module-container-active");
  body.classList.add("no-scroll");
  modalShow ();
})

moduleBtnClose.addEventListener('click', function() {
  module.classList.remove("module-container-active");
  body.classList.remove("no-scroll");
  lastFocus.focus();
})

module.addEventListener('click', (e) => {
  if (e.target === module) {
    setTimeout(() => {
    module.classList.remove("module-container-active");
    body.classList.remove("no-scroll");
    lastFocus.focus();
  }
),1000}
});

// tooltip

let tooltip = document.querySelector(".tooltip-text");
let tooltipBtn = document.querySelector(".tooltip-toggle");

tooltipBtn.onfocus = function() {
  if(tooltip) {
      document.querySelector(".tooltip-text").style.display = "block";
  }else {
    setTimeout(() => {
      document.querySelector(".tooltip-text").style.display = "block";
    }, 500)
  }
}

tooltipBtn.onblur = function() {
  document.querySelector(".tooltip-text").style.display = "none";
}

tooltipBtn.addEventListener('mouseover', function() {
  if(tooltip) {
      document.querySelector(".tooltip-text").style.display = "block";
  }else {
    setTimeout(() => {
      document.querySelector(".tooltip-text").style.display = "block";
    }, 500)
  }
});

tooltipBtn.addEventListener('mouseout', function() {
  setTimeout(() => {

    if(tooltip) {
      tooltip.addEventListener('mouseover', (() => {
      setTimeout(() => {
        document.querySelector(".tooltip-text").style.display = "block";
      }, 500)
    }));

      tooltip.addEventListener('mouseout', function() {
        setTimeout(() => {
          document.querySelector(".tooltip-text").style.display = "none";
        }, 500)
      });
    }else {
    document.querySelector(".tooltip-text").style.display = "none";
    }
  }, 500)
});





