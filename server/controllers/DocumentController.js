const Document = require("../models/Document");

exports.createDoc = async (req, res) => {
  try {
    const doc = await Document.create({
      owner: req.user.id,
    });
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDocs = async (req, res) => {
  try {
    const docs = await Document.find({ owner: req.user.id }).sort({
      updatedAt: -1,
    });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDoc = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDoc = async (req, res) => {
  try {
    const { title, content } = req.body;

    const doc = await Document.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDoc = async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};