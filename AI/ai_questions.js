// AI Questions - Combined
// Source: Kỳ 20241 (36 câu), Kỳ 20221 (54 câu)
// =============================================
const aiQuestions = [
  // ========== KỲ 20241 (36 câu) ==========
  {id:1,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho hai diễn dịch I<sub>1</sub> và I<sub>2</sub> với giá trị: I<sub>1</sub>(p)=0, I<sub>1</sub>(q)=1, I<sub>1</sub>(r)=1, I<sub>1</sub>(s)=0, I<sub>2</sub>(p)=1, I<sub>2</sub>(q)=1, I<sub>2</sub>(r)=0, I<sub>2</sub>(s)=0. Cho công thức F = ((p∨q)∧r) → (r∧s). Hỏi phát biểu nào dưới đây là chính xác?",
   options:[
     "Có I<sub>1</sub> ⊭ F và I<sub>2</sub> ⊭ F",
     "Có I<sub>1</sub> ⊨ F và I<sub>2</sub> ⊨ F",
     "Có I<sub>1</sub> ⊨ F và I<sub>2</sub> ⊭ F",
     "Có I<sub>1</sub> ⊭ F và I<sub>2</sub> ⊨ F"
   ],answer:3,
   explanation:"<b>Xét I<sub>1</sub>:</b> p∨q=0∨1=1, (p∨q)∧r=1∧1=1, r∧s=1∧0=0, 1→0=0 ⇒ I<sub>1</sub> ⊭ F.<br><b>Xét I<sub>2</sub>:</b> p∨q=1∨1=1, (p∨q)∧r=1∧0=0, r∧s=0∧0=0, 0→0=1 ⇒ I<sub>2</sub> ⊨ F.<br><b>Đáp án: D</b>"},

  {id:2,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho các công thức mệnh đề: F1 = (¬p∨q)∧(¬q∨p), F2 = (¬p∧¬q)∨(p∧q), F3 = (p∨q)→(p∧q), G = p↔q. Phát biểu nào chính xác?",
   options:[
     "G tương đương với F2 và F3, không tương đương với F1",
     "G tương đương với F1 và F2, không tương đương với F3",
     "G tương đương với F1, F2 và F3",
     "G tương đương với F1 và F3, không tương đương với F2"
   ],answer:2,
   explanation:"Lập bảng chân lý: F1, F2, F3 và G đều cho cùng giá trị tại mọi cặp (p,q). Do đó F1≡G, F2≡G, F3≡G.<br><b>Đáp án: C</b>"},

  {id:3,ky:"ky20241",label:"Kỳ 20241",
   text:"Hãy chọn phương án phù hợp nhất về đặc điểm môi trường của tác tử quét mã QR:",
   options:[
     "Quan sát đầy đủ, xác định, phân đoạn, động, rời rạc, tác tử đơn",
     "Quan sát đầy đủ, không xác định, phân đoạn, tĩnh, rời rạc, đa tác tử",
     "Quan sát đầy đủ, xác định, phân đoạn, tĩnh, rời rạc, tác tử đơn",
     "Quan sát được một phần, xác định, liên tiếp, tĩnh, rời rạc, tác tử đơn"
   ],answer:2,
   explanation:"<b>Đặc điểm:</b> Quan sát đầy đủ (camera thu đủ thông tin), Xác định (cùng mã QR cho kết quả duy nhất), Phân đoạn (quét từng khung hình), Tĩnh (môi trường không đổi trong khi xử lý), Rời rạc (dữ liệu pixel/khung), Tác tử đơn (một thiết bị).<br><b>Đáp án: C</b>"},

  {id:4,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho tập biểu thức Σ = {(b∨d)∧c, b→(a∨d), (c∧d)→f, (c∧f)→(h∧k)}. Hãy chọn tập GT để áp dụng phương pháp Hợp giải với Σ có thể chứng minh được k:",
   options:["GT = {b}", "GT = {a}", "GT = {c}", "GT = {d}"],answer:3,
   explanation:"Chuyển Σ sang CNF: (1) b∨d, (2) c, (3) ¬b∨a∨d, (4) ¬c∨¬d∨f, (5) ¬c∨¬f∨h, (6) ¬c∨¬f∨k. Thêm GT={d}: (7) d.<br>Hợp giải: (4)+(2)→¬d∨f, +(7)→f, (6)+(2)→¬f∨k, +f→k.<br><b>Đáp án: D</b>"},

  {id:5,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho các vị từ: Student(x), Quiz(x), Got100(x,y). Chọn phương án có giải nghĩa KHÔNG đúng:",
   options:[
     "∀y∃x(Quiz(y)→(Student(x)∨Got100(x,y)))",
     "∀y∃x(Quiz(y)→(Student(x)∧Got100(x,y)))",
     "∃x∃y(Student(x)∧Quiz(y)∧Got100(x,y))",
     "∀x∀y((Student(x)∧Quiz(y))→Got100(x,y))"
   ],answer:0,
   explanation:"Phương án A dùng '∨' ở hậu đề nên chỉ cần Student(x) đúng là đủ, không cần Got100(x,y). Do đó diễn giải sai.<br><b>Đáp án: A</b>"},

  {id:6,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho một bài toán được biểu diễn bởi không gian trạng thái hữu hạn. Câu trả lời đầy đủ nhất về tính hoàn chỉnh của các phương pháp tìm kiếm:",
   options:[
     "BFS và IDS thỏa mãn tính hoàn chỉnh",
     "BFS thỏa mãn tính hoàn chỉnh",
     "BFS và DFS thỏa mãn tính hoàn chỉnh",
     "BFS, DFS và IDS thỏa mãn tính hoàn chỉnh"
   ],answer:0,
   explanation:"BFS khám phá theo lớp độ sâu tăng dần → hoàn chỉnh. IDS lặp DFS với giới hạn độ sâu tăng dần → hoàn chỉnh. DFS có thể sa lầy vào nhánh vô tận → không hoàn chỉnh.<br><b>Đáp án: A</b>"},

  {id:7,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho dãy ABAB, có thể thay AB→CB, BA→C, BB→B, Cx→x. Đích là B. Dùng Greedy best-first với g(n) = độ dài hiện tại - 1. Lời giải thu được?",
   options:[
     "ABAB→ABCE→ABE→CEB→EB→B",
     "ABAB→ACB→AB→CB→B",
     "ABAB→ABCE→CEBE→CBE→EB→B",
     "ABAB→CEAB→CAB→BCE→BE→B"
   ],answer:1,
   explanation:"Từ ABAB (dài 4, phí 3) sinh: CBAB (dài 4, phí 3) và ACB (dài 3, phí 2). Chọn ACB (phí 2). ACB → AB (Cx→x) → CB (AB→BA) → B (Cx→x).<br><b>Đáp án: B</b>"},

  {id:8,ky:"ky20241",label:"Kỳ 20241",
   text:"Tại sao vai trò của AI mờ nhạt trong việc giúp phát hiện và chống chọi với đại dịch Covid-19?",
   options:[
     "Bác sĩ Lý Văn Lượng không phải người làm AI",
     "AI cần kinh nghiệm, tri thức con người hoặc dữ liệu tin cậy — những thứ chưa có đầu dịch",
     "AI có thể làm mọi thứ, trừ trường hợp này",
     "AI chưa đủ khả năng xử lý vấn đề toàn cầu"
   ],answer:1,
   explanation:"Các phương pháp AI (nhất là học máy) phụ thuộc vào tập dữ liệu lớn và đa dạng — những dữ liệu chính xác về triệu chứng, xét nghiệm, di truyền virus chưa kịp thu thập trong giai đoạn đầu dịch.<br><b>Đáp án: B</b>"},

  {id:9,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho C1={(1,1),(2,6),(3,4),(4,2),(4,8),(5,5),(7,1),(7,4)}, C2={(5,4),(6,3),(6,4),(6,6),(6,7),(7,3),(8,8)}. Phân lớp (4,4) bằng k-NN (Euclid) với k=3, k=9, k=15?",
   options:["C1, C1, C1", "C1, C1, C2", "C2, C2, C1", "C1, C2, C2"],answer:0,
   explanation:"<b>k=3:</b> (3,4)-C1, (5,4)-C2, (5,5)-C1 → 2C1,1C2 → C1.<br><b>k=9:</b> 5C1, 4C2 → C1.<br><b>k=15:</b> 8C1, 7C2 → C1.<br><b>Đáp án: A</b>"},

  {id:10,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho Σ = {(a∨b)∧c, b→(a∨d), (a∧c)→f, (c∧f)→(h∧k)}. Tập nào tương đương với Σ?",
   options:[
     "{a, b, c, b→d, b→a, a∧c→f, c∧f→h, c∧f→k}",
     "{a∨b, c, ¬b∨a∨d, ¬a∨¬c∨f, ¬c∨¬f∨h, ¬c∨¬f∨k}",
     "{c∨a∨b, ¬b∨a∨d, ¬a∨¬c∨f, ¬c∨¬f∨h, ¬c∨¬f∨k}",
     "{a, b, c→d, ¬b∨a∨d, ¬c∨¬f∨h, ¬c∨¬f∨k}"
   ],answer:1,
   explanation:"Chuyển Σ sang CNF: (a∨b)∧c → {a∨b, c}. b→(a∨d) → {¬b∨a∨d}. (a∧c)→f → {¬a∨¬c∨f}. (c∧f)→(h∧k) → {¬c∨¬f∨h, ¬c∨¬f∨k}.<br><b>Đáp án: B</b>"},

  {id:11,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho biểu thức ∀x(∃y: Like(x,y)). Biểu thức nào tương đương?",
   options:["∃y(∀x: Like(x,y))", "∀y(∃x: Like(x,y))", "¬(∀x(∃y: ¬Like(x,y)))", "¬(∃x(∀y: ¬Like(x,y)))"],answer:3,
   explanation:"Áp dụng De Morgan cho lượng từ: ∀x∃y P(x,y) ≡ ¬∃x∀y ¬P(x,y).<br><b>Đáp án: D</b>"},

  {id:12,ky:"ky20241",label:"Kỳ 20241",
   text:"Các cấu trúc được bổ sung cho cú pháp logic vị từ so với logic mệnh đề:",
   options:[
     "Ví dụ, biến, hàm, hằng, diễn dịch",
     "Vị từ, biến, hằng, hàm, lượng tử",
     "Vị từ, biến, lượng tử, hằng, phép gán trị",
     "Tập thành tố, vị từ, lượng tử, biến, hằng"
   ],answer:1,
   explanation:"Logic vị từ mở rộng logic mệnh đề bằng: <b>Vị từ</b> (biểu diễn quan hệ), <b>Hằng</b> (đối tượng cụ thể), <b>Biến</b> (tham số), <b>Hàm</b> (tạo đối tượng), <b>Lượng tử</b> ∀,∃.<br><b>Đáp án: B</b>"},

  {id:13,ky:"ky20241",label:"Kỳ 20241",
   text:"Độ phức tạp bộ nhớ của BFS, DFS, IDS lần lượt là:",
   options:["O(b<sup>m</sup>), O(d+1), O(bd)", "O(b<sup>d+1</sup>), O(bd), O(bdm)", "O(bd), O(b<sup>d+1</sup>), O(bdm)", "O(b<sup>d+1</sup>), O(bd), O(bdm)"],answer:0,
   explanation:"<b>BFS:</b> lưu toàn bộ frontier đến độ sâu tối đa m → O(b<sup>m</sup>). <b>DFS:</b> chỉ lưu ngăn xếp từ gốc đến độ sâu d → O(d+1). <b>IDS:</b> lặp DFS, bộ nhớ dùng cho đệ quy độ sâu d và các nút con → O(bd).<br><b>Đáp án: A</b>"},

  {id:14,ky:"ky20241",label:"Kỳ 20241",
   text:"A* thỏa mãn tính hoàn chỉnh trong trường hợp:",
   options:[
     "Luôn thỏa mãn",
     "Khi không gian trạng thái hữu hạn",
     "Khi không gian trạng thái hữu hạn và có cơ chế tránh lặp trạng thái",
     "Khi có cơ chế tránh lặp trạng thái"
   ],answer:2,
   explanation:"A* chỉ đảm bảo tìm được lời giải nếu: (1) Không gian trạng thái hữu hạn, và (2) Thuật toán phát hiện và loại bỏ trạng thái đã xét (duplicate detection) để tránh lặp vô hạn.<br><b>Đáp án: C</b>"},

  {id:15,ky:"ky20241",label:"Kỳ 20241",
   text:"Khái niệm 'Trí tuệ nhân tạo' được chính thức thừa nhận tại hội nghị năm nào?",
   options:["1943", "1956", "1965", "1960"],answer:1,
   explanation:"Khái niệm 'Artificial Intelligence' lần đầu được John McCarthy đề xuất tại Hội nghị Dartmouth mùa hè 1956 — cột mốc khai sinh lĩnh vực AI.<br><b>Đáp án: B</b>"},

  {id:16,ky:"ky20241",label:"Kỳ 20241",
   text:"Phương án phù hợp nhất về Tác tử phản xạ đơn giản:",
   options:[
     "Tác tử chọn hành động đem lại lợi ích lớn hơn",
     "Tác tử hành động theo quy tắc có điều kiện phù hợp với trạng thái hiện thời",
     "Tác tử ghi tập mục tiêu và chọn hành động đạt mục tiêu",
     "Tác tử dùng mô hình nội bộ giám sát trạng thái môi trường"
   ],answer:1,
   explanation:"Tác tử phản xạ đơn giản hoạt động dựa trên quy tắc điều kiện–hành động (condition–action rules).<br><b>Đáp án: B</b>"},

  {id:17,ky:"ky20241",label:"Kỳ 20241",
   text:"Mệnh đề thuộc logic vị từ có nghĩa (đúng/sai) khi nào?",
   options:[
     "Mọi biến đều được gán hằng",
     "Biểu thức đã được biến đổi về dạng chuẩn",
     "Mọi biến đều được gán hằng và có diễn dịch xác định cho hằng số",
     "Biểu thức không chứa lượng từ"
   ],answer:2,
   explanation:"Công thức logic vị từ chỉ đánh giá được đúng/sai khi không còn biến tự do — biến đã thành ground term hoặc bị ràng buộc bởi lượng từ, và có diễn dịch xác định cho các hằng số.<br><b>Đáp án: C</b>"},

  {id:18,ky:"ky20241",label:"Kỳ 20241",
   text:"Những lĩnh vực nào đóng vai trò nền tảng của AI?",
   options:["Toán học, Vật lý, Kinh tế", "Logic, Toán học, Kinh tế", "Toán học, Vật lý, Chính trị", "Logic, Toán học, Vật lý"],answer:1,
   explanation:"AI phát triển trên ba trụ cột: <b>Logic</b> (suy luận, chứng minh), <b>Toán học</b> (tối ưu, đại số tuyến tính, lý thuyết tính toán), <b>Kinh tế</b> (lý thuyết quyết định, hàm tiện ích).<br><b>Đáp án: B</b>"},

  {id:19,ky:"ky20241",label:"Kỳ 20241",
   text:"Công ty viễn thông muốn nhóm khách hàng thành các nhóm phân biệt. Bài toán thuộc loại:",
   options:["Chuyển đổi dữ liệu", "Biểu diễn tri thức", "Học có giám sát", "Học không giám sát"],answer:3,
   explanation:"Phân nhóm khách hàng dựa trên đặc trưng mà không có nhãn trước là bài toán <b>phân cụm (clustering)</b>, thuộc <b>học không giám sát</b>.<br><b>Đáp án: D</b>"},

  {id:20,ky:"ky20241",label:"Kỳ 20241",
   text:"Giải quyết vấn đề bằng tìm kiếm trên không gian trạng thái là:",
   options:[
     "Tìm chuỗi trạng thái không quay lại trạng thái đã xét",
     "Tìm chuỗi trạng thái cho phép đạt hành động mong muốn",
     "Tìm chuỗi hành động cho phép đạt trạng thái mong muốn",
     "Tìm chuỗi hành động không thực hiện lại hành động đã áp dụng"
   ],answer:2,
   explanation:"Giải quyết vấn đề bằng tìm kiếm trong không gian trạng thái là xác định <b>chuỗi hành động</b> từ trạng thái ban đầu đến trạng thái mục tiêu.<br><b>Đáp án: C</b>"},

  {id:21,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho dãy ACABEB, các phép thay: AB→BA, BB→C, CA→E, Ex→x. Đích là E. Số bước tối thiểu?",
   options:["10", "9", "7", "8"],answer:2,
   explanation:"1. ACABEB→AEBEB (CA→E). 2. AEBEB→ABEB (Ex→x). 3. ABEB→BAEB (AB→BA). 4. BAEB→BAB (Ex→x). 5. BAB→BBA (AB→BA). 6. BBA→CA (BB→C). 7. CA→E. Tổng 7 bước.<br><b>Đáp án: C</b>"},

  {id:22,ky:"ky20241",label:"Kỳ 20241",
   text:"Giải thuật nào sau đây là hoàn chỉnh?",
   options:["Các giải thuật tìm kiếm cục bộ", "Tìm kiếm sâu dần (IDS)", "Tìm kiếm giới hạn độ sâu (DLS)", "Tìm kiếm theo chiều sâu (DFS)"],answer:1,
   explanation:"IDS lặp lại DFS với giới hạn độ sâu tăng dần, đảm bảo khám phá mọi nút ở tầng thấp trước → hoàn chỉnh.<br><b>Đáp án: B</b>"},

  {id:23,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho tam giác ABC với các góc A,B,C và cạnh a=BC, b=AC, c=AB. Với các quy tắc suy diễn, GT nào suy được KL?",
   options:["GT={a,A,B,C}, KL={b}", "GT={a,B,b}, KL={c}", "GT={a,B,C}, KL={b}", "GT={a,A,B,b}, KL={c}"],answer:3,
   explanation:"Từ GT={a,A,B,b}: A∧B→C ⇒ C. Sau đó a∧b∧C→c ⇒ c. Vậy suy ra được KL={c}.<br><b>Đáp án: D</b>"},

  {id:24,ky:"ky20241",label:"Kỳ 20241",
   text:"Biểu thức (¬P(x)∧Q(x,y)) → R(x) khi chuyển về CNF được:",
   options:["¬P(x)∨¬Q(x,y)∨R(x)", "¬P(x)∧(¬Q(x,y)∨R(x))", "P(x)∧(¬Q(x,y)∨R(x))", "P(x)∨¬Q(x,y)∨R(x)"],answer:3,
   explanation:"(A→B) ≡ ¬A∨B. A = ¬P∧Q ⇒ ¬(¬P∧Q)∨R ≡ (¬¬P∨¬Q)∨R ≡ P∨¬Q∨R.<br><b>Đáp án: D</b>"},

  {id:25,ky:"ky20241",label:"Kỳ 20241",
   text:"Hành vi của tác tử được mô tả tốt nhất bằng:",
   options:["Chuỗi các cảm nhận", "Bộ phận cảm biến và bộ phận hành động", "Hàm tác tử", "Môi trường mà tác tử đang thực hiện"],answer:2,
   explanation:"Hàm tác tử (agent function) là ánh xạ từ chuỗi cảm nhận sang tập hành động — mô tả đầy đủ và chính xác nhất về hành vi của tác tử.<br><b>Đáp án: C</b>"},

  {id:26,ky:"ky20241",label:"Kỳ 20241",
   text:"Phát biểu nào KHÔNG chính xác về Overfitting?",
   options:[
     "Overfitting ảnh hưởng đến khả năng khái quát hóa",
     "Hàm A được gọi là Overfitting nếu tồn tại hàm g tối ưu hơn A trên tập thử nghiệm, nhưng g tốt hơn A trên tập huấn luyện",
     "Hàm A được gọi là Overfitting nếu tồn tại hàm g tối ưu hơn A trên tập huấn luyện, nhưng g tốt hơn A trên dữ liệu tương lai",
     "Nguyên nhân: hàm quá phức tạp, nhiễu, hoặc tập mẫu quá nhỏ"
   ],answer:1,
   explanation:"Đáp án B mô tả ngược: nói 'g tốt hơn trên tập thử nghiệm nhưng thua trên huấn luyện' — không phản ánh đúng khái niệm Overfitting.<br><b>Đáp án: B</b>"},

  {id:27,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho I(p)=0, I(q)=1, I(r)=1, I(s)=0. F=((p∨q)∧r)→(r∧s), G=((p∧r)→s)∧((q∧r)→s). Phát biểu nào KHÔNG đúng?",
   options:["F=G", "F ⊨ G", "Cả F và G đều không đúng với I", "Cả F và G đều đúng với I"],answer:3,
   explanation:"Với I: F=0, G=0. A đúng vì F=G=0. B đúng vì không có mô hình nào F=1, G=0. C đúng. D sai.<br><b>Đáp án: D</b>"},

  {id:28,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho dãy ACABEB, các phép thay: AB→BA, BB→C, CA→E, Ex→x. Hành động thay đầu tiên nào KHÔNG đem lại kết quả?",
   options:["Thay CA bằng E", "Thay AB bằng BA", "Thay Ex bằng x", "Thay BB bằng C"],answer:2,
   explanation:"Nếu ngay bước đầu áp dụng Ey→y (xóa E), ta sẽ không còn E nào để hướng tới đích và không thể phục hồi được.<br><b>Đáp án: C</b>"},

  {id:29,ky:"ky20241",label:"Kỳ 20241",
   text:"Robot lau nhà chứng tỏ điều gì?",
   options:["Máy móc hành động (thông minh) như con người", "Máy móc suy nghĩ như con người", "Máy móc hành động một cách hợp lý", "Máy móc suy nghĩ một cách hợp lý"],answer:2,
   explanation:"Robot lau nhà tự động chọn hành động dựa trên cảm nhận môi trường với mục tiêu tối ưu hiệu quả — đó là <b>hành động một cách hợp lý</b> theo định nghĩa tác tử hợp lý (rational agent).<br><b>Đáp án: C</b>"},

  {id:30,ky:"ky20241",label:"Kỳ 20241",
   text:"Biểu diễn 'Nam có ít nhất hai chị gái' bằng logic vị từ:",
   options:[
     "∃x,y(ChiGai(x,Nam)∧ChiGai(y,Nam))→(x≠y)",
     "∀x,y(ChiGai(x,Nam)∧ChiGai(y,Nam)∧(x≠y))",
     "∃x,y(ChiGai(x,Nam)∧ChiGai(y,Nam)∧(x≠y))",
     "∀x,y(ChiGai(x,Nam)∧ChiGai(y,Nam))→(x≠y)"
   ],answer:2,
   explanation:"'Ít nhất hai' = tồn tại hai cá thể khác nhau x,y đều là chị gái của Nam. Dùng ∃x,y và ∧, đồng thời x≠y.<br><b>Đáp án: C</b>"},

  {id:31,ky:"ky20241",label:"Kỳ 20241",
   text:"Phương pháp cắt tỉa α–β trong trò chơi đối kháng là:",
   options:[
     "MAX bỏ qua giá trị lớn hơn α, MIN bỏ qua giá trị nhỏ hơn β",
     "MAX bỏ qua giá trị nhỏ hơn α, MIN bỏ qua giá trị lớn hơn β",
     "Xác định bằng việc xét giá trị MIN/MAX với mỗi nút",
     "Chiến lược MAX phụ thuộc nước đi của MIN và ngược lại"
   ],answer:1,
   explanation:"α là ngưỡng dưới MAX đảm bảo — nhánh nào trả về nhỏ hơn α ở nút MAX đều bị loại. β là ngưỡng trên MIN đảm bảo — nhánh nào trả về lớn hơn β ở nút MIN đều bị loại.<br><b>Đáp án: B</b>"},

  {id:32,ky:"ky20241",label:"Kỳ 20241",
   text:"Các tiêu chí đánh giá phương pháp tìm kiếm gồm:",
   options:[
     "Hoàn chỉnh, độ phức tạp thời gian, độ phức tạp bộ nhớ, tính dừng",
     "Hoàn chỉnh, tính tối ưu, tính dừng, độ phức tạp thời gian",
     "Hoàn chỉnh, độ phức tạp thời gian, độ phức tạp bộ nhớ, tính tối ưu",
     "Hoàn chỉnh, tính tối ưu, tính dừng, độ phức tạp bộ nhớ"
   ],answer:2,
   explanation:"Bốn tiêu chí: <b>Tính hoàn chỉnh</b>, <b>Tính tối ưu</b>, <b>Độ phức tạp thời gian</b>, <b>Độ phức tạp bộ nhớ</b>.<br><b>Đáp án: C</b>"},

  {id:33,ky:"ky20241",label:"Kỳ 20241",
   text:"Cho F=(p→q)∧(q→p), G=(¬p∧¬q)∨(p∧q). Phát biểu nào chính xác?",
   options:["F ở dạng CNF", "F ở dạng DNF", "F và G tương đương", "G ở dạng CNF"],answer:2,
   explanation:"F=(p→q)∧(q→p) chưa ở CNF. G=(¬p∧¬q)∨(p∧q) là DNF. Cả hai đều đúng khi p,q cùng giá trị → F≡G.<br><b>Đáp án: C</b>"},

  {id:34,ky:"ky20241",label:"Kỳ 20241",
   text:"Phát biểu nào KHÔNG đúng với bài toán Thỏa mãn Ràng buộc (CSP)?",
   options:[
     "Lập thời khóa biểu là ví dụ về CSP",
     "Tìm kiếm quay lui giống BFS với mỗi nút là phép gán giá trị cho biến",
     "Tìm kiếm quay lui khác kiểm thử, chỉ gán một biến tại một thời điểm",
     "Lời giải CSP là phép gán đầy đủ thỏa tất cả ràng buộc"
   ],answer:1,
   explanation:"Backtracking thực chất là DFS (gán đến giới hạn rồi quay lui), không phải BFS.<br><b>Đáp án: B</b>"},

  {id:35,ky:"ky20241",label:"Kỳ 20241",
   text:"Viết câu 'For every a, if a is a poet, then a is a writer' dưới dạng logic vị từ:",
   options:[
     "(∃x: Poet(x)→Writer(x)) ∧ (∀x: Poet(x)→Writer(x))",
     "∀x: Poet(x)→Writer(x)",
     "(∃x: Poet(x)→Writer(x)) ∨ (∀x: Poet(x)→Writer(x))",
     "∃x: Poet(x)→Writer(x)"
   ],answer:1,
   explanation:"'For every a' = ∀x, 'if a is poet then a is writer' = Poet(x)→Writer(x). Ghép lại: ∀x(Poet(x)→Writer(x)).<br><b>Đáp án: B</b>"},

  {id:36,ky:"ky20241",label:"Kỳ 20241",
   text:"TWO + TWO = FOUR. Mỗi chữ số khác nhau. Bước 1: thay F,O,R thỏa ràng buộc cột đơn vị. Có bao nhiêu phương án?",
   options:["9", "8", "7", "6"],answer:0,
   explanation:"F=1. O∈{0..9} sao cho R=2O mod 10 và R≠O. Các cặp (O,R): (1,2),(2,4),(3,6),(4,8),(5,0),(6,2),(7,4),(8,6),(9,8) — 9 cặp.<br><b>Đáp án: A</b>"},

  // ========== KỲ 20221 (54 câu - song ngữ) ==========
  {id:37,ky:"ky20221",label:"Kỳ 20221",
   text:"Đâu là bản dịch chính xác sang Logic bậc nhất: 'Một số ngày vào mùa đông có nắng'?<br><i>('Some days in the winter are sunny')</i>",
   options:[
     "∃x: Day(x, Winter) ∨ Sunny(x)",
     "∃x: Sunny(x) → Day(x, Winter)",
     "∃x: Day(x, Winter) ∧ Sunny(x)",
     "∀x: Day(x, Winter) → Sunny(x)"
   ],answer:2,
   explanation:"'Some days in the winter are sunny' = tồn tại x sao cho x là ngày mùa đông VÀ x có nắng. Dùng ∧ (hội).<br><b>Đáp án: C</b>"},

  {id:38,ky:"ky20221",label:"Kỳ 20221",
   text:"Hành động tiếp theo của tác tử phản xạ đơn giản (simple reflex agent) hoàn toàn phụ thuộc vào:<br><i>('The next action of a simple reflex agent completely depends upon')</i>",
   options:[
     "Current percept (Cảm nhận hiện tại)",
     "Utility function (Hàm độ lợi)",
     "Internal state (Trạng thái bên trong)",
     "Percept history (Lịch sử cảm nhận)"
   ],answer:0,
   explanation:"Simple reflex agent chọn hành động dựa trên percept hiện tại thông qua condition-action rules, không cần internal state hay percept history.<br><b>Đáp án: A</b>"},

  {id:39,ky:"ky20221",label:"Kỳ 20221",
   text:"Có bao nhiêu mệnh đề phủ định (negative literal) trong một mệnh đề dạng chuẩn Horn?<br><i>('How many negative literals can appear in a clause in Horn normal form?')</i>",
   options:[
     "Minimum 1 (Tối thiểu 1)",
     "Unconstrained (Không ràng buộc)",
     "None (Không có)",
     "Maximum 1 (Tối đa 1)"
   ],answer:3,
   explanation:"Horn clause có dạng A₁∧A₂∧...∧Aₙ → B, tức là có nhiều nhất 1 positive literal và các literal còn lại là negative.<br><b>Đáp án: D</b>"},

  {id:40,ky:"ky20221",label:"Kỳ 20221",
   text:"Từ {∀x: bird(x)→flies(x), bird(Piupiu)} dùng Modus Ponens suy ra:<br><i>('From the two assumptions... using unification and Modus Ponens, one can infer')</i>",
   options:[
     "bird(x) and bird(Piupiu)",
     "bird(Piupiu)",
     "flies(Piupiu)",
     "flies(x)"
   ],answer:2,
   explanation:"Thay x=Piupiu vào ∀x(bird(x)→flies(x)) → bird(Piupiu)→flies(Piupiu). Kết hợp bird(Piupiu) → flies(Piupiu).<br><b>Đáp án: C</b>"},

  {id:41,ky:"ky20221",label:"Kỳ 20221",
   text:"Chiến lược heuristic giá trị ít ràng buộc nhất (LCV) ưu tiên:<br><i>('The least-constraining-value heuristic prefers')</i>",
   options:[
     "Biến có ít giá trị hợp lệ nhất",
     "Giá trị loại bỏ ít lựa chọn nhất cho các biến lân cận",
     "Biến có giá trị nhỏ nhất",
     "Giá trị nhỏ nhất cho mọi biến"
   ],answer:1,
   explanation:"LCV là heuristic cho value ordering: chọn giá trị ít ràng buộc nhất với các biến lân cận, giúp tăng khả năng tìm lời giải.<br><b>Đáp án: B</b>"},

  {id:42,ky:"ky20221",label:"Kỳ 20221",
   text:"Hành vi của tác tử được mô tả tốt nhất bởi:<br><i>('Agent's behavior can be best described by')</i>",
   options:[
     "Percept sequence (Chuỗi cảm nhận)",
     "Environment (Môi trường)",
     "Agent function (Hàm tác tử)",
     "Sensors and Actuators (Cảm biến và Bộ chấp hành)"
   ],answer:2,
   explanation:"Agent function ánh xạ từ percept sequence sang action, mô tả đầy đủ nhất hành vi của tác tử.<br><b>Đáp án: C</b>"},

  {id:43,ky:"ky20221",label:"Kỳ 20221",
   text:"Nếu phân giải Robinson không sinh ra mệnh đề mới và không có mâu thuẫn thì:<br><i>('If no new clause is generated and no contradiction in Resolution, then')</i>",
   options:[
     "Không thể kết luận",
     "alpha không được suy dẫn từ KB",
     "alpha được suy dẫn từ KB",
     "Cần thêm bước lặp"
   ],answer:1,
   explanation:"Resolution refutation: nếu không thể suy ra empty clause (mâu thuẫn) thì KB ⊭ ¬alpha, tức KB không suy dẫn được alpha.<br><b>Đáp án: B</b>"},

  {id:44,ky:"ky20221",label:"Kỳ 20221",
   text:"Trong cắt tỉa Alpha-Beta, Alpha và Beta được cập nhật ở đâu?<br><i>('Where do Alpha and Beta get updated in Alpha-Beta pruning?')</i>",
   options:[
     "Trạng thái ban đầu",
     "Nút có giá trị lớn hơn Beta và nhỏ hơn Alpha",
     "Khi đến nút lá",
     "Dọc theo đường đi tìm kiếm"
   ],answer:3,
   explanation:"Alpha và Beta được cập nhật dọc theo đường đi khi các nút được đánh giá.<br><b>Đáp án: D</b>"},

  {id:45,ky:"ky20221",label:"Kỳ 20221",
   text:"Suy diễn tiến (forward chaining) là cơ chế __, suy diễn lùi (backward chaining) là cơ chế __:",
   options:[
     "goal-driven, goal-driven",
     "data-driven, data-driven",
     "goal-driven, data-driven",
     "data-driven, goal-driven"
   ],answer:3,
   explanation:"Forward chaining bắt đầu từ dữ liệu (data) → data-driven. Backward chaining bắt đầu từ mục tiêu (goal) → goal-driven.<br><b>Đáp án: D</b>"},

  {id:46,ky:"ky20221",label:"Kỳ 20221",
   text:"'Một thuật toán tối ưu có nghĩa là độ phức tạp thời gian tối thiểu' — phát biểu này:<br><i>('Optimal means minimal time complexity')</i>",
   options:["False (Sai)", "True (Đúng)"],answer:0,
   explanation:"Optimal (tối ưu) nghĩa là tìm được lời giải có chi phí thấp nhất, không phải độ phức tạp thời gian tối thiểu.<br><b>Đáp án: A</b>"},

  {id:47,ky:"ky20221",label:"Kỳ 20221",
   text:"Thuật toán nào luôn mở rộng nút gần mục tiêu nhất?<br><i>('Which search algorithm always expands the node closest to the goal?')</i>",
   options:[
     "Greedy best-first search",
     "Depth-first search",
     "A* search",
     "Best-first search"
   ],answer:0,
   explanation:"Greedy best-first chỉ dùng heuristic h(n) để đánh giá, luôn chọn nút gần mục tiêu nhất (theo ước lượng), không xét chi phí đường đi đã qua.<br><b>Đáp án: A</b>"},

  {id:48,ky:"ky20221",label:"Kỳ 20221",
   text:"Phát biểu đúng về tìm kiếm cục bộ (local search):<br><i>('Which statement is true for local search?')</i>",
   options:[
     "Đường đi từ đầu đến đích phải được lưu",
     "Chi phí đường đi phải tối thiểu",
     "Mọi đường đi đều được xét",
     "Đường đi từ đầu đến đích không quan trọng"
   ],answer:3,
   explanation:"Local search (hill climbing, simulated annealing, etc.) chỉ giữ trạng thái hiện tại, không quan tâm đường đi, chỉ cần trạng thái đích.<br><b>Đáp án: D</b>"},

  {id:49,ky:"ky20221",label:"Kỳ 20221",
   text:"Chọn phát biểu ĐÚNG về overfitting trong phân lớp có giám sát:<br><i>('Choose the most appropriate statement about overfitting')</i>",
   options:[
     "Tất cả đều sai",
     "Khớp dữ liệu huấn luyện tốt nhưng dự đoán dữ liệu mới kém",
     "Khớp dữ liệu huấn luyện kém nhưng dự đoán dữ liệu mới tốt",
     "Khớp kém cả trên huấn luyện lẫn dữ liệu mới"
   ],answer:1,
   explanation:"Overfitting là mô hình quá khớp với training data (kể cả nhiễu), dẫn đến accuracy cao trên training nhưng kém trên unseen data — generalization kém.<br><b>Đáp án: B</b>"},

  {id:50,ky:"ky20221",label:"Kỳ 20221",
   text:"Minimax với Alpha-Beta có cần đến trạng thái kết thúc (leaf) để tìm lời giải?<br><i>('Does Minimax with Alpha-Beta need to reach a terminal state?')</i>",
   options:["No (Không)", "Yes (Có)"],answer:1,
   explanation:"Minimax (có hoặc không Alpha-Beta) cần đánh giá các nút lá (terminal state) để xác định giá trị và chọn nước đi tối ưu.<br><b>Đáp án: B</b>"},

  {id:51,ky:"ky20221",label:"Kỳ 20221",
   text:"Cho ∀x: (¬P(x) ∧ Q(x,y)) → R(x). Dạng CNF tương đương là:<br><i>('Conjunctive Normal Form equivalent')</i>",
   options:[
     "P(x) ∨ ¬Q(x,y) ∨ R(x)",
     "¬P(x) ∨ Q(x,y) ∨ R(x)",
     "P(x) ∨ Q(x,y) ∨ R(x)",
     "P(x); (¬Q(x,y) ∨ R(x))"
   ],answer:0,
   explanation:"(A→B) ≡ ¬A∨B. A=¬P∧Q → ¬(¬P∧Q)∨R ≡ (¬¬P∨¬Q)∨R ≡ P∨¬Q∨R.<br><b>Đáp án: A</b>"},

  {id:52,ky:"ky20221",label:"Kỳ 20221",
   text:"Biểu thức tương đương của P ↔ Q là:<br><i>('Which is an equivalent form of P ↔ Q?')</i>",
   options:[
     "(P∨Q)→(P∧Q)",
     "(P∧Q)→(P∨Q)",
     "(P∨Q)∧(P∧Q)",
     "(P→Q)∧(Q→P)"
   ],answer:3,
   explanation:"P↔Q ≡ (P→Q)∧(Q→P) ≡ (¬P∨Q)∧(¬Q∨P).<br><b>Đáp án: D</b>"},

  {id:53,ky:"ky20221",label:"Kỳ 20221",
   text:"Mục tiêu chính của hệ chuyên gia (expert system) là giúp máy:<br><i>('The main goal of an expert system is to enable the machine to')</i>",
   options:[
     "Act like humans",
     "Think like humans",
     "Think rationally",
     "Act rationally"
   ],answer:3,
   explanation:"Expert systems hướng đến hành động hợp lý (act rationally) dựa trên tri thức chuyên gia, không nhằm mô phỏng cách con người suy nghĩ.<br><b>Đáp án: D</b>"},

  {id:54,ky:"ky20221",label:"Kỳ 20221",
   text:"Khẳng định (P∧Q)∧¬R→¬Q là:<br><i>('The assertion (P∧Q)∧¬R→¬Q is')</i>",
   options:[
     "Satisfiable (thỏa mãn được)",
     "Valid (luôn đúng)",
     "Unsatisfiable (mâu thuẫn)"
   ],answer:0,
   explanation:"(P∧Q)∧¬R→¬Q ≡ ¬(P∧Q∧¬R)∨¬Q ≡ ¬P∨¬Q∨R∨¬Q ≡ ¬P∨¬Q∨R. Đây là satisfiable, không phải valid.<br><b>Đáp án: A</b>"},

  {id:55,ky:"ky20221",label:"Kỳ 20221",
   text:"Môi trường 'bán động' (semi-dynamic) là:<br><i>('Which environment is called semi-dynamic?')</i>",
   options:[
     "Môi trường và hiệu năng tác tử đều thay đổi",
     "Môi trường không thay đổi theo thời gian",
     "Môi trường không đổi nhưng hiệu năng tác tử thay đổi",
     "Môi trường thay đổi liên tục"
   ],answer:2,
   explanation:"Semi-dynamic: môi trường tĩnh (không đổi) nhưng hiệu năng (performance score) của tác tử thay đổi theo thời gian (vd: tác tử 'già đi').<br><b>Đáp án: C</b>"},

  {id:56,ky:"ky20221",label:"Kỳ 20221",
   text:"Trò chơi giải ô chữ (crossword puzzle) thuộc loại môi trường:<br><i>('What kind of environment does crossword puzzle have?')</i>",
   options:["Continuous", "Static (Tĩnh)", "Semi Dynamic", "Dynamic"],answer:1,
   explanation:"Crossword puzzle là môi trường tĩnh — ô chữ và gợi ý không thay đổi khi tác tử đang giải.<br><b>Đáp án: B</b>"},

  {id:57,ky:"ky20221",label:"Kỳ 20221",
   text:"Phát biểu đúng về học có giám sát (supervised learning):<br><i>('Which statement is correct about supervised learning?')</i>",
   options:[
     "Cần người giám sát real-time",
     "Thuật toán học từ dữ liệu",
     "Là meta-learning",
     "Mỗi dữ liệu có ít nhất một nhãn trong tập huấn luyện"
   ],answer:3,
   explanation:"Supervised learning yêu cầu dữ liệu huấn luyện có nhãn (labeled data) để mô hình học cách dự đoán.<br><b>Đáp án: D</b>"},

  {id:58,ky:"ky20221",label:"Kỳ 20221",
   text:"Mục tiêu chính của phép thử Turing là kiểm tra máy có khả năng:<br><i>('The main goal of Turing test is to check if the machine can')</i>",
   options:[
     "Think rationally",
     "Think like humans",
     "Act rationally",
     "Act like humans"
   ],answer:3,
   explanation:"Turing test đánh giá xem máy có hành vi không thể phân biệt với con người — tức là act like humans.<br><b>Đáp án: D</b>"},

  {id:59,ky:"ky20221",label:"Kỳ 20221",
   text:"Khác biệt giữa 'optimal' và 'optimally efficient':<br><i>('Difference between optimal and optimally efficient')</i>",
   options:[
     "Optimally efficient ≈ dùng ít bộ nhớ nhất; Optimal ≈ tìm đường đi chi phí thấp nhất",
     "Optimally efficient ≈ tìm đường đi chi phí thấp nhất; Optimal ≈ dùng ít bộ nhớ nhất",
     "Không có khác biệt",
     "Optimal nói về chi phí lời giải; Optimally efficient nói về số nút được mở rộng"
   ],answer:0,
   explanation:"Optimal: tìm được lời giải có chi phí thấp nhất. Optimally efficient: mở rộng số nút tối thiểu trong số các thuật toán optimal.<br><b>Đáp án: A</b>"},

  {id:60,ky:"ky20221",label:"Kỳ 20221",
   text:"Với bài toán thực tế, DFS thường có độ phức tạp thời gian ít hơn BFS:<br><i>('For real-life problems, DFS has less time complexity than BFS')</i>",
   options:[
     "False (Sai) — BFS và DFS có độ phức tạp giống nhau",
     "True (Đúng)",
     "False (Sai) — BFS ít phức tạp hơn DFS"
   ],answer:1,
   explanation:"Với nhiều bài toán thực tế, DFS đi sâu nhanh và có thể tìm lời giải sớm hơn BFS vì BFS phải mở rộng toàn bộ một tầng trước khi xuống tầng tiếp.<br><b>Đáp án: B</b>"},

  {id:61,ky:"ky20221",label:"Kỳ 20221",
   text:"Khẳng định 'P∧Q' là:<br><i>('The assertion P∧Q is')</i>",
   options:["Unsatisfiable", "Valid", "Not valid"],answer:2,
   explanation:"P∧Q có thể đúng (P=Q=1) hoặc sai (P=0) → thỏa mãn được (satisfiable) nhưng không phải luôn đúng (not valid).<br><b>Đáp án: C</b>"},

  {id:62,ky:"ky20221",label:"Kỳ 20221",
   text:"Tác tử phản xạ dựa trên mô hình (model-based reflex agent) thường:<br><i>('A model-based reflex agent usually')</i>",
   options:[
     "Duy trì cấu trúc mô tả phần thế giới không cảm nhận được",
     "Xây dựng mô hình toàn bộ thế giới",
     "Học thông tin mới từ môi trường",
     "Chứa mô hình phản ứng với mọi tín hiệu"
   ],answer:0,
   explanation:"Model-based reflex agent duy trì internal state để theo dõi phần môi trường không thể quan sát trực tiếp, giúp xử lý partially observable environments.<br><b>Đáp án: A</b>"},

  {id:63,ky:"ky20221",label:"Kỳ 20221",
   text:"Dịch sang FOL: 'Tất cả các nhà thơ đều là nhà văn'<br><i>('All poets are writers')</i>",
   options:[
     "∀x: Poet(x) → Writer(x)",
     "∀x: ¬Writer(x) ∨ Poet(x)",
     "∃x: Poet(x) → Writer(x)",
     "∀x: Poet(x) ∧ Writer(x)"
   ],answer:0,
   explanation:"'All poets are writers' = với mọi x, nếu x là poet thì x là writer: ∀x(Poet(x)→Writer(x)).<br><b>Đáp án: A</b>"},

  {id:64,ky:"ky20221",label:"Kỳ 20221",
   text:"Dịch sang FOL: 'Tất cả sinh viên đều học ít nhất một chuyên ngành'<br><i>('All students study at least one branch')</i>",
   options:[
     "∀x Student(x) → (∃y: Branch(y) ∧ StudyBranch(x,y))",
     "∀x∃y: Student(x) ∧ Branch(y) → StudyBranch(x,y)",
     "∃x Student(x) → (∃y: Branch(y) ∧ StudyBranch(x,y))",
     "∀x∀y: Student(x) ∧ Branch(y) → StudyBranch(x,y)"
   ],answer:0,
   explanation:"'All students study at least one branch' = với mọi sinh viên x, tồn tại chuyên ngành y mà x học y: ∀x(Student(x)→∃y(Branch(y)∧StudyBranch(x,y))).<br><b>Đáp án: A</b>"},

  {id:65,ky:"ky20221",label:"Kỳ 20221",
   text:"Trong hệ logic mờ, đầu ra của suy diễn mờ là số mờ và cần giải mờ tiếp — phát biểu này:<br><i>('Fuzzy Logic output needs de-fuzzification')</i>",
   options:["False (Sai)", "True (Đúng)"],answer:1,
   explanation:"Fuzzy inference engine trả về fuzzy set, cần qua de-fuzzification để chuyển thành giá trị crisp đầu ra.<br><b>Đáp án: B</b>"},

  {id:66,ky:"ky20221",label:"Kỳ 20221",
   text:"Loại biến cho kích cỡ áo thun (S, M, L, XL) là:<br><i>('Variable type for T-shirt size')</i>",
   options:[
     "Categorical, nominal (Định danh)",
     "Numeric, discrete (Số rời rạc)",
     "Categorical, ordinal (Thứ bậc)",
     "Numeric, continuous (Số liên tục)"
   ],answer:2,
   explanation:"Size S<M<L<XL có thứ tự nhưng khoảng cách không đều → categorical ordinal (biến thứ bậc).<br><b>Đáp án: C</b>"},

  {id:67,ky:"ky20221",label:"Kỳ 20221",
   text:"Dịch sang FOL: 'Không ai là hoàn hảo'<br><i>('No one is perfect')</i>",
   options:[
     "¬∃x Person(x) ∧ Perfect(x)",
     "∃x Person(x) → ¬Perfect(x)",
     "∀x Person(x) → ¬Perfect(x)",
     "¬∃x(Person(x) ∧ Perfect(x))"
   ],answer:3,
   explanation:"'No one is perfect' = không tồn tại x sao cho x là người VÀ x hoàn hảo: ¬∃x(Person(x)∧Perfect(x)).<br><b>Đáp án: D</b>"},

  {id:68,ky:"ky20221",label:"Kỳ 20221",
   text:"Thuật toán tìm kiếm đầy đủ (complete) và tối ưu (optimal) bắt buộc phải xét mọi đường đi đến đích:<br><i>('Any complete and optimal algorithm must examine all paths')</i>",
   options:["True (Đúng)", "False (Sai)"],answer:1,
   explanation:"Thuật toán complete và optimal không nhất thiết xét mọi đường đi. A* với admissible heuristic là optimal nhưng không cần expand tất cả.<br><b>Đáp án: B</b>"},

  {id:69,ky:"ky20221",label:"Kỳ 20221",
   text:"Thành phần nào dùng để xây dựng câu hợp lệ trong logic?<br><i>('Which component constructs legal sentences in logic?')</i>",
   options:[
     "Knowledge base (Cơ sở tri thức)",
     "Semantics (Ngữ nghĩa)",
     "Inference engine (Cơ chế suy diễn)",
     "Syntax (Cú pháp)"
   ],answer:3,
   explanation:"Syntax (cú pháp) định nghĩa các quy tắc tạo câu well-formed hợp lệ. Semantics gán ý nghĩa cho câu.<br><b>Đáp án: D</b>"},

  {id:70,ky:"ky20221",label:"Kỳ 20221",
   text:"Khung lý thuyết nào KHÔNG phải mô hình xử lý bất định trong AI?<br><i>('Which is NOT a framework for uncertain knowledge in AI?')</i>",
   options:[
     "Dempster-Shafer theory",
     "Possibility theory",
     "General relativity theory (Thuyết tương đối rộng)",
     "Probabilistic Decision Theory"
   ],answer:2,
   explanation:"General relativity là thuyết vật lý về hấp dẫn, không phải framework cho uncertain reasoning trong AI.<br><b>Đáp án: C</b>"},

  {id:71,ky:"ky20221",label:"Kỳ 20221",
   text:"Tại sao BFS, UCS không phù hợp với bài toán CSP?<br><i>('Why are standard search algorithms not adapted to CSP?')</i>",
   options:[
     "Không complete khi áp dụng cho CSP",
     "Tốn quá nhiều thời gian khi áp dụng cho CSP",
     "Bản chất không thể áp dụng",
     "Không optimal khi áp dụng cho CSP"
   ],answer:1,
   explanation:"Standard search (BFS, UCS) sinh ra toàn bộ không gian trạng thái, trong khi CSP dùng backtracking + inference để tỉa bớt nhánh, hiệu quả hơn nhiều.<br><b>Đáp án: B</b>"},

  {id:72,ky:"ky20221",label:"Kỳ 20221",
   text:"Ngành nào KHÔNG phải lĩnh vực nghiên cứu của AI?<br><i>('Which discipline is NOT a research area in AI?')</i>",
   options:[
     "Natural Language Processing",
     "Knowledge Representation",
     "Automated Reasoning",
     "Databases (Cơ sở dữ liệu)"
   ],answer:3,
   explanation:"Databases là lĩnh vực riêng của khoa học máy tính, không thuộc core research area của AI. NLP, Knowledge Representation, Automated Reasoning là các lĩnh vực AI cốt lõi.<br><b>Đáp án: D</b>"},

  {id:73,ky:"ky20221",label:"Kỳ 20221",
   text:"Thành phần nào KHÔNG phải thành phần chính của Hệ logic mờ?<br><i>('Which is NOT a main component of Fuzzy Logic Systems?')</i>",
   options:[
     "De-fuzzification module",
     "Fuzzy linguistic variables",
     "Fuzzy inference engine",
     "Fuzzification module"
   ],answer:1,
   explanation:"Các thành phần chính của Fuzzy Logic System: Fuzzification, Inference Engine, Defuzzification. Fuzzy linguistic variables là khái niệm chứ không phải một 'module' riêng.<br><b>Đáp án: B</b>"},

  {id:74,ky:"ky20221",label:"Kỳ 20221",
   text:"Trong Backtracking search, Degree heuristic dùng để:<br><i>('In backtracking search, Degree heuristic is used as')</i>",
   options:[
     "Tie-breaker cho Minimum Remaining Values (MRV)",
     "Phát hiện thất bại sớm cùng LCV",
     "Tie-breaker cho Least Constraining Values (LCV)",
     "Sắp xếp giá trị cùng MRV"
   ],answer:0,
   explanation:"Degree heuristic (chọn biến liên quan nhiều ràng buộc nhất) dùng làm tie-breaker khi MRV cho kết quả giống nhau cho nhiều biến.<br><b>Đáp án: A</b>"},

  {id:75,ky:"ky20221",label:"Kỳ 20221",
   text:"Bài toán tô màu bản đồ Úc (WA, NT, SA, Q, NSW, V) với backtracking + forward checking (không MRV/LCV), 3 màu. Số lượt gán để đạt lời giải?<br><i>('Australian map coloring... number of turns?')</i>",
   options:["6", "9", "12", "7"],answer:3,
   explanation:"Thứ tự WA-NT-SA-Q-NSW-V, với forward checking không dùng MRV/LCV, số lượt gán màu để tìm lời giải hợp lệ là 7.<br><b>Đáp án: D</b>"},

  {id:76,ky:"ky20221",label:"Kỳ 20221",
   text:"Loại biểu diễn tri thức nào có cấu trúc phân cấp 'is-a':<br><i>('Which knowledge representation is hierarchical with is-a?')</i>",
   options:[
     "Taxonomy (Phân loại học)",
     "Thesaurus (Từ điển đồng nghĩa)",
     "Ontology (Bản thể luận)",
     "List (Danh sách)"
   ],answer:2,
   explanation:"Ontology (bản thể luận) biểu diễn tri thức với các khái niệm, quan hệ phân cấp is-a, quan hệ ngữ nghĩa giữa các khái niệm.<br><b>Đáp án: C</b>"}
];
