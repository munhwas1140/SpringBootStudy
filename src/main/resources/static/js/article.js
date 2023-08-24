// 삭제 기능

const deleteButton = document.getElementById('delete-btn');

if (deleteButton) {
    deleteButton.addEventListener('click', event => {
        let id = document.getElementById('article-id').value;
        fetch(`/api/articles/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                alert('삭제가 완료되었스비다.');
                location.replace('/articles');
            });
    });
}
// HTML에서 id == delete-btn인 엘리먼트를 찾아 그 엘리먼트에서 클릭 이벤트가 발생하면 fetch()
// 메소드를 통해 /api/articles/ DELETE 요청을 보내는 역할을 한다.
// fetch()에 이어지는 then() 메서드는 fetch()가 잘 완료되면 연이어 실행되는 메소드이다.

// 수정 기능
const modifyButton = document.getElementById('modify-btn');

if (modifyButton) {
    // 클릭 이벤트가 감지되면 수정 API 요청
    modifyButton.addEventListener('click', event => {
        let params = new URLSearchParams(location.search);
        let id = params.get('id');

        fetch(`/api/articles/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            })
        })
            .then(() => {
                alert('수정이 완료되었습니다');
                location.replace(`/articles/${id}`);
            });
    });
}

// id 가 create-btn인 엘리먼트
const createButton = document.getElementById("create-btn");

if (createButton) {
    createButton.addEventListener("click", (event) => {
        fetch("/api/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: document.getElementById("title").value,
                content: document.getElementById("content").value,
            }),
        })
            .then(() => {
                alert("등록 완료되었습니다.");
                location.replace("/articles");
            });
    });
}