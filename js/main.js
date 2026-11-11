const words=[".NET Engineer","Microservices Builder","Cloud Practitioner","Code Reviewer & Mentor"];
let w=0,i=0,del=false;const el=document.getElementById('type');
(function t(){const s=words[w];el.textContent=s.slice(0,i);
 if(!del&&i===s.length){del=true;return setTimeout(t,1600)}
 if(del&&i===0){del=false;w=(w+1)%words.length}
 i+=del?-1:1;setTimeout(t,del?35:70)})();
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(n=>io.observe(n));
