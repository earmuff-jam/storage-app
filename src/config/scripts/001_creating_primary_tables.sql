

BEGIN;

DROP TABLE IF EXISTS item_types;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE item_types (
                            id UUID PRIMARY KEY UNIQUE,
                            item_name VARCHAR NOT NULL ,
                            item_quantity INT DEFAULT 1,
                            createdBy VARCHAR NOT NULL,
                            createdAt timestamp NOT NULL,
                            updatedBy VARCHAR,
                            updatedAt timestamp
);

INSERT INTO item_types (id, item_name, createdBy, createdAt) VALUES (uuid_generate_v4(), 'water bottles', 'ADMIN', now());
INSERT INTO item_types (id, item_name, createdBy, createdAt) VALUES (uuid_generate_v4(), 'garage container', 'earmuffjam', now());
INSERT INTO item_types (id, item_name, createdBy, createdAt) VALUES (uuid_generate_v4(), 'pressure washer', 'earmuffjam', now());
INSERT INTO item_types (id, item_name, createdBy, createdAt) VALUES (uuid_generate_v4(), 'ladder', 'earmuffjam', now());
INSERT INTO item_types (id, item_name, createdBy, createdAt) VALUES (uuid_generate_v4(), 'toolkits', 'earmuffjam', now());
INSERT INTO item_types (id, item_name, createdBy, createdAt) VALUES (uuid_generate_v4(), 'scredriver', 'earmuffjam', now());
INSERT INTO item_types (id, item_name, item_quantity, createdBy, createdAt) VALUES (uuid_generate_v4(), 'square nut', 10, 'earmuffjam', now());


COMMIT;