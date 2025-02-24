Є таблиця people
колонки id, first_name, last_name, gender, day, month, year вивести всю інформацію про людей в яких first_name починається на J.

```sql
SELECT *
FROM people
WHERE first_name LIKE 'J%';
```

Вивести стать та кількість людей цієї статті, які народились влітку після 2000 року

```sql
SELECT gender, COUNT(*) as count
FROM people
WHERE year > 2000 AND month IN (6, 7, 8)
GROUP BY gender;
```

Є таблиця cards
колонки id, people_id, number пов'язана з таблицею people по id людини.
Вивести імена людей в алфавітному порядку (спочатку по прізвищу, потім по імені) та їхній номер картки (у однієї людини може бути декілька карток)

```sql
SELECT p.last_name, p.first_name, c.number
FROM people p
JOIN cards c ON p.id = c.people_id
ORDER BY p.last_name, p.first_name;
```
