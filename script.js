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

/* Visual styling lives in styles.css. */

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



const modal=document.createElement('div');modal.className='contact-modal';modal.id='contactModal';modal.setAttribute('aria-hidden','true');
modal.innerHTML=`<div class="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contactTitle"><button class="contact-close" type="button" aria-label="Close contact form">×</button><div id="contactFormView"><p class="kicker">GET IN TOUCH</p><h2 id="contactTitle">Send me a note.</h2><p>Share a few details below and I'll follow up with you directly.</p><form class="contact-form" id="contactForm" method="POST"><div class="contact-field"><label for="contactName">Name</label><input id="contactName" name="name" type="text" autocomplete="name" maxlength="100" required></div><div class="contact-field"><label for="contactOrg">Organization</label><input id="contactOrg" name="organization" type="text" autocomplete="organization" maxlength="120"></div><div class="contact-field"><label for="contactEmail">Email</label><input id="contactEmail" name="email" type="email" autocomplete="email" maxlength="160" required></div><div class="contact-field"><label for="contactReason">Reason for reaching out</label><select id="contactReason" name="reason" required><option value="" selected disabled>Select one</option><option>Career Opportunity</option><option>Consulting or Advisory</option><option>Professional Networking</option><option>Other</option></select></div><div class="contact-field full"><label for="contactMessage">Message</label><textarea id="contactMessage" name="message" maxlength="750" required></textarea></div><input class="contact-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"><input type="hidden" name="_subject" value="New message from NicholasJordan-ATL.com"><input type="hidden" name="_template" value="table"><p class="contact-privacy">Your information is used only to respond to your message.</p><button class="contact-submit" type="submit">Send Message</button><p class="contact-result" id="contactResult" role="status" aria-live="polite"></p></form></div><div class="contact-success" id="contactSuccess" hidden><p class="kicker">MESSAGE SENT</p><h3>Thank you.</h3><p>Your note has been sent to Nicholas. He'll follow up using the contact information you provided.</p><button class="btn" id="closeContactSuccess" type="button">Close</button></div></div>`;
document.body.appendChild(modal);

const openContact=document.getElementById('openContactForm'),closeContact=modal.querySelector('.contact-close'),contactForm=document.getElementById('contactForm'),contactResult=document.getElementById('contactResult'),contactFormView=document.getElementById('contactFormView'),contactSuccess=document.getElementById('contactSuccess'),closeContactSuccess=document.getElementById('closeContactSuccess');
let lastFocus=null;
const openModal=()=>{lastFocus=document.activeElement;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>document.getElementById('contactName')?.focus(),0)};
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';contactFormView.hidden=false;contactSuccess.hidden=true;contactForm?.reset();if(contactResult)contactResult.textContent='';lastFocus?.focus?.()};
openContact?.addEventListener('click',e=>{e.preventDefault();openModal()});openContact?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal()}});closeContact?.addEventListener('click',closeModal);closeContactSuccess?.addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});
contactForm?.addEventListener('submit',async e=>{e.preventDefault();const button=contactForm.querySelector('.contact-submit'),original=button.textContent;button.disabled=true;button.textContent='Sending…';if(contactResult)contactResult.textContent='';const destination='f88dd516ff0e17a312af9f5f14532257';try{const response=await fetch(`https://formsubmit.co/ajax/${destination}`,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(contactForm)))});if(!response.ok)throw new Error('Submission failed');contactFormView.hidden=true;contactSuccess.hidden=false;closeContactSuccess?.focus();}catch(error){if(contactResult)contactResult.textContent='Your message could not be sent. Please try again in a moment or connect with Nicholas on LinkedIn.';}finally{button.disabled=false;button.textContent=original}});
