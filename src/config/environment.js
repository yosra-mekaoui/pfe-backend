const environement = {
  port: parseInt(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  db_url: process.env.DB_URL,
  db_name: process.env.DB_NAME,
};
export default environement;
