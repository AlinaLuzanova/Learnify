const router = require("express").Router();

router.route("/logout").get((req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).json({ message: "Error while destroying session" });
        }
        res.clearCookie("sid").redirect("/");
    });
});

module.exports = router;
