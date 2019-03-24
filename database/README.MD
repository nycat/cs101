# database design

tutorial: [https://www.youtube.com/watch?v=ztHopE5Wnpc](https://www.youtube.com/watch?v=ztHopE5Wnpc)

## Relation database design

Relation, is the connection between data.

entity, attribute.

attribute types and atrribute values

## RDMS

Database management system

## SQL

Introduction to SQL [https://www.youtube.com/watch?v=Aw6DwXK0ZGM&list=PL_c9BZzLwBRK0Pc28IdvPQizD2mJlgoID&index=5](https://www.youtube.com/watch?v=Aw6DwXK0ZGM&list=PL_c9BZzLwBRK0Pc28IdvPQizD2mJlgoID&index=5)

- Define data structure(DDL)
- Manipulation data(DML)

we can create a table by SQL, manuplate a table and query data from a table.

```sql
CREATE User {
}
```

- JOIN

The concept of View in database.

## Naming Conventions

Keep consistency.

For USER table, name the attribute of user id as **user_id**:

```sql
user_id
```

## Database design

Data integrity problem.

Three steps of desigin database.

- **Conceptual**: How data is related.
- **Logical**: design the schema
- **Physical**

Seperate data into multiple tables.

## Data integrity

- Entity integrity
- Referential integrity
- Domain integrity

## Terms

### Database terms

- Database
- Relation Database
- DBMS
- RDDMS
- NULL(No data for a specified field.)
- Anomailies
- Integrity
  - Entity
  - Referencial(Keep the connections across mutilple table)
  - Domain

### Design terms

- Entity(where we store data about)
- Attributes(things we store about the entity)
- Relation(The connection and the table)
- Tuple(All the attribute values about an entity)

```sql
const person = {
  id: 'person1',
  address: 'Rochester,Ny',
  phone: '12345678'
}
```

- Table(Rows and Columns)
- Filed
- Record
- Value
- Entry
- DB design
- Schema
- Normalization(best practice to our database design)
- Name convention(make things consistency)
- Keys
  - Primary Key
  - Foreign Key
- SQL(structure query language)
- DDL(data defination language)
- DML(data manuplation language)
- SQL Keywords
- Frontend
- Backend
- Client
- Server
- Views(custom views)
- Joins(connect mutiple tables to create new view)

## Atomic value

The value stores one thing.

We want to go to atomic way.

## Relationships

### brief intro

Rather than store all the data into a giant table, we break a huge table into seperate tables. We store entity and maintain the relationship bettween entities.

- **One to One**

For example, for a specified bank system, one user can only have one bank card, and one bank card can only owned by one user.

```sql
CREATE TABLE IF NOT EXISTS `card`(
  `id` INT AUTO_INCREMENT,
  `card_number` VARCHAR(100) NOT NULL UNIQUE,
  `create_date` DATETIME,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_id_reference` FOREIGN KEY (`user_id`) REFERENCES `client` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `client`(
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL UNIQUE,
  `create_date` DATETIME,
  
) ENGINE = InnoDB DEFAULT CHARSET = utf8

```

- **One to Many**

For a blog system, a cardholder can have mutilple bank account while one bank account can only owned by a cardholder.

```sql
CREATE TABLE IF NOT EXISTS `card`(
  `id` INT AUTO_INCREMENT,
  `card_number` VARCHAR(100) NOT NULL UNIQUE,
  `create_date` DATETIME,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_id_reference` FOREIGN KEY (`user_id`) REFERENCES `client` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `client`(
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL UNIQUE,
  `create_date` DATETIME,
  PRIMARY KEY(`id`)
  
) ENGINE = InnoDB DEFAULT CHARSET = utf8

```

- **Many to Many**
A student can have mutilple classes, and a class can have mutiple students.

M: N ---> 1: M Intermiary table.

class table -> intermidiary table <- student

### Design

- One to One

We put all of them into the same table for an entity.(user and username)

For mutile table(card holder and credit card), we can store more attribute data for an entity.

- One to Many
- Parent child

  PK     FK

Child inherits value from parent. For example, for a cardholder who can own mutilple bankcard in a bank system, the *bank_owner_id*  property inherites  user.id from  user(table).

- Many to Many

Split it and join into a new table.

## Introduction to keys

Keys in database, are 