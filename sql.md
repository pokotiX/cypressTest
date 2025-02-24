Є таблиця people
колонки id, first_name, last_name, gender, day, month, year вивести всю інформацію про людей в яких first_name починається на J.

SELECT *
FROM people
WHERE first_name LIKE 'J%';

