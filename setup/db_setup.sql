create database if not exists flask;
use flask;

create table if not exists users (
	u_username varchar(64) primary key,
    u_name varchar(64),
    u_create datetime
);

create table if not exists shadow(
       u_username varchar(64) primary key,
       has char(128),
       constraint shadow_u_username_fk foreign key (u_username) references users(u_username)
};

create table if not exists game(
	u_username varchar(64),
    g_id int,
    g_date date,
    primary key (g_id),
    constraint game_u_username_fk foreign key (u_username) references users(u_username)
);

create table if not exists frame(
	g_id int,
    f_num tinyint,
    f_throw1 tinyint,
    f_throw2 tinyint,
    f_throw3 tinyint,
    f_split boolean,
    primary key(g_id, f_num),
    constraint frame_g_id_fk foreign key (g_id) references game(g_id)
);
