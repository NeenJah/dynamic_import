btn.addEventListener(`click`, async function(e) {
  e.preventDefault();
  
  const obj = await import('../module.js');
  obj.logHi();
});