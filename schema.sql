DROP DATABASE IF EXISTS golf_db;

CREATE DATABASE golf_db;
USE golf_db;


CREATE TABLE user (
    user_id int NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (user_id)
);


CREATE TABLE course (
    course_id int NOT NULL AUTO_INCREMENT,
    par float(2,0),
    yardage float(4,0), 
    course_rating float(2,1),
    slope_rating float(3,0),
    hole_1 INT4,
    hole_2 INT4,
    hole_3 INT4,
    hole_4 INT4,
    hole_5 INT4,
    hole_6 INT4,
    hole_7 INT4,
    hole_8 INT4,
    hole_9 INT4,
    hole_10 INT4,
    hole_11 INT4,
    hole_12 INT4,
    hole_13 INT4,
    hole_14 INT4,
    hole_15 INT4,
    hole_16 INT4,
    hole_17 INT4,
    hole_18 INT4,
    PRIMARY KEY (course_id),
    FOREIGN KEY (user_id) references user(user_id)
);


CREATE TABLE round (
    round_id int NOT NULL AUTO_INCREMENT,
    hole_1 INT4,
    hole_2 INT4,
    hole_3 INT4,
    hole_4 INT4,
    hole_5 INT4,
    hole_6 INT4,
    hole_7 INT4,
    hole_8 INT4,
    hole_9 INT4,
    hole_10 INT4,
    hole_11 INT4,
    hole_12 INT4,
    hole_13 INT4,
    hole_14 INT4,
    hole_15 INT4,
    hole_16 INT4,
    hole_17 INT4,
    hole_18 INT4,
    PRIMARY KEY (round_id),
    FOREIGN KEY (user_id) references user(user_id),
    FOREIGN KEY (course_id) references course(course_id)
);