const createTestCafe = require("testcafe");
const allure = require('allure-commandline');

(async () => {
  const testcafe = await createTestCafe("localhost", 1337, 1338);
  try {
    const runner = testcafe.createRunner();

    const failedCount = await runner
      .src(["./src/tests/*.js"])
      .browsers(["chrome"])
      // Minimal fix - changed to array format
      .reporter('allure')
      .screenshots('./allure/screenshots', true)
      .run({
        skipJsErrors: true,
        selectorTimeout: 15000,
        assertionTimeout: 7000,
        pageLoadTimeout: 8000,
      });

    testcafe.close();

    const generation = allure([
      'generate',
      'allure/allure-results',
      '-o',
      'allure/allure-report',
      '--clean'
    ]);
    
    const exitCode = await new Promise((resolve, reject) => {
      generation.on('exit', (code) => {
        if (code === 0) {
          console.log('✅ Allure report generated successfully');
          resolve(code);
        } else {
          console.error('❌ Allure report generation failed');
          reject(new Error(`Allure exited with code ${code}`));
        }
      });
      
      generation.on('error', (err) => {
        console.error('🚨 Allure generation error:', err);
        reject(err);
      });
    });
    
    // Verify report was created
    const fs = require('fs');
    if (!fs.existsSync('allure/allure-report/index.html')) {
      throw new Error('Report HTML not found - generation failed');
    }

    if (failedCount) {
      process.exit(1);
    } else {
      process.exit(0);
    }

  } catch (err) {
    console.error(err);
    testcafe.close();
    process.exit(1);
  }
})();