CREATE DATABASE envioemails

CREATE TABLE usuarios(
  id serial primary key,
  	nome text not null,
  	nome_loja text not null,
  	email text not null unique,
  	senha text not null)



