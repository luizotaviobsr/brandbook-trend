/* =============================================================
   BIBLIOTECA DE MODELOS 1:1 — injeção na página 16

   O markup das 22 composições vive em pub_padrao/Replicas_v2.html,
   que é a fonte única. Este script busca esse arquivo, descarta o
   cabeçalho próprio dele (a página 16 já tem o seu) e injeta o
   restante dentro de #rep-lib.

   Fazer assim evita duplicar ~64 KB de markup em dois arquivos e
   mantém a biblioteca em um só lugar: atualizar o Replicas_v2.html
   atualiza esta página.
   ============================================================= */
(function () {
  'use strict';

  var SOURCE = 'pub_padrao/Replicas_v2.html';
  var host = document.getElementById('rep-lib');
  if (!host) return;

  var status = document.getElementById('rep-lib-status');

  function fail(motivo) {
    if (!status) return;
    status.innerHTML =
      '<p style="margin:0 0 8px">N\u00e3o foi poss\u00edvel carregar a biblioteca de modelos ' +
      'nesta p\u00e1gina (' + motivo + ').</p>' +
      '<p style="margin:0"><a href="' + SOURCE + '" style="color:var(--teal);text-decoration:underline">' +
      'Abrir a biblioteca em p\u00e1gina separada \u2197</a></p>';
    status.hidden = false;
  }

  fetch(SOURCE)
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    })
    .then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');

      // Descarta o cabeçalho da página de origem: a 16 tem o próprio.
      var ownHeader = doc.querySelector('.page-header');
      if (ownHeader) ownHeader.remove();

      var blocks = Array.prototype.slice.call(doc.body.children);
      if (!blocks.length) throw new Error('conte\u00fado vazio');

      var frag = document.createDocumentFragment();
      blocks.forEach(function (el) {
        // <script>/<style> da origem não são transpostos: o estilo
        // vive em deck-replicas.css, já escopado em .rep-lib.
        var tag = el.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK') return;
        frag.appendChild(document.importNode(el, true));
      });

      // A página mostra só as composições: as fichas técnicas e os
      // blocos de orientação da origem não são transpostos.
      frag.querySelectorAll('dl.spec').forEach(function (el) { el.remove(); });
      frag.querySelectorAll('.doc-block').forEach(function (el) {
        var prev = el.previousElementSibling;
        if (prev && prev.classList.contains('section-heading')) prev.remove();
        el.remove();
      });

      host.appendChild(frag);
      if (status) status.remove();
    })
    .catch(function (err) {
      fail(err && err.message ? err.message : 'erro desconhecido');
    });
})();
