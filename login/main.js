/*
[로그인 검증]

# 실습 목표

- 아이디와 비밀번호가 입력되었는지 검증하기
- 아이디가 입력되지 않으면 '아이디를 입력해주세요' 경고창 노출 
- 비밀번호가 입력되지 않으면 '비밀번호를 입력해주세요.' 경고창 노출
- 모두 입력이 되었다면 '로그인 되었습니다.' 경고창 노출 
- '로그인 되었습니다' 경고창 노출 후 폼 데이터 전송
*/

var form = document.querySelector('.form-login');
var idEl = document.getElementById('input-username');
var pwEl = document.getElementById('input-password');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // 폼의 기본 동작인 페이지 전환을 막음

  var idValue = idEl.value;
  var pwValue = pwEl.value;

  if (idValue === '') {
    alert('아이디를 입력해주세요');
    idEl.focus();
    return;
  }

  if (pwValue === '') {
    alert('비밀번호를 입력해주세요');
    pwEl.focus();
    return;
  }

  alert('로그인 되었습니다.');
});