// /tags/Form.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';

let Form = ({ onBookAdded }) => {
    const [book, setBook] = useState({
        no: "",
        title: "",
        qty: "",
        price: "",
        publisher: ""
    });

    const [error, setError] = useState("");

    let bookSave = async (e) => {
        e.preventDefault(); // 기본 이벤트 제거
        setError(""); // 에러 초기화

        // 유효성 검사
        if (!book.title || !book.price || !book.qty || !book.publisher) {
            setError("모든 필드를 입력해야 합니다.");
            return;
        }

        try {
            await axios.post("http://www.sist123.store/api/book", book);
            setBook({ no: "0", title: "", qty: "", price: "", publisher: "" }); // 폼 초기화
            onBookAdded(); // 도서 목록을 갱신하는 함수 호출
        } catch (error) {
            console.error("책 저장 중 오류:", error);
            setError("책 저장 중 오류가 발생했습니다."); // 에러 메시지 설정
        }
    };

    let inputUpdate = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: name === "qty" || name === "price" ? value : value.trim(), // 숫자 필드 처리
        });
    };

    return (
        <form id="bookForm" onSubmit={bookSave} method="post">
            <input type="hidden" id="no" name="no" value={book.no || ""} onChange={inputUpdate} />
            <label>도서명</label>
            <input type="text" id="title" name="title" value={book.title || ""} onChange={inputUpdate} required />
            <label>가격</label>
            <input type="number" id="price" name="price" value={book.price || ""} onChange={inputUpdate} required />
            <label>수량</label>
            <input type="number" id="qty" name="qty" value={book.qty || ""} onChange={inputUpdate} required />
            <label>출판사</label>
            <input type="text" id="publisher" name="publisher" value={book.publisher || ""} onChange={inputUpdate} required />
            <input type="submit" value="등록" />
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* 에러 메시지 표시 */}
        </form>
    );
}

export default Form; // 이 줄이 필요합니다.
