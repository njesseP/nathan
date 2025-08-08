    function addComment() {
      const name = document.getElementById("commentName").value.trim();
      const comment = document.getElementById("commentText").value.trim();

      if (!name || !comment) {
        alert("Please enter both name and comment.");
        return;
      }

      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      commentDiv.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;

      document.getElementById("commentsContainer").appendChild(commentDiv);

      document.getElementById("commentName").value = "";
      document.getElementById("commentText").value = "";
    }

    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("contactEmail").value;
      const message = document.getElementById("contactMessage").value;
      alert("Message sent!\n\nEmail: " + email + "\nMessage: " + message);
      this.reset();
    });

  document.getElementById('download_Btn').addEventListener('click', async function () {
      const filename = 'Nathan_Jesse_Pine_Resume.pdf';
      const content = document.getElementById('resumeOnly');

      try {
        const opt = {
          margin: [0.5, 0.5, 0.5, 0.5],
          filename: filename,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 3, useCORS: true, scrollY: 0 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
          pagebreak: {
            mode: ['avoid-all', 'css', 'legacy'],
            before: '.page-break-before'
          }
        };

        await html2pdf().set(opt).from(content).save();
      } catch (error) {
        console.error('Download error:', error.message);
        alert('Something went wrong. Try refreshing the page.');
      }
    });