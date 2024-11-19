SELECT
    qt1.id,
    qt1.name,
    qt2.name AS parent_name
FROM
    query_test qt1
LEFT JOIN
    query_test qt2
ON
    qt1.parent_id = qt2.id;