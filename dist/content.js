console.log('Dark Mode for Hacker News extension loaded (v0.2)');

// CSS
const style = document.createElement('style');
style.textContent = `
/*******************************************************************************
 * CSS source file 'src/css/invert.css'
 ******************************************************************************/
body {
  filter: invert(100%);
  background: black;
}`;
document.head.appendChild(style);
