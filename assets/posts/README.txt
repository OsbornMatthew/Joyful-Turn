Drop your real Joyful Turn Instagram post screenshots in this folder.

Then in index.html, find the "MOVING INSTAGRAM CAROUSEL" section and, for each
.ig-post block, replace:

  <div class="ig-post-visual">
    <svg>...</svg>
  </div>

with:

  <div class="ig-post-visual">
    <img src="assets/posts/your-image-filename.jpg" alt="Describe the post">
  </div>

Remember: there are two identical sets of posts in the HTML (the second set has
aria-hidden="true" on each post) so the scroll loop is seamless. Make the same
change in both sets, or just copy your finished first set down to replace the
second set entirely.
