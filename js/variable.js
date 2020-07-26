const flask = new CodeFlask('#csseditor', { language: 'css' });
// How to update your editor with custom content:
const new_content = 
`.grid-container {
  display: grid;
}
`;

flask.updateCode(new_content);