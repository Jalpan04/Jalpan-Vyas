const portfolioData = {
    "projectData": [
    {
        "id": "fedmeddx",
        "name": "FedMedDx",
        "tagline": "Decentralized, privacy-preserving federated learning platform for multi-modal medical diagnostics.",
        "description": "A decentralized medical imaging platform leveraging Personalized Federated Learning (pFL with FedRep and FedBN) over Chest X-Rays. Hospital nodes collaboratively train shared ResNet-18 backbones while retaining private classification heads, featuring Flower, PyTorch, Grad-CAM visual heatmaps, and an interactive Streamlit console.",
        "image": "assets/images/fedmeddx_1790322559.png",
        "tech": [
            "Python",
            "PyTorch",
            "Streamlit",
            "Flower",
            "Grad-CAM"
        ],
        "category": "AI & Machine Learning",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/FedMedDx",
        "featured": false
    },
    {
        "id": "openbark",
        "name": "OpenBark",
        "tagline": "Native desktop LaTeX editor modeled after Overleaf with GPU-accelerated rendering and offline compilation.",
        "description": "A native desktop LaTeX editor modeled after Overleaf, designed for offline-first speed and reliability. Features GPU-accelerated PDF rendering, synchronized dual-pane source and preview scrolling, cross-platform compilation, and integrated bibliography management.",
        "image": "assets/images/openbark_1790322565.png",
        "tech": [
            "Python",
            "LaTeX",
            "Desktop GUI",
            "PyQt"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/openbark",
        "featured": false
    },
    {
        "id": "gujarat-sultanate",
        "name": "Gujarat Sultanate Explorer",
        "tagline": "Interactive chronological timeline and historical explorer of the Gujarat Sultanate (1391-1592 CE).",
        "description": "An interactive historical explorer and chronological timeline charting the architectural heritage, military campaigns, and rulers of the Gujarat Sultanate and Muzaffarid Dynasty. Built with vanilla JavaScript, modern CSS, dynamic map views, and archival documentation.",
        "image": "assets/images/gujarat-sultanate_1790322569.png",
        "tech": [
            "JavaScript",
            "HTML",
            "CSS",
            "Responsive Design"
        ],
        "category": "Web & Fullstack",
        "liveUrl": "https://jalpan04.github.io/gujarat-sultanate/",
        "sourceUrl": "https://github.com/Jalpan04/gujarat-sultanate",
        "featured": false
    },
    {
        "id": "g-houl",
        "name": "G-Houl",
        "tagline": "Professional GitHub developer intelligence platform analyzing engineering signals and code quality.",
        "description": "A developer intelligence suite that pulls verifiable signals from GitHub activity and repositories. It grades developer code across four explainable engineering dimensions, producing unembellished telemetry scorecards and actionable architecture feedback.",
        "image": "assets/images/g-houl_1790322580.png",
        "tech": [
            "TypeScript",
            "React",
            "Vite",
            "Node.js",
            "TailwindCSS"
        ],
        "category": "Web & Fullstack",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/G-Houl",
        "featured": false
    },
    {
        "id": "ezcrossplay",
        "name": "ezcrossplay",
        "tagline": "NYT Crossplay Scrabble Solver backend and frontend web application with optimal move generation.",
        "description": "A full-stack solver and board analyzer for NYT Crossplay Scrabble. Powered by an algorithmic rack solver in Python and an intuitive web interface, it analyzes rack anagrams, tile multipliers, and placement strategies in real time.",
        "image": "assets/images/ezcrossplay_1790322583.png",
        "tech": [
            "Python",
            "FastAPI",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "category": "Web & Fullstack",
        "liveUrl": "https://ezcrossplay.onrender.com/",
        "sourceUrl": "https://github.com/Jalpan04/ezcrossplay",
        "featured": false
    },
    {
        "id": "newslens",
        "name": "NewsLens",
        "tagline": "Personalized digital newspaper print-inspired front page with multi-source RSS feeds and NLP.",
        "description": "A print-inspired digital newspaper reader that ingests stories from diverse RSS feeds, filters and ranks them according to user preferences, and applies NLP summarization to distill essential narrative points and background context.",
        "image": "assets/images/newslens_1790322587.png",
        "tech": [
            "Python",
            "NLP",
            "Flask",
            "HTML",
            "CSS"
        ],
        "category": "Web & Fullstack",
        "liveUrl": "https://newslens-mz85.onrender.com/",
        "sourceUrl": "https://github.com/Jalpan04/newslens",
        "featured": false
    },
    {
        "id": "editors-desk",
        "name": "The Editor's Desk",
        "tagline": "Balatro-like Wordle roguelike deckbuilder with tactical word crafting and relic synergies.",
        "description": "A roguelike deckbuilder combining Wordle deduction mechanics with Balatro-inspired synergies. Players draft letter modifications, trigger linguistic combos, and navigate editorial deadlines across procedurally generated runs.",
        "image": "assets/images/editors-desk_1790323663.png",
        "tech": [
            "Lua",
            "Pygame",
            "Game Dev",
            "Procedural Generation"
        ],
        "category": "Game Dev & Simulation",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/Editors-desk",
        "featured": false
    },
    {
        "id": "hisaab",
        "name": "Hisaab",
        "tagline": "Secure, offline-first family wealth, investment, and credential tracking application with AES-256.",
        "description": "A secure desktop personal finance suite built with CustomTkinter. Encrypts assets, investment portfolios, and sensitive records using AES-256 (Fernet) and PBKDF2 inside a local SQLite vault, offering interactive wealth distribution charts and PDF reports.",
        "image": "assets/images/hisaab_1790322846.png",
        "tech": [
            "Python",
            "CustomTkinter",
            "SQLite",
            "Cryptography",
            "Matplotlib"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/hisaab",
        "featured": false
    },
    {
        "id": "devops-qlora-pipeline",
        "name": "DevOps QLoRA Pipeline",
        "tagline": "End-to-end 4-bit quantized LoRA fine-tuning pipeline for Qwen2.5-Coder-7B on DevOps domain data.",
        "description": "A parameter-efficient fine-tuning (PEFT/QLoRA) pipeline training Qwen2.5-Coder-7B on specialized DevOps scripts, Dockerfiles, Kubernetes manifests, and CI/CD workflows, optimized to run within consumer GPU memory budgets.",
        "image": "https://opengraph.githubassets.com/1/Jalpan04/devops-qlora-pipeline",
        "tech": [
            "Python",
            "PyTorch",
            "Hugging Face",
            "QLoRA",
            "Shell"
        ],
        "category": "AI & Machine Learning",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/devops-qlora-pipeline",
        "featured": false
    },
    {
        "id": "linkedin-learning-speed-engine",
        "name": "LinkedIn Learning Speed Engine",
        "tagline": "Manifest V3 Chrome extension for high-performance video speed acceleration and event interception.",
        "description": "A Google Chrome extension engineered for responsive video acceleration on LinkedIn Learning. Employs capture-phase event interception to reliably adjust video playback speed without video stutter or player override.",
        "image": "assets/images/linkedin-learning-speed-engine_1790333988.png",
        "tech": [
            "JavaScript",
            "Chrome Extension",
            "CSS",
            "HTML"
        ],
        "category": "Web & Fullstack",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/linkedin-learning-speed-engine",
        "featured": false
    },
    {
        "id": "isomorphic-amr",
        "name": "Isomorphic AMR",
        "tagline": "Geometric deep learning and graph parsing framework for Abstract Meaning Representation.",
        "description": "A research toolkit for Abstract Meaning Representation (AMR) parsing and semantic graph comparison. Incorporates hyperbolic geometry, optimal transport metrics, and graph matching algorithms to evaluate semantic isomorphisms.",
        "image": "assets/images/isomorphic-amr_1790334832.png",
        "tech": [
            "Python",
            "PyTorch",
            "NLP",
            "NetworkX",
            "Graph ML"
        ],
        "category": "AI & Machine Learning",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/isomorphic-amr",
        "featured": false
    },
    {
        "id": "camus-website",
        "name": "Camus Explorer",
        "tagline": "Themed web landing page exploring the philosophical literature and essays of Albert Camus.",
        "description": "An interactive digital literary portal showcasing the philosophical canon, core concepts, and essays of Albert Camus, featuring minimalist editorial typography, chapter quotes, and responsive layout.",
        "image": "assets/images/camus-website_1790335960.png",
        "tech": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "category": "Web & Fullstack",
        "liveUrl": "https://jalpan04.github.io/camus-website/",
        "sourceUrl": "https://github.com/Jalpan04/camus-website",
        "featured": false
    },
    {
        "id": "jaxpy",
        "name": "JaxPY IDE",
        "tagline": "Lightweight Python Integrated Development Environment built with PyQt5 and AI assistance.",
        "description": "A responsive desktop IDE built in Python and PyQt5. Features smart syntax highlighting, code folding, multi-tab editing, package management, an embedded terminal, and a sidecar AI coding assistant.",
        "image": "assets/images/jaxpy_1790334045.png",
        "tech": [
            "Python",
            "PyQt5",
            "Desktop GUI",
            "AI Assistance"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/JaxPY",
        "featured": false
    },
    {
        "id": "sleevenotes",
        "name": "SleeveNotes",
        "tagline": "Personal music album logging and review application built with Python and KivyMD.",
        "description": "A personal music diary and album review app created using KivyMD and SQLite. Supports star ratings, tracklist logging, cover artwork caching, and mobile Android APK deployment via Buildozer.",
        "image": "assets/images/sleevenotes_1790332325.png",
        "tech": [
            "Python",
            "KivyMD",
            "SQLite",
            "Android"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/sleevenotes",
        "featured": false
    },
    {
        "id": "jaxify",
        "name": "Jaxify Downloader",
        "tagline": "Automated Spotify playlist audio downloader with Flask UI and real-time SSE progress tracking.",
        "description": "A high-performance automated Spotify downloader operating keyless via Playwright web scraping, yt-dlp Opus stream extraction, and Mutagen ID3/Vorbis metadata embedding, managed via a real-time SSE web interface.",
        "image": "assets/images/jaxify_1790334894.png",
        "tech": [
            "Python",
            "Playwright",
            "Flask",
            "yt-dlp",
            "Mutagen"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/jaxify",
        "featured": false
    },
    {
        "id": "spiritthief",
        "name": "SpiritThief",
        "tagline": "Top-down dungeon crawler where a ghost possesses enemies and acquires mutant abilities.",
        "description": "A top-down action dungeon crawler built in Pygame. Players inhabit a spectral entity capable of possessing enemies, wielding their distinct attack patterns, and accumulating procedural mutations across labyrinthine dungeon floors.",
        "image": "assets/images/spiritthief_1790323942.png",
        "tech": [
            "Python",
            "Pygame",
            "Game Dev",
            "Procedural Generation"
        ],
        "category": "Game Dev & Simulation",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/SpiritThief",
        "featured": false
    },
    {
        "id": "hindi-number-recognition",
        "name": "Hindi Numeral Recognition",
        "tagline": "Comparative deep learning benchmarks on the Hindi-MNIST handwritten digits dataset.",
        "description": "A comprehensive deep learning evaluation benchmarking multiple architectures - CNN, CapsNet, LeNet-5, VGG, MLP, RNN, ViT, and DeiT - for handwritten Devanagari Hindi numeral classification with confusion matrix and ROC metrics.",
        "image": "assets/images/hindi-number-recognition_1790335778.png",
        "tech": [
            "Jupyter Notebook",
            "Python",
            "PyTorch",
            "Computer Vision",
            "Deep Learning"
        ],
        "category": "AI & Machine Learning",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/Hindi-Number-Recognition",
        "featured": false
    },
    {
        "id": "media-manager",
        "name": "Media Manager",
        "tagline": "Desktop file organization utility with perceptual hashing duplicate detection and soft-delete.",
        "description": "A Python and PyQt5 media curation tool offering fast file tagging, metadata filtering, soft-delete with instantaneous undo, and perceptual hashing algorithms to locate near-identical duplicate photos.",
        "image": "assets/images/media-manager_1790333774.png",
        "tech": [
            "Python",
            "PyQt5",
            "Perceptual Hashing",
            "Desktop GUI"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/media-manager",
        "featured": false
    },
    {
        "id": "grappling-using-pygame",
        "name": "Grappling Hook Platformer",
        "tagline": "2D physics-based procedurally generated infinite platformer with dynamic rope mechanics.",
        "description": "A 2D physics platformer built with Pygame featuring mouse-targeted grappling hook traversal, pendulum swinging kinematics, procedural terrain generation, and smooth camera interpolation.",
        "image": "https://opengraph.githubassets.com/1/Jalpan04/Grappling-using-Pygame",
        "tech": [
            "Python",
            "Pygame",
            "Physics Simulation",
            "Game Dev"
        ],
        "category": "Game Dev & Simulation",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/Grappling-using-Pygame",
        "featured": false
    },
    {
        "id": "ml-playground",
        "name": "ML Playground",
        "tagline": "Streamlit launcher hub managing interactive machine learning and computer vision demos.",
        "description": "A centralized Streamlit launcher and dashboard orchestrating modular machine learning microservices, including cellular automata classifiers, palette extractors, and interactive game-tree search demos.",
        "image": "assets/images/ml-playground_1790333573.png",
        "tech": [
            "Python",
            "Streamlit",
            "Scikit-Learn",
            "Machine Learning"
        ],
        "category": "AI & Machine Learning",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/ML-playground",
        "featured": false
    },
    {
        "id": "jaxytdl",
        "name": "JaxYTdl",
        "tagline": "Lightweight YouTube video downloader and MP3 audio extractor built with Flask.",
        "description": "A user-friendly web interface and downloader built with Flask for saving YouTube video streams in varying resolutions or extracting audio directly into high-fidelity MP3 formats.",
        "image": "assets/images/jaxytdl_1790333994.png",
        "tech": [
            "Python",
            "Flask",
            "yt-dlp",
            "HTML",
            "CSS"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/JaxYTdl",
        "featured": false
    },
    {
        "id": "jax_todo",
        "name": "Jax_TODO",
        "tagline": "Minimalist, dark-themed desktop task manager with drag-and-drop reordering.",
        "description": "A focused desktop productivity application featuring drag-and-drop task reordering, completion toggles, due-date scheduling, and persistent local storage wrapped in a sleek dark UI.",
        "image": "assets/images/jax_todo_1790334902.png",
        "tech": [
            "Python",
            "Tkinter",
            "Desktop GUI"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/Jax_TODO",
        "featured": false
    },
    {
        "id": "identity",
        "name": "Identity",
        "tagline": "Windows Forms desktop application for cataloging and managing personal interests.",
        "description": "A C# and .NET WinForms desktop application providing structured cataloging for personal interests, collections, and media libraries with an intuitive desktop layout.",
        "image": "assets/images/identity_1790334921.png",
        "tech": [
            "C#",
            ".NET",
            "WinForms"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/identity",
        "featured": false
    },
    {
        "id": "adventureworks22",
        "name": "AdventureWorks Schema Classifier",
        "tagline": "Machine learning pipeline for database schema extraction and semantic entity classification.",
        "description": "A database inspection pipeline that constructs cognitive relational maps of SQL Server schemas and trains supervised machine learning models to semantically classify database columns and entities.",
        "image": "assets/images/adventureworks22_1790335403.png",
        "tech": [
            "Python",
            "Machine Learning",
            "Scikit-Learn",
            "SQL Server",
            "pyodbc"
        ],
        "category": "AI & Machine Learning",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/AdventureWorks22",
        "featured": false
    },
    {
        "id": "open-cv-experiments-",
        "name": "OpenCV Experiments",
        "tagline": "Suite of interactive computer vision experiments, gesture games, and YOLOv8 tracking.",
        "description": "A collection of interactive computer vision applications and games built using OpenCV and YOLOv8, covering real-time hand gesture games, Kalman Filter multi-object tracking, and automated video annotation.",
        "image": "assets/images/open-cv-experiments-_1790332462.png",
        "tech": [
            "Python",
            "OpenCV",
            "YOLOv8",
            "Computer Vision"
        ],
        "category": "AI & Machine Learning",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/open-cv-experiments-",
        "featured": false
    },
    {
        "id": "investment-tracker",
        "name": "Investment Tracker",
        "tagline": "Desktop wealth and assets management application with JSON storage and CSV exports.",
        "description": "A desktop GUI application built in Python and Tkinter to organize family wealth, bank accounts, locker inventories, and insurance policies with profile-based asset linking and CSV reporting.",
        "image": "assets/images/investment-tracker_1790334928.png",
        "tech": [
            "Python",
            "Tkinter",
            "Desktop GUI"
        ],
        "category": "CLI & Systems",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/investment-tracker",
        "featured": false
    },
    {
        "id": "wds-net",
        "name": "WDS-Net",
        "tagline": "A multi-path PyTorch framework for image classification that disentangles Spatial (CNN), Structural ...",
        "description": "A multi-path PyTorch framework for image classification that disentangles Spatial (CNN), Structural (LSTM), and Global (statistical) features, with GPU support, checkpoint resuming, and ROC/confusion matrix evaluation.",
        "image": "assets/images/wds-net_1790321429.png",
        "tech": [
            "Python",
            "PyTorch"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/WDS-Net",
        "featured": false
    },
    {
        "id": "gre-vocab-trainer",
        "name": "GRE Vocab Trainer",
        "tagline": "A personal GRE vocabulary trainer with emotional tagging, mnemonics, and a smart quiz engine.",
        "description": "A personal GRE vocabulary trainer with emotional tagging, mnemonics, and a smart quiz engine.",
        "image": "https://opengraph.githubassets.com/1/Jalpan04/gre-vocab-trainer",
        "tech": [
            "JavaScript",
            "CSS",
            "HTML"
        ],
        "category": "Other",
        "liveUrl": "https://jalpan04.github.io/gre-vocab-trainer/",
        "sourceUrl": "https://github.com/Jalpan04/gre-vocab-trainer",
        "featured": false
    },
    {
        "id": "mlvizard",
        "name": "Mlvizard 3D",
        "tagline": "An interactive web platform for real-time 3D neural network visualization and training, with a PyTor...",
        "description": "An interactive web platform for real-time 3D neural network visualization and training, with a PyTorch/FastAPI backend, React/Three.js frontend, gradient analytics, and dynamic hyperparameter control.",
        "image": "assets/images/mlvizard_1790333564.png",
        "tech": [
            "JavaScript",
            "Python",
            "CSS",
            "HTML",
            "FastAPI",
            "PyTorch",
            "Three.js",
            "React"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/mlvizard",
        "featured": false
    },
    {
        "id": "watermelon-game-generational-training",
        "name": "Watermelon Game AI Trainer",
        "tagline": "A Pygame clone of the Watermelon Game (Suika Game) featuring an automated OpenCV and PyAutoGUI-based...",
        "description": "A Pygame clone of the Watermelon Game (Suika Game) featuring an automated OpenCV and PyAutoGUI-based AI player agent.",
        "image": "assets/images/watermelon-game-generational-training_1790321419.png",
        "tech": [
            "Python",
            "OpenCV",
            "PyAutoGUI",
            "Pygame"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/watermelon-game-generational-training",
        "featured": false
    },
    {
        "id": "ojas",
        "name": "Ojas AI",
        "tagline": "A local-first, fully autonomous AI developer agent powered by LangChain, LangGraph, Ollama, ChromaDB...",
        "description": "A local-first, fully autonomous AI developer agent powered by LangChain, LangGraph, Ollama, ChromaDB, and Docker - with zero cloud dependencies, RAG codebase indexing, and Docker sandbox code execution.",
        "image": "assets/images/ojas_1790335277.png",
        "tech": [
            "Python",
            "Ollama",
            "ChromaDB",
            "LangChain",
            "LangGraph",
            "Docker"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/ojas",
        "featured": false
    },
    {
        "id": "brat-text-generator",
        "name": "Brat Text Generator",
        "tagline": "A simple web application that generates text in the style of Charli XCX's \"Brat\" album aesthetic.",
        "description": "A simple web application that generates text in the style of Charli XCX's \"Brat\" album aesthetic.",
        "image": "assets/images/brat-text-generator_1790335900.png",
        "tech": [
            "HTML"
        ],
        "category": "Other",
        "liveUrl": "https://jalpan04.github.io/brat-text-generator/",
        "sourceUrl": "https://github.com/Jalpan04/brat-text-generator",
        "featured": false
    },
    {
        "id": "climart",
        "name": "Climart",
        "tagline": "A unified, cross-platform terminal UI app store for CLI tools built in Rust with Ratatui, aggregatin...",
        "description": "A unified, cross-platform terminal UI app store for CLI tools built in Rust with Ratatui, aggregating packages from npm, Pipx, Homebrew, and pkgx with interactive install and run capabilities.",
        "image": "https://opengraph.githubassets.com/1/Jalpan04/climart",
        "tech": [
            "Rust",
            "Ratatui"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/climart",
        "featured": false
    },
    {
        "id": "constraint-ecology",
        "name": "Constraint Ecology",
        "tagline": "A C/raylib simulation and research paper exploring constraint evolution as a procedural generation m...",
        "description": "A C/raylib simulation and research paper exploring constraint evolution as a procedural generation mechanism, comparing baseline vs. evolving spatial constraints across multi-agent environments.",
        "image": "https://opengraph.githubassets.com/1/Jalpan04/constraint-ecology",
        "tech": [
            "TeX",
            "C",
            "Python",
            "Raylib"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/constraint-ecology",
        "featured": false
    },
    {
        "id": "mnist-playground-visualizer",
        "name": "MNIST Playground Visualizer",
        "tagline": "A real-time interactive neural network visualizer for MNIST digits built in TypeScript with live ske...",
        "description": "A real-time interactive neural network visualizer for MNIST digits built in TypeScript with live sketch-to-inference, dynamic activation visuals, and 60 FPS canvas rendering via path-batching and weight-culling.",
        "image": "assets/images/mnist-playground-visualizer_1790333434.png",
        "tech": [
            "TypeScript",
            "CSS",
            "HTML",
            "JavaScript"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/mnist-playground-visualizer",
        "featured": false
    },
    {
        "id": "isotron",
        "name": "Isotron",
        "tagline": "A Git Diff-style neural network architecture visualizer built with Next.js and TypeScript, for compa...",
        "description": "A Git Diff-style neural network architecture visualizer built with Next.js and TypeScript, for comparing model graphs and tracking structural changes from quantization, pruning, and fine-tuning.",
        "image": "assets/images/isotron_1790334910.png",
        "tech": [
            "TypeScript",
            "JavaScript",
            "CSS",
            "Next.js"
        ],
        "category": "Other",
        "liveUrl": "https://jalpan04.github.io/isotron/",
        "sourceUrl": "https://github.com/Jalpan04/isotron",
        "featured": false
    },
    {
        "id": "auction",
        "name": "Auction",
        "tagline": "A real-time auction web application powered by Firebase, featuring user authentication, live bidding...",
        "description": "A real-time auction web application powered by Firebase, featuring user authentication, live bidding updates, item creation, and automated Playwright E2E tests.",
        "image": "assets/images/auction_1790335772.png",
        "tech": [
            "JavaScript",
            "HTML",
            "CSS",
            "Batchfile",
            "Firebase",
            "Playwright"
        ],
        "category": "Other",
        "liveUrl": "https://myauction-app.web.app/",
        "sourceUrl": "https://github.com/Jalpan04/Auction",
        "featured": false
    },
    {
        "id": "microcyberdeck",
        "name": "Microcyberdeck",
        "tagline": "A MicroPython-based hardware simulation of a mini Cyberdeck interface for Wokwi, featuring on-screen...",
        "description": "A MicroPython-based hardware simulation of a mini Cyberdeck interface for Wokwi, featuring on-screen diagnostic apps, keypad navigation, and device monitors.",
        "image": "assets/images/microcyberdeck_1790333677.png",
        "tech": [
            "Python"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/microcyberdeck",
        "featured": false
    },
    {
        "id": "qwen-researcher",
        "name": "Qwen Researcher",
        "tagline": "A complete QLoRA fine-tuning pipeline for Qwen2.5-0.5B-Instruct on arXiv CS papers, with GGUF conver...",
        "description": "A complete QLoRA fine-tuning pipeline for Qwen2.5-0.5B-Instruct on arXiv CS papers, with GGUF conversion and Ollama deployment support.",
        "image": "assets/images/qwen-researcher_1790332401.png",
        "tech": [
            "Python",
            "Ollama"
        ],
        "category": "Other",
        "liveUrl": "https://huggingface.co/jalpan04/qwen-researcher",
        "sourceUrl": "https://github.com/Jalpan04/qwen-researcher",
        "featured": false
    },
    {
        "id": "brutalist-procedural-generation",
        "name": "Brutalist City Generator",
        "tagline": "An infinite, procedurally generated brutalist city exploration game built in C++ and Raylib, featuri...",
        "description": "An infinite, procedurally generated brutalist city exploration game built in C++ and Raylib, featuring volumetric fog, dynamic lighting modes, and cinematic autopilot camera.",
        "image": "assets/images/brutalist-procedural-generation_1790335893.png",
        "tech": [
            "C",
            "C++",
            "GLSL",
            "Batchfile",
            "Raylib"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/brutalist-procedural-generation",
        "featured": false
    },
    {
        "id": "finsim-api",
        "name": "FinSim API",
        "tagline": "A FastAPI backend for the Financial Life Event Simulator (FinSim), featuring 30-year net worth proje...",
        "description": "A FastAPI backend for the Financial Life Event Simulator (FinSim), featuring 30-year net worth projections, asset growth models, and real-time stock/commodity price integrations.",
        "image": "https://opengraph.githubassets.com/1/Jalpan04/FinSim-API",
        "tech": [
            "Python",
            "FastAPI"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/FinSim-API",
        "featured": false
    },
    {
        "id": "docraft",
        "name": "DocRAFT",
        "tagline": "Enterprise-Grade Retrieval-Augmented Fine-Tuning (RAFT) Agent.",
        "description": "An enterprise-grade Retrieval-Augmented Fine-Tuning agent for intelligent document processing, multimodal knowledge extraction, and semantic search at scale—powered by Docling, LlamaIndex, Qdrant, and Ollama.",
        "image": "https://opengraph.githubassets.com/1/Jalpan04/DocRAFT",
        "tech": [
            "Python",
            "LlamaIndex",
            "Qdrant",
            "Ollama"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/DocRAFT",
        "featured": false
    },
    {
        "id": "kiln",
        "name": "Kiln IDE",
        "tagline": "AI-First, Open-Source IDE for Agentic Workflows.",
        "description": "An AI-first, open-source integrated development environment designed specifically for engineering, debugging, and orchestrating agentic workflows.",
        "image": "assets/images/kiln_1790333842.png",
        "tech": [
            "TypeScript",
            "React",
            "Node.js",
            "AI/LLM"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/kiln",
        "featured": false
    },
    {
        "id": "luminamesh",
        "name": "LuminaMesh",
        "tagline": "A high-performance, self-healing P2P content delivery mesh.",
        "description": "A high-performance, self-healing P2P content delivery mesh built with WebRTC & Node.js. It turns client browsers into a collaborative swarm to offload server bandwidth costs, featuring SHA-256 chunk integrity, gossip-protocol discovery, and real-time mesh visualization.",
        "image": "assets/images/luminamesh_1790321337.png",
        "tech": [
            "TypeScript",
            "WebRTC",
            "Node.js",
            "P2P"
        ],
        "category": "Other",
        "liveUrl": "https://lumina-mesh-two.vercel.app/",
        "sourceUrl": "https://github.com/Jalpan04/LuminaMesh",
        "featured": false
    },
    {
        "id": "voiceclone",
        "name": "VoiceClone XTTS",
        "tagline": "Specialized Hindi XTTS-v2 voice cloning pipeline.",
        "description": "A specialized Hindi XTTS-v2 voice cloning pipeline engineered with custom stability patches and token mismatch fixes for high-fidelity cross-lingual voice synthesis.",
        "image": "assets/images/voiceclone_1790321343.png",
        "tech": [
            "Python",
            "PyTorch",
            "XTTS-v2",
            "Deep Learning"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/VoiceClone",
        "featured": false
    },
    {
        "id": "subtitle-pipeline",
        "name": "Subtitle Correction Pipeline",
        "tagline": "Whisper-based pipeline for Romanised Hindi subtitles with ML correction.",
        "description": "A robust pipeline for generating and correcting Romanised Hindi (Hinglish) subtitles using OpenAI's Whisper model paired with a custom machine learning correction module.",
        "image": "assets/images/subtitle-pipeline_1790323640.png",
        "tech": [
            "Python",
            "Whisper",
            "Machine Learning"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/subtitle-pipeline",
        "featured": false
    },
    {
        "id": "zatzy-ai",
        "name": "Zatzy AI",
        "tagline": "Advanced AI research laboratory for Yahtzee.",
        "description": "Zatzy AI is a comprehensive AI research laboratory for the game of Yahtzee, featuring multiple state-of-the-art agents ranging from Evolutionary Algorithms to Deep Reinforcement Learning and Neuro-Expectimax search.",
        "image": "assets/images/zatzy-ai_1790321328.png",
        "tech": [
            "Python",
            "Reinforcement Learning",
            "Evolutionary Algorithms"
        ],
        "category": "Other",
        "liveUrl": "https://zatzy-a1.streamlit.app/",
        "sourceUrl": "https://github.com/Jalpan04/zatzy-ai",
        "featured": false
    },
    {
        "id": "mathanim",
        "name": "MathAnim",
        "tagline": "Autonomous mathematical visualization engine using Manim.",
        "description": "MathAnim is an autonomous visualization engine that dynamically transforms static mathematical problems into engaging, step-by-step video tutorials using Manim.",
        "image": "assets/images/mathanim_1790321320.png",
        "tech": [
            "Python",
            "Manim",
            "AI/Automation"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/mathanim",
        "featured": false
    },
    {
        "id": "rekhta-gazal-scraper",
        "name": "Rekhta Ghazal Scraper",
        "tagline": "Poetry dataset scraper with anti-ban mechanisms.",
        "description": "A web scraper for collecting Ghazal poetry datasets from Rekhta.org with custom anti-ban mechanisms, session rotation, and clean CSV outputs optimized for Urdu NLP research.",
        "image": "assets/images/rekhta-gazal-scraper_1790332352.png",
        "tech": [
            "Python",
            "Selenium",
            "NLP"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/Rekhta-Gazal-Scraper",
        "featured": false
    },
    {
        "id": "gujarati-dialect-detection",
        "name": "gujarati-dialect-detection",
        "tagline": "Binary dialect classification: Standard vs Kathiawadi Gujarati.",
        "description": "Binary dialect classification: Standard vs Kathiawadi Gujarati.",
        "image": "assets/images/gujarati-dialect-detection_1790336442.png",
        "tech": [
            "Python"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/gujarati-dialect-detection",
        "featured": false
    },
    {
        "id": "urbansentinel",
        "name": "UrbanSentinel",
        "tagline": "No description provided.",
        "description": "No description provided.",
        "image": "assets/images/urbansentinel_1790334165.png",
        "tech": [
            "Python",
            "Dockerfile"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/UrbanSentinel",
        "featured": false
    },
    {
        "id": "rayrider",
        "name": "RayRider",
        "tagline": "No description provided.",
        "description": "No description provided.",
        "image": "assets/images/rayrider_1790332363.png",
        "tech": [
            "C",
            "C++",
            "GLSL",
            "Batchfile"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/RayRider",
        "featured": false
    },
    {
        "id": "brutalist-void",
        "name": "Brutalist-Void",
        "tagline": "No description provided.",
        "description": "No description provided.",
        "image": "assets/images/brutalist-void_1790335888.png",
        "tech": [
            "C",
            "C++",
            "GLSL",
            "Batchfile"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/Brutalist-Void",
        "featured": false
    },
    {
        "id": "smash",
        "name": "smash",
        "tagline": "No description provided.",
        "description": "No description provided.",
        "image": "assets/images/smash_1790323988.png",
        "tech": [
            "Rust",
            "Python",
            "Shell"
        ],
        "category": "Other",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/smash",
        "featured": false
    },
    {
        "id": "smart-image-analyzer",
        "name": "smart-image-analyzer",
        "tagline": "A high-performance, modular Computer Vision pipeline designed for real-time object detection using state-of-the-art Deep Learning models.",
        "description": "A high-performance, modular Computer Vision pipeline designed for real-time object detection using state-of-the-art Deep Learning models.",
        "image": "assets/images/smart-image-analyzer_1790323963.png",
        "tech": [
            "Python"
        ],
        "category": "Web Dev",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/smart-image-analyzer",
        "featured": false
    },
    {
        "id": "termtube",
        "name": "TermTube",
        "tagline": "TermTube is a lightweight, terminal-based wrapper for yt-dlp that allows you to search for YouTube videos, select formats interactively, and download them with ease. It combines the power of yt-dlp with the interactivity of fzf.",
        "description": "TermTube is a lightweight, terminal-based wrapper for yt-dlp that allows you to search for YouTube videos, select formats interactively, and download them with ease. It combines the power of yt-dlp with the interactivity of fzf.",
        "image": "assets/images/termtube_1790323628.png",
        "tech": [
            "Shell"
        ],
        "category": "Web Dev",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/TermTube",
        "featured": false
    },
    {
        "id": "music-genres-prediction",
        "name": "music-genres-prediction",
        "tagline": "This research implemented a complete Music Genre Classification system using the GTZAN dataset.",
        "description": "This research implemented a complete Music Genre Classification system using the GTZAN dataset.",
        "image": "assets/images/music-genres-prediction_1790333369.png",
        "tech": [
            "Python"
        ],
        "category": "Web Dev",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/music-genres-prediction",
        "featured": false
    },
    {
        "id": "mainbranch",
        "name": "Mainbranch",
        "tagline": "MainBranch is a comprehensive social platform and portfolio builder designed specifically for software engineers.",
        "description": "MainBranch is a comprehensive social platform and portfolio builder designed specifically for software engineers.",
        "image": "assets/images/mainbranch_1790321364.png",
        "tech": [
            "TypeScript",
            "JavaScript",
            "CSS"
        ],
        "category": "Web Dev",
        "liveUrl": "https://main-branch-dev.vercel.app/",
        "sourceUrl": "https://github.com/Jalpan04/Mainbranch",
        "featured": false
    },
    {
        "id": "nurag",
        "name": "nurag",
        "tagline": "NURAG is a local-first RAG system powered by Python, FastAPI, LangChain, and LangGraph, utilizing Ollama for privacy-focused LLM inference and ChromaDB for semantic vector storage.",
        "description": "NURAG is a local-first RAG system powered by Python, FastAPI, LangChain, and LangGraph, utilizing Ollama for privacy-focused LLM inference and ChromaDB for semantic vector storage.",
        "image": "assets/images/nurag_1790333361.png",
        "tech": [
            "Python",
            "JavaScript",
            "CSS",
            "HTML",
            "Dockerfile"
        ],
        "category": "Web Dev",
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/nurag",
        "featured": false
    },
    {
        "id": "sable-deck",
        "name": "Sable Deck",
        "tagline": "S.A.B.L.E. is a custom-built Python/Flask Micro-OS designed to turn an Android device (via Termux) i...",
        "description": "S.A.B.L.E. is a custom-built Python/Flask Micro-OS designed to turn an Android device (via Termux) into a fully functional, air-gapped or remote-controlled Cyberdeck",
        "image": "assets/images/sable-deck_1790324231.png",
        "tech": [
            "Python",
            "Shell"
        ],
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/SABLE_DECK",
        "featured": false
    },
    {
        "id": "arckage",
        "name": "Arckage",
        "tagline": "My custom Linux Arch Rice.",
        "description": "My custom Linux Arch Rice.",
        "image": "assets/images/arckage_1790336319.png",
        "tech": [
            "Shell",
            "CSS",
            "GLSL"
        ],
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/Arckage",
        "featured": false
    },
    {
        "id": "pixelmess",
        "name": "Pixelmess",
        "tagline": "This project uses Python and OpenCV to track moving, colored objects in videos. A user-friendly inte...",
        "description": "This project uses Python and OpenCV to track moving, colored objects in videos. A user-friendly interface lets you pick a video, a color to track, and visual effects, then it generates a new video showing the tracked objects and the distances between them.",
        "image": "assets/images/pixelmess_1790332374.png",
        "tech": [
            "Python",
            "Batchfile"
        ],
        "liveUrl": "",
        "sourceUrl": "https://github.com/Jalpan04/Pixelmess",
        "featured": false
    },
    {
        "id": "Pixel-Diffusion-Model",
        "name": "Pixel Diffusion Model",
        "tagline": "Generate 16x16 pixel art sprites using AI.",
        "description": "A conditional Denoising Diffusion Probabilistic Model (DDPM) for generating 16x16 pixel art sprites with class-based control and real-time visualization.",
        "image": "assets/images/Pixel-Diffusion-Model_1790332378.png",
        "liveUrl": "https://huggingface.co/spaces/jalpan04/Pixel_Diffusion",
        "sourceUrl": "https://github.com/Jalpan04/Pixel-Diffusion-Model",
        "tech": [
            "Jupyter Notebook",
            "Deep Learning"
        ]
    },
    {
        "id": "aspisengine",
        "name": "Aspis Engine",
        "tagline": "The Lightweight Python Game Engine.",
        "description": "A minimalist Python-based 2D game engine for rapid prototyping.",
        "image": "assets/images/aspisengine_1790321470.png",
        "liveUrl": "https://jalpan04.github.io/aspisengine/",
        "sourceUrl": "https://github.com/Jalpan04/aspisengine",
        "tech": [
            "Python",
            "Pygame",
            "Pymunk"
        ]
    },
    {
        "id": "neui",
        "name": "Neui",
        "tagline": "A modern, GPU-accelerated Python UI framework.",
        "description": "A modern, GPU-accelerated Python UI framework with Flexbox-like layouts, reactive events, and beautiful default styling.",
        "image": "assets/images/neui_1790321371.png",
        "tech": [
            "Python"
        ],
        "sourceUrl": "https://github.com/Jalpan04/neui",
        "liveUrl": "https://pypi.org/project/neui/"
    },
    {
        "id": "gujarati-author-attribution",
        "name": "gujarati-author-attribution",
        "tagline": "Authorship attribution in Gujarati literature using Neural Stylometry.",
        "description": "An end-to-end machine learning project on authorship attribution for Gujarati literary texts. It conducts a comparative analysis between a traditional LSTM model and a modern, pre-trained Transformer model on a small, imbalanced, low-resource dataset, demonstrating the effectiveness of transfer learning.",
        "image": "assets/images/gujarati-author-attribution.png",
        "liveUrl": "https://huggingface.co/spaces/jalpan04/gujarati-author-attribution",
        "sourceUrl": "https://github.com/Jalpan04/gujarati-author-attribution",
        "tech": [
            "Python"
        ]
    },
    {
        "id": "Chatdevs",
        "name": "Chatdevs",
        "tagline": "A live chat application.",
        "description": "A real-time chat application deployed on a live server.",
        "image": "https://github.com/user-attachments/assets/ea8a0706-6eb0-4bdb-a3a0-0d9855081c55",
        "liveUrl": "https://chatdevs.onrender.com/",
        "sourceUrl": "https://github.com/Jalpan04/Chatdevs",
        "tech": [
            "Web",
            "Node.js"
        ]
    },
    {
        "id": "pixelpredict",
        "name": "PixelPredict",
        "tagline": "Handwritten digit recognition on the web.",
        "description": "A web app for digit recognition using a custom two-layer feedforward neural network trained on the MNIST dataset. Users can draw digits on an interactive canvas, and the app provides predictions with confidence scores in real-time. Built with Flask and NumPy.",
        "image": "assets/images/pixelpredict_1790332922.png",
        "liveUrl": "https://number-id.onrender.com/",
        "sourceUrl": "https://github.com/Jalpan04/PixelPredict",
        "tech": [
            "HTML",
            "Python",
            "Flask",
            "NumPy",
            "JavaScript"
        ]
    },
    {
        "id": "spoticmd",
        "name": "Spoticmd",
        "tagline": "A CLI tool for real-time Spotify visualization in the terminal.",
        "description": "SpotiCMD is a CLI (Command Line Interface) tool that creates a real-time, interactive visualizer for Spotify directly in the terminal. It fetches the currently playing song, converts the album art into high-definition ASCII art with TrueColor support, and provides playback controls via keyboard shortcuts",
        "image": "assets/images/spoticmd_1790321378.png",
        "sourceUrl": "https://github.com/Jalpan04/spoticmd",
        "tech": []
    },
    {
        "id": "jaxOS",
        "name": "Jaxos",
        "tagline": "An experimental AI-driven operating system simulation.",
        "description": "jaxOS is an experimental operating system simulation that explores the intersection of traditional OS architecture and modern AI. It features a Neural Kernel that uses a Large Language Model (LLM) to interpret user intent.",
        "image": "assets/images/jaxOS_1790334886.png",
        "sourceUrl": "https://github.com/Jalpan04/jaxOS",
        "tech": []
    },
    {
        "id": "Synth-Studio",
        "name": "Synth Studio",
        "tagline": "A real-time modular synthesizer and sequencer in Python.",
        "description": "Synth-Studio is a real-time modular synthesizer and sequencer implemented entirely in Python ",
        "image": "assets/images/Synth-Studio_1790323975.png",
        "sourceUrl": "https://github.com/Jalpan04/Synth-Studio",
        "tech": []
    },
    {
        "id": "mnist-cvae-digit-generator",
        "name": "Handwritten Digit Generator",
        "tagline": "Generate handwritten digits using a Conditional VAE.",
        "description": "A Conditional Variational Autoencoder (CVAE) for generating handwritten digits on MNIST. Generate any number in realistic handwritten style. It extends the standard VAE by conditioning both encoding and decoding on labels, allowing for controlled generation (e.g., specifying a digit 0-9) and style variation via latent space sampling.",
        "image": "https://github.com/user-attachments/assets/340450ec-b189-460f-9f4a-7de43e641689",
        "sourceUrl": "https://github.com/Jalpan04/mnist-cvae-digit-generator",
        "tech": [
            "Jupyter Notebook"
        ]
    },
    {
        "id": "vinylogue-project",
        "name": "vinylogue-project",
        "tagline": "A full-stack MERN application for rating and reviewing music albums.",
        "description": "A full-stack MERN application for rating and reviewing music albums, inspired by Letterboxd. Features a bold, brutalist design, user authentication (JWT), dynamic album search via the Spotify API, and an interactive rating and liking system.",
        "image": "assets/images/vinylogue-project_1790321387.png",
        "liveUrl": "https://vinylogue-project.vercel.app/",
        "sourceUrl": "https://github.com/Jalpan04/vinylogue-project",
        "tech": [
            "JavaScript",
            "React",
            "Node",
            "MongoDB"
        ]
    },
    {
        "id": "Electron_stimulator",
        "name": "Electron_stimulator",
        "tagline": "A short video demo of an electron simulator.",
        "description": "A short video showcasing a physics simulation of electron movement.",
        "image": "assets/images/Electron_stimulator.png",
        "liveUrl": "https://youtube.com/shorts/0ULRdgJPBfI?si=J2aOHTEyCPsJPDuV",
        "sourceUrl": "https://github.com/Jalpan04/Electron_stimulator",
        "tech": [
            "Python",
            "Physics Simulation"
        ]
    },
    {
        "id": "babel-hash-api",
        "name": "BabelHashAPI",
        "tagline": "A computational exploration of Borges's infinite library.",
        "description": "A deterministic API and web portal for exploring a computational version of Jorge Luis Borges's \"The Library of Babel.\" It uses cryptographic hashes (SHA-256) to calculate a fixed address for any text, allowing any book to be generated on demand without storing a single one. Built with Python, FastAPI, and vanilla JavaScript.",
        "image": "assets/images/babel-hash-api_1790336302.png",
        "liveUrl": "https://jalpan04.github.io/BabelHashAPI/",
        "sourceUrl": "https://github.com/Jalpan04/BabelHashAPI",
        "tech": [
            "HTML",
            "Python",
            "FastAPI",
            "JavaScript"
        ]
    },
    {
        "id": "ai-snake-training",
        "name": "DQN Snake Agent",
        "tagline": "An AI agent learning to play Snake using Deep Q-Learning (DQN).",
        "description": "An AI agent that learns to play the classic Snake game using Deep Q-Learning (DQN) with PyTorch and Pygame. It includes a custom game environment, experience replay, and live performance tracking, with clear performance improvements shown over training time.",
        "image": "assets/images/ai-snake-training.png",
        "sourceUrl": "https://github.com/Jalpan04/ai_snake_training",
        "tech": [
            "Jupyter Notebook",
            "Python",
            "Pytorch"
        ]
    },
    {
        "id": "Asteroid-game-ai",
        "name": "Asteroids Genetic Agent",
        "tagline": "Asteroids game with AI agents trained over generations using neural networks.",
        "description": "Asteroids game with AI agents trained over generations using neural networks and a genetic algorithm. Built with Pygame.",
        "image": "assets/images/Asteroid-game-ai_1790335629.png",
        "liveUrl": "https://youtu.be/bp6xBBQXAF8",
        "sourceUrl": "https://github.com/Jalpan04/Asteroid-game-ai",
        "tech": [
            "Python",
            "Machine Learning"
        ]
    },
    {
        "id": "monke-mirror",
        "name": "Monke Mirror",
        "tagline": "Real-time gesture mirroring using OpenCV and MediaPipe.",
        "description": "A Python application that uses OpenCV and MediaPipe to detect facial expressions and hand gestures in real-time. It mirrors your poses by displaying corresponding images based on detected gestures",
        "image": "assets/images/monke-mirror_1790335002.png",
        "sourceUrl": "https://github.com/Jalpan04/monke-mirror",
        "tech": []
    },
    {
        "id": "blob-tracker",
        "name": "blob-tracker",
        "tagline": "Color-based object tracking in videos using Python and OpenCV.",
        "description": "This project uses Python and OpenCV to track moving, colored objects in videos. A user-friendly interface lets you pick a video, a color to track, and visual effects, then it generates a new video with the tracking visualized. It uses motion detection and color masking in HSV space.",
        "image": "assets/images/blob-tracker_1790336165.png",
        "sourceUrl": "https://github.com/Jalpan04/blob-tracker",
        "tech": [
            "Python",
            "OpenCV"
        ]
    },
    {
        "id": "boid-simulation",
        "name": "boid-simulation",
        "tagline": "An interactive simulation of flocking behavior.",
        "description": "An interactive simulation of flocking behavior based on Craig Reynolds's \"Boids\" algorithm. This project demonstrates emergent behavior by applying simple alignment, cohesion, and separation rules. Users can control a predator, adjust simulation parameters, and introduce environmental forces like wind.",
        "image": "assets/images/boid-simulation_1790336219.png",
        "liveUrl": "https://jalpan04.github.io/boid-simulation/",
        "sourceUrl": "https://github.com/Jalpan04/boid-simulation",
        "tech": [
            "HTML",
            "JavaScript",
            "Tailwind"
        ]
    },
    {
        "id": "fluid-simulator",
        "name": "Fluid_simulator",
        "tagline": "A real-time, interactive 2D fluid simulation.",
        "description": "This project implements a real-time fluid simulation using Navier-Stokes equations. The simulation models fluid behavior, including density diffusion, advection, and velocity updates, creating realistic, interactive fluid dynamics. Built with Python and Pygame.",
        "image": "https://github.com/Jalpan04/Fluid_simulator/raw/main/random.gif",
        "sourceUrl": "https://github.com/Jalpan04/Fluid_simulator",
        "tech": [
            "Python",
            "Pygame"
        ]
    },
    {
        "id": "game-of-life",
        "name": "game_of_life",
        "tagline": "A Python implementation of John Conway's Game of Life.",
        "description": "A Python implementation of John Conway's Game of Life using `pygame`. This simulation of cellular automata follows simple rules to create complex, evolving patterns. It features an interactive grid, dynamic resizing (zoom), and simulation controls (start/pause/clear).",
        "image": "https://github.com/Jalpan04/game_of_life/raw/main/static/Simulation%20Running.gif",
        "sourceUrl": "https://github.com/Jalpan04/game_of_life",
        "tech": [
            "Python",
            "Pygame"
        ]
    },
    {
        "id": "particle-life-simulator",
        "name": "Particle-Life-Simulator",
        "tagline": "A browser-based particle life simulator with emergent behavior.",
        "description": "This is a simple, browser-based particle life simulator where you can observe emergent behavior from simple rules of attraction and repulsion between different groups of particles. It features customizable global settings (Particles, Groups, Radius) and an interactive rule engine.",
        "image": "assets/images/particle-life-simulator_1790332753.png",
        "liveUrl": "https://jalpan04.github.io/Particle-Life-Simulator/",
        "sourceUrl": "https://github.com/Jalpan04/Particle-Life-Simulator",
        "tech": [
            "HTML"
        ]
    },
    {
        "id": "jax-web-compiler",
        "name": "jax-web-compiler",
        "tagline": "A JAX compiler accessible via a web interface.",
        "description": "A web-based interface for interacting with a JAX compiler.",
        "image": "assets/images/jax-web-compiler_1790323398.png",
        "liveUrl": "https://jax-compiler.onrender.com",
        "sourceUrl": "https://github.com/Jalpan04/jax-web-compiler",
        "tech": [
            "Python",
            "JAX",
            "Web"
        ]
    },
    {
        "id": "jaximg",
        "name": "JAXImg",
        "tagline": "A Miniature DALL·E: An exploration into Text-to-Image Generation.",
        "description": "A compact, educational implementation of a text-to-image generative model inspired by OpenAI’s DALL·E 1. It uses a two-stage architecture: a Discrete Variational Autoencoder (dVAE) and an Autoregressive Transformer to synthesize images from textual prompts like class labels, demonstrating how complex generative processes can be deconstructed.",
        "image": "assets/images/jaximg_1790323401.png",
        "sourceUrl": "https://github.com/Jalpan04/JAXImg",
        "tech": [
            "Python"
        ]
    },
    {
        "id": "maze-solver-visualizer",
        "name": "Maze-Solver-Visualizer",
        "tagline": "Dynamic visualizer for pathfinding algorithms.",
        "description": "Maze Pathfinder is a dynamic visualizer that brings maze-solving algorithms (DFS, BFS, A*, Dijkstra's) to life. Watch as they work their way through randomly generated mazes, finding the shortest path. Built with Python and Pygame for an engaging way to understand graph traversal.",
        "image": "assets/images/maze-solver-visualizer_1790323394.png",
        "liveUrl": "https://youtube.com/shorts/-8rkpwiIggs?feature=share",
        "sourceUrl": "https://github.com/Jalpan04/Maze-Solver-Visualizer",
        "tech": [
            "Python",
            "Pygame"
        ]
    },
    {
        "id": "sand-simulation",
        "name": "sand-simulation",
        "tagline": "A 2D particle physics sandbox.",
        "description": "A dynamic 2D particle simulation sandbox built with Python and Pygame. This project models the behavior of various elements (Sand, Water, Rock, Fire, Oil, Gas, Plant) and their interactions in a grid-based environment, demonstrating cellular automata and agent-based modeling principles.",
        "image": "assets/images/sand-simulation_1790323391.png",
        "sourceUrl": "https://github.com/Jalpan04/sand-simulation",
        "tech": [
            "Python",
            "Pygame"
        ]
    },
    {
        "id": "sign-lang-translator",
        "name": "Sign-Lang-Translator",
        "tagline": "Real-Time ASL Alphabet Recognition.",
        "description": "Sign-Interpreter is a real-time American Sign Language (ASL) alphabet recognition system designed to interpret hand gestures through webcam input. It utilizes Google's MediaPipe for robust hand keypoint detection and custom-trained neural networks for gesture classification, featuring an interactive tutorial mode.",
        "image": "assets/images/sign-lang-translator_1790323407.png",
        "sourceUrl": "https://github.com/Jalpan04/Sign-Lang-Translator",
        "tech": [
            "Python",
            "Tensorflow"
        ]
    }
],
    "allShortcutPages": [
        {
            "id": "about",
            "title": "About Me",
            "url": "portfolio://about",
            "faIcon": "fa-solid fa-user",
            "colorClass": "text-about"
        },
        {
            "id": "skills",
            "title": "Skills",
            "url": "portfolio://skills",
            "faIcon": "fa-solid fa-lightbulb",
            "colorClass": "text-skills"
        },
        {
            "id": "projects",
            "title": "Projects",
            "url": "portfolio://projects",
            "faIcon": "fa-solid fa-flask",
            "colorClass": "text-projects"
        },
        {
            "id": "deployed",
            "title": "Live Demos",
            "url": "portfolio://deployed",
            "faIcon": "fa-solid fa-globe",
            "colorClass": "text-demos"
        },
        {
            "id": "certifications",
            "title": "Certifications",
            "url": "portfolio://certifications",
            "faIcon": "fa-solid fa-certificate",
            "colorClass": "text-certs"
        },
        {
            "id": "contact",
            "title": "Socials",
            "url": "portfolio://contact",
            "faIcon": "fa-solid fa-address-book",
            "colorClass": "text-contact"
        }
    ],
    "skillsData": {
        "Languages": [
            {
                "name": "Python",
                "logo": "python"
            },
            {
                "name": "JavaScript",
                "logo": "javascript"
            },
            {
                "name": "TypeScript",
                "logo": "typescript"
            },
            {
                "name": "C#",
                "logo": "assets/images/csharp_custom.png"
            },
            {
                "name": "C",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
            },
            {
                "name": "Shell",
                "logo": "https://bashlogo.com/img/symbol/svg/full_colored_light.svg"
            },
            {
                "name": "HTML5",
                "logo": "html5"
            },
            {
                "name": "CSS3",
                "logo": "css"
            },
            {
                "name": "R",
                "logo": "r"
            },
            {
                "name": "SQL",
                "logo": "sqlite"
            },
            {
                "name": "Rust",
                "logo": "rust"
            }
        ],
        "Frameworks & Libraries": [
            {
                "name": "React",
                "logo": "react"
            },
            {
                "name": "Next.js",
                "logo": "nextdotjs"
            },
            {
                "name": "Node.js",
                "logo": "nodedotjs"
            },
            {
                "name": "Flask",
                "logo": "flask"
            },
            {
                "name": "FastAPI",
                "logo": "fastapi"
            },
            {
                "name": "Django",
                "logo": "django"
            },
            {
                "name": ".NET",
                "logo": "dotnet"
            },
            {
                "name": "TailwindCSS",
                "logo": "tailwindcss"
            },
            {
                "name": "OpenCV",
                "logo": "opencv"
            },
            {
                "name": "NumPy",
                "logo": "numpy"
            },
            {
                "name": "Pandas",
                "logo": "pandas"
            },
            {
                "name": "Scikit-learn",
                "logo": "scikitlearn"
            },
            {
                "name": "TensorFlow",
                "logo": "tensorflow"
            },
            {
                "name": "PyTorch",
                "logo": "pytorch"
            },
            {
                "name": "Keras",
                "logo": "keras"
            },
            {
                "name": "LangChain",
                "logo": "langchain"
            },
            {
                "name": "LangGraph",
                "logo": "assets/images/langgraph_custom.png"
            },
            {
                "name": "Pygame",
                "logo": "assets/images/pygame_custom_v2.png"
            },
            {
                "name": "Streamlit",
                "logo": "streamlit"
            },
            {
                "name": "Hugging Face",
                "logo": "huggingface"
            }
        ],
        "Tools & Platforms": [
            {
                "name": "Git",
                "logo": "git"
            },
            {
                "name": "GitHub",
                "logo": "github"
            },
            {
                "name": "Docker",
                "logo": "docker"
            },
            {
                "name": "Linux",
                "logo": "linux"
            },
            {
                "name": "MongoDB",
                "logo": "mongodb"
            },
            {
                "name": "PostgreSQL",
                "logo": "postgresql"
            },
            {
                "name": "Ollama",
                "logo": "ollama"
            },
            {
                "name": "n8n",
                "logo": "n8n"
            },
            {
                "name": "FFmpeg",
                "logo": "ffmpeg"
            },
            {
                "name": "Jupyter",
                "logo": "jupyter"
            }
        ]
    }
};