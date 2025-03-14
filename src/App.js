import React from "react";
import './App.css';

function App() {
  return (
    <div className="Container">
      <header>
        <h1>나의 포트폴리오</h1>
      </header>
      <section className="about">
        <h2>👋 소개</h2>
        <p>안녕하세요! 저는 개발자 <strong>Choi Heung Gi</strong>입니다.</p>
        <p>사용자 친화적인 웹사이트를 만들고, React와 JavaScript를 활용하여 다양한 프로젝트를 개발하는 것을 좋아합니다.</p>
      </section>

      <section className="skills">
        <h2>🛠 기술 스택</h2>
        <ul>
          <li>💻 HTML, CSS, JavaScript</li>
          <li>⚛️ React, Redux</li>
          <li>🖥 Node.js, Express</li>
          <li>💾 MySQL, MongoDB</li>
          <li>🔧 Git, GitHub</li>
        </ul>
      </section>

      <section className="portfolio">
        <h2>📂 프로젝트 경험</h2>
        <div className="project-card">
          <h3>📌 프로젝트 1: 나만의 블로그</h3>
          <p>React와 Firebase를 사용하여 만든 개인 블로그 플랫폼입니다.</p>
          <a href="#" target="_blank" className="btn">자세히 보기</a>
        </div>

        <div className="project-card">
          <h3>📌 프로젝트 2: 할 일 관리 앱</h3>
          <p>React와 Redux를 활용한 Todo List 애플리케이션입니다.</p>
          <a href="#" target="_blank" className="btn">자세히 보기</a>
        </div>

        <div className="project-card">
          <h3>📌 프로젝트 3: 쇼핑몰 웹사이트</h3>
          <p>Node.js와 MongoDB를 활용한 간단한 전자상거래 웹사이트입니다.</p>
          <a href="#" target="_blank" className="btn">자세히 보기</a>
        </div>
      </section>
    </div>
  );
}

export default App;
