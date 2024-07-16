const { execSync } = require('child_process');

const testFiles = [
  'cypress/e2e/Login.spec.cy.js',
  'cypress/e2e/ProductSearchTest.spec.cy.js',
  
];

testFiles.forEach(file => {
  console.log(`Running ${file}...`);
  execSync(`npx cypress run --spec "${file}"`, { stdio: 'inherit' });
});
