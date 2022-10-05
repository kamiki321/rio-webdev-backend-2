const express = require("express");
const router = express.Router();
const { urlController } = require("../controllers");
const { urlValidation } = require("../validators");


//i.	GET semua praktikan
router.route("/").get(urlController.getAll);
//ii.	GET seorang praktikan berdasarkan nama
router.route("/getbyname").get(urlValidation.getByName,urlController.getByName);
//iii.	GET seorang praktikan berdasarkan email dan telepon
router.route("/getbymail&phone").get(urlValidation.getByMailandPhone,urlController.getByMailandPhone);
//iv.	PATCH seorang praktikan berdasarkan nama
router.route("/updatebyname").patch(urlValidation.patchPraktikanByName,urlController.patchPraktikanByName);
//v.	DELETE seorang praktikan berdasarkan email
router.route("/deletebymail").delete(urlValidation.deleteUrlByMail,urlController.deleteUrlByMail);
//vi.	CREATE seorang praktikan
router.route("/create_praktikan").post(urlValidation.create_praktikan,urlController.create_praktikan);
//vii.	CREATE lebih dari satu praktikan (Bulk Insert)
router.route("/create_BULK_praktikan").post(urlValidation.create_BULK_praktikan,urlController.create_BULK_praktikan);

module.exports = router;