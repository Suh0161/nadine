// Wrap your JavaScript code in a function to ensure it runs after the DOM has loaded
window.onload = () => {
  const firstPageContainer = document.getElementById("first-page");
  const secondPageContainer = document.getElementById("second-page");

  const fetchData = () => {
    fetch("customize.json")
      .then(data => data.json())
      .then(data => {
        dataArr = Object.keys(data);
        dataArr.map(customData => {
          if (data[customData] !== "") {
            if (customData === "imagePath") {
              document
                .querySelector(`[data-node-name*="${customData}"]`)
                .setAttribute("src", data[customData]);
            } else {
              document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
            }
          }

          if (dataArr.length === dataArr.indexOf(customData) + 1) {
            animationTimeline();
          }
        });
      });
  };

  const animationTimeline = () => {
    // Animation code here

    const tl = new TimelineMax();
    // Define your animation timeline

    // Restart Animation on click
    const replayBtn = document.getElementById("replay");
    replayBtn.addEventListener("click", () => {
      tl.restart();
    });
  };

  // Run fetch and animation in sequence
  fetchData();

  // Add an event listener to the "CLICK ME!!!" link
  const clickMeLink = document.querySelector(".white-mode");
  clickMeLink.addEventListener("click", () => {
    // Hide the second page
    secondPageContainer.style.display = "none";
    
    // Show the first page
    firstPageContainer.style.display = "block";
  });
};
