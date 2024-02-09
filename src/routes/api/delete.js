const deleteApiRouter = require("express").Router();
const { User, UserChannel } = require("../../../db/models");
deleteApiRouter.route("/delete/:id").delete(async (req, res) => {
    try {
        const channelId = req.params.id;
        const userId = res.locals.user.id;

        const result = await UserChannel.destroy({
            where: { user_id: userId, channel_id: channelId },
        });

        if (result > 0) {
            return res.status(200).json({ text: "OK" });
        }
        return res.status(404).json({ text: "Error" });
    } catch (e) {
        console.log(e);
        return res.status(500).end();
    }
});
module.exports = deleteApiRouter;
