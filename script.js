const header=document.querySelector('.site-header');
const toggle=document.querySelector('.nav-toggle');
toggle?.addEventListener('click',()=>{const open=header.classList.toggle('nav-open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('nav-open');toggle?.setAttribute('aria-expanded','false')}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

/* Executive portfolio polish: reduce repetition, strengthen narrative hierarchy, and add restrained interaction. */
const aboutLead=document.querySelector('#about .prose p:first-child');
if(aboutLead)aboutLead.innerHTML='The work I’m most proud of has a common thread: <strong>people can feel the difference when technology operations work well.</strong>';

document.querySelector('.people-outcomes')?.remove();

const impact=document.getElementById('impact');
if(impact){
  const impactHeading=impact.querySelector('h2');
  if(impactHeading)impactHeading.textContent='Maturing the operation. Raising the standard.';
  const intro=document.createElement('p');
  intro.className='impact-intro';
  intro.textContent='I inherited an established technology operation and helped mature its service model, operating discipline, accountability, automation, and performance management, producing sustained improvements across customer experience, service delivery, reliability, endpoint governance, and financial control.';
  impactHeading?.insertAdjacentElement('afterend',intro);
  impact.querySelectorAll('.impact-grid div').forEach(cell=>{
    const label=cell.querySelector('span')?.textContent.trim();
    const value=cell.querySelector('strong');
    if(!value)return;
    if(label==='Post-Separation Asset Recovery')value.textContent='<10% → ~97%';
    if(label==='Ticket-Volume Reduction')value.textContent='↓ 22%';
  });
}

document.querySelectorAll('#projects .result').forEach(result=>{
  if(result.querySelector('.result-label'))return;
  result.insertAdjacentHTML('afterbegin','<span class="result-label">Measured outcome</span>');
});

const scope=document.querySelector('.flagship .scope');
if(scope){
  scope.innerHTML=`<h4>Program at a Glance</h4><div class="scope-matrix">
    <div><strong>84 Weeks</strong><span>Integrated Roadmap</span></div>
    <div><strong>13 Domains</strong><span>Technology Scope</span></div>
    <div><strong>16 Gates</strong><span>Governance</span></div>
    <div><strong>Infrastructure</strong><span>Network · MDF/IDF · Wireless</span></div>
    <div><strong>Security</strong><span>Cyber · Physical · Surveillance</span></div>
    <div><strong>Operations</strong><span>ITSM · Monitoring · Hyper-Care</span></div>
    <div><strong>Financial</strong><span>CAPEX · OPEX · TCO</span></div>
  </div>`;
}

const credentials=document.getElementById('credentials');
if(credentials)credentials.classList.add('credentials-compact');

const expertise=document.getElementById('expertise');
if(expertise)expertise.classList.add('expertise-refined');

const resumeSection=document.querySelector('.resume');
if(resumeSection)resumeSection.classList.add('career-materials-refined');

const contact=document.getElementById('contact');
if(contact){
  const heading=contact.querySelector('h2');
  if(heading)heading.textContent='Let’s Talk About What’s Next.';
  const firstBody=[...contact.querySelectorAll('p')].find(p=>!p.closest('.share-panel')&&!p.classList.contains('kicker'));
  if(firstBody)firstBody.textContent='I’m interested in technology leadership opportunities where operational maturity, infrastructure reliability, service excellence, and transformation matter.';
}

/* Premium interaction and layout layer. */
const polishStyles=document.createElement('style');
polishStyles.textContent=`
:root{--premium-shadow:0 18px 48px rgba(7,21,37,.10)}
.hero-copy{max-width:720px}.cap-strip{position:relative;z-index:3}.cap-strip span{opacity:.76}.cap-strip span:first-child{opacity:1}
#about .prose p:first-child{font-size:1.16rem;line-height:1.65}
.people-grid article,.cards article,.sample-card,.expertise-grid>div{transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease,background-color .2s ease}
.people-grid article:hover,.cards:not(.project-cards) article:hover{transform:translateY(-3px);box-shadow:var(--premium-shadow);border-color:#bccbd6}
#impact{background:#071525;color:#fff;position:relative;overflow:hidden}
#impact:before{content:'';position:absolute;width:520px;height:520px;border-radius:50%;right:-260px;top:-260px;background:radial-gradient(circle,rgba(105,185,243,.13),rgba(105,185,243,0) 70%);pointer-events:none}
#impact h2{color:#fff;max-width:860px}.impact-intro{max-width:920px;margin:0 0 38px;color:#cbd6df;font-size:1.05rem;line-height:1.75}
#impact .impact-grid{background:#29445c;margin-top:0;position:relative}.impact-grid div{background:#0b2239;padding:32px;transition:background .2s ease,transform .2s ease}.impact-grid div:hover{background:#0f2b47;transform:translateY(-2px)}.impact-grid span{color:#d6e0e8}.impact-grid strong{letter-spacing:-.025em}
.flagship{box-shadow:0 22px 56px rgba(7,21,37,.13)}.scope{display:flex;flex-direction:column}.scope h4{margin-bottom:18px}.scope-matrix{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#29445c}.scope-matrix div{background:#0d2740;padding:18px}.scope-matrix strong{display:block;color:#69b9f3;font-size:1rem;line-height:1.2}.scope-matrix span{display:block;color:#d5e0e8;font-size:.7rem;line-height:1.35;margin-top:5px}.scope-matrix div:first-child{grid-column:1/-1}
.project-cards article{position:relative;overflow:hidden}.project-cards article:before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:#1683d8;transform:scaleY(0);transform-origin:bottom;transition:transform .2s ease}.project-cards article:hover{transform:translateY(-3px);box-shadow:var(--premium-shadow);border-color:#b9c9d5}.project-cards article:hover:before{transform:scaleY(1)}
.result{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.result-label{display:block;width:100%;color:#697b89;text-transform:uppercase;letter-spacing:.12em;font-size:.6rem;font-weight:800;margin-bottom:2px}.result strong{color:#155f94}
.sample-card{overflow:hidden}.sample-card:hover{transform:translateY(-4px);box-shadow:var(--premium-shadow);border-color:#a9bdcb}.sample-card .sample-actions a{position:relative}.sample-card .sample-actions a:first-child:after{content:' →';display:inline-block;transition:transform .2s ease}.sample-card:hover .sample-actions a:first-child:after{transform:translateX(3px)}
.expertise-refined .expertise-grid>div{border-color:#29445c}.expertise-refined .expertise-grid>div:hover{transform:translateY(-2px);background:#102e4a;border-color:#47708f}.expertise-refined .expertise-grid h3{font-family:Georgia,serif;font-weight:500;font-size:1.35rem}
.credentials-compact{padding-top:72px;padding-bottom:72px}.credentials-compact .cards{margin-top:28px}.credentials-compact .cards article{padding-top:24px;padding-bottom:24px}
.career-materials-refined{padding-top:74px;padding-bottom:74px}
.contact{position:relative;overflow:hidden}.contact:before{content:'';position:absolute;inset:auto 0 0;height:1px;background:linear-gradient(90deg,transparent,#29445c,transparent)}.contact h2{max-width:900px;margin-left:auto;margin-right:auto}.contact>p:not(.kicker){font-size:1.05rem;color:#d5e0e8}
.btn,.sample-actions a{transition:transform .18s ease,filter .18s ease,background-color .18s ease,border-color .18s ease}.btn:hover{transform:translateY(-2px)}
@media(max-width:720px){.impact-intro{font-size:.96rem}.scope-matrix{grid-template-columns:1fr}.scope-matrix div:first-child{grid-column:auto}.credentials-compact,.career-materials-refined{padding-top:58px;padding-bottom:58px}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
`;
document.head.appendChild(polishStyles);

const shareButton=document.getElementById('sharePortfolio');
const shareStatus=document.getElementById('shareStatus');
shareButton?.addEventListener('click',async()=>{
  const shareData={title:'Nicholas Jordan | Enterprise IT Operations Leader',text:'I thought Nicholas Jordan’s technology leadership portfolio might be relevant to you.',url:'https://nicholasjordan-atl.com/'};
  try{
    if(navigator.share){await navigator.share(shareData);if(shareStatus)shareStatus.textContent='Portfolio ready to share.';return;}
    await navigator.clipboard.writeText(shareData.url);if(shareStatus)shareStatus.textContent='Portfolio link copied to your clipboard.';
  }catch(error){if(error?.name==='AbortError')return;if(shareStatus)shareStatus.textContent='Copy this address to share: nicholasjordan-atl.com';}
});

/* Private contact experience. */
const contactEmailLink=document.querySelector('#contact a[href^="mailto:"]');
if(contactEmailLink){contactEmailLink.removeAttribute('href');contactEmailLink.setAttribute('role','button');contactEmailLink.setAttribute('tabindex','0');contactEmailLink.textContent='Get in Touch';contactEmailLink.id='openContactForm';}

const contactStyles=document.createElement('style');
contactStyles.textContent=`
.contact-modal{position:fixed;inset:0;z-index:1000;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(2,9,16,.82);backdrop-filter:blur(7px)}
.contact-modal.open{display:flex}.contact-dialog{position:relative;width:min(620px,100%);max-height:92vh;overflow:auto;background:#fff;color:#17202a;padding:36px;border:1px solid #cbd8e2;box-shadow:0 28px 80px rgba(0,0,0,.38);text-align:left}
.contact-dialog .kicker{margin:0 0 8px}.contact-dialog h2{font-family:Georgia,serif;font-weight:500;font-size:2.35rem;line-height:1.08;color:#071525;margin:.2rem 0 .7rem}.contact-dialog>p{margin:0 0 24px;color:#52616d}.contact-close{position:absolute;right:18px;top:14px;border:0;background:transparent;color:#52616d;font-size:1.8rem;line-height:1;cursor:pointer;padding:8px}.contact-form{display:grid;grid-template-columns:1fr 1fr;gap:16px}.contact-field{display:flex;flex-direction:column;gap:6px}.contact-field.full{grid-column:1/-1}.contact-field label{font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:#344653}.contact-field input,.contact-field select,.contact-field textarea{width:100%;border:1px solid #b8c6d1;background:#fff;color:#17202a;font:inherit;padding:11px 12px;border-radius:0}.contact-field textarea{min-height:125px;resize:vertical}.contact-field input:focus,.contact-field select:focus,.contact-field textarea:focus{outline:2px solid #1683d8;outline-offset:1px}.contact-honey{position:absolute!important;left:-9999px!important}.contact-submit{grid-column:1/-1;border:1px solid #1683d8;background:#1683d8;color:#fff;min-height:48px;padding:0 24px;text-transform:uppercase;font-size:.74rem;font-weight:800;letter-spacing:.05em;cursor:pointer}.contact-privacy{grid-column:1/-1;margin:0;font-size:.75rem;color:#667581}.contact-result{grid-column:1/-1;min-height:1.4em;margin:0;font-size:.82rem;color:#246998}.contact-success{text-align:center;padding:28px 8px}.contact-success h3{font-family:Georgia,serif;font-size:2rem;color:#071525;margin:.4rem 0}.contact-success p{color:#52616d}.contact-success .btn{margin-top:10px;background:#1683d8;color:#fff;border:1px solid #1683d8}
@media(max-width:620px){.contact-dialog{padding:30px 22px}.contact-dialog h2{font-size:1.9rem}.contact-form{grid-template-columns:1fr}.contact-field.full,.contact-submit,.contact-privacy,.contact-result{grid-column:1}.contact-modal{padding:12px}}
`;
document.head.appendChild(contactStyles);

const modal=document.createElement('div');modal.className='contact-modal';modal.id='contactModal';modal.setAttribute('aria-hidden','true');
modal.innerHTML=`<div class="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contactTitle"><button class="contact-close" type="button" aria-label="Close contact form">×</button><div id="contactFormView"><p class="kicker">GET IN TOUCH</p><h2 id="contactTitle">Send me a note.</h2><p>Share a few details below and I'll follow up with you directly.</p><form class="contact-form" id="contactForm" method="POST"><div class="contact-field"><label for="contactName">Name</label><input id="contactName" name="name" type="text" autocomplete="name" maxlength="100" required></div><div class="contact-field"><label for="contactOrg">Organization</label><input id="contactOrg" name="organization" type="text" autocomplete="organization" maxlength="120"></div><div class="contact-field"><label for="contactEmail">Email</label><input id="contactEmail" name="email" type="email" autocomplete="email" maxlength="160" required></div><div class="contact-field"><label for="contactReason">Reason for reaching out</label><select id="contactReason" name="reason" required><option value="" selected disabled>Select one</option><option>Career Opportunity</option><option>Consulting or Advisory</option><option>Professional Networking</option><option>Other</option></select></div><div class="contact-field full"><label for="contactMessage">Message</label><textarea id="contactMessage" name="message" maxlength="750" required></textarea></div><input class="contact-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"><input type="hidden" name="_subject" value="New message from NicholasJordan-ATL.com"><input type="hidden" name="_template" value="table"><p class="contact-privacy">Your information is used only to respond to your message.</p><button class="contact-submit" type="submit">Send Message</button><p class="contact-result" id="contactResult" role="status" aria-live="polite"></p></form></div><div class="contact-success" id="contactSuccess" hidden><p class="kicker">MESSAGE SENT</p><h3>Thank you.</h3><p>Your note has been sent to Nicholas. He'll follow up using the contact information you provided.</p><button class="btn" id="closeContactSuccess" type="button">Close</button></div></div>`;
document.body.appendChild(modal);

const openContact=document.getElementById('openContactForm'),closeContact=modal.querySelector('.contact-close'),contactForm=document.getElementById('contactForm'),contactResult=document.getElementById('contactResult'),contactFormView=document.getElementById('contactFormView'),contactSuccess=document.getElementById('contactSuccess'),closeContactSuccess=document.getElementById('closeContactSuccess');
let lastFocus=null;
const openModal=()=>{lastFocus=document.activeElement;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>document.getElementById('contactName')?.focus(),0)};
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';contactFormView.hidden=false;contactSuccess.hidden=true;contactForm?.reset();if(contactResult)contactResult.textContent='';lastFocus?.focus?.()};
openContact?.addEventListener('click',e=>{e.preventDefault();openModal()});openContact?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal()}});closeContact?.addEventListener('click',closeModal);closeContactSuccess?.addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});
contactForm?.addEventListener('submit',async e=>{e.preventDefault();const button=contactForm.querySelector('.contact-submit'),original=button.textContent;button.disabled=true;button.textContent='Sending…';if(contactResult)contactResult.textContent='';const destination='f88dd516ff0e17a312af9f5f14532257';try{const response=await fetch(`https://formsubmit.co/ajax/${destination}`,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(contactForm)))});if(!response.ok)throw new Error('Submission failed');contactFormView.hidden=true;contactSuccess.hidden=false;closeContactSuccess?.focus();}catch(error){if(contactResult)contactResult.textContent='Your message could not be sent. Please try again in a moment or connect with Nicholas on LinkedIn.';}finally{button.disabled=false;button.textContent=original}});
