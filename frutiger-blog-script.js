/* =====================================================
   FRUTIGER AERO BLOG — blog.js
   Handles: tab switching, SC player, image fallbacks
===================================================== */

/* -------------------------------------------------------
   TAB SWITCHING
------------------------------------------------------- */
var tabLabels = {
  blog:  'Latest Posts',
  about: 'About Me',
  art:   'Art Gallery',
  diary: 'Diary',
  music: 'Music',
  links: 'Links'
};

function switchTab(name, el) {
  document.querySelectorAll('.tab-pane').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.nav-tab').forEach(function(t)  { t.classList.remove('active'); });
  var pane = document.getElementById('tab-' + name);
  if (pane) pane.classList.add('active');
  if (el)   el.classList.add('active');
  var bc = document.getElementById('breadcrumb-current');
  if (bc)   bc.textContent = tabLabels[name] || name;
}

/* -------------------------------------------------------
   SOUNDCLOUD MINI PLAYER
   Waits for SC API script to finish loading before binding
------------------------------------------------------- */
function initSCPlayer(iframeId, discId, barsId, btnId, trackId) {
  function tryBind() {
    if (typeof SC === 'undefined') { setTimeout(tryBind, 300); return; }
    var iframe = document.getElementById(iframeId);
    if (!iframe) return;
    var widget = SC.Widget(iframe);
    var disc   = document.getElementById(discId);
    var bars   = document.getElementById(barsId);
    var btn    = document.getElementById(btnId);
    var track  = document.getElementById(trackId);

    function setPlaying(on) {
      if (disc)  disc.classList.toggle('spinning', on);
      if (bars)  bars.classList.toggle('active', on);
      if (track) track.classList.toggle('scrolling', on);
      if (btn)   btn.textContent = on ? '⏸' : '▶';
    }

    widget.bind(SC.Widget.Events.PLAY,   function() { setPlaying(true);  });
    widget.bind(SC.Widget.Events.PAUSE,  function() { setPlaying(false); });
    widget.bind(SC.Widget.Events.FINISH, function() { setPlaying(false); });

    function toggle() { widget.isPaused(function(p) { p ? widget.play() : widget.pause(); }); }
    if (btn)  btn.addEventListener('click',  toggle);
    if (disc) disc.addEventListener('click', toggle);
  }
  tryBind();
}

/* -------------------------------------------------------
   IMAGE FALLBACK SAFETY NET
   onerror on each img handles most cases;
   this catches any that slip through on load
------------------------------------------------------- */
function initImageFallbacks() {
  document.querySelectorAll('.icon-img').forEach(function(img) {
    function applyFallback() {
      img.style.display = 'none';
      var fb = img.nextElementSibling;
      if (fb && fb.classList.contains('icon-fallback')) fb.style.display = 'block';
    }
    img.addEventListener('error', applyFallback);
    if (img.complete && img.naturalWidth === 0) applyFallback();
  });
}

/* -------------------------------------------------------
   INIT
------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  initImageFallbacks();
  initLightbox();
  // Frutiger Aero blog player IDs
  initSCPlayer('sc-player-fa', 'mp-disc-fa', 'mp-bars-fa', 'mp-btn-fa', 'mp-track-fa');
});

/* -------------------------------------------------------
   LIGHTBOX — click any .art-item or .post-thumb img
   to see it full size
------------------------------------------------------- */
function openLightbox(src) {
  var lb = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  if (!lb || !img || !src) return;
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target === document.getElementById('lightbox-img')) return;
  var lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

// Close with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

function initLightbox() {
  // Art grid items
  document.querySelectorAll('.art-item .icon-img, .art-item').forEach(function(el) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function() {
      var img = el.tagName === 'IMG' ? el : el.querySelector('.icon-img');
      if (img && img.src && img.naturalWidth > 0) openLightbox(img.src);
    });
  });
  // Post thumbnails
  document.querySelectorAll('.post-thumb .icon-img, .post-img .icon-img, .diary-thumb .icon-img').forEach(function(img) {
    if (!img) return;
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      if (img.src && img.naturalWidth > 0) openLightbox(img.src);
    });
  });
}