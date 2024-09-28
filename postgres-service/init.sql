CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(80) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL
);

INSERT INTO users (username, password) VALUES ('testuser@gmail.com', 'password123');
