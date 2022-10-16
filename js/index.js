const modal = document.querySelector(".modal");
const projectBanners = document.querySelectorAll(".project-banner");

// Listening for click event to toggle modal

modal.addEventListener("click", function (event) {
   if (event.target.classList.contains("modal")) {
      event.target.classList.add("hide-element");
   } else if (event.target.classList.contains("close-btn")) {
      modal.classList.add("hide-element");
   }
});

projectBanners.forEach(function (projectBanner) {
   projectBanner.addEventListener("click", function (event) {
      if (event.target.classList.contains("cta")) {
         modal.classList.remove("hide-element");
         if (event.target.dataset.id == 3) {
            modal.innerHTML = `
            <section class="section-container flex-col clr-white flex-ctr-xy flex-gap-40 bg-black">
              <img class="modal-image" src="/images/rainyday-website.png" alt="" />
              <h3>Cross-Course Project</h3>
              <p class="modal-description">Rainydays is a e-commerce website we where tasked to create that sells rain jackets. This using html, CSS and JavaScript</p>
              <div class="flex flex-gap-40 flex-ctr-y">
                  <a href="https://github.com/richiebotteri/rainydays-wpapi-ca" class="social-icons clr-white cursor-ptr"><i class="fa-brands fa-square-github"></i></a>
                <a href="https://heartfelt-mochi-956b4b.netlify.app" class="cta bg-white flex flex-ctr-xy cursor-ptr">Live server</a>
                <button class="close-btn flex flex-ctr-xy font-p2 cursor-ptr">
                     <i class="fa-solid fa-xmark"></i>
                  </button>
             </div>
          </section>
          `;
         } else if (event.target.dataset.id == 2) {
            modal.innerHTML = `
            <section class="section-container flex-col clr-white flex-ctr-xy flex-gap-40 bg-black">
               <img class="modal-image" src="/images/museum-website.png" alt="Museum Website" />
               <h3>Semester Project 1:</h3>
               <p class="modal-description">Community science museum is an website we where tasked to create using html and CSS, and is design to inform and attract visitors to an local museum</p>
               <div class="flex flex-gap-40 flex-ctr-y">
               <a href="https://github.com/richiebotteri/Oslo-Museum-Project-Repo" class="social-icons clr-white cursor-ptr"><i class="fa-brands fa-square-github"></i></a>
                <a href="https://inspiring-valkyrie-0707de.netlify.app" class="cta bg-white flex flex-ctr-xy cursor-ptr">Live server</a>
                <button class="close-btn flex flex-ctr-xy font-p2 cursor-ptr">
                     <i class="fa-solid fa-xmark"></i>
                  </button>
              </div>
            </section>
          `;
         } else if (event.target.dataset.id == 1) {
            modal.innerHTML = `
          <section class="section-container flex-col clr-white flex-ctr-xy flex-gap-40 bg-black">
              <img class="modal-image" src="/images/blog-website.png" alt="" />
              <h3>Project Exam 1</h3>
              <p class="modal-description">In this website we where tasked to design and build a blog of choice to showcase our Html, CSS, JavaScript and Wordpress skills. I choose to create a Fitness/Nutrition blog for this assignment</p>
              <div class="flex flex-gap-40 flex-ctr-y">
                  <a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-richiebotteri" class="social-icons clr-white cursor-ptr"><i class="fa-brands fa-square-github"></i></a>
                  <a href="https://cheerful-pixie-956113.netlify.app" class="cta bg-white flex flex-ctr-xy cursor-ptr">Live server</a>
                  <button class="close-btn flex flex-ctr-xy font-p2 cursor-ptr">
                     <i class="fa-solid fa-xmark"></i>
                  </button>
              </div>
          </section>
        `;
         }
      }
   });
});
