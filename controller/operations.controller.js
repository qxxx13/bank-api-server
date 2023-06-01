const db = require("../db");

class OperationsController {
    async createOperation(req, res) {
        const { client_id, ATMNumber, date, commission, sum } = req.body;
        const newOperation = await db.query(
            `INSERT INTO operations (client_id, ATMNumber, date, commission, sum) values ($1, $2, $3, $4, $5) RETURNING *`,
            [client_id, ATMNumber, date, commission, sum]
        );
        res.json(newOperation.rows[0]);
    }
    async getOperations(req, res) {
        const operations = await db.query("SELECT * FROM operations");
        res.json(operations.rows);
    }
    async getOneOperation(req, res) {
        const id = req.params.id;
        const operation = await db.query("SELECT * FROM operations WHERE id = $1", [id]);
        res.json(operation.rows[0]);
    }
    async updateOperation(req, res) {
        const { id, client_id, ATMNumber, date, commission, sum } = req.body;
        const operation = await db.query(
            "UPDATE operations set client_id = $1, ATMNumber = $2, date = $3, commission = $4, sum = $5 where id = $6 RETURNING *",
            [client_id, ATMNumber, date, commission, sum, id]
        );
        res.json(operation.rows);
    }
    async deleteOperation(req, res) {
        const id = req.params.id;
        const operation = await db.query("DELETE FROM operations WHERE id = $1", [id]);
        res.json(operation.rows[0]);
    }
}

module.exports = new OperationsController();
