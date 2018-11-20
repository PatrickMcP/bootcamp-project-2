INSERT INTO accounts (uuid, first_name, last_name, email, account_key) VALUES (100, "Joe", "Cool", "jcool@gmail.com", "123abc456");
INSERT INTO accounts (uuid, first_name, last_name, email, account_key) VALUES (120, "Billy", "Bob", "bbob123@gmail.com", "754wer343");
INSERT INTO accounts (uuid, first_name, last_name, email, account_key) VALUES (130, "Bruce", "Wayne", "batman4ever@gmail.com", "943okj332");

INSERT INTO courses (courseName, slopeRating, courseRating, hole1Par, 
    hole2Par, hole3Par, hole4Par, hole5Par, hole6Par, hole7Par, 
    hole8Par, hole9Par,hole10Par, hole11Par, hole12Par, hole13Par,
    hole14Par, hole15Par, hole16Par, hole17Par, hole18Par)
    VALUES ("The View", 123.5, 65, 4, 5, 3, 4, 4, 5, 3, 4, 4, 5, 3, 4, 5, 4, 4, 3, 4, 4 );
INSERT INTO courses (courseName, slopeRating, courseRating, hole1Par, 
    hole2Par, hole3Par, hole4Par, hole5Par, hole6Par, hole7Par, 
    hole8Par, hole9Par,hole10Par, hole11Par, hole12Par, hole13Par,
    hole14Par, hole15Par, hole16Par, hole17Par, hole18Par)
    VALUES ("Mountin's Edge", 113.5, 63, 5, 4, 4, 3, 5, 4, 4, 3, 4, 4, 5, 3, 4, 4, 4, 3, 5, 4 );
INSERT INTO courses (courseName, slopeRating, courseRating, hole1Par, 
    hole2Par, hole3Par, hole4Par, hole5Par, hole6Par, hole7Par, 
    hole8Par, hole9Par,hole10Par, hole11Par, hole12Par, hole13Par,
    hole14Par, hole15Par, hole16Par, hole17Par, hole18Par)
    VALUES ("Peak Desitny", 112.5, 64, 5, 4, 3, 4, 5, 4, 3, 4, 4, 4, 4, 5, 4, 4, 6, 3, 5, 4 );

INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (100, 1, 6, 6, 3, 5, 7, 6, 4, 4, 4, 5, 4, 3, 6, 5, 4, 5, 5, 5 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (120, 1, 7, 6, 4, 5, 6, 6, 3, 4, 5, 5, 3, 3, 7, 5, 6, 5, 6, 6 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 1, 3, 4, 3, 4, 3, 5, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 1, 4, 4, 3, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 4, 4, 4, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 1, 4, 3, 4, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 4, 4, 4, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 1, 4, 3, 4, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 4, 4, 4, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 1, 4, 3, 5, 4, 3, 5, 4, 4, 4, 4, 3, 3, 5, 4, 3, 4, 4, 4 );

INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (100, 2, 6, 6, 3, 5, 7, 6, 4, 4, 4, 5, 4, 3, 6, 5, 4, 5, 5, 5 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (120, 2, 7, 6, 4, 5, 6, 6, 3, 4, 5, 5, 3, 3, 7, 5, 6, 5, 6, 6 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 2, 3, 4, 3, 4, 3, 5, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 2, 4, 4, 3, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 4, 4, 4, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 2, 4, 3, 4, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 4, 4, 4, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 2, 4, 3, 4, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 4, 4, 4, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 2, 4, 3, 5, 4, 3, 5, 4, 4, 4, 4, 3, 3, 5, 4, 3, 4, 4, 4 );

INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (100, 3, 6, 6, 3, 5, 7, 6, 4, 4, 4, 5, 4, 3, 6, 5, 4, 5, 5, 5 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (120, 3, 7, 6, 4, 5, 6, 6, 3, 4, 5, 5, 3, 3, 7, 5, 6, 5, 6, 6 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 3, 3, 4, 3, 4, 3, 5, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 3, 4, 4, 3, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 4, 4, 4, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 3, 4, 3, 4, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 4, 4, 4, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 3, 4, 3, 4, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 4, 4, 4, 4, 3 );
INSERT INTO rounds (accountUuid, courseId, hole1Score, hole2Score, hole3Score,
        hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score,
        hole10Score, hole11Score, hole12Score, hole13Score, hole14Score,hole15Score, 
        hole16Score, hole17Score, hole18Score )
        VALUES (130, 3, 4, 3, 5, 4, 3, 5, 4, 4, 4, 4, 3, 3, 5, 4, 3, 4, 4, 4 );
