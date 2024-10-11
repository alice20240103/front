let BookList = ({ books }) => { // books를 prop으로 받기
    let tr_list = books.map((book) => {
        return (
            <tr key={book.no}>
                <td>{book.no}</td>
                <td>{book.title}</td>
                <td>{book.price}</td>
                <td>{book.qty}</td>
                <td>{book.publisher}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>도서번호</th>
                    <th>도서명</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>출판사</th>
                </tr>
            </thead>
            <tbody>{tr_list}</tbody>
        </table>
    );
}

export default BookList;
