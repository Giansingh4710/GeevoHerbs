// Product gallery: swipe the track (native scroll-snap) or tap a thumbnail.
document.querySelectorAll('.gallery').forEach((gallery) => {
  const track = gallery.querySelector('.gallery-track');
  const thumbs = [...gallery.querySelectorAll('.gallery-thumbs button')];

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      track.scrollTo({ left: track.children[i].offsetLeft });
    });
  });

  // Keep the highlighted thumbnail in sync with the visible slide.
  // ponytail: 'scroll' not 'scrollend' — older Safari lacks scrollend.
  track.addEventListener('scroll', () => {
    const current = Math.round(track.scrollLeft / track.clientWidth);
    thumbs.forEach((thumb, i) => {
      if (i === current) thumb.setAttribute('aria-current', 'true');
      else thumb.removeAttribute('aria-current');
    });
  }, { passive: true });
});
