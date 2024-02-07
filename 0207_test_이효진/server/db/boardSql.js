let boardList =
    `SELECT	no,
            title,
            writer,
            content,
            created_date,
            updated_date
    FROM t_board_board`;

let boardInfo =
    `SELECT	no,
            title,
            writer,
            content,
            created_date,
            updated_date
    FROM t_board_board
    WHERE no = ?`;

let boardInsert =
    `INSERT INTO t_board_board
    SET ?`;

let boardUpdateInfo =
    `UPDATE t_board_board
    SET title = ?,
        writer = ?,
        content = ?,
        created_date = ?
    WHERE no = ?`;

module.exports = { 
    boardList,
    boardInfo,
    boardInsert,
    boardUpdateInfo
}