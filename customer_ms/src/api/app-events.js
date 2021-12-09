const CustomerService = require("../services/customer-service");

module.exports = (app) => {
  const service = new CustomerService();

  app.use("/app-events", async (req, res, next) => { // web hook
    const { payload } = req.body;
    service.SubscribeEvents(payload);

    console.log(
      "============== Customer service received event ================="
    );
    res.status(200).json(payload);
  });
};
