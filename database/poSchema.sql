CREATE SCHEMA po AUTHORIZATION zdeckert;

CREATE TABLE IF NOT EXISTS reviews
(
  review_id SERIAL PRIMARY KEY,
  stay_id INTEGER,
  name VARCHAR(50),
  pic VARCHAR(255),
  date DATE,
  body VARCHAR,
  r_checkin SMALLINT,
  r_accuracy SMALLINT,
  r_location SMALLINT,
  r_communication SMALLINT,
  r_cleanliness SMALLINT,
  r_value SMALLINT
);

CREATE INDEX IF NOT EXISTS stayIdIndex ON reviews (stay_id);

COPY reviews(stay_id,name,pic,date,body,r_checkin,r_accuracy,r_location,r_communication,r_cleanliness,r_value) FROM '/Users/zdeckert/hrr45/sdc/po-reviews/reviews.csv' DELIMITER ',' CSV HEADER;

-- /home/ubuntu/po-reviews/reviews.csv