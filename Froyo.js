function countFlavors() {
    const flavorsInput = document.getElementById('flavorsInput').value;
    const flavorsArray = flavorsInput.split(',');
  
    const flavorCounts = {};
  
    flavorsArray.forEach(flavor => {
      flavor = flavor.trim();
      if (flavor in flavorCounts) {
        flavorCounts[flavor] += 1;
      } else {
        flavorCounts[flavor] = 1;
      }
    });
  
    console.table(flavorCounts);
  }
  