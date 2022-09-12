const Worker = require('../models/Worker.model')

module.exports.workerController = {
    getWorker: async (req, res) => {
      const data = await Worker.find();
      await res.json(data);
    },
    addWorker: async (req, res) => {
      const data = await Worker.create({
        image: req.body.image,
        name: req.body.name,
        post: req.body.post,
        description: req.body.description,
      });
      await res.json(data);
    },
  };