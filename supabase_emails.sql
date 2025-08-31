create extension if not exists pgcrypto;
create table if not exists emails (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  from_address text,
  to_address text,
  subject text,
  text text,
  html text
);
