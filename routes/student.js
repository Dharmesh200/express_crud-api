const { Router } = require("express");
const {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudents,
  deleteStudent,
} = require("../controllers/student");
const router = Router();

router.route("").post(createStudent).get(getAllStudents);
router.route("/:id").get(getStudent).put(updateStudents).delete(deleteStudent);

module.exports = router;
