document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    let projectData = [];
    let allShortcutPages = [];
    let pages = {};
    let skillsData = {};

    const contentArea = document.querySelector('.content-area');
    const tabsContainer = document.querySelector('.tabs-container');
    const addressInput = document.getElementById('address-input');
    const homeShortcutsGrid = document.getElementById('home-shortcuts-grid');
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');
    const btnHome = document.getElementById('btn-home');
    const btnNewTab = document.getElementById('btn-new-tab');
    const contextMenu = document.getElementById('context-menu');
    const contextMenuNewTabBtn = document.getElementById('context-menu-new-tab');

    let tabs = [];
    let activeTabId = null;
    let tabCounter = 0;
    let contextAction = null;

    const getActiveTab = () => tabs.find(t => t.id === activeTabId);

    const updateNavButtonsState = () => {
        const activeTab = getActiveTab();
        if (!activeTab) {
            btnBack.classList.add('disabled');
            btnNext.classList.add('disabled');
            return;
        }
        btnBack.classList.toggle('disabled', activeTab.historyIndex <= 0);
        btnNext.classList.toggle('disabled', activeTab.historyIndex >= activeTab.history.length - 1);
    };

    const render = () => {
        tabsContainer.innerHTML = tabs.map(tab => {
            const pageInfo = pages[tab.pageId] || {};
            let title = pageInfo.title;
            let iconClass = pageInfo.faIcon;

            if (tab.pageId === 'project') {
                const project = projectData.find(p => p.id === tab.subPageId);
                title = project ? project.name : 'Project';
                iconClass = 'fa-solid fa-box';
            }

            return `<div class="tab flex items-center px-4 py-2 rounded-t-lg cursor-pointer ${tab.id === activeTabId ? 'active' : ''}" data-tab-id="${tab.id}" data-tooltip="Switch to ${title}"><i class="${iconClass} mr-2 text-base"></i><span class="text-sm text-white truncate max-w-[120px]">${title}</span><button class="close-tab ml-3 text-gray-400 hover:bg-white/20 hover:text-white rounded-full w-5 h-5 flex items-center justify-center transition-colors" data-tab-id-to-close="${tab.id}" data-tooltip="Close Tab"><i class="fa-solid fa-xmark text-xs pointer-events-none"></i></button></div>`;
        }).join('');

        document.querySelectorAll('.content-page').forEach(p => p.classList.remove('active'));

        const activeTab = getActiveTab();
        if (activeTab) {
            let pageElementId;
            if (activeTab.pageId === 'project' && activeTab.subPageId) {
                pageElementId = `page-project-${activeTab.id}-${activeTab.subPageId}`;
            } else if (activeTab.pageId === 'certifications' && activeTab.subPageId) {
                pageElementId = `page-certifications-${activeTab.id}-${activeTab.subPageId}`;
            } else {
                pageElementId = `page-${activeTab.pageId}`;
            }
            
            const pageElement = document.getElementById(pageElementId);
            if (pageElement) pageElement.classList.add('active');
            let url = pages[activeTab.pageId]?.url || '';
            if (activeTab.pageId === 'project' && activeTab.subPageId) {
                url = `portfolio://projects/${activeTab.subPageId}`;
            } else if (activeTab.pageId === 'certifications' && activeTab.subPageId) {
                const cert = certificationsData.find(c => c.id === activeTab.subPageId);
                url = `portfolio://certifications/${cert ? cert.issuer : activeTab.subPageId}`;
            }
            addressInput.value = url;
        } else {
            addressInput.value = '';
        }
        updateNavButtonsState();
    };

    const createProjectDetailPage = (projectId, tabId) => {
        const project = projectData.find(p => p.id === projectId);
        if (!project) return;
        const newPage = document.createElement('div');
        newPage.id = `page-project-${tabId}-${projectId}`;
        newPage.className = 'content-page';
        const liveUrlHtml = project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="w-full text-center btn-primary"><i class="fa-solid fa-up-right-from-square mr-2"></i> View Project</a>` : '';
        const linkGapClass = project.liveUrl ? 'sm:flex-row' : '';
        newPage.innerHTML = `
            <div class="max-w-5xl mx-auto p-8">
                <button class="back-to-projects text-cyan-400 hover:underline mb-8 flex items-center gap-2">
                    <i class="fa-solid fa-arrow-left"></i> Back to all projects
                </button>
                <h1 class="text-5xl font-bold mb-2">${project.name}</h1>
                <p class="text-xl text-gray-400 mb-6">${project.tagline}</p>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div class="md:col-span-3"><img src="${project.image}" alt="${project.name}" class="rounded-lg shadow-lg w-full"></div>
                    <div class="md:col-span-2">
                        <h3 class="text-2xl font-semibold mb-3">About this project</h3>
                        <p class="text-gray-300 leading-relaxed mb-6">${project.description}</p>
                        <h3 class="text-2xl font-semibold mb-3">Tech Stack</h3>
                        <div class="flex flex-wrap gap-2 mb-8">${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
                        <div class="flex flex-col ${linkGapClass} gap-4">
                            ${liveUrlHtml}
                            <a href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer" class="w-full text-center btn-secondary"><i class="fa-brands fa-github mr-2"></i> View Source</a>
                        </div>
                    </div>
                </div>
            </div>`;
        contentArea.appendChild(newPage);
        newPage.querySelector('.back-to-projects').addEventListener('click', () => navigateTo('projects'));
    };

    const navigateTo = (pageId, fromHistory = false, subPageId = null) => {
        const activeTab = getActiveTab();
        if (!activeTab) return;

        const projectPageId = `page-project-${activeTab.id}-${subPageId}`;
        if (pageId === 'project' && subPageId && !document.getElementById(projectPageId)) {
            createProjectDetailPage(subPageId, activeTab.id);
        }
        const certPageId = `page-certifications-${activeTab.id}-${subPageId}`;
        if (pageId === 'certifications' && subPageId && !document.getElementById(certPageId)) {
            createCertificateViewerPage(subPageId, activeTab.id);
        }
        activeTab.pageId = pageId;
        activeTab.subPageId = subPageId;
        if (!fromHistory) {
            const historyEntry = subPageId ? `${pageId}:${subPageId}` : pageId;
            if (activeTab.historyIndex < activeTab.history.length - 1) {
                activeTab.history = activeTab.history.slice(0, activeTab.historyIndex + 1);
            }
            activeTab.history.push(historyEntry);
            activeTab.historyIndex = activeTab.history.length - 1;
        }
        render();
    };

    const createNewTab = (pageId, options = {}) => {
        tabCounter++;
        const newTabId = `tab-${tabCounter}`;
        const historyEntry = options.subPageId ? `${pageId}:${options.subPageId}` : pageId;
        if (pageId === 'project' && options.subPageId) {
            createProjectDetailPage(options.subPageId, newTabId);
        } else if (pageId === 'certifications' && options.subPageId) {
            createCertificateViewerPage(options.subPageId, newTabId);
        }
        tabs.push({ id: newTabId, pageId, subPageId: options.subPageId || null, history: [historyEntry], historyIndex: 0 });
        activeTabId = newTabId;
        render();
    };

    const closeTab = (idToClose) => {
        const tabIndex = tabs.findIndex(tab => tab.id === idToClose);
        if (tabIndex === -1) return;
        const tabToClose = tabs[tabIndex];
        if (tabToClose.pageId === 'project' && tabToClose.subPageId) {
            document.getElementById(`page-project-${tabToClose.id}-${tabToClose.subPageId}`)?.remove();
        } else if (tabToClose.pageId === 'certifications' && tabToClose.subPageId) {
            document.getElementById(`page-certifications-${tabToClose.id}-${tabToClose.subPageId}`)?.remove();
        }

        let newActiveId = null;
        if (activeTabId === idToClose) {
            if (tabs.length > 1) {
                newActiveId = tabs[tabIndex - 1]?.id || tabs[tabIndex + 1]?.id;
            }
        }
        tabs.splice(tabIndex, 1);
        if (activeTabId === idToClose) {
            activeTabId = newActiveId;
            if (tabs.length === 0) {
                createNewTab('home');
            }
        }
        render();
    };

    const setActiveTab = (tabId) => {
        activeTabId = tabId;
        render();
    };

    const showContextMenu = (event, action) => {
        event.preventDefault();
        contextAction = action;
        contextMenu.style.top = `${event.clientY}px`;
        contextMenu.style.left = `${event.clientX}px`;
        contextMenu.classList.add('show');
    };

    const initContextMenu = () => {
        document.addEventListener('click', () => contextMenu.classList.remove('show'));
        contextMenuNewTabBtn.addEventListener('click', () => {
            if (contextAction) {
                const { type, id } = contextAction;
                if (type === 'page') {
                    const page = pages[id];
                    if (page.external) window.open(page.url, '_blank');
                    else createNewTab(id);
                } else if (type === 'projectDetail') {
                    createNewTab('project', { subPageId: id });
                } else if (type === 'externalLink') {
                    window.open(id, '_blank');
                } else if (type === 'portfolioUrl') {
                    const url = id;
                    const parts = url.replace('portfolio://', '').split('/').filter(Boolean);
                    const pageId = parts[0];
                    const subPageId = parts[1] || null;
                    const isValidProject = pageId === 'projects' && subPageId && projectData.some(p => p.id === subPageId);
                    const isValidCert = pageId === 'certifications' && subPageId && certificationsData.some(c => c.id === subPageId);
                    
                    if (pages[pageId] || isValidProject || isValidCert) {
                        const actualPageId = isValidProject ? 'project' : pageId;
                        createNewTab(actualPageId, { subPageId });
                    } else {
                        createNewTab('404');
                    }
                }
            }
            contextMenu.classList.remove('show');
        });
    };

    const initHomePage = () => {
        homeShortcutsGrid.innerHTML = allShortcutPages.map(page => `<div class="shortcut glass-card p-4 rounded-xl cursor-pointer" data-page-id="${page.id}" data-tooltip="Open ${page.title}"><i class="${page.faIcon} ${page.colorClass} text-4xl mb-3"></i><div class="text-white font-medium">${page.title}</div></div>`).join('');
        homeShortcutsGrid.addEventListener('click', (e) => {
            const shortcut = e.target.closest('[data-page-id]');
            if (!shortcut) return;
            const pageId = shortcut.dataset.pageId;
            const page = pages[pageId];
            if (page.external) window.open(page.url, '_blank');
            else navigateTo(pageId);
        });
        homeShortcutsGrid.addEventListener('contextmenu', e => {
            const shortcut = e.target.closest('[data-page-id]');
            if (shortcut) showContextMenu(e, { type: 'page', id: shortcut.dataset.pageId });
        });
    };

    const initSkillsPage = () => {
        const container = document.getElementById('skills-container');
        let content = `<h1 class="text-5xl font-bold mb-10 text-center">Skills & Technologies</h1>`;
        for (const category in skillsData) {
            content += `<h2 class="text-3xl font-semibold text-cyan-400 mt-8 mb-4">${category}</h2>`;
            content += `<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">`;
            content += skillsData[category].map(skill => {
                let logoHtml = '';
                if (skill.logo.startsWith('<svg')) {
                    // SVG direct string injection
                    logoHtml = skill.logo; 
                } else {
                    const src = (skill.logo.startsWith('http') || skill.logo.startsWith('assets')) ? skill.logo : `https://cdn.simpleicons.org/${skill.logo}`;
                    logoHtml = `<img src="${src}" alt="${skill.name}" class="w-12 h-12">`;
                }
                return `
                <div class="skill-card flex flex-col items-center justify-center p-4 rounded-lg bg-white/10 hover:bg-white/5 transition-colors">
                    ${logoHtml}
                    <span class="mt-2 text-sm text-gray-300 text-center">${skill.name}</span>
                </div>`;
            }).join('');
            content += `</div>`;
        }
        container.innerHTML = content;
    };

    let currentSortType = 'name';
    let currentSortOrder = 'desc';
    let currentFilterCategory = 'all';
    let currentSearchQuery = '';

    const getProjectCategory = (project) => {
        const id = project.id.toLowerCase();
        const tech = (project.tech || []).map(t => t.toLowerCase());
        
        // 1. AI & Machine Learning
        const aiKeywords = ['pytorch', 'ollama', 'langchain', 'langgraph', 'chromadb', 'whisper', 'cvae', 'dqn', 'nlp', 'deep learning', 'machine learning', 'reinforcement learning', 'evolutionary algorithms', 'ai/automation', 'ai/llm'];
        const aiIds = ['wds-net', 'mlvizard', 'watermelon-game-generational-training', 'ojas', 'mnist-playground-visualizer', 'qwen-researcher', 'docraft', 'kiln', 'voiceclone', 'subtitle-pipeline', 'zatzy-ai', 'mathanim', 'gujarati-dialect-detection', 'gujarati-author-attribution', 'pixelpredict', 'music-genres-prediction', 'mnist-cvae-digit-generator', 'ai-snake-training', 'asteroid-game-ai', 'pixel-diffusion-model', 'monke-mirror', 'smart-image-analyzer'];
        
        if (aiIds.includes(id) || tech.some(t => aiKeywords.includes(t))) {
            return 'AI & Machine Learning';
        }
        
        // 2. Game Dev & Simulation
        const gameKeywords = ['pygame', 'raylib', 'glsl', 'physics simulation', 'pymunk'];
        const gameIds = ['constraint-ecology', 'brutalist-procedural-generation', 'aspisengine', 'rayrider', 'brutalist-void', 'synth-studio', 'electron_stimulator', 'boid-simulation'];
        
        if (gameIds.includes(id) || tech.some(t => gameKeywords.includes(t))) {
            return 'Game Dev & Simulation';
        }
        
        // 3. CLI & Systems
        const sysKeywords = ['ratatui', 'shell', 'docker', 'dockerfile', 'p2p'];
        const sysIds = ['climart', 'microcyberdeck', 'sable-deck', 'arckage', 'smash', 'termtube', 'spoticmd', 'jaxos', 'rekhta-gazal-scraper', 'blob-tracker', 'pixelmess'];
        
        if (sysIds.includes(id) || tech.some(t => sysKeywords.includes(t))) {
            return 'CLI & Systems';
        }
        
        // 4. Web & Fullstack
        const webKeywords = ['react', 'next.js', 'node.js', 'node', 'mongodb', 'firebase', 'webrtc', 'fastapi', 'html', 'css', 'javascript', 'typescript', 'playwright'];
        const webIds = ['gre-vocab-trainer', 'auction', 'finsim-api', 'luminamesh', 'vinylogue-project', 'chatdevs', 'babel-hash-api', 'brat-text-generator'];
        
        if (webIds.includes(id) || tech.some(t => webKeywords.includes(t))) {
            return 'Web & Fullstack';
        }
        
        return 'Other';
    };

    const renderProjectsGrid = () => {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        const isFiltered = (currentFilterCategory !== 'all' || currentSearchQuery !== '');
        const pinnedIds = ['neui', 'spoticmd', 'aspisengine', 'mainbranch', 'mathanim', 'luminamesh'];

        let displayedProjects = projectData.map((project, index) => ({...project, originalIndex: index}));

        // Filter by category
        if (currentFilterCategory !== 'all') {
            displayedProjects = displayedProjects.filter(p => {
                const cat = getProjectCategory(p);
                if (currentFilterCategory === 'ai-ml') return cat === 'AI & Machine Learning';
                if (currentFilterCategory === 'web-fullstack') return cat === 'Web & Fullstack';
                if (currentFilterCategory === 'game-sim') return cat === 'Game Dev & Simulation';
                if (currentFilterCategory === 'cli-sys') return cat === 'CLI & Systems';
                return false;
            });
        }

        // Filter by search query
        if (currentSearchQuery) {
            const query = currentSearchQuery.toLowerCase();
            displayedProjects = displayedProjects.filter(p => 
                (p.name && p.name.toLowerCase().includes(query)) ||
                (p.tagline && p.tagline.toLowerCase().includes(query)) ||
                (p.description && p.description.toLowerCase().includes(query)) ||
                (p.tech && p.tech.some(t => t.toLowerCase().includes(query)))
            );
        }

        displayedProjects.sort((a, b) => {
             const aPinned = pinnedIds.includes(a.id.toLowerCase());
             const bPinned = pinnedIds.includes(b.id.toLowerCase());
             
             if (aPinned && !bPinned) return -1;
             if (!aPinned && bPinned) return 1;

             let comparison = 0;
             if (currentSortType === 'name') {
                 comparison = a.name.localeCompare(b.name);
             } else if (currentSortType === 'date') {
                 comparison = a.originalIndex - b.originalIndex; 
             }
             
             if (currentSortType === 'date') {
                 return currentSortOrder === 'desc' ? a.originalIndex - b.originalIndex : b.originalIndex - a.originalIndex;
             } else {
                 return currentSortOrder === 'asc' ? comparison : -comparison;
             }
        });

        projectsGrid.innerHTML = displayedProjects.map(project => {
            const isPinned = pinnedIds.includes(project.id.toLowerCase());
            return `
            <div class="glass-card flex flex-col h-full rounded-xl overflow-hidden group cursor-pointer relative ${isPinned ? 'border border-cyan-500/20' : ''}" data-project-id="${project.id}" data-tooltip="View ${project.name} Details">
                <div class="w-full h-48 bg-gray-900 overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-4 bg-white/5 flex flex-col flex-grow">
                    <div class="flex items-center justify-between gap-2">
                        <h3 class="text-lg font-semibold line-clamp-1" title="${project.name}">${project.name}</h3>
                        ${isPinned ? '<i class="fa-solid fa-star text-yellow-500 text-sm flex-shrink-0" title="Pinned Project"></i>' : ''}
                    </div>
                    <p class="text-sm text-gray-400 mt-1 line-clamp-3" title="${project.tagline}">${project.tagline}</p>
                </div>
            </div>`;
        }).join('');
    };

      const initProjectsPage = () => {
          // Event listeners applied once
          const projectsGrid = document.getElementById('projects-grid');
          const sortButton = document.getElementById('sort-control-button');
          const sortMenu = document.getElementById('sort-dropdown-menu');
          const filterButton = document.getElementById('filter-control-button');
          const filterMenu = document.getElementById('filter-dropdown-menu');

          // Dynamically populate Filter Menu with Grouped Categories
          if (filterMenu) {
              const categories = [
                  { id: 'all', name: 'All' },
                  { id: 'ai-ml', name: 'AI & Machine Learning' },
                  { id: 'web-fullstack', name: 'Web & Fullstack' },
                  { id: 'game-sim', name: 'Game Dev & Simulation' },
                  { id: 'cli-sys', name: 'CLI & Systems' }
              ];

              let html = categories.map((cat, idx) => {
                  const isAll = cat.id === 'all';
                  const separator = isAll ? '<div class="sort-separator"></div>' : '';
                  return `
                      <div class="sort-item ${isAll ? 'selected' : ''}" data-category="${cat.id}">
                          <div class="sort-item-icon"><div class="sort-dot"></div></div> ${cat.name}
                      </div>
                      ${separator}
                  `;
              }).join('');
              filterMenu.innerHTML = html;
          }

          const updateSelectionUI = () => {
              if (sortMenu) {
                  sortMenu.querySelectorAll('.sort-item').forEach(item => {
                      if (item.dataset.type) {
                          item.classList.toggle('selected', item.dataset.type === currentSortType);
                      }
                      if (item.dataset.order) {
                          item.classList.toggle('selected', item.dataset.order === currentSortOrder);
                      }
                  });
              }
              if (filterMenu) {
                  filterMenu.querySelectorAll('.sort-item').forEach(item => {
                      if (item.dataset.category) {
                          item.classList.toggle('selected', item.dataset.category === currentFilterCategory);
                      }
                  });
              }
          };

          if (sortButton && sortMenu) {
              sortButton.addEventListener('click', (e) => {
                  e.stopPropagation();
                  if (filterMenu) filterMenu.classList.remove('show');
                  sortMenu.classList.toggle('show');
              });

              sortMenu.querySelectorAll('.sort-item').forEach(item => {
                  item.addEventListener('click', (e) => {
                     e.stopPropagation(); 
                     if (item.dataset.type) currentSortType = item.dataset.type;
                     if (item.dataset.order) currentSortOrder = item.dataset.order;
                     updateSelectionUI();
                     renderProjectsGrid();
                  });
              });
          }

          if (filterButton && filterMenu) {
              filterButton.addEventListener('click', (e) => {
                  e.stopPropagation();
                  if (sortMenu) sortMenu.classList.remove('show');
                  filterMenu.classList.toggle('show');
              });

              filterMenu.querySelectorAll('.sort-item').forEach(item => {
                  item.addEventListener('click', (e) => {
                     e.stopPropagation(); 
                     if (item.dataset.category) currentFilterCategory = item.dataset.category;
                     updateSelectionUI();
                     renderProjectsGrid();
                     filterMenu.classList.remove('show'); // Auto-close filter to see results immediately
                  });
              });
          }

          document.addEventListener('click', (e) => {
              if (sortButton && sortMenu && !sortButton.contains(e.target) && !sortMenu.contains(e.target)) {
                  sortMenu.classList.remove('show');
              }
              if (filterButton && filterMenu && !filterButton.contains(e.target) && !filterMenu.contains(e.target)) {
                  filterMenu.classList.remove('show');
              }
          });

          // Search input event listener
          const searchInput = document.getElementById('project-search-input');
          if (searchInput) {
              searchInput.value = currentSearchQuery;
              const searchContainer = searchInput.closest('.search-input-container');
              if (searchContainer) {
                  searchContainer.classList.toggle('active-search', currentSearchQuery.length > 0);
              }

              searchInput.addEventListener('input', (e) => {
                  currentSearchQuery = e.target.value.trim();
                  if (searchContainer) {
                      searchContainer.classList.toggle('active-search', currentSearchQuery.length > 0);
                  }
                  renderProjectsGrid();
              });
          }

          updateSelectionUI();
          renderProjectsGrid();

          projectsGrid.addEventListener('click', e => {
              const card = e.target.closest('[data-project-id]');
              if (card) navigateTo('project', false, card.dataset.projectId);
          });
          projectsGrid.addEventListener('contextmenu', e => {
              const card = e.target.closest('[data-project-id]');
              if (card) showContextMenu(e, { type: 'projectDetail', id: card.dataset.projectId });
          });


      };

      const initDeployedPage = () => {
        const deployedGrid = document.getElementById('deployed-grid');
        const liveProjects = projectData.filter(project => project.liveUrl);
        deployedGrid.innerHTML = liveProjects.map(project => `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="glass-card flex flex-col h-full rounded-xl overflow-hidden group" data-tooltip="Open Live Demo">
                <div class="w-full h-48 bg-gray-900 overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-4 bg-white/5 flex flex-col flex-grow">
                    <h3 class="text-lg font-semibold line-clamp-1" title="${project.name}">${project.name}</h3>
                    <p class="text-sm text-gray-400 mt-1 line-clamp-3" title="${project.tagline}">${project.tagline}</p>
                </div>
            </a>`).join('');
        deployedGrid.addEventListener('contextmenu', e => {
            const card = e.target.closest('a');
            if (card) showContextMenu(e, { type: 'externalLink', id: card.href });
        });
    };

    const handleAddressInput = (event) => {
        if (event.key === 'Enter') {
            const inputUrl = addressInput.value.trim();
            if (inputUrl.startsWith('portfolio://')) {
                const path = inputUrl.replace('portfolio://', '');
                const parts = path.split('/').filter(Boolean);
                const pageId = parts[0];
                const subPageId = parts.slice(1).join('/'); // Handle spaces/slashes in issuer name

                const isValidProject = pageId === 'projects' && subPageId && projectData.some(p => p.id === subPageId);
                let actualSubPageId = subPageId;
                let isValidCert = false;

                if (pageId === 'certifications' && subPageId) {
                    const foundCert = certificationsData.find(c => c.id === subPageId || c.issuer.toLowerCase() === subPageId.toLowerCase());
                    if (foundCert) {
                        isValidCert = true;
                        actualSubPageId = foundCert.id; // Map issuer name back to internal ID
                    }
                }

                if (pages[pageId] || isValidProject || isValidCert) {
                    const actualPageId = isValidProject ? 'project' : pageId;
                    navigateTo(actualPageId, false, actualSubPageId);
                } else {
                    navigateTo('404');
                }
            } else {
                // Try to open as external URL
                window.open(inputUrl.startsWith('http') ? inputUrl : 'https://' + inputUrl, '_blank');
            }
        }
    };

    const certificationsData = [
        {
            id: "aws-cloud-security-foundations",
            name: "AWS Academy - Cloud Security Foundations",
            issuer: "Amazon Web Services",
            localLogo: "assets/images/logos/aws.svg",
            file: "certificates/AWS_Academy_Graduate___Cloud_Security_Foundations___Training_Badge_Badge20260308-31-sb408y.pdf",
            description: "Understanding of cloud security architecture, IAM, compliance, and data protection on AWS."
        },
        {
            id: "aws-cloud-security-builder",
            name: "AWS Academy - Cloud Security Builder",
            issuer: "Amazon Web Services",
            localLogo: "assets/images/logos/aws.svg",
            file: "certificates/AWS_Academy_Graduate___Cloud_Security_Builder___Training_Badge_Badge20260327-31-9080fb.pdf",
            description: "Hands-on skills in building secure cloud applications and implementing AWS security services."
        },
        {
            id: "aws-cloud-web-application-builder",
            name: "AWS Academy - Cloud Web Application Builder",
            issuer: "Amazon Web Services",
            localLogo: "assets/images/logos/aws.svg",
            file: "certificates/AWS_Academy_Graduate___Cloud_Web_Application_Builder___Training_Badge_Badge20251031-32-n1wltm.pdf",
            description: "Building and deploying scalable web applications using AWS cloud services and best practices."
        },
        {
            id: "mongodb-associate-developer",
            name: "MongoDB Certified Associate Developer",
            issuer: "MongoDB",
            localLogo: "https://cdn.simpleicons.org/mongodb/47A248",
            file: "certificates/mongodb.pdf",
            description: "Validation of skills in building modern, document-oriented applications with MongoDB."
        },
        {
            id: "opencv-bootcamp",
            name: "OpenCV Bootcamp",
            issuer: "OpenCV.org",
            localLogo: "assets/images/logos/opencv.svg",
            file: "certificates/opencv bootcamp.pdf",
            description: "Practical training in computer vision, image processing, and deep learning using OpenCV."
        },
        {
            id: "kaggle-intro-ml",
            name: "Intro to Machine Learning",
            issuer: "Kaggle",
            localLogo: "https://cdn.simpleicons.org/kaggle/20BEFF",
            file: "certificates/Jalpan04 - Intro to Machine Learning.png",
            description: "Foundational machine learning concepts including model training, validation, and feature engineering."
        },
        {
            id: "kaggle-intro-dl",
            name: "Intro to Deep Learning",
            issuer: "Kaggle",
            localLogo: "https://cdn.simpleicons.org/kaggle/20BEFF",
            file: "certificates/Jalpan vyas - Intro to Deep Learning.png",
            description: "Neural network fundamentals, training deep architectures, and computer vision models."
        },
        {
            id: "matlab-associate",
            name: "MATLAB Associate",
            issuer: "MathWorks",
            localLogo: "assets/images/logos/matlab.png",
            file: "certificates/mathlab certificate.pdf",
            description: "Certification in statistical analysis, algorithm development, and numerical computing using MATLAB."
        },
        {
            id: "huggingface-mcp-course",
            name: "MCP Course - Hugging Face",
            issuer: "Hugging Face",
            localLogo: "https://cdn.simpleicons.org/huggingface/ffd21e",
            file: "certificates/mcpcoursehuggingface.png",
            description: "Completion of the Model Context Protocol (MCP) course covering AI agent tool integration."
        },
        {
            id: "redhat-linux-fundamentals",
            name: "Getting Started with Linux Fundamentals",
            issuer: "Red Hat",
            localLogo: "assets/images/logos/redhat.svg",
            file: "certificates/redhat certificate.pdf",
            description: "Foundational Linux skills including system navigation, file management, and shell scripting."
        },
        {
            id: "googlecloud-hacksprint",
            name: "HackSprint Certificate of Participation",
            issuer: "Google Cloud",
            localLogo: "https://cdn.simpleicons.org/googlecloud/4285F4",
            file: "certificates/HackSprint CERTIFICATE OF PARTICIPATION.pdf",
            description: "Participation in HackSprint hackathon, building innovative solutions using Google Cloud technologies."
        },
        {
            id: "edunet-ai-foundation",
            name: "Edunet AI Foundation Certification",
            issuer: "Edunet Foundation",
            localLogo: "https://cdn.simpleicons.org/sap/0289CA",
            file: "certificates/Jalpan Vyas_FC.pdf",
            description: "Practical training and project certification in AI technologies, data structures, and computational logic under Code Unnati Program, supported by SAP."
        }
    ];

    const createCertificateViewerPage = (certId, tabId) => {
        const cert = certificationsData.find(c => c.id === certId);
        if (!cert) return;
        const newPage = document.createElement('div');
        newPage.id = `page-certifications-${tabId}-${certId}`;
        newPage.className = 'content-page';
        
        let viewerHtml = '';
        if (cert.file.toLowerCase().endsWith('.pdf')) {
            viewerHtml = `<embed src="${cert.file}" width="100%" height="800px" type="application/pdf" class="rounded-lg shadow-lg border border-cyan-900/30">`;
        } else {
            viewerHtml = `<img src="${cert.file}" alt="${cert.name}" class="max-w-full rounded-lg shadow-lg mx-auto border border-cyan-900/30">`;
        }

        newPage.innerHTML = `
            <div class="max-w-5xl mx-auto p-8">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${cert.localLogo}" alt="${cert.issuer}" class="w-12 h-12 object-contain bg-white/5 p-2 rounded-lg border border-white/10">
                    <div>
                        <h1 class="text-3xl md:text-4xl font-bold text-white">${cert.name}</h1>
                        <p class="text-lg text-gray-400">${cert.issuer}</p>
                    </div>
                </div>
                <p class="text-gray-300 leading-relaxed mb-8">${cert.description}</p>
                <div class="w-full bg-black/20 p-4 rounded-xl">
                    ${viewerHtml}
                </div>
            </div>`;
            
        contentArea.appendChild(newPage);
    };

    const initCertificationsPage = () => {
        const grid = document.getElementById('certifications-grid');
        if (!grid) return;
        
        grid.innerHTML = certificationsData.map(cert => {
            const logoHtml = `<img src="${cert.localLogo}" alt="${cert.issuer}" class="flex-shrink-0 object-contain" style="width: 2rem; height: 2rem; max-width: 2rem; max-height: 2rem;">`;
            
            return `
            <div data-cert-id="${cert.id}" class="glass-card p-6 flex flex-col group hover:border-cyan-400/50 duration-300 cursor-pointer" data-tooltip="View Certificate">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        ${logoHtml}
                        <span class="text-xs text-gray-500 font-semibold tracking-wider uppercase">${cert.issuer}</span>
                    </div>
                    <h3 class="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">${cert.name}</h3>
                    <p class="text-sm text-gray-400 leading-relaxed font-light">${cert.description}</p>
                </div>
            </div>`;
        }).join('');

        grid.querySelectorAll('[data-cert-id]').forEach(card => {
            card.addEventListener('click', () => {
                navigateTo('certifications', false, card.dataset.certId);
            });
        });
    };



    const contactData = [
        {
            name: "LinkedIn",
            value: "jalpan04",
            url: "https://www.linkedin.com/in/jalpan04/",
            icon: "linkedin",
            description: "Professional networking and industry connections.",
            color: "#0a66c2"
        },
        {
            name: "GitHub",
            value: "Jalpan04",
            url: "https://github.com/Jalpan04",
            icon: "github",
            description: "Explore my source code, repositories, and development projects.",
            color: "#24292e"
        },
        {
            name: "Email",
            value: "jalpan2104@gmail.com",
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=jalpan2104@gmail.com",
            icon: "envelope",
            description: "Drop me an email for collaborations, hiring, or inquiries.",
            color: "#ea4335"
        },
        {
            name: "Phone Number",
            value: "+91 88493 68626",
            copyText: "8849368626",
            url: null,
            icon: "phone",
            description: "Click to copy my number to clipboard.",
            color: "#10b981"
        },
        {
            name: "Kaggle",
            value: "jalpan04",
            url: "https://www.kaggle.com/jalpan04",
            icon: "kaggle",
            description: "View my machine learning models and dataset notebooks.",
            color: "#20beff"
        },
        {
            name: "Hugging Face",
            value: "jalpan04",
            url: "https://huggingface.co/jalpan04",
            icon: "huggingface",
            description: "Explore my AI spaces, demos, and model checkpoints.",
            color: "#ffd21e"
        }
    ];

    const initContactPage = () => {
        const grid = document.getElementById('contact-grid');
        if (!grid) return;
        
        grid.innerHTML = contactData.map(contact => {
            let iconHtml = '';
            
            if (contact.icon === 'envelope' || contact.icon === 'phone') {
                const faIcon = contact.icon === 'envelope' ? 'fa-envelope' : 'fa-phone';
                iconHtml = `<i class="fa-solid ${faIcon} text-2xl flex-shrink-0" style="color: ${contact.color};"></i>`;
            } else if (contact.icon === 'linkedin') {
                iconHtml = `<i class="fa-brands fa-linkedin text-2xl flex-shrink-0" style="color: ${contact.color};"></i>`;
            } else if (contact.icon === 'github') {
                iconHtml = `<i class="fa-brands fa-github text-2xl flex-shrink-0" style="color: #e5e7eb;"></i>`;
            } else {
                const colorHex = contact.color.replace('#', '');
                const src = `https://cdn.simpleicons.org/${contact.icon}/${colorHex}`;
                iconHtml = `<img src="${src}" alt="${contact.name}" class="flex-shrink-0 object-contain" style="width: 2rem; height: 2rem; max-width: 2rem; max-height: 2rem;">`;
            }

            const cardInner = `
                <div>
                    <div class="flex items-center justify-between mb-4">
                        ${iconHtml}
                    </div>
                    <h3 class="contact-value-text text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">${contact.name}</h3>
                    <p class="text-sm text-gray-400 leading-relaxed font-light">${contact.description}</p>
                </div>`;

            if (contact.copyText) {
                // Phone: render as a button that copies to clipboard
                return `<div class="glass-card p-6 flex flex-col justify-between group hover:border-cyan-400/50 duration-300 cursor-pointer" data-copy="${contact.copyText}">${cardInner}</div>`;
            } else {
                return `<a href="${contact.url}" target="_blank" rel="noopener noreferrer" class="glass-card p-6 flex flex-col justify-between group hover:border-cyan-400/50 duration-300">${cardInner}</a>`;
            }
        }).join('');

        // Clipboard copy handler for phone card
        grid.querySelectorAll('[data-copy]').forEach(card => {
            card.addEventListener('click', () => {
                const textToCopy = card.dataset.copy;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const valueEl = card.querySelector('.contact-value-text');
                    if (valueEl) {
                        const original = valueEl.textContent;
                        valueEl.textContent = 'Copied!';
                        valueEl.style.color = '#22d3ee';
                        setTimeout(() => {
                            valueEl.textContent = original;
                            valueEl.style.color = '';
                        }, 1500);
                    }
                });
            });
        });
    };

    // --- INITIALIZATION ---
    // Use global portfolioData from data.js
    if (typeof portfolioData !== 'undefined') {
        projectData = portfolioData.projectData;
        allShortcutPages = portfolioData.allShortcutPages;
        skillsData = portfolioData.skillsData;

        pages = {
            home: { id: 'home', title: 'New Tab', url: 'portfolio://home', faIcon: 'fa-solid fa-house' },
            about: { id: 'about', title: 'About Me', url: 'portfolio://about', faIcon: 'fa-solid fa-user' },
            certifications: { id: 'certifications', title: 'Certifications', url: 'portfolio://certifications', faIcon: 'fa-solid fa-certificate' },
            '404': { id: '404', title: 'Not Found', url: 'portfolio://404', faIcon: 'fa-solid fa-exclamation-triangle' },
            ...Object.fromEntries(allShortcutPages.map(p => [p.id, p]))
        };

        initHomePage();
        initSkillsPage();
        initProjectsPage();
        initDeployedPage();
        initCertificationsPage();
        initContactPage();
        initContextMenu();

        // Tooltip Logic
        const tooltip = document.getElementById('custom-tooltip');
        let tooltipTimeout;

        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('[data-tooltip]');
            if (target) {
                // Clear any existing timeout to avoid flickering
                clearTimeout(tooltipTimeout);

                tooltipTimeout = setTimeout(() => {
                    const text = target.getAttribute('data-tooltip');
                    if (!text) return;

                    tooltip.textContent = text;
                    
                    // Position Logic
                    const rect = target.getBoundingClientRect();
                    const tooltipRect = tooltip.getBoundingClientRect(); // valid after content set? we need to show it effectively to measure or guess.
                    // Actually, setting display block/opacity 0 first allows measurement.
                    tooltip.style.opacity = '0';
                    tooltip.style.display = 'block';
                    
                    // Calculate center position
                    let left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2);
                    let top = rect.bottom + 8; // Default below

                    // Check bounds (simple check)
                    if (left < 10) left = 10;
                    if (left + tooltip.offsetWidth > window.innerWidth - 10) left = window.innerWidth - tooltip.offsetWidth - 10;
                    if (top + tooltip.offsetHeight > window.innerHeight - 10) top = rect.top - tooltip.offsetHeight - 8; // Flip to top if too low

                    tooltip.style.left = `${left}px`;
                    tooltip.style.top = `${top}px`;
                    
                    // Show
                    requestAnimationFrame(() => {
                        tooltip.style.opacity = '1';
                    });
                }, 600); // 600ms delay ("wait for a bit")
            }
        });

        document.addEventListener('mouseout', (e) => {
            const target = e.target.closest('[data-tooltip]');
            if (target) {
                clearTimeout(tooltipTimeout);
                tooltip.style.opacity = '0';
                // Hide after transition
                setTimeout(() => {
                    if (tooltip.style.opacity === '0') {
                        tooltip.style.display = 'none';
                    }
                }, 200); 
            }
        });

        // Event Listeners
        btnNewTab.addEventListener('click', () => createNewTab('home'));
        tabsContainer.addEventListener('click', (e) => {
            const tab = e.target.closest('.tab');
            if (!tab) return;
            if (e.target.closest('.close-tab')) {
                e.stopPropagation();
                closeTab(tab.dataset.tabId);
            } else {
                setActiveTab(tab.dataset.tabId);
            }
        });
        btnBack.addEventListener('click', () => {
            const activeTab = getActiveTab();
            if (activeTab && activeTab.historyIndex > 0) {
                activeTab.historyIndex--;
                const entry = activeTab.history[activeTab.historyIndex];
                const [pageId, subPageId] = entry.split(':');
                navigateTo(pageId, true, subPageId);
            }
        });
        btnNext.addEventListener('click', () => {
            const activeTab = getActiveTab();
            if (activeTab && activeTab.historyIndex < activeTab.history.length - 1) {
                activeTab.historyIndex++;
                const entry = activeTab.history[activeTab.historyIndex];
                const [pageId, subPageId] = entry.split(':');
                navigateTo(pageId, true, subPageId);
            }
        });
        btnHome.addEventListener('click', () => navigateTo('home'));
        addressInput.addEventListener('keydown', handleAddressInput);

        const btnExploreHome = document.getElementById('btn-explore-home');
        if (btnExploreHome) {
            btnExploreHome.addEventListener('click', () => navigateTo('home'));
        }

        // Start with About tab
        createNewTab('about');
    } else {
        console.error('Error loading data: portfolioData is undefined. Make sure data.js is loaded.');
    }
});