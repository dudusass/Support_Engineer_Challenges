CREATE TABLE AverageLifeExpectancy (
  LifeProm FLOAT,
  Region VARCHAR(50)
);

INSERT INTO AverageLifeExpectancy (LifeProm, Region) 
  VALUES 
    (70, 'South America'),
    (74, 'North America'),
    (59, 'Asia');

SELECT * FROM LifeExpectancy
INNER JOIN AverageLifeExpectancy ON LifeExpectancy.Region = AverageLifeExpectancy.Region
ORDER BY LifeExpectancy.Region;