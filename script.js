document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll("details").forEach(d=>{
  d.addEventListener("toggle",()=>{
    const s=d.querySelector("summary span");
    if(s) s.textContent=d.open?"−":"+";
  });
});
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")});
},{threshold:.08});
document.querySelectorAll(".case,.mini,.writing-grid article,.lesson").forEach(el=>io.observe(el));

document.querySelectorAll('[data-awign-tab]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const key=btn.dataset.awignTab;
    document.querySelectorAll('[data-awign-tab]').forEach(b=>{
      const on=b===btn;b.classList.toggle('active',on);b.setAttribute('aria-selected',on?'true':'false');
    });
    document.querySelectorAll('[data-awign-panel]').forEach(p=>p.classList.toggle('active',p.dataset.awignPanel===key));
  });
});

document.querySelectorAll('[data-risk-tab]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const key=btn.dataset.riskTab;
    document.querySelectorAll('[data-risk-tab]').forEach(b=>b.classList.toggle('active',b===btn));
    document.querySelectorAll('[data-risk-panel]').forEach(p=>p.classList.toggle('active',p.dataset.riskPanel===key));
  });
});
