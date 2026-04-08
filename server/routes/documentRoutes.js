const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  createDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
} = require("../controllers/DocumentController");

router.post("/", auth, createDoc);
router.get("/", auth, getDocs);
router.get("/:id", auth, getDoc);
router.put("/:id", auth, updateDoc);
router.delete("/:id", auth, deleteDoc);

module.exports = router;
