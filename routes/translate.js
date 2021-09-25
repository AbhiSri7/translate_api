const router = require("express").Router();
const translateController = require("../controller/translate");

router.get("/", translateController.test);

module.exports = router;
