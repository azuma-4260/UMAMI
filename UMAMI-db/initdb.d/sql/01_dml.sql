SET CHARSET UTF8;

INSERT INTO UMAMI.USER(`ID_USER`,
                        `USER_TYPE_CODE`,
                        `NAME`,
                        `DISPLAY_NAME`,
                        `EMAIL`,
                        `CREATED_BY`,
                        `UPDATED_BY`)
VALUES (1,
        2,
        '三浦',
        'あずま',
        'Manager1@com',
        'INITIAL',
        'INITIAL');

INSERT INTO UMAMI_AUTH.LOGIN_AUTHORITY(`ID_USER`,
                                        `LOGIN_USER`,
                                        `PASSWORD`,
                                        `CREATED_BY`,
                                        `UPDATED_BY`)
VALUES (1,
        'Manager1@com',
        '$2a$12$9UmVR8I34kgzRl4A2q0sEOsTlyVUlw8TvM9wnfPl9rdwB7Z1aNQhS',
        'INITIAL',
        'INITIAL'),