import { db } from "../databse.js";

export default class Project {
  static findAll = async () => {
    const [rows] = await db.query("SELECT * FROM projects");
    return rows;
  };
  static findById = async (id) => {
    const [rows] = await db.query("SELECT * FROM projects WHERE id = ?", [id]);
    return rows[0] ?? null;
  };
  static create = async (data) => {
    const { name, description } = data;
    const [result] = await db.query(
      "INSERT INTO projects (name, description) VALUES (?, ?)",
      [name, description],
    );
    return { id: result.insertId, name, description };
  };
  static update = async (id, data) => {
    const { name, description } = data;
    const [result] = await db.query(
      "UPDATE projects SET name=?, description=? WHERE id=?",
      [name, description, id],
    );
    return { id, name, description };
  };
  static delete = async (id) => {};
}
