const app = require("../app");
const {
  readInventoryController,
  createInventoryController,
  deleteInventoryController,
  updateInventoryController,
} = require("../controllers/Inventory.controller");

app.get("/inventories", readInventoryController);
app.post("/createinv", createInventoryController);
app.put("/updateinv", updateInventoryController);
app.get("/deleteinv", deleteInventoryController);
