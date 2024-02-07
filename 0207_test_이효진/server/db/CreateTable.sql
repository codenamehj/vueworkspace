USE dev;

CREATE TABLE `t_board_board` (
    `no` INT AUTO_INCREMENT,
    `title` VARCHAR(1000) NOT NULL,
    `writer` VARCHAR(1000) NOT NULL,
    `content` VARCHAR(1000),
    `created_date` DATETIME NOT NULL,
    `updated_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`no`)
);

CREATE TABLE `t_comment_board` (
    `no` INT AUTO_INCREMENT,
    `writer` VARCHAR(1000) NOT NULL,
    `content` VARCHAR(1000),
    `created_date` DATETIME NOT NULL,
    `updated_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `bno` INT NOT NULL,
	PRIMARY KEY (`no`),
	FOREIGN KEY (`bno`) REFERENCES `t_board_board` (`no`)
);

SELECT 
    no,
    title,
    writer,
    content,
    created_date,
    updated_date
FROM
    t_board_board;