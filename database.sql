create TABLE Bank(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    legalAddress VARCHAR(255)
);

create TABLE ATM(
    id SERIAL PRIMARY KEY,
    address VARCHAR(255),
    bankCode INT,
    FOREIGN KEY(bankCode) REFERENCES Bank(id)
);

create TABLE Client(
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(255),
    cardNumber INT,
    address VARCHAR(255),
    bankCode INT,
    FOREIGN KEY(bankCode) REFERENCES Bank(id)
);

create TABLE Operations(
    id SERIAL PRIMARY KEY,
    client_id INT,
    ATMNumber INT,
    date TIMESTAMP, 
    commission BOOLEAN,
    sum INT,
    FOREIGN KEY(client_id) REFERENCES Client(id),
    FOREIGN KEY(ATMNumber) REFERENCES ATM(id)
);