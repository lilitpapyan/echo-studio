/* =========================================================
   ÉCHO — INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


  /* =======================================================
     SCENT FINDER DATA
  ======================================================= */

  const scents = {

    calm: {
      number: "NO. 01",
      name: "THE MORNING",
      notes: "Bergamot · Cotton · White Musk",
      quote: "For quiet beginnings and clear intentions.",
      image: "echo-morning.png",
      activeNumber: "01"
    },

    warm: {
      number: "NO. 05",
      name: "SOLACE",
      notes: "Vanilla · Cashmere · Tonka",
      quote: "For soft moments that feel like coming home.",
      image: "echo-solace.png",
      activeNumber: "05"
    },

    bold: {
      number: "NO. 02",
      name: "MIDDAY",
      notes: "Fig · Neroli · Sandalwood",
      quote: "For bright hours and effortless confidence.",
      image: "echo-midday.png",
      activeNumber: "02"
    },

    mysterious: {
      number: "NO. 04",
      name: "AFTER DARK",
      notes: "Amber · Cedar · Black Tea",
      quote: "For slow evenings and unfinished conversations.",
      image: "echo-after-dark.png",
      activeNumber: "04"
    }

  };


  /* =======================================================
     FIND ELEMENTS
  ======================================================= */

  const moodCards = document.querySelectorAll(".mood-card");

  const resultSection = document.getElementById("scentResult");

  const resultImage = document.getElementById("resultImage");

  const resultNumber = document.getElementById("resultNumber");

  const resultName = document.getElementById("resultName");

  const resultNotes = document.getElementById("resultNotes");

  const resultQuote = document.getElementById("resultQuote");

  const verticalNumber = document.querySelector(".vertical-number");


  /* =======================================================
     UPDATE RESULT
  ======================================================= */

  function updateScentResult(scentKey) {

    const scent = scents[scentKey];

    if (!scent) {
      return;
    }


    /* Change text */

    resultNumber.textContent = scent.number;

    resultName.textContent = scent.name;

    resultNotes.textContent = scent.notes;

    resultQuote.textContent = scent.quote;


    /* Change image */

    resultImage.style.backgroundImage =
      `url("${scent.image}")`;


    /* Change active fragrance number */

    const numbers = ["01", "02", "03", "04", "05"];

    verticalNumber.innerHTML = numbers
      .map(function (number) {

        if (number === scent.activeNumber) {

          return `<strong>${number}</strong>`;

        }

        return number;

      })
      .join("<br>");


    /* Scroll to result */

    setTimeout(function () {

      resultSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 150);

  }


  /* =======================================================
     MOOD CARD CLICKS
  ======================================================= */

  moodCards.forEach(function (card) {

    card.addEventListener("click", function () {

      const scentKey = card.dataset.scent;

      updateScentResult(scentKey);


      /* Remove active state */

      moodCards.forEach(function (item) {

        item.classList.remove("is-active");

      });


      /* Add active state */

      card.classList.add("is-active");

    });

  });


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const mobileMenuButton =
    document.getElementById("mobileMenuButton");

  const mobileNav =
    document.getElementById("mobileNav");


  if (mobileMenuButton && mobileNav) {

    mobileMenuButton.addEventListener("click", function () {

      const isOpen =
        mobileNav.classList.toggle("is-open");


      mobileMenuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );


      document.body.classList.toggle(
        "menu-open",
        isOpen
      );


      mobileMenuButton.textContent =
        isOpen ? "×" : "☰";

    });


    /* Close menu after clicking a link */

    const mobileLinks =
      mobileNav.querySelectorAll("a");


    mobileLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        mobileNav.classList.remove("is-open");

        document.body.classList.remove("menu-open");

        mobileMenuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        mobileMenuButton.textContent = "☰";

      });

    });

  }


  /* =======================================================
     NEWSLETTER
  ======================================================= */

  const newsletterForm =
    document.getElementById("newsletterForm");

  const newsletterEmail =
    document.getElementById("newsletterEmail");


  if (newsletterForm && newsletterEmail) {

    newsletterForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const email =
          newsletterEmail.value.trim();


        if (!email) {
          return;
        }


        newsletterForm.innerHTML = `
          <p class="newsletter-success">
            Thank you. Welcome to the world of ÉCHO.
          </p>
        `;

      }
    );

  }


  /* =======================================================
     HEADER SEARCH ICON
  ======================================================= */

  const searchButton =
    document.querySelector(".icon-button");


  if (searchButton) {

    searchButton.addEventListener(
      "click",
      function () {

        const collection =
          document.getElementById("collection");


        if (collection) {

          collection.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  }

});
