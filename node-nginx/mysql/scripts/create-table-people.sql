USE nodedb;

CREATE TABLE IF NOT EXISTS people(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);