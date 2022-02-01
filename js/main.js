const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//검색 아이콘 클릭 핸들러. 검색창에 포커스 실행
searchEl.addEventListener('click', function(){
  searchInputEl.focus();  
});

//검색창에 힌트 출력
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

//포커스가 해제되면 힌트 삭제
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})
