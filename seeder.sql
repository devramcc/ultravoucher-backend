CREATE TABLE query_test (
    id	INT,
    name	VARCHAR(512),
    parent_id	INT
);

INSERT INTO query_test (id, name, parent_id) VALUES (1, 'Zaki', 2);
INSERT INTO query_test (id, name, parent_id) VALUES (2, 'Ilham', NULL);
INSERT INTO query_test (id, name, parent_id) VALUES (3, 'Irwan', 2);
INSERT INTO query_test (id, name, parent_id) VALUES (4, 'Arka', 3);