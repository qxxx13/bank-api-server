const db = require("../db");

class ClientController {
    async createClient(req, res) {
        const { fullname, cardnumber, address, bankcode } = req.body;
        const newClient = await db.query(
            `INSERT INTO client (fullname, cardnumber, address, bankcode) values ($1, $2, $3, $4) RETURNING *`,
            [fullname, cardnumber, address, bankcode]
        );
        res.json(newClient.rows[0]);
    }
    async getClient(req, res) {
        const client = await db.query("SELECT * FROM client");
        res.json(client.rows);
    }
    async getOneClient(req, res) {
        const id = req.params.id;
        const client = await db.query("SELECT * FROM client WHERE id = $1", [id]);
        res.json(client.rows[0]);
    }
    async updateClient(req, res) {
        const { id, fullName, cardNumber, address, bankCode } = req.body;
        const client = await db.query(
            "UPDATE client set fullName = $1, cardNumber = $2, address = $3, bankCode = $4 where id = $5 RETURNING *",
            [fullName, cardNumber, address, bankCode, id]
        );
        res.json(client);
    }
    async deleteClient(req, res) {
        const id = req.params.id;
        const client = await db.query("DELETE FROM client WHERE id = $1", [id]);
        res.json(client.rows[0]);
    }
}

module.exports = new ClientController();
