CREATE SCHEMA stays AUTHORIZATION zdeckert;

CREATE TABLE reviews
(
  stay_id  BIGINT,
  name character varying(50),
  pic character varying(255),
  date date,
  body varchar,
  r_checking SMALLINT NOT NULL,
  r_accuracy SMALLINT,
  r_location SMALLINT,
  r_communication SMALLINT,
  r_cleanliness SMALLINT,
  r_value SMALLINT
);
