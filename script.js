//your JS code here. If required.
 <script>
    document.querySelector('input[type="button"]').addEventListener('click', function() {
      const selectElement = document.getElementById('colorSelect');
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      
      if (selectedOption) {
        selectElement.removeChild(selectedOption);
      }
    });
  </script>