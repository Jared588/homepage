export default function addProject(title, img, description) {
    const projectContainer = document.querySelector('.project-container');
    
    // create project
    const project = document.createElement('div');
    project.classList.add('project');

    // add and append picture
    img.classList.add('project-img');
    project.appendChild(img);

    // add container for label and links
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('project-info');

    // add and append label
    const label = document.createElement('h4');
    label.textContent = title;
    label.classList.add('project-title');
    infoContainer.appendChild(label);

    // link container
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('project-links');

    // links
    const gitLink = document.createElement('img');
    gitLink.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
    gitLink.classList.add('project-link');

    const openLink = document.createElement('svg');
    openLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>';
    openLink.classList.add('project-link');

    // append links
    linkContainer.appendChild(gitLink);
    linkContainer.appendChild(openLink);
    infoContainer.appendChild(linkContainer);

    // description
    const desc = document.createElement('p');
    desc.textContent = description;
    desc.classList.add('project-description');

    // append info
    project.appendChild(infoContainer);
    project.appendChild(desc);

    // append project
    projectContainer.appendChild(project)
}