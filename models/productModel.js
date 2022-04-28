import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('user', {
    Username: {
        type: DataTypes.STRING
    },
    Password:{
        type: DataTypes.STRING
    },
    Email:{
       type: DataTypes.STRING
    },
    Role:{
        type: DataTypes.STRING
    } 
}, {
    freezeTableName: true
});


export default Product;