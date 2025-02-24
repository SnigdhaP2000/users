# users
CRUD operations for users.

# postgres queries
CREATE TABLE users (
	id serial4 NOT NULL,
	email varchar(255) NOT NULL,
	name varchar(255) NOT null,
	mobile_number varchar(50) NULL,
	profile_pic text NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	deleted_at timestamp NULL
);
