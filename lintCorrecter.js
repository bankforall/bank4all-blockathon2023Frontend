const fs = require('fs');
const path = require('path');

const targetComponent = ['Frame12', 'Group41', 'Group71', 'Rectangle1', 'Submit'];
const correctComponent = ['FramE12', 'GrouP41', 'GrouP71', 'RectanglE1', 'SubmiT'];

const componentsPath = path.join(__dirname, 'src/components');
const componentsDir = './src/components';

// Step 3: Find and rename .vue files
fs.readdir(componentsPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (path.extname(file) === '.vue') {
      const baseName = path.basename(file, '.vue');
      const index = targetComponent.indexOf(baseName);
      if (index >= 0) {
        const newBaseName = correctComponent[index];
        const newPath = path.join(componentsPath, `${newBaseName}.vue`);
        fs.renameSync(path.join(componentsPath, file), newPath);
        console.log(`Renamed ${file} to ${newPath}`);
      }
    }
  });
});

// Step 4 and 5: Update imports and export default name
fs.readdir(componentsPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (path.extname(file) === '.vue') {
      const filePath = path.join(componentsPath, file);
      const content = fs.readFileSync(filePath, 'utf8');

      // Update export default name
      const defaultExportRegex = /export default {\s*name:\s*['"](.*)['"]/gm;
      const newContent = content.replace(defaultExportRegex, (match, p1) => {
        const index = targetComponent.indexOf(p1);
        if (index >= 0) {
          return match.replace(p1, correctComponent[index]);
        }
        return match;
      });

      // Update imports
      const importRegex = /import (.*) from ['"](.*)['"]/gm;
      const updatedContent = newContent.replace(importRegex, (match, p1, p2) => {
        const index = targetComponent.indexOf(p1);
        if (index >= 0) {
          return match.replace(p1, correctComponent[index]).replace(p2, `./${correctComponent[index]}`);
        }
        return match;
      });
      
      // Update components object //***********************This shit not working */
      const componentsRegex = /components:\s*\{([^}]+)\}/gm;
      const finalContent = updatedContent.replace(componentsRegex, (match, p1) => {
        let updatedComponents = p1;
        targetComponent.forEach((component, index) => {
          const regex = new RegExp(`${component}:`);
          if (regex.test(updatedComponents)) {
            updatedComponents = updatedComponents.replace(regex, `${correctComponent[index]}:`);
          }
        });
        return `components: {${updatedComponents}}`;
      });

      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`Updated ${file}`);
    }
  });
});

//===================================================================
//correct HTML with lint format

const wrongComponent = [];
const lintComponent = [];

for (let i = 0; i < targetComponent.length; i++) {
  const targetName = targetComponent[i];
  const correctName = correctComponent[i];

  const wrongName = targetName.replace(/([A-Z])/g, '-$1').toLowerCase();
  const lintName = correctName.replace(/([A-Z])/g, '-$1').toLowerCase();

  // Remove dash at the beginning of lintName, if it exists
  const sanitizedLintName = lintName.replace(/^\-/, '');
  
  wrongComponent[i] = wrongName;
  lintComponent[i] = sanitizedLintName;
}

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(componentsDir, file);

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const scriptRegex = /<script>([\s\S]*?)<\/script>/gm;
      let match = scriptRegex.exec(data);

      while (match != null) {
        const scriptContent = match[1];

        // Find the 'components' object inside the <script> section
        const componentsRegex = /components:\s*\{([\s\S]*?)\}/gm;
        const componentsMatch = componentsRegex.exec(scriptContent);

        if (componentsMatch != null) {
          const componentsContent = componentsMatch[1];

          for (let i = 0; i < wrongComponent.length; i++) {
            const wrongName = wrongComponent[i];
            const lintName = lintComponent[i];

            // Replace the variable name in the <template> section
            const variableRegex = new RegExp(`\\b${wrongName}\\b`, 'g');
            const lintVariable = lintName.replace(/-/g, '');

            const lintVariableRegex = new RegExp(`\\b${lintVariable}\\b`, 'g');

            data = data.replace(variableRegex, lintName);
            data = data.replace(lintVariableRegex, lintName);
          }
        }

        // Find the 'props' object inside the <script> section
        const propsRegex = /props:\s*{([\s\S]*?)}/gm;
        const propsMatch = propsRegex.exec(scriptContent);

        if (propsMatch != null) {
          const propsContent = propsMatch[1];

          for (let i = 0; i < wrongComponent.length; i++) {
            const wrongName = wrongComponent[i];
            const lintName = lintComponent[i];

            // Replace the variable name in the 'props' object
            const variableRegex = new RegExp(`([:,]\\s*)${wrongName}(\\s*[,}])`, 'g');
            data = data.replace(variableRegex, `$1${lintName}$2`);
          }
        }

        match = scriptRegex.exec(data);
      }

      // Write the updated file content back to the file
      fs.writeFile(filePath, data, 'utf-8', err => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});

//===================================================================
//Update router.js

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
