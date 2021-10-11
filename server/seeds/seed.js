const db = require('../config/connection');
const { Project } = require('../models');

const projectData = require('./projectData.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});

    const projects = await Project.insertMany(projectData);

    console.log('Projects seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
