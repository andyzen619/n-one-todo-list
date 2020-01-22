Drop table if EXISTS todoListItems cascade;

create table todoListItems (
  id serial primary key,
  title varchar(255),
  description varchar(1028),
  due_date DATE,
  status varchar(255),
  category varchar(255)
);