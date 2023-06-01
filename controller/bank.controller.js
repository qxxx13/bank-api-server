const db = require("../db");

class BankController {
    async createBank(req, res) {
        const { name, legalAddress } = req.body;
        const newBank = await db.query(`INSERT INTO bank (name, legalAddress) values ($1, $2) RETURNING *`, [
            name,
            legalAddress,
        ]);
        res.json(newBank.rows[0]);
    }
    async getBank(req, res) {
        const bank = await db.query("SELECT * FROM bank");
        res.json(bank.rows);
    }
    async getOneBank(req, res) {
        const id = req.params.id;
        const bank = await db.query("SELECT * FROM bank WHERE id = $1", [id]);
        res.json(bank.rows[0]);
    }
    async updateBank(req, res) {
        const { id, name, legalAddress } = req.body;
        const bank = await db.query("UPDATE bank set name = $1, legalAddress = $2 where id = $3 RETURNING *", [
            name,
            legalAddress,
            id,
        ]);
        res.json(bank.rows);
    }
    async deleteBank(req, res) {
        const id = req.params.id;
        const bank = await db.query("DELETE FROM bank WHERE id = $1", [id]);
        res.json(bank.rows[0]);
    }
}

module.exports = new BankController();
