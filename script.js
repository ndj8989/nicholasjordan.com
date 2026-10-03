const header=document.querySelector('.site-header');
const toggle=document.querySelector('.nav-toggle');
toggle?.addEventListener('click',()=>{const open=header.classList.toggle('nav-open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('nav-open');toggle?.setAttribute('aria-expanded','false')}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const shareButton=document.getElementById('sharePortfolio');
const shareStatus=document.getElementById('shareStatus');
shareButton?.addEventListener('click',async()=>{
  const shareData={title:'Nicholas Jordan | Enterprise IT Operations Leader',text:'I thought Nicholas Jordan’s technology leadership portfolio might be relevant to you.',url:'https://nicholasjordan.com/'};
  try{
    if(navigator.share){await navigator.share(shareData);if(shareStatus)shareStatus.textContent='Portfolio ready to share.';return;}
    await navigator.clipboard.writeText(shareData.url);if(shareStatus)shareStatus.textContent='Portfolio link copied to your clipboard.';
  }catch(error){
    if(error?.name==='AbortError')return;
    if(shareStatus)shareStatus.textContent='Copy this address to share: nicholasjordan.com';
  }
});
