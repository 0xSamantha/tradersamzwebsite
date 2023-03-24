<script>
// Add click event listeners to each section link
  sectionLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Get the ID of the linked section
      const sectionId = link.getAttribute('href').slice(1);

      // Get the corresponding section element
      const section = document.getElementById(sectionId);

      // Toggle the 'show' class on the section's content
      section.querySelector('.toggle-content').classList.toggle('show');
    });
});
</script>
