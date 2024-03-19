// Đảm bảo rằng tài liệu đã được tải trước khi thực hiện các thao tác
document.addEventListener("DOMContentLoaded", function() {
    // Sử dụng Fetch API để tải dữ liệu từ JSON
    fetch('./data/student_data.json')
        .then(response => response.json()) // Chuyển đổi phản hồi sang JSON
        .then(data => {
            // console.log(data.age);
            // Cập nhật thông tin trong HTML với dữ liệu từ JSON
            document.getElementById('student-name-header').textContent = data.name;
            document.getElementById('student-name').textContent = data.name;
            document.getElementById('student-id').textContent = "MSSV: "+data.id;
            document.getElementById('student-age').textContent = data.age;
            document.getElementById('student-education').textContent = data.education;
            document.getElementById('student-program').textContent = data.program;
            document.getElementById('student-faculty').textContent = data.faculty;
            document.getElementById('student-status').textContent = data.status;
            document.getElementById('student-gender').textContent = data.gender;
            document.getElementById('student-class').textContent = data.class;
            document.getElementById('student-course').textContent = data.course;
            document.getElementById('student-email').textContent = data.email;
        })
        .catch(error => console.error('Error fetching data:', error));
});
