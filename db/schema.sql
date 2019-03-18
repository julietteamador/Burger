Create database burgers_db;
use burgers_db;
create table burgers (
	ID int NOT NULL,
    burger_name varchar(255),
    devoured boolean,
    PRIMARY KEY (ID)
)
