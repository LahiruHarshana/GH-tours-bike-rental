/* Generated from the approved single-file GH tours & bike rental website. */
(function () {
  if (window.__LANKA_LOOP_INITIALIZED__) return;
  window.__LANKA_LOOP_INITIALIZED__ = true;

  const WHATSAPP_NUMBER="94770000000";
      const hideLoader=()=>setTimeout(()=>document.getElementById("loader")?.classList.add("hidden"),450);if(document.readyState==="complete")hideLoader();else window.addEventListener("load",hideLoader,{once:true});
      gsap.registerPlugin(ScrollTrigger);
      const lenis=new Lenis({duration:1.15,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true});lenis.on("scroll",ScrollTrigger.update);gsap.ticker.add(time=>lenis.raf(time*1000));gsap.ticker.lagSmoothing(0);

      const cinematicHero=document.querySelector(".cinematic-hero");
      const navWrap=document.querySelector(".nav-wrap");
      if(cinematicHero){
        navWrap.classList.add("over-hero");
        const cp1=document.querySelector(".cinematic-panel-one");
        const cp2=document.querySelector(".cinematic-panel-two");
        const cp3=document.querySelector(".cinematic-panel-three");
        const cs=document.querySelector(".cinematic-shade");
        const cc1=document.querySelector(".cinematic-copy-one");
        const cc2=document.querySelector(".cinematic-copy-two");
        const cc3=document.querySelector(".cinematic-copy-three");
        const galleryCaption=document.querySelector(".cinematic-gallery-caption");
        const romanItems=[...document.querySelectorAll(".roman-item")];

        gsap.fromTo(cp1.querySelector("img"),{scale:1.16},{scale:1.04,duration:2.1,delay:.2,ease:"power3.out"});
        gsap.fromTo([".cinematic-kicker",".cinematic-copy-one h1",".cinematic-copy-one p",".cinematic-copy-one .cinematic-link"],{y:38,opacity:0},{y:0,opacity:1,duration:1.05,delay:.5,stagger:.1,ease:"power3.out"});

        const setRoman=(index)=>romanItems.forEach((item,i)=>item.classList.toggle("active",i===index));
        const heroTL=gsap.timeline({
          defaults:{ease:"none"},
          scrollTrigger:{
            trigger:cinematicHero,
            start:"top top",
            end:"bottom bottom",
            scrub:1,
            onUpdate:self=>{
              const p=self.progress;
              setRoman(p<.38?0:p<.72?1:2);
              navWrap.classList.toggle("over-hero",p<.985);
            }
          }
        });

        heroTL
          .to(cc1,{autoAlpha:0,y:-55,duration:.11},.08)
          .to(cs,{opacity:.2,duration:.12},.08)
          .to(cp1,{left:"2%",top:"22%",width:"30.6%",height:"56%",borderRadius:"2px",duration:.18},.10)
          .to(cp1.querySelector("img"),{scale:1.02,duration:.18},.10)
          .to(cp2,{autoAlpha:1,left:"34.7%",top:"22%",width:"30.6%",height:"56%",borderRadius:"2px",duration:.18},.10)
          .to(cp3,{autoAlpha:1,left:"67.4%",top:"22%",width:"30.6%",height:"56%",borderRadius:"2px",duration:.18},.10)
          .to([cp2.querySelector("img"),cp3.querySelector("img")],{scale:1.02,duration:.18},.10)
          .to(galleryCaption,{autoAlpha:1,y:0,duration:.08},.20)
          .to(galleryCaption,{autoAlpha:0,y:-18,duration:.06},.31)
          .to([cp1,cp3],{autoAlpha:0,duration:.09},.32)
          .to(cp2,{left:"0%",top:"0%",width:"100%",height:"100%",borderRadius:"0px",duration:.18},.32)
          .to(cp2.querySelector("img"),{scale:1.08,duration:.18},.32)
          .to(cs,{opacity:1,duration:.12},.39)
          .fromTo(cc2,{autoAlpha:0,y:52},{autoAlpha:1,y:0,duration:.12},.42)
          .to(cc2,{autoAlpha:0,y:-48,duration:.1},.56)
          .to(cs,{opacity:.2,duration:.10},.57)
          .to(cp2,{left:"2%",top:"22%",width:"30.6%",height:"56%",borderRadius:"2px",duration:.16},.58)
          .to(cp1,{autoAlpha:1,left:"34.7%",top:"22%",width:"30.6%",height:"56%",duration:.16},.58)
          .to(cp3,{autoAlpha:1,left:"67.4%",top:"22%",width:"30.6%",height:"56%",duration:.16},.58)
          .to(galleryCaption,{autoAlpha:1,y:0,duration:.07},.64)
          .to(galleryCaption,{autoAlpha:0,y:-18,duration:.06},.69)
          .to([cp1,cp2],{autoAlpha:0,duration:.08},.70)
          .to(cp3,{left:"0%",top:"0%",width:"100%",height:"100%",borderRadius:"0px",duration:.18},.70)
          .to(cp3.querySelector("img"),{scale:1.08,duration:.18},.70)
          .to(cs,{opacity:1,duration:.12},.76)
          .fromTo(cc3,{autoAlpha:0,y:52},{autoAlpha:1,y:0,duration:.12},.78)
          .to(cp3.querySelector("img"),{scale:1.16,duration:.20},.82)
          .to([cc3,".cinematic-roman",".cinematic-scroll",".cinematic-book"],{autoAlpha:0,duration:.10},.91)
          .to(cp3,{scale:.92,borderRadius:"18px",duration:.10},.91)
          .to(".cinematic-sticky",{backgroundColor:"#FFFBF4",duration:.08},.94);
      }

      gsap.from(".hero-title",{yPercent:105,opacity:0,duration:1.35,delay:.35,ease:"power4.out"});gsap.from(".hero-reveal",{y:34,opacity:0,duration:.9,delay:.65,stagger:.12,ease:"power3.out"});gsap.from(".hero-frame",{clipPath:"inset(100% 0 0 0 round 44px)",scale:.92,duration:1.5,delay:.25,ease:"power4.inOut"});gsap.from(".float-card",{y:35,opacity:0,scale:.9,delay:1.05,duration:.8,stagger:.15,ease:"back.out(1.5)"});gsap.to(".hero-frame img",{yPercent:14,scale:1.18,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1.1}});gsap.to(".hero-copy",{yPercent:18,opacity:.12,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});gsap.to(".hero-visual",{rotateY:-9,yPercent:10,scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1.2}});
      gsap.utils.toArray(".reveal").forEach(el=>{gsap.fromTo(el,{y:55,opacity:0},{y:0,opacity:1,duration:1.05,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%",once:true}})});
      gsap.utils.toArray(".service-card").forEach((card,index)=>{const image=card.querySelector(".service-image");gsap.from(card,{y:70,opacity:0,rotateX:8,duration:1,delay:index*.06,ease:"power3.out",scrollTrigger:{trigger:card,start:"top 88%",once:true}});gsap.to(image,{yPercent:10,scrollTrigger:{trigger:card,start:"top bottom",end:"bottom top",scrub:1.3}})});
      const scene1=document.querySelector(".scene-1"),scene2=document.querySelector(".scene-2"),scene3=document.querySelector(".scene-3"),scene4=document.querySelector(".scene-4"),expProgress=document.getElementById("experienceProgress"),expStep=document.getElementById("experienceStep");
      const adaptiveMotion=gsap.matchMedia();
      adaptiveMotion.add("(min-width: 761px)",()=>{
        const experienceTrigger=ScrollTrigger.create({id:"experience-desktop",trigger:".experience",start:"top top",end:"bottom bottom",scrub:true,onUpdate:self=>{const p=self.progress;expProgress.style.height=(p*100)+"%";const step=Math.min(4,Math.floor(p*4)+1);expStep.textContent=String(step).padStart(2,"0")+" / 04";if(p<.25){const t=p/.25;scene1.style.transform=`translate3d(${(-24+t*24)}vw,${(4-t*4)}vh,0) rotate(${(-8+t*8)}deg) scale(${(.78+t*.22)})`;scene2.style.transform=`translate3d(${(0+t*24)}vw,${(0+t*4)}vh,0) rotate(${(0+t*8)}deg) scale(${(1-t*.22)})`;scene3.style.transform="translate3d(24vw,4vh,0) rotate(8deg) scale(.78)";scene4.style.opacity=0}else if(p<.5){const t=(p-.25)/.25;scene1.style.transform=`translate3d(${(0-t*24)}vw,${(0+t*4)}vh,0) rotate(${(0-t*8)}deg) scale(${(1-t*.22)})`;scene2.style.transform=`translate3d(${(24-t*24)}vw,${(4-t*4)}vh,0) rotate(${(8-t*8)}deg) scale(${(.78+t*.22)})`;scene3.style.transform="translate3d(24vw,4vh,0) rotate(8deg) scale(.78)"}else if(p<.75){const t=(p-.5)/.25;scene1.style.transform="translate3d(-24vw,4vh,0) rotate(-8deg) scale(.78)";scene2.style.transform=`translate3d(${(0-t*24)}vw,${(0+t*4)}vh,0) rotate(${(0-t*8)}deg) scale(${(1-t*.22)})`;scene3.style.transform=`translate3d(${(24-t*24)}vw,${(4-t*4)}vh,0) rotate(${(8-t*8)}deg) scale(${(.78+t*.22)})`;scene4.style.opacity=t*.25;scene4.style.transform=`translate3d(0,${(58-t*42)}vh,0) scale(${(.65+t*.12)})`}else{const t=(p-.75)/.25;scene2.style.transform="translate3d(-24vw,4vh,0) rotate(-8deg) scale(.78)";scene3.style.transform=`translate3d(${(0-t*24)}vw,${(0+t*4)}vh,0) rotate(${(0-t*8)}deg) scale(${(1-t*.22)})`;scene4.style.opacity=Math.min(1,.25+t*.75);scene4.style.transform=`translate3d(0,${(16-t*16)}vh,0) scale(${(.77+t*.23)})`}}});
        return()=>experienceTrigger.kill();
      });
      adaptiveMotion.add("(max-width: 760px)",()=>{
        gsap.set([scene1,scene2,scene3,scene4],{clearProps:"transform,opacity"});
        [scene1,scene2,scene3,scene4].forEach((card,index)=>gsap.fromTo(card,{y:45,opacity:0},{y:0,opacity:1,duration:.85,delay:index*.03,ease:"power3.out",scrollTrigger:{trigger:card,start:"top 88%",once:true}}));
      });
      const track=document.getElementById("destinationTrack");
      if(track){
        gsap.set(track,{clearProps:"transform"});
        gsap.utils.toArray(".destination-card").forEach((card,index)=>{
          const image=card.querySelector("img");
          gsap.fromTo(card,
            {y:64,opacity:0,scale:.965},
            {y:0,opacity:1,scale:1,duration:1.05,delay:index*.055,ease:"power3.out",scrollTrigger:{trigger:card,start:"top 88%",once:true}}
          );
          if(image){
            adaptiveMotion.add("(min-width: 761px)",()=>{
              const tween=gsap.fromTo(image,{yPercent:-4},{yPercent:5,ease:"none",scrollTrigger:{trigger:card,start:"top bottom",end:"bottom top",scrub:1.1}});
              return()=>{tween.scrollTrigger&&tween.scrollTrigger.kill();tween.kill()};
            });
          }
        });
      }

      document.querySelectorAll(".tilt-card").forEach(card=>{card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;gsap.to(card,{rotateY:x*8,rotateX:-y*8,y:-5,duration:.35,transformPerspective:1100})});card.addEventListener("pointerleave",()=>gsap.to(card,{rotateY:0,rotateX:0,y:0,duration:.55,ease:"power3.out"}))});
      const tabs=document.querySelectorAll(".booking-tab"),panels=document.querySelectorAll(".booking-panel");function activateTab(name){tabs.forEach(t=>t.classList.toggle("active",t.dataset.tab===name));panels.forEach(p=>p.classList.toggle("active",p.id===name+"Panel"))}tabs.forEach(tab=>tab.addEventListener("click",()=>activateTab(tab.dataset.tab)));document.querySelectorAll(".service-trigger").forEach(link=>{link.addEventListener("click",()=>activateTab(link.dataset.tab))});
      const today=new Date().toISOString().split("T")[0];document.querySelectorAll('input[type="date"]').forEach(input=>{input.min=today;if(!input.value)input.value=today});
      const modal=document.getElementById("bookingModal"),summary=document.getElementById("bookingSummary"),whatsappLink=document.getElementById("whatsappLink");function openModal(htmlText,plainText){summary.innerHTML=htmlText;whatsappLink.href=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plainText)}`;modal.classList.add("open");modal.setAttribute("aria-hidden","false")}function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}document.querySelector(".modal-close").addEventListener("click",closeModal);modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
      const quickBook=document.getElementById("quickBook");if(quickBook){quickBook.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget),service=d.get("service"),start=d.get("start"),date=d.get("date"),travellers=d.get("travellers");openModal(`<strong>${service}</strong><br>Start: ${start}<br>Date: ${date}<br>${travellers}`,`Hello GH tours & bike rental! I would like a quote.\n\nService: ${service}\nPickup / start: ${start}\nDate: ${date}\nTravellers: ${travellers}`)})}
      document.getElementById("mainBookingForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget),active=document.querySelector(".booking-tab.active").dataset.tab;let html="",text="";if(active==="taxi"){html=`<strong>Airport taxi</strong><br>${d.get("taxiPickup")||"Pickup"} → ${d.get("taxiDestination")||"Destination"}<br>${d.get("taxiDate")||""} · ${d.get("taxiTime")||""}<br>${d.get("taxiPassengers")||""} · ${d.get("taxiVehicle")||""}`;text=`Hello GH tours & bike rental! I would like an airport taxi quote.\n\nPickup: ${d.get("taxiPickup")||""}\nDestination: ${d.get("taxiDestination")||""}\nDate: ${d.get("taxiDate")||""}\nTime / flight: ${d.get("taxiTime")||""}\nPassengers: ${d.get("taxiPassengers")||""}\nVehicle: ${d.get("taxiVehicle")||""}`}else if(active==="safari"){html=`<strong>Private safari</strong><br>${d.get("safariPark")||""}<br>${d.get("safariDate")||""} · ${d.get("safariSession")||""}<br>${d.get("safariGuests")||""} · Pickup: ${d.get("safariPickup")||"To confirm"}`;text=`Hello GH tours & bike rental! I would like a safari quote.\n\nPark: ${d.get("safariPark")||""}\nDate: ${d.get("safariDate")||""}\nSession: ${d.get("safariSession")||""}\nGuests: ${d.get("safariGuests")||""}\nPickup: ${d.get("safariPickup")||""}\nNotes: ${d.get("safariNotes")||""}`}else if(active==="bike"){html=`<strong>Bike rental</strong><br>${d.get("bikeType")||""} in ${d.get("bikeTown")||"Sri Lanka"}<br>${d.get("bikeStart")||""} → ${d.get("bikeEnd")||""}<br>${d.get("bikeCount")||""}`;text=`Hello GH tours & bike rental! I would like a bike rental quote.\n\nTown: ${d.get("bikeTown")||""}\nBike: ${d.get("bikeType")||""}\nStart: ${d.get("bikeStart")||""}\nEnd: ${d.get("bikeEnd")||""}\nCount: ${d.get("bikeCount")||""}\nNotes: ${d.get("bikeNotes")||""}`}else{html=`<strong>Private tour</strong><br>${d.get("tourDuration")||""} from ${d.get("tourStart")||"Sri Lanka"}<br>${d.get("tourDate")||""} · ${d.get("tourGuests")||""}<br>${d.get("tourInterests")||""}`;text=`Hello GH tours & bike rental! I would like a private tour quote.\n\nStart date: ${d.get("tourDate")||""}\nDuration: ${d.get("tourDuration")||""}\nGuests: ${d.get("tourGuests")||""}\nStart location: ${d.get("tourStart")||""}\nPlaces and interests: ${d.get("tourInterests")||""}`}openModal(html,text)});
      document.querySelectorAll(".faq-question").forEach(btn=>{btn.addEventListener("click",()=>{const item=btn.parentElement;document.querySelectorAll(".faq-item").forEach(other=>{if(other!==item)other.classList.remove("open")});item.classList.toggle("open")})});
      const cursor=document.querySelector(".cursor"),dot=document.querySelector(".cursor-dot");window.addEventListener("pointermove",e=>{gsap.to(cursor,{x:e.clientX,y:e.clientY,duration:.28,ease:"power3.out"});gsap.to(dot,{x:e.clientX,y:e.clientY,duration:.06})});document.querySelectorAll("a,button,input,select,textarea,.tilt-card").forEach(el=>{el.addEventListener("mouseenter",()=>cursor.classList.add("hover"));el.addEventListener("mouseleave",()=>cursor.classList.remove("hover"))});document.querySelectorAll(".magnetic").forEach(btn=>{btn.addEventListener("pointermove",e=>{const r=btn.getBoundingClientRect();gsap.to(btn,{x:(e.clientX-r.left-r.width/2)*.12,y:(e.clientY-r.top-r.height/2)*.12,duration:.25})});btn.addEventListener("pointerleave",()=>gsap.to(btn,{x:0,y:0,duration:.55,ease:"elastic.out(1,.45)"}))});

      // Responsive navigation and production-ready interaction helpers.
      const menuButton=document.querySelector(".menu-btn");
      const mobileMenu=document.getElementById("mobileMenu");
      const mobileMenuBackdrop=document.getElementById("mobileMenuBackdrop");
      const mobileMenuClose=document.getElementById("mobileMenuClose");
      const setMenu=(open)=>{
        mobileMenu.classList.toggle("open",open);
        mobileMenuBackdrop.classList.toggle("open",open);
        document.body.classList.toggle("menu-open",open);
        mobileMenu.setAttribute("aria-hidden",String(!open));
        menuButton&&menuButton.setAttribute("aria-expanded",String(open));
      };
      menuButton&&menuButton.setAttribute("aria-expanded","false");
      menuButton&&menuButton.addEventListener("click",()=>setMenu(true));
      mobileMenuClose.addEventListener("click",()=>setMenu(false));
      mobileMenuBackdrop.addEventListener("click",()=>setMenu(false));
      mobileMenu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>setMenu(false)));
      window.addEventListener("keydown",event=>{if(event.key==="Escape")setMenu(false)});

      // Keep only the approved cinematic hero eager-loaded; defer the rest.
      document.querySelectorAll("img").forEach(image=>{
        if(!image.closest(".cinematic-hero")){
          image.loading="lazy";
          image.decoding="async";
        }
      });

      // Smooth page progress and reliable recalculation after fonts/images/resize.
      const progressBar=document.getElementById("pageProgressBar");
      const updatePageProgress=()=>{
        const max=document.documentElement.scrollHeight-window.innerHeight;
        const value=max>0?window.scrollY/max:0;
        progressBar.style.transform=`scaleX(${Math.min(1,Math.max(0,value))})`;
      };
      window.addEventListener("scroll",updatePageProgress,{passive:true});
      updatePageProgress();

      let resizeTimer;
      window.addEventListener("resize",()=>{
        clearTimeout(resizeTimer);
        resizeTimer=setTimeout(()=>{
          if(window.innerWidth>900)setMenu(false);
          ScrollTrigger.refresh();
        },180);
      });
      window.addEventListener("load",()=>setTimeout(()=>ScrollTrigger.refresh(),450));
})();
