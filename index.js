<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Inter:opsz,wght@14..32,500&family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Valentines Day</title>
  <style>
    body {
      font-family: "Archivo", serif !important;
    }

    .gradient-background {
      background: rgb(255, 110, 115);
      background: linear-gradient(180deg, rgba(255, 208, 229, 1) 0%, rgba(255, 232, 242, 1) 36%, rgba(255, 255, 255, 1) 100%);
    }

    .bounce2 {
      animation: bounce2 2s ease infinite;
    }

    @keyframes bounce2 {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-20px);
      }
      60% {
        transform: translateY(-10px);
      }
    }
  </style>
</head>
<body class="gradient-background">
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col items-center p-4">
      <img id="imageDisplay" src="./images/image1.gif" alt="Cute kitten with flowers" class="rounded-md h-[300px]" style="object-fit: cover;" />
      <h2 id="valentineQuestion" class="text-4xl font-bold italic text-[#bd1e59] my-4 text-center">Will you be my Valentine?</h2>
      <div class="flex gap-4 pt-[20px] items-center" id="responseButtons">
        <button id="yesButton"
          class="bounce2 inline-flex items-center justify-center whitespace-nowrap rounded-xl text-[20px] font-medium disabled:pointer-events-none disabled:opacity-50 hover:bg-green-400 min-h-12 min-w-[75px] px-4 py-2 bg-green-500 text-white transition ">
          Yes
        </button>
        <button id="noButton"
          class="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-[20px] font-medium transition disabled:pointer-events-none disabled:opacity-50 hover:bg-red-700 h-12 min-w-[75px] w-auto px-4 py-2 bg-red-500 text-white ">
          No
        </button>
      </div>
    </div>
  </div>

  <script type="module">
    import confetti from 'https://cdn.skypack.dev/canvas-confetti';
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const imageDisplay = document.getElementById('imageDisplay');
    const valentineQuestion = document.getElementById('valentineQuestion');
    const responseButtons = document.getElementById('responseButtons');
  
    let noClickCount = 0;
    let buttonHeight = 48; // Starting height in pixels
    let buttonWidth = 80;
    let fontSize = 20; // Starting font size in pixels
    const imagePaths = [
      "./images/image1.gif",
      "./images/image2.gif",
      "./images/image3.gif",
      "./images/image4.gif",
      "./images/image5.gif",
      "./images/image6.gif",
      "./images/image7.gif"
    ];
  
    noButton.addEventListener('click', function() {
      if (noClickCount < 5) {
        noClickCount++;
        imageDisplay.src = imagePaths[noClickCount];
        buttonHeight += 17; // Increase height by 5px on each click
        buttonWidth += 25;
        fontSize += 20; // Increase font size by 1px on each click
        yesButton.style.height = `${buttonHeight}px`; // Update button height
        yesButton.style.width = `${buttonWidth}px`;
        yesButton.style.fontSize = `${fontSize}px`; // Update font size
        if (noClickCount < 6) {
          noButton.textContent = ["No", "Are you sure?", "Pookie please", "Don't do this to me :(", "You're breaking my heart", "I'm gonna cry..."][noClickCount];
        }
      }
    });
  
    yesButton.addEventListener('click', () => {
      imageDisplay.src = './images/image7.gif'; // Change to image7.gif
      valentineQuestion.textContent = "Yayyyy! You clicked YES? Great, my mom already likes you. 😂"; // Change the question text
      responseButtons.style.display = 'none'; // Hide both buttons
      confetti(); // Trigger confetti animation
    });
  </script>  
</body>
</html>
