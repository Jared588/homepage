import './styles.css';
import addProject from './project';

const tempImg = document.createElement('img');
tempImg.src = '../src/images/blank-profile.png';

const tempImg2 = document.createElement('img');
tempImg2.src = '../src/images/blank-profile.png';

const tempImg3 = document.createElement('img');
tempImg3.src = '../src/images/blank-profile.png';

const tempImg4 = document.createElement('img');
tempImg4.src = '../src/images/blank-profile.png';

const tempImg5 = document.createElement('img');
tempImg5.src = '../src/images/blank-profile.png';

const tempImg6 = document.createElement('img');
tempImg6.src = '../src/images/blank-profile.png';

addProject('Project', tempImg, 'lalalala');
addProject('Project2', tempImg2, 'lalalala');
addProject('Project3', tempImg3, 'lalalala');
addProject('Project4', tempImg4, 'lalalala');
addProject('Project5', tempImg5, 'lalalala');
addProject('Project6', tempImg6, 'lalalala');