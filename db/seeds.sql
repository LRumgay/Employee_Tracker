INSERT INTO department (name)
VALUES ("Sales"),
       ("Human Resources"),
       ("Customer Service"),
       ("Management"),
       ("Presidents");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 100000, 1),
       ("HR rep", 700000, 2),
       ("Space Marine", 250000, 3),
       ("The Pope", 1000000, 4),
       ("The President", 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joey", "Joey", 1, 1),
        ("Stanley", "Kube", 2, 2),
        ("Angela", "Taylor", 3, 3),
        ("Anthony", "Cromartie", 4, 4),
        ("Sarah", "Coulson", 5, 5),


