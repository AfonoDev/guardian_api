module.exports = {
      url: process.env.DATABASE_URL ||  
    "postgres://postgres:bcd147@localhost:5432/db_Guardian", 
      config: { 
        dialect: "postgres",
        "dialectOptions": {
            "ssl": {
                require: true,
                rejectUnauthorized: false
            }
        },          
        logging: console.log, 
        define: { 
          timestamp: true, 
          underscored: true, 
        }, 
    }, 
}; 
