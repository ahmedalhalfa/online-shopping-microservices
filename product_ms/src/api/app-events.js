
module.exports = (app) => {
  app.use("/app-events", async (req, res, next) => { // web hook
    const { payload } = req.body;


    console.log(
      "============== Products service received event ================="
    );
    res.status(200).json(payload);
  });
};
