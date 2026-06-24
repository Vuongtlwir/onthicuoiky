# Session 1 - Ôn tập thi AI & KTLT

## Files chính
- `on_tap_AI.html` — file HTML chính (237 câu trắc nghiệm + 28 câu tự luận)

## Cấu trúc tabs
- **AI** → Kỳ 20241 (36 câu), Kỳ 20221 (40 câu, song ngữ)
- **KTLT** → Ôn tập (84), Kỳ 20221 (20), Thầy Vượng (57), Cuối kì 20212 (1), Cuối kì 20211 (16), Tổng ôn 20232 (37), Tổng ôn 20231 (7), Đề tự luận (28)

## Chế độ
- **Ôn tập**: chọn đáp án → feedback ngay (đúng/sai + giải thích)
- **Làm đề**: chọn đáp án → ko feedback, bấm Nộp bài mới hiện kết quả
- Khi vào tab/sub-tab: câu hỏi + đáp án bị xáo trộn random
- Mỗi đề đánh số lại từ 1

## KTLT
- `ktlt/ktlt_questions.js` — 161 câu trắc nghiệm (84 ôn tập + 20 kỳ 20221 + 57 thầy Vượng)
- `ktlt/ktltExtraQuestions.js` — 61 câu bổ sung (1 cuối kì 20212 + 16 cuối kì 20211 + 37 tổng ôn 20232 + 7 tổng ôn 20231)
- `ktlt/ktltEssay.js` — 28 câu tự luận có đáp án (nút Xem/Ẩn đáp án)
- Nguồn .txt trong `ktlt/` giữ lại để sau thêm câu hỏi

## Nguồn AI
- Kỳ 20241: 36 câu (từ PDF text)
- Kỳ 20221: 40 câu song ngữ Việt-Anh (từ `ocr_20221.txt` user tự sửa)

## Việc còn lại
- [x] Thêm toàn bộ 20 câu từ `Kỹ thuật lập trình - tổng ôn 20232.txt` (id 255-281, 289-299)
- [ ] Thêm đề KTLT từ các file .txt còn lại (20231, 20241, 20242)
- [ ] Có thể cần sửa/kiểm tra lại đáp án các câu "unknown" trong KTLT
