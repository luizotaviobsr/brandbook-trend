// Substitui <img data-inline src="foo.svg"> pelo SVG inline
// (mesmo width/height/class do <img>) para permitir currentColor via CSS.
(async function inlineSvgs(){
  const imgs = Array.from(document.querySelectorAll('img[data-inline]'));
  const cache = new Map();
  await Promise.all(imgs.map(async (img) => {
    const url = img.getAttribute('src');
    try{
      if (!cache.has(url)){
        cache.set(url, fetch(url).then(r => r.text()));
      }
      const text = await cache.get(url);
      const doc = new DOMParser().parseFromString(text, 'image/svg+xml');
      const svg = doc.documentElement;
      if (!svg || svg.nodeName !== 'svg') return;
      // Copia atributos do <img> úteis
      const cls = img.getAttribute('class');
      const aria = img.getAttribute('alt');
      if (cls) svg.setAttribute('class', cls);
      if (aria){ svg.setAttribute('role','img'); svg.setAttribute('aria-label', aria); }
      // Remove width/height do svg para que CSS controle
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.style.display = 'block';
      img.replaceWith(svg);
    } catch(e){ /* silencioso */ }
  }));
})();
