const db = require("../db");

class ATMController {
    async createATM(req, res) {
        const { address, bankCode } = req.body;
        const newATM = await db.query(`INSERT INTO atm (address, bankCode) values ($1, $2) RETURNING *`, [
            address,
            bankCode,
        ]);
        res.json(newATM.rows[0]);
    }
    async getATM(req, res) {
        const ATM = await db.query("SELECT * FROM atm");
        res.json(ATM.rows);
    }
    async getOneATM(req, res) {
        const id = req.params.id;
        const ATM = await db.query("SELECT * FROM atm WHERE id = $1", [id]);
        res.json(ATM.rows[0]);
    }
    async updateATM(req, res) {
        const { id, address, bankCode } = req.body;
        const ATM = await db.query("UPDATE atm set address = $1, bankCode = $2 where id = $3 RETURNING *", [
            address,
            bankCode,
            id,
        ]);
        res.json(ATM.rows);
    }
    async deleteATM(req, res) {
        const id = req.params.id;
        const ATM = await db.query("DELETE FROM atm WHERE id = $1", [id]);
        res.json(ATM.rows[0]);
    }
}

module.exports = new ATMController();
