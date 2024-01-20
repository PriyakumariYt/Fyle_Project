



document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 6; 
  let currentPage = 1;

  async function displayRepositories() {
    try {
      const repositories = [
                    {
                  "name": "QuantumFluxAnalyzer",
                  "description": "A cutting-edge quantum computing library for flux analysis and simulation.",
                  "technologies": ["JavaScript", "HTML", "CSS"]
                },
                {
                  "name": "NebulaCraft",
                  "description": "Build your own galaxy with NebulaCraft - a framework for celestial body generation in games.",
                  "technologies": ["Python", "OpenGL", "Unity"]
                },
                {
                  "name": "CipherVault",
                  "description": "Secure your data with state-of-the-art encryption using CipherVault - a data protection toolkit.",
                  "technologies": ["Java", "Cryptography", "Spring"]
                },
                {
                  "name": "BioGenomeHarmony",
                  "description": "Explore the harmony of biological data with BioGenomeHarmony, a genomics analysis toolkit.",
                  "technologies": ["R", "Bioinformatics", "Biopython"]
                },
                {
                  "name": "SynthWaveComposer",
                  "description": "Compose retro-futuristic music with SynthWaveComposer, your go-to synthesizer library.",
                  "technologies": ["C++", "Digital Signal Processing", "Audio Synthesis"]
                },
                {
                  "name": "DronePilotPro",
                  "description": "Take control with DronePilotPro - an advanced API for drone automation and navigation.",
                  "technologies": ["ROS", "Python", "Computer Vision"]
                },
                {
                  "name": "VirtualBotanist",
                  "description": "Grow your virtual garden with VirtualBotanist, a plant simulation and growth library.",
                  "technologies": ["JavaScript", "Three.js", "WebGL"]
                },
                {
                  "name": "CryptoRover",
                  "description": "Navigate the blockchain universe with CryptoRover - your guide to cryptocurrency exploration.",
                  "technologies": ["Solidity", "Blockchain", "Smart Contracts"]
                },
                {
                  "name": "SpaceTimeNavigator",
                  "description": "Chart your course through the fabric of spacetime with SpaceTimeNavigator, a physics simulation toolkit.",
                  "technologies": ["Python", "Physics Simulation", "NumPy"]
                },
                {
                  "name": "MindForgeAI",
                  "description": "Forge intelligent systems with MindForgeAI - an artificial intelligence development framework.",
                  "technologies": ["Python", "Machine Learning", "TensorFlow"]
                },
                {
                  "name": "AquaSimulator",
                  "description": "Dive into underwater simulations with AquaSimulator - a realistic aquatic environment API.",
                  "technologies": ["Java", "Swing", "Physics Simulation"]
                },
                {
                  "name": "AstroMeshConnect",
                  "description": "Connect celestial bodies in your applications with AstroMeshConnect - a space network API.",
                  "technologies": ["C#", "Unity", "Networking"]
                },
                {
                  "name": "CryptoCanvas",
                  "description": "Paint the blockchain with CryptoCanvas - a decentralized digital art creation toolkit.",
                  "technologies": ["JavaScript", "IPFS", "Blockchain"]
                },
                {
                  "name": "BioSculptor",
                  "description": "Sculpt your genetic code with BioSculptor - a genetic engineering and manipulation library.",
                  "technologies": ["Python", "Biotechnology", "CRISPR"]
                },
                {
                  "name": "QuantumMindReader",
                  "description": "Peek into the quantum realm of thoughts with QuantumMindReader - a mind-reading API.",
                  "technologies": ["C++", "EEG", "Quantum Computing"]
                },
                {
                  "name": "CodeCraftersGuild",
                  "description": "Join the guild of code crafters with CodeCraftersGuild - a collaborative coding environment.",
                  "technologies": ["JavaScript", "Node.js", "Collaboration Tools"]
                },
                {
                  "name": "SolarWindMapper",
                  "description": "Map solar wind patterns with SolarWindMapper - a solar physics data analysis toolkit.",
                  "technologies": ["Python", "Data Visualization", "Space Physics"]
                },
                {
                  "name": "RoboChefMaster",
                  "description": "Master the art of robotic cooking with RoboChefMaster - a culinary automation API.",
                  "technologies": ["Python", "Robotics", "Cooking Algorithms"]
                },
                {
                  "name": "CryptoSentinel",
                  "description": "Safeguard your digital assets with CryptoSentinel - a blockchain security toolkit.",
                  "technologies": ["Solidity", "Security Auditing", "Smart Contracts"]
                },
                {
                  "name": "WarpDriveEngine",
                  "description": "Power your applications to warp speed with WarpDriveEngine - a high-performance computing library.",
                  "technologies": ["C++", "Parallel Computing", "CUDA"]
                },
                {
                  "name": "BioSynthComposer",
                  "description": "Compose music inspired by biology with BioSynthComposer - a bio-inspired music generation API.",
                  "technologies": ["Python", "Music Theory", "Genetic Algorithms"]
                },
                {
                  "name": "DroneGuardian",
                  "description": "Guard the skies with DroneGuardian - a drone security and surveillance toolkit.",
                  "technologies": ["Java", "Drone SDK", "Computer Vision"]
                },
                {
                  "name": "QuantumFinanceWizard",
                  "description": "Navigate the quantum landscape of finance with QuantumFinanceWizard - a financial analytics API.",
                  "technologies": ["R", "Quantitative Finance", "Quantum Computing"]
                },
                {
                  "name": "RetroPixelPainter",
                  "description": "Paint retro pixel art with RetroPixelPainter - a nostalgic digital art creation toolkit.",
                  "technologies": ["JavaScript", "Canvas", "Pixel Art"]
                },
                {
                  "name": "SpaceRiftExplorer",
                  "description": "Explore the cosmic rifts with SpaceRiftExplorer - a space exploration and mapping API.",
                  "technologies": ["C#", "Unity", "Astronomy"]
                },
                {
                  "name": "CryptoTraderElite",
                  "description": "Trade cryptocurrencies like a pro with CryptoTraderElite - an advanced trading algorithm toolkit.",
                  "technologies": ["Python", "Algorithmic Trading", "Cryptocurrency"]
                },
                {
                  "name": "BioNanoAssembler",
                  "description": "Assemble nanoscale structures with BioNanoAssembler - a bio-inspired nanotechnology toolkit.",
                  "technologies": ["Python", "Nanotechnology", "Molecular Assembly"]
                },
                {
                  "name": "SkywardSimulator",
                  "description": "Simulate the skyward journey with SkywardSimulator - an atmospheric simulation library.",
                  "technologies": ["Java", "Simulation", "Atmospheric Science"]
                },
                {
                  "name": "RoboPetMaster",
                  "description": "Master the art of training robotic pets with RoboPetMaster - an AI-driven pet training API.",
                  "technologies": ["Python", "Robotics", "Pet Training Algorithms"]
                },
                {
                  "name": "QuantumMusicMixer",
                  "description": "Mix music in the quantum realm with QuantumMusicMixer - a quantum-inspired music composition toolkit.",
                  "technologies": ["C++", "Quantum Computing", "Music Production"]
                },
                {
                  "name": "AeroSpacePainter",
                  "description": "Paint the aerospace landscape with AeroSpacePainter - a digital art creation toolkit for aviation enthusiasts.",
                  "technologies": ["JavaScript", "Three.js", "Aviation Art"]
                },
                {
                  "name": "CryptoOracle",
                  "description": "Seek guidance from the crypto oracle with CryptoOracle - a blockchain prediction and analysis API.",
                  "technologies": ["Solidity", "Oracle Services", "Smart Contracts"]
                },
                {
                  "name": "NanoRoboticsCraft",
                  "description": "Craft nanorobots for various applications with NanoRoboticsCraft - a nanotechnology robotics toolkit.",
                  "technologies": ["Python", "Nanorobotics", "Mechatronics"]
                },
                {
                  "name": "QuantumChessMaster",
                  "description": "Master the quantum chessboard with QuantumChessMaster - a quantum-inspired chess engine.",
                  "technologies": ["C++", "Chess Algorithms", "Quantum Computing"]
                },
                {
                  "name": "VRUniverseExplorer",
                  "description": "Explore virtual universes with VRUniverseExplorer - a virtual reality universe simulation API.",
                  "technologies": ["Unity", "VR", "Universe Simulation"]
                },
                {
                  "name": "NeuralStyleCreator",
                  "description": "Create unique art styles with NeuralStyleCreator - an AI-powered artistic style transfer toolkit.",
                  "technologies": ["Python", "Deep Learning", "Artistic Style Transfer"]
                },
                {
                  "name": "QuantumMarketAnalyzer",
                  "description": "Analyze quantum fluctuations in financial markets with QuantumMarketAnalyzer - a financial quantum analytics API.",
                  "technologies": ["R", "Quantitative Finance", "Quantum Computing"]
                },
                {
                  "name": "BioMechanicalSim",
                  "description": "Simulate biomechanics with BioMechanicalSim - a toolkit for realistic human and animal movement simulation.",
                  "technologies": ["Python", "Biomechanics", "Physics Simulation"]
                },
                {
                  "name": "CryptoSpellcaster",
                  "description": "Cast spells in the blockchain with CryptoSpellcaster - a decentralized magic-themed application toolkit.",
                  "technologies": ["Solidity", "Smart Contracts", "Decentralized Magic"]
                },
                {
                  "name": "QuantumRealityEngine",
                  "description": "Create alternate realities with QuantumRealityEngine - a quantum-inspired virtual reality development framework.",
                  "technologies": ["Unity", "VR", "Quantum Computing"]
                },
                {
                  "name": "DeepSpaceCartographer",
                  "description": "Chart the depths of deep space with DeepSpaceCartographer - a space mapping and exploration API.",
                  "technologies": ["C#", "Unity", "Space Exploration"]
                },
                {
                  "name": "QuantumGameMaster",
                  "description": "Master the quantum realm of gaming with QuantumGameMaster - a game development toolkit.",
                  "technologies": ["C++", "Game Development", "Quantum Computing"]
                },
      ];

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const displayedRepositories = repositories.slice(startIndex, endIndex);


    if (displayedRepositories && displayedRepositories.length) {
      document.querySelector("#container").innerHTML = ''; 
      displayedRepositories.forEach((repo) => {
        let repoBox = document.createElement("div");
        repoBox.setAttribute("class", "ApiBox");

        let repoName = document.createElement("h2");
        repoName.innerText = repo.name;

        let repoDescription = document.createElement("p");
        repoDescription.innerText = repo.description;

        let techList = document.createElement("ul");
        techList.setAttribute("class", "TechList");

        repo.technologies.forEach((tech) => {
          let techItem = document.createElement("li");
          techItem.setAttribute("class", "liBtn");
          techItem.innerText = tech;
          techList.appendChild(techItem);
        });

        repoBox.append(repoName, repoDescription, techList);
        document.querySelector("#container").append(repoBox);
      });

      addPaginationControls(repositories.length);
    } else {
      console.error('Displayed repositories array is undefined or empty.');
    }
  } catch (error) {
    console.error(error);
  }
  }

  function addPaginationControls(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    document.getElementById("currentPage").innerText = currentPage;

    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = currentPage === totalPages;
  }

 

  document.getElementById("prevBtn").addEventListener("click", () => {
    changePage(-1);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    changePage(1);
  });
  function changePage(delta) {
    currentPage += delta;
    displayRepositories(currentPage);
  }


  displayRepositories();
});
