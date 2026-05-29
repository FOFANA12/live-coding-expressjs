import { db } from "../databse.js";

export default class Project {
  static findAll = async () => {
    const [rows] = await db.query("SELECT * FROM projects");
    return rows;
  }  
  static findById = async (id) => {
    const [rows] = await db.query("SELECT * FROM projects WHERE id = ?", [id]);
    return rows[0] ?? null;
  }  
  static create = async (data) => {}  
  static update = async (id, data) => {}  
  static delete = async (id) => {}  
}