const express = require('express');
const fs = require('fs');
const cors = require('cors'); 
const app = express();
app.use(express.json());
app.use(cors()); // Use the cors middleware
app.post('/update-student', (req, res) => {
    const newData = req.body;
    // console.log(newData);
    // Đọc dữ liệu hiện tại từ tập tin student_data.json
    fs.readFile('./data/student_data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }

        let jsonData = {};
        try {
            // Parse dữ liệu từ file JSON
            jsonData = JSON.parse(data);
        } catch (parseErr) {
            console.error(parseErr);
            return res.status(500).send('Server error');
        }

        // Cập nhật dữ liệu mới vào dữ liệu đã có
        Object.assign(jsonData, newData);

        // Ghi dữ liệu mới vào tập tin student_data.json
        fs.writeFile('./data/student_data.json', JSON.stringify(jsonData), (writeErr) => {
            if (writeErr) {
                console.error(writeErr);
                return res.status(500).send('Server error');
            }
            res.send('Student information updated successfully!');
        });
    });
});

app.listen(3001, () => console.log('Server started on port 3001'));
