const router = require("express").Router();
const translateController = require("../controller/translate");

router.get("/", translateController.test);
router.post("/", translateController.trans);

module.exports = router;