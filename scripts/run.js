const execSync = require('child_process').execSync

const port = process.argv[2] || "3000"

execSync(`docker run -dp ${port}:3000 project-purple-cow`, { stdio: [0, 1, 2] })
