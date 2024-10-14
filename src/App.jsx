import { useEffect, useState } from 'react';
import './App.css';
import BookList from './tags/BookList';
import Form from './tags/Form';
import axios from 'axios'; // axios를 추가해야 합니다.

function App() {
  const [books, setBooks] = useState([]); // 도서 목록 상태 관리

  // 도서 목록을 가져오는 함수
  const fetchBooks = async () => {
    const response = await axios.get("http://www.sist123.store:8080/api/books");
    setBooks(response.data);
  };

  // 컴포넌트가 마운트될 때 도서 목록 가져오기
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <h2>도서관리 시스템</h2>
      <Form onBookAdded={fetchBooks} /> {/* 도서 등록 후 목록 갱신 함수 전달 */}
      <BookList books={books} /> {/* 도서 목록 상태 전달 */}
    </>
  );
}

export default App;
