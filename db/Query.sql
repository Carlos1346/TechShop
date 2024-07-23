CREATE DATABASE techshop;
USE techshop;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(100),
  email VARCHAR(100),
  phone_number VARCHAR(20),
  first_name VARCHAR(50),
  last_name VARCHAR(50)
);


CREATE TABLE addresses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  state VARCHAR(50),
  city VARCHAR(50),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE brands (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  country VARCHAR(100)
);



CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);


CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  description TEXT,
  scale VARCHAR(50),
  brand_id INT,
  category_id INT,
  FOREIGN KEY (brand_id) REFERENCES brands(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);


CREATE TABLE images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255)
);


CREATE TABLE productimages (
  product_id INT,
  image_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (image_id) REFERENCES images(id)
);



CREATE TABLE inventory (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  quantity INT,
  FOREIGN KEY (product_id) REFERENCES products(id)
);




CREATE TABLE productspecifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  spec_key VARCHAR(100),
  spec_value VARCHAR(255),
  FOREIGN KEY (product_id) REFERENCES products(id)
);


CREATE TABLE history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  change_description TEXT,
  change_date TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id)
);




CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_date DATE,
  order_status VARCHAR(50),
  delivery_id INT,
  total DECIMAL(10,2),
  user_id INT,
  FOREIGN KEY (delivery_id) REFERENCES deliveries(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

  
  CREATE TABLE deliveries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  provider VARCHAR(100)
);


CREATE TABLE productorders (
  product_id INT,
  order_id INT,
  quantity INT,
  subtotal DECIMAL(10,2),
  payment_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);


CREATE TABLE payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);


CREATE TABLE wishlists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  product_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);


CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  name VARCHAR(100),
  email VARCHAR(100),
  message_text TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  title VARCHAR(100),
  user_id INT,
  review_date DATE,
  review_text TEXT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);