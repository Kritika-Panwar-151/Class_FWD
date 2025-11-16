/* init icons */
    lucide.createIcons();

    /* small UX niceties */
    function scrollToId(id){
      const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
      if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}) }
    }
    lucide.createIcons();
    
    document.getElementById("searchHostelBtn").addEventListener("click", function () {
        document.getElementById("chooseHostel").scrollIntoView({
            behavior: "smooth"
      });
    });
    document.getElementById("headerSearchBtn").addEventListener("click", function () {
        document.getElementById("chooseHostel").scrollIntoView({
            behavior: "smooth"
        });
    });
    document.querySelector(".search-box").addEventListener("click", function () {
        document.getElementById("chooseHostel").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    
