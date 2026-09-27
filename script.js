const menuBtn=document.querySelector(".menu-btn"),links=document.querySelector(".links");
menuBtn.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const filters=document.querySelectorAll(".filter"),cards=document.querySelectorAll(".card");
filters.forEach(btn=>btn.addEventListener("click",()=>{
  filters.forEach(x=>x.classList.remove("active")); btn.classList.add("active");
  const type=btn.dataset.filter;
  cards.forEach(card=>card.classList.toggle("hidden",type!=="all"&&card.dataset.type!==type));
}));

document.querySelector("#bookBtn").addEventListener("click",()=>{
  const region=document.querySelector("#region").value;
  const mission=document.querySelector("#mission").value;
  document.querySelector("#bookingMsg").textContent=`Launch request queued: ${mission} in ${region}. We'll open a planning channel next.`;
});

document.querySelector("#contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.querySelector("#formMsg").textContent="Message prepared. Connect this form to your email/backend before production.";
});
    
