let modalBtn = document.querySelector(".search-button");
let modal = document.querySelector(".modal-container");
let modalBtnClose = document.querySelector(".btn-close");
let body = document.querySelector(".body");
let lastFocus;

function modalShow () {
  lastFocus = document.activeElement;
  modal.setAttribute('tabindex', '0');
  modal.focus();
}

modalBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.add("modal-container-active");
  body.classList.add("no-scroll");
  modalShow ();
})

modalBtnClose.addEventListener('click', function() {
  modal.classList.remove("modal-container-active");
  body.classList.remove("no-scroll");
  lastFocus.focus();
})

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    setTimeout(() => {
    modal.classList.remove("modal-container-active");
    body.classList.remove("no-scroll");
    lastFocus.focus();
  }
),500}
});

// tooltip

let tooltip = document.querySelector(".tooltip-text");
let tooltipBtn = document.querySelector(".tooltip-toggle");

tooltipBtn.onfocus = function() {
  if(tooltip) {
    document.querySelector(".tooltip-text").style.display = "block";

    tooltipBtn.onblur = function() {
      document.querySelector(".tooltip-text").style.display = "none";
    }
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

      tooltipBtn.onblur = function() {
        document.querySelector(".tooltip-text").style.display = "none";
      }
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
