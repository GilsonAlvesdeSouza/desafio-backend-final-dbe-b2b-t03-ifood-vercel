import { Sequelize } from 'sequelize';
import db from './db_instances';
import pg from 'pg';

export const sequelize = new Sequelize(db, { dialectModule: pg });
