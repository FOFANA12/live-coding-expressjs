import { db } from "../databse.js";

export default class Task {
  static findAll = async () => {
    const [rows] = await db.query("SELECT * FROM tasks ORDER BY id DESC");
    return rows;
  };
  static findById = async (id) => {
    const [rows] = await db.query("SELECT * FROM tasks WHERE id = ?", [id]);
    return rows[0] ?? null;
  };
  static create = async (data) => {
    const [result] = await db.query(
      "INSERT INTO tasks(title, description, completed) VALUES(?, ?, ?)",
      [data.title, data.description ?? null, data.completed ?? false],
    );

    return this.findById(result.insertId);
  };
  static update = async (id, data) => {
    const [result] = await db.query(
      "UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?",
      [data.title, data.description ?? null, data.completed ?? false, id],
    );

    if (result.affectedRows === 0) {
      return null;
    }
    return this.findById(id);
  };
  static delete = async (id) => {
    const [result] = await db.query("DELETE FROM tasks WHERE id = ?", [id]);
    return result.affectedRows;
  };
}
