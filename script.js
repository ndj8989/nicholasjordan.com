const header=document.querySelector('.site-header');
const toggle=document.querySelector('.nav-toggle');
toggle?.addEventListener('click',()=>{const open=header.classList.toggle('nav-open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('nav-open');toggle?.setAttribute('aria-expanded','false')}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

const shareButton=document.getElementById('sharePortfolio');
const shareStatus=document.getElementById('shareStatus');
shareButton?.addEventListener('click',async()=>{
  const shareData={title:'Nicholas Jordan | Enterprise IT Operations Leader',text:'I thought Nicholas Jordan’s technology leadership portfolio might be relevant to you.',url:'https://nicholasjordan-atl.com/'};
  try{
    if(navigator.share){await navigator.share(shareData);if(shareStatus)shareStatus.textContent='Portfolio ready to share.';return;}
    await navigator.clipboard.writeText(shareData.url);if(shareStatus)shareStatus.textContent='Portfolio link copied to your clipboard.';
  }catch(error){
    if(error?.name==='AbortError')return;
    if(shareStatus)shareStatus.textContent='Copy this address to share: nicholasjordan-atl.com';
  }
});

/* Private contact experience. */
const contactEmailLink=document.querySelector('#contact a[href^="mailto:"]');
if(contactEmailLink){
  contactEmailLink.removeAttribute('href');
  contactEmailLink.setAttribute('role','button');
  contactEmailLink.setAttribute('tabindex','0');
  contactEmailLink.textContent='Get in Touch';
  contactEmailLink.id='openContactForm';
}

const contactStyles=document.createElement('style');
contactStyles.textContent=`
.contact-modal{position:fixed;inset:0;z-index:1000;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(2,9,16,.82);backdrop-filter:blur(7px)}
.contact-modal.open{display:flex}.contact-dialog{position:relative;width:min(620px,100%);max-height:92vh;overflow:auto;background:#fff;color:#17202a;padding:36px;border:1px solid #cbd8e2;box-shadow:0 28px 80px rgba(0,0,0,.38);text-align:left}
.contact-dialog .kicker{margin:0 0 8px}.contact-dialog h2{font-family:Georgia,serif;font-weight:500;font-size:2.35rem;line-height:1.08;color:#071525;margin:.2rem 0 .7rem}.contact-dialog>p{margin:0 0 24px;color:#52616d}.contact-close{position:absolute;right:18px;top:14px;border:0;background:transparent;color:#52616d;font-size:1.8rem;line-height:1;cursor:pointer;padding:8px}.contact-form{display:grid;grid-template-columns:1fr 1fr;gap:16px}.contact-field{display:flex;flex-direction:column;gap:6px}.contact-field.full{grid-column:1/-1}.contact-field label{font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em;color:#344653}.contact-field input,.contact-field select,.contact-field textarea{width:100%;border:1px solid #b8c6d1;background:#fff;color:#17202a;font:inherit;padding:11px 12px;border-radius:0}.contact-field textarea{min-height:125px;resize:vertical}.contact-field input:focus,.contact-field select:focus,.contact-field textarea:focus{outline:2px solid #1683d8;outline-offset:1px}.contact-honey{position:absolute!important;left:-9999px!important}.contact-submit{grid-column:1/-1;border:1px solid #1683d8;background:#1683d8;color:#fff;min-height:48px;padding:0 24px;text-transform:uppercase;font-size:.74rem;font-weight:800;letter-spacing:.05em;cursor:pointer}.contact-privacy{grid-column:1/-1;margin:0;font-size:.75rem;color:#667581}.contact-result{grid-column:1/-1;min-height:1.4em;margin:0;font-size:.82rem;color:#246998}.contact-success{text-align:center;padding:28px 8px}.contact-success h3{font-family:Georgia,serif;font-size:2rem;color:#071525;margin:.4rem 0}.contact-success p{color:#52616d}.contact-success .btn{margin-top:10px;background:#1683d8;color:#fff;border:1px solid #1683d8}
@media(max-width:620px){.contact-dialog{padding:30px 22px}.contact-dialog h2{font-size:1.9rem}.contact-form{grid-template-columns:1fr}.contact-field.full,.contact-submit,.contact-privacy,.contact-result{grid-column:1}.contact-modal{padding:12px}}
`;
document.head.appendChild(contactStyles);

const modal=document.createElement('div');
modal.className='contact-modal';
modal.id='contactModal';
modal.setAttribute('aria-hidden','true');
modal.innerHTML=`
  <div class="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contactTitle">
    <button class="contact-close" type="button" aria-label="Close contact form">×</button>
    <div id="contactFormView">
      <p class="kicker">GET IN TOUCH</p>
      <h2 id="contactTitle">Send me a note.</h2>
      <p>Share a few details below and I'll follow up with you directly.</p>
      <form class="contact-form" id="contactForm" method="POST">
        <div class="contact-field"><label for="contactName">Name</label><input id="contactName" name="name" type="text" autocomplete="name" maxlength="100" required></div>
        <div class="contact-field"><label for="contactOrg">Organization</label><input id="contactOrg" name="organization" type="text" autocomplete="organization" maxlength="120"></div>
        <div class="contact-field"><label for="contactEmail">Email</label><input id="contactEmail" name="email" type="email" autocomplete="email" maxlength="160" required></div>
        <div class="contact-field"><label for="contactReason">Reason for reaching out</label><select id="contactReason" name="reason" required><option value="" selected disabled>Select one</option><option>Career Opportunity</option><option>Consulting or Advisory</option><option>Professional Networking</option><option>Other</option></select></div>
        <div class="contact-field full"><label for="contactMessage">Message</label><textarea id="contactMessage" name="message" maxlength="750" required></textarea></div>
        <input class="contact-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
        <input type="hidden" name="_subject" value="New message from NicholasJordan-ATL.com">
        <input type="hidden" name="_template" value="table">
        <p class="contact-privacy">Your information is used only to respond to your message.</p>
        <button class="contact-submit" type="submit">Send Message</button>
        <p class="contact-result" id="contactResult" role="status" aria-live="polite"></p>
      </form>
    </div>
    <div class="contact-success" id="contactSuccess" hidden><p class="kicker">MESSAGE SENT</p><h3>Thank you.</h3><p>Your note has been sent to Nicholas. He'll follow up using the contact information you provided.</p><button class="btn" id="closeContactSuccess" type="button">Close</button></div>
  </div>`;
document.body.appendChild(modal);

const openContact=document.getElementById('openContactForm');
const closeContact=modal.querySelector('.contact-close');
const contactForm=document.getElementById('contactForm');
const contactResult=document.getElementById('contactResult');
const contactFormView=document.getElementById('contactFormView');
const contactSuccess=document.getElementById('contactSuccess');
const closeContactSuccess=document.getElementById('closeContactSuccess');
let lastFocus=null;
const openModal=()=>{lastFocus=document.activeElement;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>document.getElementById('contactName')?.focus(),0)};
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';contactFormView.hidden=false;contactSuccess.hidden=true;contactForm?.reset();if(contactResult)contactResult.textContent='';lastFocus?.focus?.()};
openContact?.addEventListener('click',e=>{e.preventDefault();openModal()});
openContact?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal()}});
closeContact?.addEventListener('click',closeModal);
closeContactSuccess?.addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});

contactForm?.addEventListener('submit',async e=>{
  e.preventDefault();
  const button=contactForm.querySelector('.contact-submit');
  const original=button.textContent;
  button.disabled=true;button.textContent='Sending…';
  if(contactResult)contactResult.textContent='';
  /* Activated private FormSubmit endpoint. */
  const destination='f88dd516ff0e17a312af9f5f14532257';
  try{
    const response=await fetch(`https://formsubmit.co/ajax/${destination}`,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(contactForm)))});
    if(!response.ok)throw new Error('Submission failed');
    contactFormView.hidden=true;contactSuccess.hidden=false;closeContactSuccess?.focus();
  }catch(error){
    if(contactResult)contactResult.textContent='Your message could not be sent. Please try again in a moment or connect with Nicholas on LinkedIn.';
  }finally{button.disabled=false;button.textContent=original}
});
