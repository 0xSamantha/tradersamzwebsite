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

  function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var time = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = time;
  }

  setInterval(updateTime, 1000);
</script>
