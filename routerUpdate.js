const fs = require('fs');

const targetComponent = ['foo', 'bar', 'Frame12', 'Group41', 'Group71', 'Rectangle1', 'Submit'];
const correctComponent = ['Foo', 'Bar', 'FramE12', 'GrouP41', 'GrouP71', 'RectanglE1', 'SubmiT'];

const routerFile = './src/router.js';

fs.readFile(routerFile, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  let result = data;

  for (let i = 0; i < targetComponent.length; i++) {
    const target = targetComponent[i];
    const correct = correctComponent[i];

    // Replace import statements
    result = result.replace(
      new RegExp(`import ${target} from '(.\/)*${target}'`, 'g'),
      `import ${correct} from './${correct}'`
    );

    // Replace variable names
    result = result.replace(
      new RegExp(`\\b${target}\\b`, 'g'),
      correct
    );
  }

  fs.writeFile(routerFile, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
