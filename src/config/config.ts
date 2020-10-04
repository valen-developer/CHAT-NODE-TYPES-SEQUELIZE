export const DBCONFIG = {
  database: process.env.DBNAME || "chat",
  user: process.env.DBUSER || "valen",
  password: process.env.DBPASSWORD || "pass",
  host: process.env.DBHOST || "localhost",
};

export const TOKENCONFIG = {
  seed: process.env.SEED || "Una semilla",
  expireIn: "30m",
};

export const MAILER = {
  email: "valen7valverde@gmail.com",
  password: process.env.EMAILPASSWORD || "emailpassword",
};
