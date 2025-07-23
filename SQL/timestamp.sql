SHOW TIMEZONE

SELECT NOW()

SELECT TIMEOFDAY()

SELECT CURRENT_TIME

SELECT CURRENT_DATE

SELECT EXTRACT(YEAR FROM payment_date) AS year
FROM payments

SELECT EXTRACT(MONTH FROM payment_date) AS pay_month
FROM payments

SELECT EXTRACT(QUARTER FROM payment_date) AS pay_month
FROM payments

SELECT AGE(payment_date)
FROM payments

SELECT TO_CHAR(payment_date, 'MONTH-YYYY')
FROM payments

SELECT TO_CHAR(payment_date, 'mon/dd/YYYY')
FROM payments