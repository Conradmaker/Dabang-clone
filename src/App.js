import React from "react";
import "./css/App.scss";
import "./css/App_small.scss";

function App() {
  return (
    <div className="section">
      <section className="section section--nav-bar">
        <div className="inner">
          <div className="left-menu">
            <a href="/" className="logo">
              <svg width="61" height="27" viewBox="0 0 61 27">
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#006CFF"
                    d="M0 .75v17.263h12.295V13.08H4.918V5.682h7.377V.75zM15.984.75v9.865H20.9V5.682h4.919V.75zM47.951.75v9.865h4.918V5.682h4.918V.75zM39.344.75v3.7h-3.688V.75h-4.918v17.263h13.524V.75h-4.918zm-3.688 12.33h3.688V9.383h-3.688v3.699z"
                  ></path>
                  <g transform="translate(47.275 12.88)">
                    <path
                      fill="#006CFF"
                      d="M6.823 9.017c-1.12 0-2.028-.91-2.028-2.034 0-1.124.908-2.035 2.028-2.035s2.03.911 2.03 2.035a2.032 2.032 0 0 1-2.03 2.034m0-8.816C3.09.2.061 3.237.061 6.983c0 3.745 3.028 6.782 6.762 6.782 3.735 0 6.763-3.037 6.763-6.782C13.586 3.237 10.558.2 6.823.2"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
            <div className="site-menu">
              <a href="/">프로중개사 사이트</a>
              <div></div>
              <a href="/">다방허브 사이트</a>
            </div>
          </div>
          <div className="right-menu">
            <ul className="util-list">
              <li>방찾기</li>
              <li>분양</li>
              <li>관심목록</li>
              <li>방내놓기</li>
              <li>알림</li>
            </ul>
            <ul className="sign-list">
              <li>회원가입</li>
              <span>*</span>
              <li>로그인</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section--main">
        <div className="title">
          <h1>
            <span>어떤 동네, 어떤 방</span>에서
          </h1>
          <h1>살고 싶으신가요?</h1>
        </div>
        <div id="search-form">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <g fill="none" fill-rule="evenodd" stroke="#222">
              <circle cx="7.5" cy="7.5" r="6.5"></circle>
              <path d="M12 12l5 5"></path>
            </g>
          </svg>
          <input type="text" />
          <button>방찾기</button>
        </div>
      </section>
      <section className="section--room-search-solution">
        <div className="inner">
          <div className="summary-solution">
            <span className="title-solution">쉬운 방찾기</span>
            <p className="description-solution">
              방 찾기 초보를 위한 초간단 솔루션!
            </p>
          </div>
          <ul className="tiles">
            <li className="tile">
              <a href="/">
                <div className="tile-img tile-img-1">방별 사진</div>
                <div className="tile-summary">
                  <span>낭만적인</span>
                  <p>옥탑방 원룸</p>
                </div>
              </a>
            </li>
            <li className="tile">
              <a href="/">
                <div className="tile-img tile-img-2">방별 사진</div>
                <div className="tile-summary">
                  <span>2억 이하</span>
                  <p>전세 투쓰리룸</p>
                </div>
              </a>
            </li>
            <li className="tile">
              <a href="/">
                <div className="tile-img tile-img-3">방별 사진</div>
                <div className="tile-summary">
                  <span>전세자금대출</span>
                  <p>가능한 투쓰리룸</p>
                </div>
              </a>
            </li>
            <li className="tile">
              <a href="/">
                <div className="tile-img tile-img-4">방별 사진</div>
                <div className="tile-summary">
                  <span>보증금</span>
                  <p>1천 이하 오피스텔</p>
                </div>
              </a>
            </li>
            <li className="tile">
              <a href="/">
                <div className="tile-img tile-img-5">방별 사진</div>
                <div className="tile-summary">
                  <span>단기임대</span>
                  <p>가능한 오피스텔</p>
                </div>
              </a>
            </li>
            <li className="tile">
              <a href="/">
                <div className="tile-img tile-img-6">방별 사진</div>
                <div className="tile-summary">
                  <span>3억 이하</span>
                  <p>전세 아파트</p>
                </div>
              </a>
            </li>
          </ul>
          <div className="tile-number">
            <a href="/">
              <p>01</p>
            </a>
            <a href="/">
              {" "}
              <p>02</p>
            </a>
          </div>
        </div>
      </section>
      <section className="section--recent-room">
        <div className="inner">
          <div className="summary">
            <div className="summary-positioner">
              <span>최근 본 방</span>
              <p>찜한방</p>
            </div>
            <p>최근에 본 방과 찜한 방을 볼 수 있어요</p>
          </div>
          <div className="tiles-recent">
            <div className="recent-item">아직 목 본 더 많은 방이 있어요.</div>
            <div className="recent-item">아직 목 본 더 많은 방이 있어요.</div>
            <div className="recent-item">아직 목 본 더 많은 방이 있어요.</div>
            <a href="/">
              <div className="recent-item">
                최근 본 지역의 다른 방을 찾아보세요.<button>+</button>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="section--information">
        <div className="inner">
          <div className="container">
            <span>분양정보</span>
            <a href="/" className="more-apt">
              더 많은 분양 정보 보기
            </a>
            <ul>
              <li>
                <div className="apt-img">
                  <div className="img-top">
                    <div className="top-left">분양중</div>
                    <span className="top-right">20.07.16 특별공급</span>
                  </div>
                  <div className="img-bottom">
                    <p className="bottom-title">과천 푸르지오 벨라르테</p>
                    <p className="bottom-price">
                      <span>분양가 </span> 6억9690~
                    </p>
                  </div>
                </div>
                <div className="apt-info">
                  <div className="info-item">
                    <p>건물유형</p>
                    <span>아파트</span>
                  </div>
                  <div className="info-item">
                    <p>공급유형</p>
                    <span>민간분양</span>
                  </div>
                  <div className="info-item">
                    <p>총/분양세대수</p>
                    <span>분양 504대</span>
                  </div>
                  <div className="info-item">
                    <p>전용면적</p>
                    <span>74m/84m/99m</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="apt-img">
                  <div className="img-top">
                    <div className="top-left">분양중</div>
                    <span>20.07.16 특별공급</span>
                  </div>
                  <div className="img-bottom">
                    <p className="bottom-title">과천 푸르지오 벨라르테</p>
                    <p className="bottom-price">
                      <span>분양가</span>6억9690~
                    </p>
                  </div>
                </div>
                <div className="apt-info">
                  <div className="info-item">
                    <p>건물유형</p>
                    <span>아파트</span>
                  </div>
                  <div className="info-item">
                    <p>공급유형</p>
                    <span>민간분양</span>
                  </div>
                  <div className="info-item">
                    <p>총/분양세대수</p>
                    <span>분양 504대</span>
                  </div>
                  <div className="info-item">
                    <p>전용면적</p>
                    <span>74m/84m/99m</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="tile-number">
            <a href="/">
              {" "}
              <p>01</p>
            </a>
            <a href="/">
              <p>02</p>
            </a>
          </div>
        </div>
      </section>
      <section className="section--guide">
        <div className="inner">
          <span>다방이 알려주는 부동산 가이드</span>
          <div className="guide-tiles">
            <a href="/">
              <div className="guide-item item1">
                <h5>다방 이야기</h5>
                <p>
                  다방
                  <br /> 허위매물&nbsp;예방&nbsp;5계명
                </p>
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <g fill="none" fill-rule="evenodd" stroke="#396bf3">
                    <path d="M12 10l4 4-4 4"></path>
                    <circle cx="14" cy="14" r="13.5"></circle>
                  </g>
                </svg>
              </div>
            </a>
            <a href="/">
              <div className="guide-item item1">
                <h5>다방 이야기</h5>
                <p>
                  다방앱으로 <br />
                  나에게 꼭맞는 <br />
                  방찾는 방법
                </p>
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <g fill="none" fill-rule="evenodd" stroke="#396bf3">
                    <path d="M12 10l4 4-4 4"></path>
                    <circle cx="14" cy="14" r="13.5"></circle>
                  </g>
                </svg>
              </div>
            </a>
            <a href="/">
              {" "}
              <div className="guide-item item1">
                <h5>다방 이야기</h5>
                <p>
                  다방앱으로 <br />
                  아파트 청약정보
                  <br /> 한번에 보기!
                </p>
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <g fill="none" fill-rule="evenodd" stroke="#396bf3">
                    <path d="M12 10l4 4-4 4"></path>
                    <circle cx="14" cy="14" r="13.5"></circle>
                  </g>
                </svg>
              </div>
            </a>
            <a href="/">
              <div className="guide-item item2">
                <h5>부동산 상식</h5>
                <p>
                  알아두면 좋은 <br />
                  부동산 용어, <br />
                  행복주택 기본용어!
                </p>
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <g fill="none" fill-rule="evenodd" stroke="#8b8b8b">
                    <path d="M12 10l4 4-4 4"></path>
                    <circle cx="14" cy="14" r="13.5"></circle>
                  </g>
                </svg>
              </div>
            </a>
            <a href="/">
              <div className="guide-item item2">
                <h5>부동산 상식</h5>
                <p>
                  임대차 계약서
                  <br /> 작성 시<br /> 이것만 알아두세요~
                </p>
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <g fill="none" fill-rule="evenodd" stroke="#8b8b8b">
                    <path d="M12 10l4 4-4 4"></path>
                    <circle cx="14" cy="14" r="13.5"></circle>
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="section--banner">
        <a href="/">
          <div className="banner-img"></div>
        </a>
      </section>
      <footer>
        <div className="inner">
          <ul className="footer-item">
            <h5>형태별 검색</h5>
            <a href="/">
              <p>원룸</p>
            </a>
            <a href="/">
              <p>투.쓰리룸</p>
            </a>
            <a href="/">
              <p>오피스텔</p>
            </a>
            <a href="/">
              <p>아파트</p>
            </a>
          </ul>
          <ul className="footer-item">
            <h5>공인중개사 회원가입</h5>
            <a href="/">
              <p>다방프로</p>
            </a>
          </ul>
          <ul className="footer-item">
            <h5>상품소개</h5>
            <a href="/">
              <p>패키지 상품</p>
            </a>
            <a href="/">
              <p>일방 상품</p>
            </a>
            <a href="/">
              <p>단지 상품</p>
            </a>
            <a href="/">
              <p>프리미엄 상품</p>
            </a>
            <a href="/">
              <p>플러스 상품</p>
            </a>
            <a href="/">
              <p>이 지역 부동산 상품</p>
            </a>
          </ul>
          <ul className="footer-item">
            <h5>다방 뉴스</h5>
            <a href="/">
              <p>공지사항</p>
            </a>
            <a href="/">
              <p>이벤트</p>
            </a>
          </ul>
          <ul className="footer-item">
            <h5>고객지원</h5>
            <a href="/">
              <p>자주묻는 질문</p>
            </a>
            <a href="/">
              <p>Android</p>
            </a>
            <a href="/">
              {" "}
              <p>IOS</p>
            </a>
            <a href="/">
              <p>다방 이용 설명서</p>
            </a>
          </ul>
          <ul className="footer-item">
            <h5>About다방</h5>
            <a href="/">
              <p>회사소개</p>
            </a>
            <a href="/">
              <p>오시는 길</p>
            </a>
            <a href="/">
              <p>제휴문의</p>
            </a>
          </ul>
        </div>
      </footer>
      <button className="search-button">
        <span>방찾기</span>
      </button>
    </div>
  );
}

export default App;
