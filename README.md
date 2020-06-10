## Online Auction System
- This application is an online auction platform which allows users to create auctions, add products to auctions and take part in the bidding process.
- Its built using MySQL, NodeJS/JS based stack

## How to setup

- You require these tools installed beforehand:
    - MySQL 5.7: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/
    - NodeJS: https://nodejs.org/en/download/

- Clone the repo:
    - `git clone https://github.com/NJnisarg/online_auction_system`

- After having these tools installed and working correctly, the setup has 2 phases:
    - **Database**:
        - For Database, the connection information is stored under `database/connection.js`. Modify that file to add your credentials for `host`, `username`, `password`, `database`. You can look at the default values and create your local database instance correctly.
        - After that under `database/sql_scripts`, you can find 2 scripts => `OnlineAuctionSchema.sql` and `DbSeed.sql` that you should run in order to setup the database tables and seed it with data.
        - After that under `services/auth` and `services/auction`, both has a directory called `sql_scripts`, which has scripts to setup stored procedures for the backend APIs. Hence run those scripts in `MySQL` and setup the stored procs.
        - If everything is fine, you should have a proper database schema setup.
    - **Application**:
        - To start the server, run these commands:
        `npm install`
        `npm start`
        - After that goto: `localhost:3000/home.html` in browser. Your application should be up and running.