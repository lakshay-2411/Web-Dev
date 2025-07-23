SELECT LENGTH(first_name) FROM customer

SELECT upper(first_name) || ' ' || upper(last_name) AS full_name
FROM customer

SELECT first_name || last_name || '@gmail.com' AS email
FROM customer

SELECT LOWER(LEFT(first_name, 1)) || LOWER(last_name) || '@gmail.com' AS email
FROM customer