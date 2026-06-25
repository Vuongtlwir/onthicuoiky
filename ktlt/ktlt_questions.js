// KTLT Questions - Combined (IDs 77-237)
// Source: On tap (84 q), 20221 exam (20 q), Thay Vuong (57 q)
// =====================================================
const ktltQuestions = [
  {id:77,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn phát biểu ĐÚNG về hàm có tham số ngầm định trong C++",
   options:[
       "Khi hàm có tham số ngầm định có prototype, thì giá trị ngầm định trong định nghĩa hàm có ý nghĩa cao hơn giá trị định nghĩa trong prototype.",
       "Khi đa năng hóa toán tử không được dùng tham số có giá trị ngầm định.",
       "Tham số ngầm định của hàm có thể nằm ở vị trí bất kỳ trong hàm có danh sách tham số nhiều hơn các tham số ngầm định.",
       "Tất cả các phát biểu trên đều sai."
   ],answer:3,
   explanation:"Cả 3 phát biểu đều sai. xem giải thích.<br><b>Đáp án: D</b> (suy luận từ đề 20221)"},

  {id:78,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Trong những phát biểu sau đây về sử dụng các khoảng trắng trong phong cách lập trình, phát biểu nào ĐÚNG?",
   options:[
       "Sử dụng tab thay cho space để căn lề (indentation)",
       "Sử dụng khoảng trắng để mã nguồn dễ đọc",
       "Không nên sử dụng tính năng tự động căn lề của trình soạn thảo",
       "Không cần phải căn lề do việc căn lề không làm thay đổi việc biên dịch chương trình"
   ],answer:1,
   explanation:"Khoảng trắng giúp mã nguồn dễ đọc.<br><b>Đáp án: B</b> (unknown)"},

  {id:79,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Một biến được gọi là biến toàn cục nếu:",
   options:[
       "Nó được khai báo trong tất cả các hàm, ngoại trừ hàm main().",
       "Nó được khai báo bên trong hàm main().",
       "Nó được khai báo ngoài tất cả các hàm, kể cả hàm main()",
       "Nó được khai báo bên ngoài hàm main()."
   ],answer:2,
   explanation:"Biến toàn cục: khai báo ngoài tất cả các hàm (kể cả main).<br><b>Đáp án: C</b> (unknown)"},

  {id:80,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Một biến được gọi là một biến cục bộ nếu:",
   options:[
       "Nó được khai báo bên trong các hàm ngoại trừ hàm main().",
       "Nó được khai báo bên trong hàm main().",
       "Nó được khai báo bên ngoài các hàm kể cả hàm main().",
       "Nó được khai báo bên trong các hàm kể cả hàm main()."
   ],answer:3,
   explanation:"Biến cục bộ: khai báo bên trong các hàm (kể cả main).<br><b>Đáp án: D</b> (unknown)"},

  {id:81,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Để hiển thị fileName và lineNumber của một file mã nguồn C, ta dùng các macro nào?",
   options:[
       "Tất cả các đáp án còn lại đều sai",
       "__NAME__ và __NUMBER__",
       "__FILE__ và __NUM__",
       "__FILE__ và __LINE__"
   ],answer:3,
   explanation:"Macro __FILE__ và __LINE__ chuẩn trong C/C++.<br><b>Đáp án: D</b> (unknown)"},

  {id:82,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Đâu không phải là ngôn ngữ lập trình bậc cao?",
   options:[
       "Python",
       "Pascal",
       "PHP",
       "Assembly"
   ],answer:3,
   explanation:"Assembly là ngôn ngữ bậc thấp.<br><b>Đáp án: D</b> (unknown)"},

  {id:83,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Đâu không phải là một trình biên dịch của ngôn ngữ C++?",
   options:[
       "Cython",
       "MSS Visual C++",
       "GNU GCC",
       "Clang",
       "Watcom C/C++"
   ],answer:0,
   explanation:"Cython biên dịch Python sang C, không phải C++ compiler.<br><b>Đáp án: A</b> (unknown)"},

  {id:84,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Phát biểu nào sau về kỹ thuật Assertion là SAI?",
   options:[
       "Assertion là một macro hay chương trình con dùng trong quá trình phát triển, cho phép chương trình tự kiểm tra khi chạy.",
       "Assertion có thể dùng để kiểm tra giả thiết được đưa ra trong code và loại bỏ những điều kiện không mong đợi.",
       "Assertion là một kỹ thuật sử dụng trong lập trình phòng ngừa.",
       "Assertion là kỹ thuật để phát hiện các lỗi liên quan tới bộ nhớ trong chương trình"
   ],answer:3,
   explanation:"Assertion không phải công cụ phát hiện lỗi bộ nhớ.<br><b>Đáp án: D</b> (unknown)"},

  {id:85,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn thứ tự ưu tiên đúng của các toán tử logic trong C/C++ (Từ cao -&gt; thấp):",
   options:[
       "NOT, OR, AND",
       "NOT, AND, OR",
       "AND, NOT, OR",
       "OR, NOT, AND"
   ],answer:1,
   explanation:"NOT (!) cao nhất, AND (&amp;&amp;), OR (||) thấp nhất.<br><b>Đáp án: B</b> (unknown)"},

  {id:86,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Thư viện nào giúp chương trình dừng lại ngay lập tức khi vi phạm một điều kiện nào đó?",
   options:[
       "Tất cả các đáp án còn lại đều đúng",
       "exception.h",
       "assert.h",
       "fault.h"
   ],answer:2,
   explanation:"assert() từ assert.h kiểm tra điều kiện gọi abort() nếu sai.<br><b>Đáp án: C</b> (unknown)"},

  {id:87,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Giả sử ma trận hai chiều arr: int a[1000][1000]; Chỉ ra câu lệnh đúng để in giá trị phần tử hàng i cột j (chọn đáp án đúng nhất):",
   options:[
       "cout &lt;&lt; a[i][j] &lt;&lt; endl;",
       "cout &lt;&lt; *(a + i + 1) + j + 1 &lt;&lt; endl;",
       "cout &lt;&lt; *(a + j) + i &lt;&lt; endl;",
       "cout &lt;&lt; *(*(a + i) + j) &lt;&lt; endl;",
       "cout &lt;&lt; *(a + i) + j &lt;&lt; endl;"
   ],answer:0,
   explanation:"a[i][j] là cách chuẩn. *(*(a+i)+j) cũng đúng. Các đáp án khác trả về địa chỉ.<br><b>Đáp án: A</b> (câu multi-select)"},

  {id:88,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn đáp án SAI trong các phát biểu sau:",
   options:[
       "Biến tĩnh (static) nằm trong cùng vùng nhớ cấp phát cho biến tổng thể",
       "Dữ liệu cấp phát động và biến trỏ nằm trong vùng nhớ heap",
       "Biến cục bộ và tham số của hàm nằm trong vùng nhớ stack",
       "Biến thanh ghi (register) nằm ngay trong CPU"
   ],answer:1,
   explanation:"Dữ liệu cấp phát động nằm trong heap, nhưng biến con trỏ nằm trong stack.<br><b>Đáp án: B</b> (suy luận từ phân tích trong đề)"},

  {id:89,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Cho khai báo: int M[][] = {{1,2,3},{4,5},}; Hãy lựa chọn đáp án Đúng:",
   options:[
       "M là mảng 2 chiều có kích thước 2x3",
       "M là mảng 2 chiều có kích thước 3x3",
       "M là mảng Không xác định",
       "Có lỗi syntax"
   ],answer:3,
   explanation:"Thiếu kích thước chiều thứ 2 → lỗi cú pháp.<br><b>Đáp án: D</b> (//đáp án đúng trong đề)"},

  {id:90,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Cấu trúc dữ liệu có thứ tự truy cập phần tử theo kiểu: vào sau ra trước",
   options:[
       "Queue",
       "Stack",
       "Vector",
       "Array"
   ],answer:1,
   explanation:"Stack là LIFO. Queue là FIFO.<br><b>Đáp án: B</b> (unknown)"},

  {id:91,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Trong các loại sau đây, loại nào không phải là đệ quy trực tiếp",
   options:[
       "Đệ quy nhị phân",
       "Đệ quy tuyến tính",
       "Đệ quy phi tuyến",
       "Đệ quy tương hỗ"
   ],answer:3,
   explanation:"Đệ quy tương hỗ là gián tiếp (2 hàm gọi nhau).<br><b>Đáp án: D</b> (unknown)"},

  {id:92,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Khuyến nghị ĐÚNG về quy tắc đặt tên phong cách lập trình tốt là:",
   options:[
       "Dùng chuỗi ký tự ngẫu nhiên để đặt tên",
       "Đặt tên có ý nghĩa để từ tên gọi có thể hiểu được vai trò của nó",
       "Chỉ dùng các ký tự đơn để đặt tên giúp viết mã nguồn nhanh chóng",
       "Đặt tên biến càng dài càng tốt"
   ],answer:1,
   explanation:"Tên có ý nghĩa giúp self-documenting code.<br><b>Đáp án: B</b> (unknown)"},

  {id:93,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Khi truy cập lần lượt các phần tử của mảng hai chiều kích thước 30x30, cách nào thường đem lại hiệu quả tốt hơn về tốc độ?",
   options:[
       "Truy cập cuối giảm dần hàng, đến giới hạn giảm cột",
       "Truy cập cuối giảm dần cột, đến giới hạn giảm hàng",
       "Truy cập đầu tăng dần hàng, đến giới hạn tăng cột",
       "Truy cập đầu tăng dần cột, đến giới hạn tăng hàng"
   ],answer:3,
   explanation:"C/C++ row-major: tăng cột trước, tăng hàng sau tối ưu cache.<br><b>Đáp án: D</b> (unknown)"},

  {id:94,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Mô tả nào sau đây đúng với khuôn mẫu hàm (function template) trong C++:",
   options:[
       "Cho phép xây dựng các hàm tổng quát",
       "Cho phép tạo chương trình theo mô-đun",
       "Cho phép viết các đoạn mã cụ thể cho một vấn đề",
       "Một tính năng không bổ sung sức mạnh nào cho ngôn ngữ"
   ],answer:0,
   explanation:"Function template cho generic programming.<br><b>Đáp án: A</b> (unknown)"},

  {id:95,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Phương pháp nào không được dùng để khử đệ quy?",
   options:[
       "Khử đệ quy bằng vòng lặp",
       "Khử đệ quy đuôi",
       "Khử đệ quy bằng Stack",
       "Khử đệ quy bằng Queue"
   ],answer:3,
   explanation:"Queue không được dùng để khử đệ quy. Các pp: vòng lặp, tail recursion, stack.<br><b>Đáp án: D</b> (unknown)"},

  {id:96,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Statement coverage đạt 100% có nghĩa là:",
   options:[
       "Toàn bộ chức năng đã được kiểm thử",
       "Tất cả dòng lệnh và nhánh đã được kiểm tra ít nhất một lần",
       "Tất cả dòng lệnh đã được kiểm tra ít nhất một lần",
       "Tất cả nhánh đã được kiểm tra ít nhất một lần"
   ],answer:2,
   explanation:"Statement coverage: mọi dòng lệnh đã thực thi ít nhất 1 lần.<br><b>Đáp án: C</b> (unknown)"},

  {id:97,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Các khai báo hàm nào dưới đây là hợp lệ?",
   options:[
       "void MyFunc(int a = 7, float b = 2.0, int c = 5, int d)",
       "void MyFunc(int a, float b = 2.0, int c, int d = 4)",
       "void MyFunc(int a = 7, float b, int c = 5, int d = 4)",
       "void MyFunc(int a, float b = 2.0, int c = 5, int d = 4)"
   ],answer:3,
   explanation:"Default params phải ở cuối danh sách tham số.<br><b>Đáp án: D</b> (unknown)"},

  {id:98,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Đâu là tệp mô tả các đối tượng luồng vào ra chuẩn cin, cout, cerr, clog của C++?",
   options:[
       "stdlib",
       "iostream",
       "stdio",
       "fstream"
   ],answer:1,
   explanation:"iostream định nghĩa cin, cout, cerr, clog.<br><b>Đáp án: B</b> (unknown)"},

  {id:99,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Cho khai báo: float myfunct(int&amp; a, float b); int x=10; float y=4.5; Lệnh gọi hàm nào đúng?",
   options:[
       "y = myfunct(24, 4.5);",
       "y = 0.5 * myfunct(x, 4.5);",
       "myfunct(4.5, y);",
       "y = myfunct(x + 5, y);"
   ],answer:1,
   explanation:"int&amp; cần lvalue (biến). x là lvalue, 24 và x+5 là rvalue.<br><b>Đáp án: B</b> (unknown)"},

  {id:100,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Đây là dạng đệ quy nào?<br><pre><code>int f(int n){\n  if (n&lt;3) return 1;\n  else return f(n-1) + 2*f(n-2);\n}</code></pre>",
   options:[
       "Đệ quy tương hỗ",
       "Đệ quy nhị phân",
       "Đệ quy tuyến tính",
       "Đệ quy phi tuyến"
   ],answer:1,
   explanation:"f gọi chính nó 2 lần trong 1 lần gọi → đệ quy nhị phân.<br><b>Đáp án: B</b> (unknown)"},

  {id:101,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn đáp án SAI: trong C++, vế trái của phép gán có thể là:",
   options:[
       "Một mảng",
       "Một biểu thức",
       "Một biến",
       "Một Hàm"
   ],answer:0,
   explanation:"Tên mảng là const pointer, không thể ở vế trái phép gán.<br><b>Đáp án: A</b> (unknown)"},

  {id:102,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Trong các cách đặt tên hàm sau, cách nào nên dùng? (Hàm xóa phần tử theo khóa trong bảng băm)",
   options:[
       "void deletedKeys",
       "void xoaKhoa",
       "void xoaKey",
       "void removeByKey"
   ],answer:3,
   explanation:"removeByKey tiếng Anh, rõ nghĩa, theo chuẩn đặt tên.<br><b>Đáp án: D</b> (unknown)"},

  {id:103,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn đáp án SAI về biến tĩnh (static variable):",
   options:[
       "Biến tĩnh là biến cục bộ của 1 hàm nên được cấp phát trong stack",
       "Biến tĩnh được cấp phát trong cùng vùng nhớ với biến tổng thể",
       "Biến tĩnh không được giải phóng khi hàm chứa nó thực hiện xong",
       "Giá trị của biến tĩnh chỉ được khởi tạo ở lần gọi hàm đầu tiên"
   ],answer:0,
   explanation:"Biến tĩnh nằm trong static segment, không phải stack.<br><b>Đáp án: A</b> (suy luận từ phân tích trong đề)"},

  {id:104,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Cho danh sách móc nối: struct S1{int info; S1 *next;} *head; Thêm p vào đầu danh sách:",
   options:[
       "head-&gt;next = p; p = head;",
       "p-&gt;next = head; head = p;",
       "p-&gt;next = head; head = p-&gt;next;",
       "Không có phương án nào đúng"
   ],answer:1,
   explanation:"p-&gt;next=head (trỏ đến đầu cũ), head=p (cập nhật đầu mới).<br><b>Đáp án: B</b> (unknown)"},

  {id:105,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Phát biểu nào dưới đây là chính xác về phong cách lập trình:",
   options:[
       "Giúp chương trình rõ ràng, đơn giản, dễ đọc, dễ hiểu",
       "Chỉ áp dụng cho C++ và Java",
       "Giúp tăng tốc độ thực thi",
       "Chỉ bao gồm quy tắc về chú thích"
   ],answer:0,
   explanation:"Phong cách tốt giúp rõ ràng, dễ đọc, dễ bảo trì.<br><b>Đáp án: A</b> (unknown)"},

  {id:106,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Phát biểu nào SAI về các tính năng của công cụ gỡ lỗi C/C++ hiện nay?",
   options:[
       "Thực thi từng câu lệnh sau điểm dừng",
       "Đặt breakpoint tại vị trí bất kỳ",
       "Phân tích lỗi core-dump",
       "Kiểm tra giá trị biến",
       "Tất cả đều sai"
   ],answer:4,
   explanation:"A-D đều là tính năng debugger phổ biến.<br><b>Đáp án: E</b> (unknown)"},

  {id:107,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn phát biểu ĐÚNG về hàm:",
   options:[
       "Trong C/C++ tên hàm phải là duy nhất",
       "Hàm trong C/C++ chỉ có duy nhất 1 cách truyền tham số là truyền tham trị",
       "Lời gọi hàm trong C++ có thể có số đối số ít hơn so với số tham số trong định nghĩa hàm",
       "Lời gọi hàm phải có số đối số đúng bằng và hợp kiểu so với tham số"
   ],answer:2,
   explanation:"Có tham số ngầm định → gọi với ít đối số hơn.<br><b>Đáp án: C</b> (phân tích: c đúng)"},

   {id:108,ky:"ktlt_on",label:"Ôn tập KTLT",
    text:"Đoạn mã nào đọc và in ký tự đến cuối tệp, đúng và phong cách tốt?<br><pre><code>// #1: while (c = getchar() != EOF) putchar(c);<br>// #2: while ((c = getchar()) != EOF) putchar(c);<br>// #3: while (c = (getchar() != EOF)) putchar(c);<br>// #4: while (c == (getchar() != EOF)) putchar(c);</code></pre>",
   options:[
       "Đoạn #1",
       "Đoạn #2",
       "Đoạn #3",
       "Đoạn #4"
   ],answer:1,
   explanation:"#2 đúng: (c = getchar()) != EOF. #1 gán sai.<br><b>Đáp án: B</b> (unknown)"},

  {id:109,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Giả sử arr = new int[100]; Câu lệnh giải phóng bộ nhớ đúng?",
   options:[
       "remove(a);",
       "free(a);",
       "delete a;",
       "delete [] arr;",
       "delete arr[];"
   ],answer:3,
   explanation:"new[] phải dùng delete[].<br><b>Đáp án: D</b> (unknown)"},

  {id:110,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Những điều nào ĐÚNG với tinh chỉnh mã nguồn?",
   options:[
       "Chỉ thực hiện sau khi đã kiểm tra và gỡ rối",
       "Liên quan đến thay đổi thiết kế phạm vi rộng",
       "Thay đổi toàn bộ mã nguồn đã chạy theo hướng hiệu quả hơn",
       "Không thực hiện sau khi đã bàn giao"
   ],answer:0,
   explanation:"Code tuning sau khi chương trình đã chạy đúng.<br><b>Đáp án: A</b> (unknown)"},

  {id:111,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Khi có 2 vòng lặp lồng nhau thì nên:",
   options:[
       "Chuyển vòng lặp ngắn ra ngoài",
       "Chuyển vòng lặp dài ra ngoài, lưu ý cache",
       "Chuyển vòng lặp dài ra ngoài",
       "Chuyển vòng lặp ngắn ra ngoài, lưu ý cache"
   ],answer:3,
   explanation:"Đặt short loop ngoài giảm overhead, chú ý cache locality.<br><b>Đáp án: D</b> (unknown)"},

  {id:112,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Đâu không phải là một mô thức lập trình? (chọn 1 đại diện)",
   options:[
       "Hướng giải thuật",
       "Hướng logic",
       "Hướng đối tượng",
       "Hướng đệ quy",
       "Hướng mệnh lệnh",
       "Hướng cấu trúc dữ liệu",
       "Hướng chức năng"
   ],answer:3,
   explanation:"Paradigms: hướng đối tượng, chức năng, logic, mệnh lệnh. 'Hướng đệ quy' không phải.<br><b>Đáp án: D</b> (multi-select)"},

  {id:113,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Trường hợp nào nên dùng vector thay vì deque?",
   options:[
       "Không có đáp án nào đúng",
       "Cần chèn ở giữa danh sách",
       "Cần chèn ở đầu FIFO",
       "Cần chèn cả hai phía"
   ],answer:2,
   explanation:"Ghi chú đề: 'đáp án trong đề' ở C. Vector không hiệu quả cho FIFO, deque tốt hơn.<br><b>Đáp án: C</b> (unknown)"},

  {id:114,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Các hàm quản lý bộ nhớ động trong C thuộc thư viện nào?",
   options:[
       "dynamic",
       "mem",
       "stdio",
       "stdlib"
   ],answer:3,
   explanation:"malloc, calloc, realloc, free thuộc stdlib.h.<br><b>Đáp án: D</b> (unknown)"},

  {id:115,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Phương pháp 'Lính canh' được sử dụng để làm gì?",
   options:[
       "Kỹ thuật gỡ rối",
       "Kỹ thuật tăng hiệu năng",
       "Kỹ thuật kiểm thử",
       "Kỹ thuật tối ưu bộ nhớ"
   ],answer:1,
   explanation:"Sentinel giảm số lần kiểm tra biên → tăng hiệu năng.<br><b>Đáp án: B</b> (unknown)"},

  {id:116,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kỹ thuật lính canh có thể áp dụng cho:",
   options:[
       "Xâu ký tự",
       "Cả 3 đáp án trên đều đúng",
       "Mảng",
       "Danh sách"
   ],answer:1,
   explanation:"Sentinel áp dụng cho xâu, mảng, danh sách.<br><b>Đáp án: B</b> (unknown)"},

  {id:117,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Lý do nào khiến lập trình viên ưa thích viết chương trình đệ quy?",
   options:[
       "Sử dụng hiệu quả bộ nhớ Stack",
       "Tốc độ hoạt động nhanh",
       "Lập trình đơn giản, dễ hiểu, dễ bảo trì",
       "Không gian bộ nhớ nhỏ gọn"
   ],answer:2,
   explanation:"Đệ quy code gọn, dễ hiểu cho bài toán đệ quy.<br><b>Đáp án: C</b> (phân tích: Đáp án c đúng)"},

  {id:118,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn đáp án SAI về hàm nội tuyến (Inline function):",
   options:[
       "Giúp tiết kiệm chi phí gọi hàm, cấp phát, giải phóng biến trên stack",
       "Có thể chứa các biến tĩnh",
       "Có từ khóa inline trước kiểu giá trị trả về",
       "Thân hàm được thay thế trực tiếp vào nơi gọi"
   ],answer:1,
   explanation:"Inline function chứa biến tĩnh có thể gây lỗi (mỗi bản sao có static riêng).<br><b>Đáp án: B</b> (unknown)"},

  {id:119,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn phát biểu sai: Khi định nghĩa hàm với ký hiệu &amp; ở trước tên hàm thì:",
   options:[
       "Nếu là hàm định nghĩa phép toán, thứ tự thực hiện từ trái qua phải",
       "Hàm trả về 1 tham chiếu",
       "Hàm có thể đứng ở vế trái phép gán",
       "Tất cả các phát biểu trên đều sai"
   ],answer:0,
   explanation:"&amp; trước tên hàm = trả về tham chiếu. Thứ tự thực hiện không liên quan.<br><b>Đáp án: A</b> (unknown)"},

  {id:120,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Hàm nào yêu cầu chương trình thoát ngay lập tức bất chấp đúng sai của điều kiện?",
   options:[
       "abort(void);",
       "assert(int num);",
       "Tất cả đáp án sai",
       "exit(int num);"
   ],answer:0,
   explanation:"abort() kết thúc ngay không cleanup. exit() chạy cleanup. assert chỉ abort nếu sai.<br><b>Đáp án: A</b> (unknown)"},

  {id:121,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn phát biểu đúng về đa năng hoá hàm (overloading) trong C++:",
   options:[
       "Các hàm dài có nhiều lệnh xử lý",
       "Một hàm chứa hàm khác bên trong",
       "Hai+ hàm cùng tên, khác số lượng tham số hoặc kiểu tham số tương ứng",
       "Hai+ hàm khác tên, tham số giống nhau"
   ],answer:2,
   explanation:"Overloading: cùng tên, khác tham số.<br><b>Đáp án: C</b> (unknown)"},

  {id:122,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Hãy chỉ ra cặp từ khoá để bắt ngoại lệ trong C++",
   options:[
       "try ... throw ...",
       "try ... catch ...",
       "throw ... catch ...",
       "try ... break ..."
   ],answer:1,
   explanation:"Cấu trúc try-catch để xử lý ngoại lệ.<br><b>Đáp án: B</b> (unknown)"},

  {id:123,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Phát biểu đúng về phong cách lập trình tốt?",
   options:[
       "Hy sinh rõ ràng để hiệu quả hơn",
       "Không dùng đệ quy cho cấu trúc đệ quy",
       "Sử dụng nhiều biến tạm",
       "Để máy tính thực hiện việc nặng nhọc"
   ],answer:3,
   explanation:"Tận dụng sức mạnh máy tính cho tác vụ nặng.<br><b>Đáp án: D</b> (unknown)"},

  {id:124,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Toán tử nào bắt tất cả biến ngoài bằng tham chiếu trong lambda?",
   options:[
       "-",
       "*",
       "&amp;",
       "&amp;&amp;"
   ],answer:2,
   explanation:"[&amp;] capture by reference trong C++ lambda.<br><b>Đáp án: C</b> (unknown)"},

  {id:125,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Các kỹ thuật viết code hiệu quả là:",
   options:[
       "Xây dựng thuật toán tối ưu",
       "Khử đệ quy",
       "Làm tăng tốc độ thực hiện",
       "Trình bày đơn giản, rõ ràng, dễ hiểu"
   ],answer:2,
   explanation:"Code efficiency: tăng tốc độ thực thi.<br><b>Đáp án: C</b> (unknown)"},

  {id:126,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Macro nào phát hiện và báo vi phạm trong mã nguồn?",
   options:[
       "edom",
       "assert",
       "extern",
       "lbdl_min 1e-37",
       "exception"
   ],answer:1,
   explanation:"assert() kiểm tra điều kiện, báo lỗi nếu vi phạm.<br><b>Đáp án: B</b> (unknown)"},

  {id:127,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"(a) dòng nhập chuẩn (bàn phím); (b) dòng xuất chuẩn (màn hình); (c) dòng xuất lỗi chuẩn (màn hình). Đề cập đến:",
   options:[
       "stdout, stdin, stderr",
       "stdin, stdout, stdexp",
       "stdkey, stdcon, stderr",
       "stdin, stdout, stderr"
   ],answer:3,
   explanation:"(a) stdin, (b) stdout, (c) stderr.<br><b>Đáp án: D</b> (unknown)"},

  {id:128,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn đáp án sai: Khi truy cập phần tử hàng i cột j của mảng 2 chiều M, có thể viết:",
   options:[
       "i[M][j]",
       "*(*(M+i)+j)",
       "M[i][j]",
       "j[M][i]"
   ],answer:3,
   explanation:"j[M][i] tương đương M[j][i] — sai chỉ số.<br><b>Đáp án: D</b> (unknown)"},

  {id:129,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Chọn phát biểu sai khi đa năng hoá toán tử:",
   options:[
       "Có thể dùng tham số có giá trị ngầm định",
       "Không được định nghĩa toán tử mới: @, $",
       "Không được định nghĩa toán tử điều kiện (?:)",
       "Phải có ít nhất 1 tham số thuộc kiểu do người dùng định nghĩa"
   ],answer:0,
   explanation:"Không được dùng default params trong operator overloading.<br><b>Đáp án: A</b> (unknown)"},

  {id:130,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả chương trình:<br><pre><code>void calc(int a, int b, int &amp;c){\n   a = b * c;\n   b = a * c;\n   c = a * b;\n}\nint main(){\n   int x=2, y=3;\n   calc(x, y, y);\n   cout &lt;&lt; x &lt;&lt; \" \" &lt;&lt; y;\n}</code></pre>",
   options:[
       "2 27",
       "2 18",
       "2 243",
       "2 3"
   ],answer:2,
   explanation:"a=9 (local), b=27 (local), c=a*b=243 → y=243. x vẫn là 2.<br><b>Đáp án: C</b> (unknown)"},

  {id:131,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả chương trình:<br><pre><code>void foo(int *a, int b, int &amp;c) {\n   a+=5; b+=6; c+=7;\n}\nint main() {\n   int a=5,b=6,c=7;\n   foo(&amp;b,c,a);\n   printf(\"%d %d %d\",a,b,c);\n}</code></pre>",
   options:[
       "12 6 7",
       "Chương trình có lỗi",
       "10 6 14",
       "5 6 14"
   ],answer:0,
   explanation:"foo(&amp;b,c,a): a+5 (pointer), b=7+6=13 (local), c là ref→a=5+7=12. Kết quả: 12 6 7.<br><b>Đáp án: A</b> (unknown)"},

  {id:132,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Với đoạn mã, n=13, các phần tử push vào stack S theo thứ tự?<br><pre><code>while (n!=0){\n   R=n%2; S.push(R); n/=2;\n}</code></pre>",
   options:[
       "1, 3, 6",
       "1, 1, 0, 1",
       "6, 3, 1",
       "1, 0, 1, 1"
   ],answer:3,
   explanation:"13 nhị phân = 1101. Các số dư push: 1,0,1,1.<br><b>Đáp án: D</b> (unknown)"},

  {id:133,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Cho hàm f1 đảo chiều mảng. Chọn code điền vào:<br><pre><code>void f1(int *p, int n, int k) {\n   if(k&lt;n) { /* code */ }\n}</code></pre>",
   options:[
       "temp=*(p+k-1); *(p+k-1)=*(p+n-1-k); *(p+n-1-k)=temp; f1(p,n-1,k+1);",
       "temp=*(p+k+1); *(p+k+1)=*(p+n-k); *(p+n-k)=temp; f1(p,n-1,k+1);",
       "temp=*(p+k+1); *(p+k+1)=*(p+n-1-k); *(p+n-1-k)=temp; f1(p,n-1,k+1);",
       "temp=*(p+k); *(p+k)=*(p+n); *(p+n)=temp; f1(p,n-1,k+1);"
   ],answer:3,
   explanation:"Swap p[k] với p[n], sau đó f1(p,n-1,k+1).<br><b>Đáp án: D</b> (unknown)"},

  {id:134,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Định nghĩa toán tử + cho Box (typedef struct {int capacity;} Box;):",
   options:[
       "Box operator+(Box b1,Box b2){Box tmp; tmp.capacity=b1.capacity+b2.capacity; return tmp;}",
       "Box operator+(Box b1,Box b2){ return b1.capacity+b2.capacity; }",
       "Toán tử + không được đa năng hoá.",
       "void operator+(Box b1,Box b2){Box tmp; tmp.capacity=b1.capacity+b2.capacity;}"
   ],answer:0,
   explanation:"Phải trả về Box, không phải int hay void.<br><b>Đáp án: A</b> (unknown)"},

  {id:135,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>int i,j;\nfor(i=1;i&lt;4;i++) j=i;\nprintf(\"%3d\",j);</code></pre>",
   options:[
       "4",
       "3",
       "1 2 3 4",
       "Kết quả khác"
   ],answer:1,
   explanation:"j=3 (giá trị cuối cùng).<br><b>Đáp án: B</b> (unknown)"},

  {id:136,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>void func(int x, bool state=false) {\n   if(state) cout&lt;&lt;\"State: true, x=\"&lt;&lt;x/2;\n   else cout&lt;&lt;\"State: false, x=\"&lt;&lt;x;\n}\nint main(){func(120);}</code></pre>",
   options:[
       "State: true, x=60",
       "State: false, x=60",
       "State: false, x=120",
       "State: true, x=120"
   ],answer:2,
   explanation:"state mặc định false → in nhánh else: x=120.<br><b>Đáp án: C</b> (unknown)"},

  {id:137,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>void (int *px, int *py){\n   int *z; z=px; px=py; py=z;\n}\nint main(){\n   int a=15, b=21;\n   (&amp;a,&amp;b);\n   printf(\"%d %d\",a,b);\n}</code></pre>",
   options:[
       "15 21",
       "Lỗi (hàm không tên)",
       "21 15",
       "Kết quả khác"
   ],answer:1,
   explanation:"Hàm và lời gọi đều không có tên → lỗi biên dịch.<br><b>Đáp án: B</b> (unknown)"},

  {id:138,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>int func(int a=10, int b) {\n   int c; c=a+b; return c;\n}\nint main(){cout&lt;&lt;func(10);}</code></pre>",
   options:[
       "0",
       "20",
       "Lỗi biên dịch",
       "10"
   ],answer:2,
   explanation:"Default param (a=10) không được đứng trước non-default param (b).<br><b>Đáp án: C</b> (unknown)"},

  {id:139,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Trường hợp cơ sở (neo đệ quy) khi number?<br><pre><code>void superWriteVertical(int number){\n   if(number&lt;0){cout&lt;&lt;\"-\"; superWriteVertical(-number);}\n   else if(number&lt;10) cout&lt;&lt;number;\n   else{superWriteVertical(number/10);cout&lt;&lt;number%10;}\n}</code></pre>",
   options:[
       "number &lt; 0",
       "number &lt; 10",
       "number &gt; 10",
       "number &gt;= 0 &amp;&amp; number &lt; 10"
   ],answer:1,
   explanation:"Base case: number &lt; 10 (in và dừng). Khi &lt;0 vẫn đệ quy.<br><b>Đáp án: B</b> (unknown)"},

  {id:140,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>int n=12; char str[50]=\"\";\nassert(n&gt;=10);\nprintf(\"output:%d\\n\",n);\nassert(str!=NULL);\nprintf(\"output:%s\\n\",str);</code></pre>",
   options:[
       "Hai dòng output: 12 và assertion error",
       "output: 12",
       "Hai dòng: output:12 và output:",
       "error"
   ],answer:2,
   explanation:"Cả 2 assert đều qua. n=12≥10, str là mảng ≠ NULL. Output: 'output:12' và 'output:'.<br><b>Đáp án: C</b> (unknown)"},

  {id:141,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>inline int vd(int x, int y){\n   static int a=10;\n   return (x&gt;a || y)? x-a+y++ : x+y;\n}\nint main(){int m=5, n=8; printf(\"%d\",vd(m,n));}</code></pre>",
   options:[
       "Lỗi",
       "13",
       "9",
       "3"
   ],answer:3,
   explanation:"x=5, y=8, a=10. 5&gt;10||8 → false||true → true. return 5-10+8=3.<br><b>Đáp án: D</b> (unknown)"},

  {id:142,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>int i=10, j=0;\nif(i || (j=i+10)) printf(\"%d\",j);</code></pre>",
   options:[
       "1",
       "20",
       "0",
       "10"
   ],answer:2,
   explanation:"i=10 (true), short-circuit: j=i+10 không thực thi. j=0.<br><b>Đáp án: C</b> (unknown)"},

  {id:143,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>char *s; s=\"Ngon Ngu Lap Trinh C++\";\ns+=8; cout&lt;&lt;s;</code></pre>",
   options:[
       " Lap Trinh C++",
       "Ngon Ngu",
       "Ngon Ngu Lap Trinh C++8",
       "Ngon Ngu Lap Trinh C++"
   ],answer:0,
   explanation:"\"Ngon Ngu \" = 8 ký tự, s+=8 → in từ đầu: ' Lap Trinh C++'.<br><b>Đáp án: A</b> (unknown)"},

  {id:144,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>int n=11; char str[50]=\"program\";\nassert(n&gt;=10);\nprintf(\"output:%d\\n\",n);\nassert(str!=NULL);\nprintf(\"output:%s\\n\",str);</code></pre>",
   options:[
       "output: 11",
       "Hai dòng: output:11 và output:program",
       "output: program",
       "Thông báo lỗi"
   ],answer:1,
   explanation:"Cả 2 assert đều qua. In 'output:11' và 'output:program'.<br><b>Đáp án: B</b> (unknown)"},

  {id:145,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>int calc(int a,int b,int c=1){return a*b*c;}\nfloat calc(float a,float b,float c=1){return a/b/c;}\nint main(){\n   int x=5,y=1; float n=5.0,m=2.0;\n   cout&lt;&lt;calc(x,y,2)&lt;&lt;\"\\t\"&lt;&lt;calc(n,m);\n}</code></pre>",
   options:[
       "10.0 5",
       "10 5.0",
       "5.0 2.5",
       "10 2.5"
   ],answer:3,
   explanation:"calc(int): 5*1*2=10. calc(float): 5.0/2.0/1=2.5.<br><b>Đáp án: D</b> (unknown)"},

  {id:146,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kết quả:<br><pre><code>void myprint(int a){cout&lt;&lt;a&lt;&lt;\" \";}\nvoid myprint(int a,int b=5){cout&lt;&lt;a&lt;&lt;\" \"&lt;&lt;b;}\nint main(){myprint(5);}</code></pre>",
   options:[
       "5 5",
       "5 5 5",
       "5",
       "Lỗi ambiguous overload"
   ],answer:3,
   explanation:"myprint(5) khớp cả 2 hàm → lỗi ambiguous.<br><b>Đáp án: D</b> (unknown)"},

  {id:147,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Giá trị x,y sau:<br><pre><code>int x=5, y=7;\nint *p=&amp;x; int &amp;r=x;\n*p+=2; y+=r;</code></pre>",
   options:[
       "x=5, y=7",
       "x=7, y=14",
       "x=5, y=12",
       "x=7, y=12"
   ],answer:1,
   explanation:"*p+=2→x=7. r là ref đến x, y+=r→y=7+7=14.<br><b>Đáp án: B</b> (unknown)"},

  {id:148,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Cho khai báo int M[][] = {1,2,3};",
   options:[
       "M là mảng 2 chiều 1x3",
       "Có lỗi syntax",
       "M là mảng 2 chiều 3x1",
       "M là mảng 1 chiều 3 pt"
   ],answer:1,
   explanation:"Thiếu kích thước chiều thứ 2 → lỗi syntax.<br><b>Đáp án: B</b> (unknown)"},

  {id:149,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Đổi thập phân sang nhị phân dùng phép chia 2, lấy dư ngược — cơ chế của cấu trúc nào?",
   options:[
       "Cây nhị phân",
       "Mảng",
       "Hàng đợi",
       "Ngăn xếp"
   ],answer:3,
   explanation:"Số dư push vào stack, pop ra LIFO → dãy nhị phân đúng chiều.<br><b>Đáp án: D</b> (unknown)"},

  {id:150,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Cấp phát động mảng 2 chiều m hàng, n cột. Chọn đoạn đúng:",
   options:[
       "int **arr; arr=new int**[n]; for(int i=0;i&lt;n;i++) arr[i]=new int*[m];",
       "int *arr; arr=new int[n]; for(int i=0;i&lt;m;i++) arr[i]=new int[m];",
       "int **arr; arr=new int*[m]; for(int i=0;i&lt;m;i++) arr[i]=new int[n];",
       "int **arr; arr=new int*[n]; for(int i=0;i&lt;m;i++) arr[i]=new int[m];",
       "int *arr; arr=new int[m]; for(int i=0;i&lt;n;i++) arr[i]=new int[n];"
   ],answer:2,
   explanation:"arr = new int*[m] (m dòng), mỗi arr[i]=new int[n] (n cột).<br><b>Đáp án: C</b> (unknown)"},

  {id:151,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Giá trị mảng A sau: int A[]={2,5,6,1}; int *p=A; *p++; *p+=2; p+=2; *p+=2;",
   options:[
       "5,5,8,1",
       "3,7,6,3",
       "2,5,6,3",
       "2,7,6,3"
   ],answer:3,
   explanation:"*p++ → p ở A[1]; *p+=2 → A[1]=7; p+=2 → A[3]; *p+=2 → A[3]=3.<br><b>Đáp án: D</b> (unknown)"},

  {id:152,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Ngôn ngữ dùng compiler/interpreter? C/C++, Python, Matlab, Pascal:",
   options:[
       "Biên dịch, Thông dịch, Thông dịch, Biên dịch",
       "Thông dịch, Biên dịch, Biên dịch, Thông dịch",
       "Biên dịch, Biên dịch, Thông dịch, Thông dịch",
       "Thông dịch, Thông dịch, Biên dịch, Biên dịch"
   ],answer:0,
   explanation:"C/C++, Pascal: compiler. Python, Matlab: interpreter.<br><b>Đáp án: A</b> (đáp án rõ)"},

  {id:153,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Pascal, Java, Prolog, Lisp tương ứng mô thức nào?",
   options:[
       "Hướng cấu trúc, Hướng đối tượng, Hướng logic, Hướng chức năng",
       "Hướng đối tượng, Hướng cấu trúc, Hướng logic, Hướng chức năng",
       "Hướng cấu trúc, Hướng đối tượng, Hướng chức năng, Hướng logic",
       "Hướng logic, Hướng chức năng, Hướng cấu trúc, Hướng đối tượng"
   ],answer:0,
   explanation:"Pascal=cấu trúc, Java=OOP, Prolog=logic, Lisp=functional.<br><b>Đáp án: A</b> (đáp án rõ)"},

  {id:154,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Kiểm tra mảng đối xứng. Biểu thức kiểm tra:<br><pre><code>int f3(int *p,int n,int k){\n   if(k&lt;n){\n      if(BieuThuc) return 0;\n      else{s=f3(p,n-1,k+1); if(!s) return 0;}\n   }\n   return 1;\n}</code></pre>",
   options:[
       "*(p+k) != *(p+n-1-k)",
       "*(p+k) != *(p+n-k)",
       "*(p+k) != *(p+n)",
       "*(p+k+1) != *(p+n-1-k)"
   ],answer:0,
   explanation:"So sánh p[k] với p[n-1-k] (đầu-cuối).<br><b>Đáp án: A</b> (unknown)"},

  {id:155,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Phát biểu Đúng về truyền tham chiếu:",
   options:[
       "Thay đổi tham số trong hàm ảnh hưởng đến đối số ban đầu",
       "Bản sao giá trị được chuyển cho hàm",
       "Vị trí biến được chuyển làm xử lý chậm, tốn kém",
       "Tất cả đều đúng"
   ],answer:0,
   explanation:"Tham chiếu: tham số là alias của đối số, thay đổi ảnh hưởng trực tiếp.<br><b>Đáp án: A</b> (unknown)"},

  {id:156,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Mô tả đúng về hàm và truyền tham số trong C++:",
   options:[
       "Có thể dùng tham trị hoặc tham chiếu",
       "Chỉ có tham trị (kể cả dùng địa chỉ)",
       "Tên hàm không là duy nhất",
       "Tên hàm phải là duy nhất"
   ],answer:0,
   explanation:"C++ hỗ trợ cả pass-by-value và pass-by-reference.<br><b>Đáp án: A</b> (unknown)"},

  {id:157,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Mảng matrix 10000x3 float. Chọn giải pháp tinh chỉnh TỐI ƯU NHẤT:<br><pre><code>// Gốc\nfor(int c=0;c&lt;3;c++)\n   for(int r=0;r&lt;10000;r++)\n      sum+=matrix[r][c];</code></pre>",
   options:[
       "float *p=&amp;matrix[0][0]; for(int i=0;i&lt;30000;i++) sum+=*(p+i);",
       "for(int r=0;r&lt;10000;r++) for(int c=0;c&lt;3;c++) sum+=matrix[r][c];",
       "Giữ nguyên (áp dụng 'đưa vòng lặp lớn vào trong')",
       "sum=0.0; for(int i=0;i&lt;30000;i++) sum+=*(matrix+i);"
   ],answer:0,
   explanation:"Con trỏ flat truy cập tuần tự 30000 phần tử, tối ưu cache và loop overhead.<br><b>Đáp án: A</b> (unknown)"},

  {id:158,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Tại sao không thể dùng xử lý ngoại lệ thay thế assert?",
   options:[
       "C++ không dễ gọi try/catch/throw",
       "Không có đáp án đúng",
       "C++ không hỗ trợ xử lý ngoại lệ",
       "Hai cách có mục đích khác nhau"
   ],answer:3,
   explanation:"assert: kiểm tra invariant lúc dev. Exception: xử lý lỗi runtime.<br><b>Đáp án: D</b> (unknown)"},

  {id:159,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Phát biểu nào sai về xử lý ngoại lệ?",
   options:[
       "Khi hoàn thành, giúp gửi báo cáo đến đội phát triển",
       "In ra điểm đầu tiên xảy ra lỗi",
       "Giúp chương trình dừng ngay lập tức khi lỗi",
       "Hiệu quả hơn hẳn assert trong phát hiện vi phạm"
   ],answer:2,
   explanation:"Exception handling không dừng ngay — nó cho phép bắt và tiếp tục.<br><b>Đáp án: C</b> (unknown)"},

  {id:160,ky:"ktlt_on",label:"Ôn tập KTLT",
   text:"Phát biểu SAI về phong cách chú thích:",
   options:[
       "Chú thích theo đoạn, không theo dòng",
       "Chú thích hàm cần mô tả hàm thực hiện thế nào",
       "Không cần chú thích khi mã nguồn rõ ràng",
       "Chú thích phải tương ứng với mã nguồn"
   ],answer:1,
    explanation:"Chú thích nên mô tả WHAT/WHY, không phải HOW.<br><b>Đáp án: B</b> (unknown)"},
];

// ===============================================
const ktltQuestions2 = [
  {id:161,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Cấu trúc dữ liệu có thứ tự truy cập phần tử theo kiểu: vào sau ra trước",
   options:[
       "Queue",
       "Vector",
       "Array",
       "Stack"
   ],answer:3,
   explanation:"Stack là LIFO. Queue là FIFO.<br><b>Đáp án: D</b> (đúng 0.30)"},

  {id:162,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Hỏi giá trị của x và y sau khi đoạn lệnh sau được thực hiện là gì?<br><pre><code>int x=5, y=7;\nint *p = &amp;x;\nint &amp;r = x;\n*p+=2;\ny+=r;</code></pre>",
   options:[
       "x=5, y=7",
       "x=5, y=12",
       "x=7, y=12",
       "x=7, y=14"
   ],answer:3,
   explanation:"*p+=2→x=7. r là ref đến x, y+=r→y=7+7=14.<br><b>Đáp án: D</b> (đúng 0.50)"},

  {id:163,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Phát biểu nào sau về kỹ thuật Assertion là SAI?",
   options:[
       "Assertion là một kỹ thuật sử dụng trong lập trình phòng ngừa.",
       "Assertion là kỹ thuật để phát hiện các lỗi liên quan tới bộ nhớ trong chương trình",
       "Assertion có thể dùng để kiểm tra giả thiết được đưa ra trong code và loại bỏ những điều kiện không mong đợi.",
       "Assertion là một macro hay một chương trình con dùng trong quá trình phát triển ứng dụng, cho phép chương trình tự kiểm tra khi chạy."
   ],answer:1,
   explanation:"Assertion không phải công cụ phát hiện lỗi bộ nhớ.<br><b>Đáp án: B</b> (đúng 0.30)"},

  {id:164,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Cho danh sách móc nối: struct S1{int info; struct S1 *next;} *head; Thêm p vào đầu danh sách:",
   options:[
       "p-&gt;next = head; head = p;",
       "p-&gt;next = head; head = p-&gt;next;",
       "Không có phương án nào đúng",
       "head-&gt;next = p; p = head;"
   ],answer:0,
   explanation:"p-&gt;next=head, head=p.<br><b>Đáp án: A</b> (đúng 0.30)"},

  {id:165,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Một biến được gọi là biến toàn cục nếu:",
   options:[
       "Nó được khai báo trong tất cả các hàm, ngoại trừ hàm main().",
       "Nó được khai báo bên ngoài hàm main().",
       "Nó được khai báo ngoài tất cả các hàm, kể cả hàm main()",
       "Nó được khai báo bên trong hàm main()."
   ],answer:2,
   explanation:"Biến toàn cục: khai báo ngoài tất cả các hàm (kể cả main).<br><b>Đáp án: C</b> (đúng 0.30)"},

  {id:166,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Kết quả:<br><pre><code>char *s; s=\"Ngon Ngu Lap Trinh C++\";\ns+=8; cout&lt;&lt;s;</code></pre>",
   options:[
       "Ngon Ngu",
       "Ngon Ngu Lap Trinh C++8",
       "Ngon Ngu Lap Trinh C++",
       "Lap Trinh C++"
   ],answer:3,
   explanation:"\"Ngon Ngu \" = 8 ký tự, s+=8 → trỏ đến ' Lap Trinh C++'.<br><b>Đáp án: D</b> (đúng 0.30)"},

  {id:167,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Chọn phát biểu ĐÚNG về hàm có tham số ngầm định trong C++",
   options:[
       "Tất cả các phát biểu trên đều sai",
       "Khi hàm có tham số ngầm định có prototype, thì giá trị ngầm định trong định nghĩa hàm có ý nghĩa cao hơn giá trị định nghĩa trong prototype.",
       "Khi đa năng hóa toán tử không được dùng tham số có giá trị ngầm định",
       "Tham số ngầm định của hàm có thể nằm ở vị trí bất kỳ trong hàm có danh sách tham số nhiều hơn các tham số ngầm định"
   ],answer:0,
   explanation:"Cả B, C, D đều sai. Default params phải ở cuối; overloaded operator CÓ thể dùng default; prototype default ưu tiên hơn.<br><b>Đáp án: A</b> (đúng 0.50)"},

  {id:168,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Kết quả:<br><pre><code>int calc(int a,int b,int c=1){return a*b*c;}\nfloat calc(float a,float b,float c=1){return a/b/c;}\nint main(){\n   int x=5,y=1; float n=5.0,m=2.0;\n   cout&lt;&lt;calc(x,y,2)&lt;&lt;\"\\t\"&lt;&lt;calc(n,m);\n}</code></pre>",
   options:[
       "10 2.5",
       "5.0 2.5",
       "10 0",
       "10 2.5"
   ],answer:3,
   explanation:"calc(int): 5*1*2=10. calc(float): 5.0/2.0/1=2.5.<br><b>Đáp án: D</b> (đúng 0.30)"},

  {id:169,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Mô tả nào sau đây đúng với khuôn mẫu hàm (function template) trong C++:",
   options:[
       "Cho phép người lập trình xây dựng các hàm tổng quát",
       "Cho phép người lập trình tạo chương trình theo mô-đun",
       "Cho phép lập trình viên viết các đoạn mã cụ thể cho một vấn đề",
       "Một tính năng không bổ sung bất kỳ sức mạnh nào cho ngôn ngữ"
   ],answer:0,
   explanation:"Function template cho generic programming.<br><b>Đáp án: A</b> (đúng 0.50)"},

  {id:170,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"(a) dòng nhập chuẩn (bàn phím); (b) dòng xuất chuẩn (màn hình); (c) dòng xuất lỗi chuẩn (màn hình). Đề cập đến:",
   options:[
       "stdkey, stdcon, stderr",
       "stdin, stdout, stderr",
       "stdout, stdin, stderr",
       "stdin, stdout, stdexp"
   ],answer:1,
   explanation:"(a) stdin, (b) stdout, (c) stderr.<br><b>Đáp án: B</b> (đúng 0.30)"},

  {id:171,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Phát biểu nào dưới đây là chính xác về phong cách lập trình:",
   options:[
       "Phong cách lập trình tốt giúp chương trình rõ ràng, đơn giản, dễ đọc, dễ hiểu",
       "Phong cách lập trình giúp tăng tốc độ thực thi của chương trình",
       "Phong cách lập trình chỉ bao gồm quy tắc liên quan đến các chú thích của mã nguồn",
       "Phong cách lập trình chỉ áp dụng cho ngôn ngữ lập trình C++ và Java"
   ],answer:0,
   explanation:"Phong cách tốt giúp rõ ràng, dễ đọc, dễ bảo trì.<br><b>Đáp án: A</b> (đúng 0.30)"},

  {id:172,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Giả sử ma trận hai chiều arr: int a[1000][1000]; Chỉ ra câu lệnh đúng để in giá trị phần tử hàng i cột j (chọn đáp án đúng nhất):",
   options:[
       "cout &lt;&lt; *(a + i + 1) + j + 1 &lt;&lt; endl;",
       "cout &lt;&lt; *(a + j) + i &lt;&lt; endl;",
       "cout &lt;&lt; *(a + i) + j &lt;&lt; endl;",
       "cout &lt;&lt; a[i][j] &lt;&lt; endl;",
       "cout &lt;&lt; *(*(a + i) + j) &lt;&lt; endl;"
   ],answer:3,
   explanation:"a[i][j] là cách chuẩn. *(*(a+i)+j) cũng đúng.<br><b>Đáp án: D</b> (đúng 0.00 do multi-select nhưng chọn 1 đáp án)"},

  {id:173,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Phương pháp 'Lính canh' được sử dụng để làm gì?",
   options:[
       "Là 1 kỹ thuật kiểm thử",
       "Là 1 kỹ thuật gỡ rối",
       "Là một kỹ thuật tối ưu bộ nhớ",
       "Là một kỹ thuật tăng hiệu năng chương trình"
   ],answer:3,
   explanation:"Sentinel giảm số lần kiểm tra biên → tăng hiệu năng.<br><b>Đáp án: D</b> (đúng 0.30)"},

  {id:174,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Khẳng định SAI về hàm nội tuyến (inline function):",
   options:[
       "Khai báo inline đối với hàm sẽ bắt buộc trình dịch (compiler) phải thực hiện triển khai nội tuyến.",
       "Hàm nội tuyến thường ít được sử dụng trong các hệ thống nhúng.",
       "Hàm nội tuyến làm tăng kích thước file thực thi do sự trùng lặp của cùng một mã.",
       "Hàm nội tuyến có thể gỡ rối (debug)."
   ],answer:0,
   explanation:"Inline chỉ là đề xuất, compiler không bắt buộc.<br><b>Đáp án: A</b> (sai, student 0.00)"},

  {id:175,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"n=13, các phần tử push vào stack S theo thứ tự?<br><pre><code>while (n!=0){ R=n%2; S.push(R); n/=2; }</code></pre>",
   options:[
       "1, 3, 6",
       "6, 3, 1",
       "1, 0, 1, 1",
       "1, 10, 1"
   ],answer:2,
   explanation:"13 nhị phân = 1101. Các số dư push: 1,0,1,1.<br><b>Đáp án: C</b> (đúng 0.30)"},

  {id:176,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Kết quả:<br><pre><code>char s[]=\"CNTT&amp;TT\";\nvoid func(int n){\n   if(n&gt;=0){\n      printf(\"%c\",s[n]);\n      func(n-1);\n      printf(\"%c\",s[n]);\n   }\n}\nint main(){func(strlen(s)-1);}</code></pre>",
   options:[
       "TT&amp;TTNCCNTT&amp;TT",
       "CNTT&amp;TT",
       "CNTT&amp;TTTT&amp;CNTT",
       "TT&amp;TTNC"
   ],answer:0,
   explanation:"In ra s[n] trước và sau đệ quy tạo đối xứng.<br><b>Đáp án: A</b> (đúng 0.30)"},

  {id:177,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Kết quả:<br><pre><code>int i,j;\nfor(i=1;i&lt;4;i++) j=i;\nprintf(\"%3d\",j);</code></pre>",
   options:[
       "3",
       "4",
       "Kết quả khác",
       "1234"
   ],answer:0,
   explanation:"j=3 (giá trị cuối cùng của i).<br><b>Đáp án: A</b> (đúng 0.30)"},

  {id:178,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Cho khai báo: int M[][] = {{1,2,3},{4,5}}; Hãy lựa chọn đáp án Đúng:",
   options:[
       "M là mảng 2 chiều có kích thước 2x3",
       "Có lỗi syntax",
       "M là mảng Không xác định",
       "M là mảng 2 chiều có kích thước 3x3"
   ],answer:1,
   explanation:"Thiếu kích thước chiều thứ 2 → lỗi cú pháp.<br><b>Đáp án: B</b> (đúng 0.30)"},

  {id:179,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Cho arr[3][3] = {{7,8,9},{10,13,15},{2,7,8}};<br>Thực hiện:<br><pre><code>for(i=0;i&lt;3;i++)\n   for(j=0;j&lt;3;j++)\n      *(*(arr+i)+j) = *(*(arr+j)+i) + 10;</code></pre>",
   options:[
       "{{7,8,9},{10,13,15},{2,7,8}} (giữ nguyên)",
       "{{17,20,12},{30,23,17},{22,27,18}}",
       "Các đáp án nêu ra đều không đúng",
       "{{27,18,12},{30,21,19},{22,17,11}}",
       "{{17,18,19},{20,23,25},{12,17,18}}"
   ],answer:1,
   explanation:"a[i][j]=a[j][i]+10 nhưng ghi đè tại chỗ nên giá trị cũ bị thay đổi.<br><b>Đáp án: B</b> (đúng 0.30)"},

  {id:180,ky:"ktlt_20221",label:"KTLT cuối kì 20221",
   text:"Kết quả:<br><pre><code>int A[]={6,3,4,9,6,5,8,12,2,7}, N=8;\nint ft(int d){\n   if(d==N) return 0;\n   else if(*(A+d)%2==0) return *(A+d)+ft(d+1);\n   else return ft(d+1);\n}\nint main(){printf(\"%d\",ft(0));}</code></pre>",
   options:[
       "64",
       "48",
       "24",
       "36"
   ],answer:3,
     explanation:"Tổng các số chẵn từ A[0..7]: 6+4+6+8+12=36.<br><b>Đáp án: D</b> (đúng 0.50)"},
];

// =============================================
// Skipped: C10 (garbled OCR), C42, C52
const ktltQuestions3 = [
  {id:181,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Cho khai báo: int one; long four; (I) one=7*3%4; (II) 2+3=two; (III) four=(2+3); Phát biểu nào đúng?",
   options:[
       "Chỉ có (I) là sai.",
       "Chỉ có (II) là sai.",
       "(I) và (III) là sai.",
       "Cả ba câu đều sai."
   ],answer:1,
   explanation:"(I) 7*3%4=1 đúng. (II) 2+3=two sai (rvalue bên trái). (III) four=(2+3)=5 đúng.<br><b>Đáp án: B</b>"},

  {id:182,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Để định nghĩa hằng nguyên ABC=10, câu lệnh nào đúng?",
   options:[
       "int ABC=10;",
       "#define ABC =10;",
       "const ABC=10;",
       "#define ABC 10;"
   ],answer:3,
   explanation:"#define ABC 10 là đúng. A là biến, B sai cú pháp, C thiếu kiểu.<br><b>Đáp án: D</b>"},

  {id:183,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>for(int i=1;i&lt;10;i++){\n   cout&lt;&lt;i&lt;&lt;\" \";\n   i++;\n}</code></pre>",
   options:[
       "1 3 5 7 9",
       "1 2 3 5 7 9",
       "2 4 6 8",
       "Cả ba câu đều sai."
   ],answer:0,
   explanation:"i tăng 2 mỗi lần (i++ ở cuối thân for + i++ trong for).<br><b>Đáp án: A</b>"},

  {id:184,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>S=0; Dau=1;\nfor(i=1;i&lt;=6;i++){\n   S=S+Dau*i;\n   Dau=(-Dau);\n}\ncout&lt;&lt;S;</code></pre>",
   options:[
       "-2",
       "-3",
       "4",
       "-5"
   ],answer:1,
   explanation:"S = 1-2+3-4+5-6 = -3.<br><b>Đáp án: B</b>"},

  {id:185,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Chương trình:<br><pre><code>long x=1, *px, *py;\n*px=5;\npy=6;\npy=&amp;x;</code></pre>Chọn câu đúng nhất:",
   options:[
       "[1] sai cú pháp",
       "[2] sai cú pháp",
       "[3] sai cú pháp",
       "[2] và [3] sai cú pháp",
       "Không có câu nào đúng"
   ],answer:4,
   explanation:"Tất cả các dòng đều đúng cú pháp C (dù [2] dùng con trỏ chưa khởi tạo).<br><b>Đáp án: E</b>"},

  {id:186,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>int f(int a, int b, int &amp;c);\nint x=1,y=2,z=3;\nvoid main(){\n   cout&lt;&lt;f(x,y,z)&lt;&lt;\" \"&lt;&lt;x+y+z;\n}\nint f(int a,int b,int &amp;c){\n   a++; b+=a; c=a+b;\n}</code></pre>",
   options:[
       "12 9",
       "12 6",
       "6 12",
       "6 9"
   ],answer:3,
   explanation:"a=2,b=4,c=6 (z=6). Hàm không return → trả về giá trị cuối cùng (6?). x+y+z=1+2+6=9.<br><b>Đáp án: D</b>"},

  {id:187,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Hàm numLessThanValue đếm số phần tử nhỏ hơn val. Giá trị lớn nhất có thể trả về?",
   options:[
       "0",
       "1",
       "size-1",
       "size",
       "size*2"
   ],answer:3,
   explanation:"Nếu tất cả các phần tử đều nhỏ hơn val, hàm trả về size.<br><b>Đáp án: D</b>"},

  {id:188,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Giá trị biểu thức: ((42 &amp;&amp; 24) || (21 &amp;&amp; 12))",
   options:[
       "0",
       "1",
       "4224",
       "2112",
       "Biểu thức không hợp lệ"
   ],answer:1,
   explanation:"42&amp;&amp;24=1 (true), 21&amp;&amp;12=1, 1||1=1.<br><b>Đáp án: B</b>"},

  {id:189,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>void myst(int a, int *b){\n   a *= *b;\n   *b = 2 + a;\n}\nvoid test(){\n   int u=2, v=3;\n   myst(u, &amp;v);\n   cout&lt;&lt;u&lt;&lt;\" \"&lt;&lt;v;\n}</code></pre>",
   options:[
       "2 3",
       "8 3",
       "6 3",
       "6 8",
       "2 8"
   ],answer:4,
   explanation:"a là tham trị: a=2*3=6 (local). *b = 2+6=8 → v=8. u không đổi (2).<br><b>Đáp án: E</b>"},

  {id:190,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Chương trình tìm và in chuỗi dài nhất:<br><pre><code>char s[][30]={\"Truong Cao Dang CN4\", \"Cao Dang CN4\", \" CN4 \"};\nint a=f(s[0]);\nfor(i=1;i&lt;3;i++) if(a&lt;f(s[i])) a=f(s[i]);\nfor(i=0;i&lt;3;i++) if(a==f(s[i])) cout&lt;&lt;s[i];</code></pre>f đếm độ dài chuỗi.",
   options:[
       "Truong Cao Dang CN4 (chuỗi dài nhất)",
       "Cao Dang CN4",
       " CN4 ",
       "Cả 3 câu đều sai."
   ],answer:0,
   explanation:"f(s[0])=20, f(s[1])=12, f(s[2])=5. Max=20. In chuỗi có độ dài 20.<br><b>Đáp án: A</b>"},

  {id:191,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>char *s; s=\"Ngon Ngu Lap Trinh C++\";\ns+=8; cout&lt;&lt;s;</code></pre>",
   options:[
       "Ngon Ngu C++",
       "Lap Trinh C++",
       "Ngon Ngu Lap Trinh C++",
       "Ngon Ngu Lap Trinh"
   ],answer:1,
   explanation:"\"Ngon Ngu \" = 8 ký tự, s+=8 trỏ đến ' Lap Trinh C++'.<br><b>Đáp án: B</b>"},

  {id:192,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>function(char *s1,char *s2){\n   while(*(s1++)=*(s2++));\n}\nchar s1[]=\"Giao Trinh Ngon Ngu C++\";\nfunction(s2,s1); cout&lt;&lt;s2;</code></pre>",
   options:[
       "Giao Trinh Ngon Ngu",
       "Giao Trinh Ngon Ngu C++ (sao chép chuỗi)",
       "Ngon Ngu C++",
       "Giao Trinh C++"
   ],answer:1,
   explanation:"Hàm sao chép chuỗi (strcpy): s1 vào s2.<br><b>Đáp án: B</b>"},

  {id:193,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>char *workdays[]={\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"\"};\nchar **work_day = workdays;\ncout&lt;&lt; *(++work_day);</code></pre>",
   options:[
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday"
   ],answer:1,
   explanation:"++work_day trỏ đến phần tử thứ 2 (Tuesday).<br><b>Đáp án: B</b>"},

  {id:194,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>char *s=\"aabccaba\";\nf(s,'a'); cout&lt;&lt;s;</code>&gt;f xóa ký tự a.",
   options:[
       "aabc",
       "bccb",
       "caba",
       "aaaa"
   ],answer:1,
   explanation:"Xóa các ký tự 'a' khỏi 'aabccaba' → bccb.<br><b>Đáp án: B</b>"},

  {id:195,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (tìm số lẻ nhỏ nhất):<br><pre><code>int a[]={0,25,-9,1,0,-5,-18,3};\ncout&lt;&lt;f(a,8);</code></pre>f tìm phần tử lẻ đầu tiên rồi tìm số lẻ nhỏ hơn.",
   options:[
       "25",
       "-9 (giá trị lẻ nhỏ nhất)",
       "0",
       "-18"
   ],answer:1,
   explanation:"First odd: 25. Smallest odd < 25: -9.<br><b>Đáp án: B</b>"},

  {id:196,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>int a[]={-8,0,20,15,3,4,2,5};\nf1(a,8); output(a,8);</code>&gt;f1 sắp xếp số chẵn tăng dần, giữ nguyên vị trí số lẻ.",
   options:[
       "-8,0,20,15,3,4,2,5 (giữ nguyên)",
       "-8,0,2,15,3,4,20,5",
       "-8,0,2,3,4,5,15,20",
       "Không có câu nào đúng"
   ],answer:1,
   explanation:"Hoán đổi các số chẵn khi phần tử trước > phần tử sau.<br><b>Đáp án: B</b>"},

  {id:197,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (tính tổng số nguyên tố):<br><pre><code>int a[]={1,5,9,23,7,12,6};\ncout&lt;&lt;f(a,7);</code></pre>f kiểm tra số nguyên tố và tính tổng.",
   options:[
       "63",
       "35 (tổng các số nguyên tố)",
       "23",
       "1"
   ],answer:1,
   explanation:"Số nguyên tố: 5, 23, 7. Tổng = 5+23+7=35.<br><b>Đáp án: B</b>"},

  {id:198,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (xóa phần tử tại vị trí k=2):<br><pre><code>int a[]={5,-8,0,6,9}, n=5;\nf(a,n,2); output(a,n);</code></pre>",
   options:[
       "0,6,9,5",
       "0,5,6,9",
       "5,-8,6,9 (xóa pt tại vt K)",
       "-8,5,6,9"
   ],answer:2,
   explanation:"Dịch trái từ index 2: {5,-8,6,9}, n=4.<br><b>Đáp án: C</b>"},

  {id:199,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (in số âm):<br><pre><code>int a[]={12,-9,3,-25,12,5};\nwhile(i&lt;6){\n   if(a[i]&lt;0) cout&lt;&lt;a[i]&lt;&lt;\" \";\n   i++;\n}</code></pre>",
   options:[
       "-9 -25 (xuất các giá trị âm)",
       "-25 -9",
       "-9",
       "-25"
   ],answer:0,
   explanation:"In các phần tử âm theo thứ tự: -9 -25.<br><b>Đáp án: A</b>"},

  {id:200,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (in mảng):<br><pre><code>int values[]={80,70,90,85,80};\nfor(i=0;i&lt;5;i++) cout&lt;&lt;values[i]&lt;&lt;\" \";</code></pre>",
   options:[
       "80 70 90 85 80 (xuất mảng)",
       "70 80 80 85 90",
       "90 85 80 80 70",
       "Không có câu nào đúng"
   ],answer:0,
   explanation:"In tuần tự các phần tử mảng.<br><b>Đáp án: A</b>"},

  {id:201,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (đếm số nguyên tố):<br><pre><code>int a[]={1,5,-9,0,2,4,3};\ncout&lt;&lt;output(a,7);</code></pre>output đếm số phần tử là số nguyên tố.",
   options:[
       "2",
       "3 (đếm số nguyên tố)",
       "4",
       "1"
   ],answer:1,
   explanation:"Số nguyên tố: 5, 2, 3. Đếm = 3.<br><b>Đáp án: B</b>"},

  {id:202,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (tính trung bình mảng):<br><pre><code>int a[]={5,4,6,7}, n=4;\nfloat f(int a[],int n){\n   float t=0.0;\n   for(i=0;i&lt;n;i++) t+=a[i];\n   t/=n; return t;\n}</code></pre>",
   options:[
       "10",
       "12",
       "5.5 (tính TB mảng)",
       "Không có câu nào đúng"
   ],answer:2,
   explanation:"(5+4+6+7)/4 = 22/4 = 5.5.<br><b>Đáp án: C</b>"},

  {id:203,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (xóa các phần tử bằng 3):<br><pre><code>int a[]={1,3,3,-9,5,3}, n=6;\nf(a,n,3); output(a,n);</code></pre>",
   options:[
       "5 1 -9",
       "333",
       "1 -9 5 (xóa pt có giá trị bằng x)",
       "15 -9"
   ],answer:2,
   explanation:"Xóa các phần tử =3. Kết quả: 1 -9 5 (n=3).<br><b>Đáp án: C</b>"},

  {id:204,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>int a=1,b=5;\na+=++b+=2;\n(a&gt;b)?cout&lt;&lt;++a&lt;&lt;\" \"&lt;&lt;b:cout&lt;&lt;b&lt;&lt;\" \"&lt;&lt;++a;</code></pre>",
   options:[
       "2 7",
       "3 6",
       "9 8",
       "10 8"
   ],answer:3,
   explanation:"++b=6, 6+=2 → b=8, a=1+=8=9. a&gt;b (9&gt;8) → ++a=10. In \"10 8\".<br><b>Đáp án: D</b>"},

  {id:205,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (kiểm tra mảng đối xứng):<br><pre><code>int a[]={-9,-1,0,3,0,-1,-9};\ncout&lt;&lt;f(a,7);</code></pre>f kiểm tra a[i]!=a[n-1-i].",
   options:[
       "0",
       "1 (mảng đối xứng)",
       "-1",
       "Cả ba câu đều sai."
   ],answer:1,
   explanation:"Mảng đối xứng qua tâm. Trả về 1.<br><b>Đáp án: B</b>"},

  {id:206,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Chương trình kiểm tra điều gì?<br><pre><code>int a[]={10,9,7,-9,0,-8,1};\nfor(i=0;i&lt;n-1;i++) if(a[i]&lt;a[i+1]) flag=0;</code></pre>",
   options:[
       "Kết quả in lên màn hình số 0",
       "Chương trình không cho kết quả gì.",
       "Kiểm tra mảng giảm dần không?",
       "Cả A và C đều đúng"
   ],answer:3,
   explanation:"Mảng giảm dần? 10&gt;9&gt;7&gt;-9&lt;0 (tăng) → flag=0. Cả A và C đúng.<br><b>Đáp án: D</b>"},

  {id:207,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Chương trình kiểm tra điều gì?<br><pre><code>int a[]={-9,-1,0,3,4,10,91};\nfor(i=0;i&lt;n-1;i++) if(a[i]&gt;a[i+1]) flag=0;</code></pre>",
   options:[
       "Kết quả in lên màn hình số 0",
       "Chương trình không cho kết quả gì.",
       "Kiểm tra mảng tăng dần không?",
       "Cả A và C đều đúng"
   ],answer:2,
   explanation:"Mảng tăng dần, không có a[i]&gt;a[i+1] → flag=1. Output=1 nên A sai.<br><b>Đáp án: C</b>"},

  {id:208,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (tìm max):<br><pre><code>int a[10]; input(a); f(a,x); cout&lt;&lt;x;</code></pre>input gán {1,-100,5,0}, f tìm max.",
   options:[
       "-100",
       "1",
       "0",
       "5 (giá trị lớn nhất)"
   ],answer:3,
   explanation:"Giá trị lớn nhất trong {1,-100,5,0} là 5.<br><b>Đáp án: D</b>"},

  {id:209,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>int a=2,b=4;\nswitch(b){\n   case 5: b+=2;\n   default: a=b--;\n   case 2: a--;\n}\ncout&lt;&lt;a&lt;&lt;\" \"&lt;&lt;b;</code></pre>",
   options:[
       "2 4",
       "1 3",
       "-1 4",
       "Cả 3 câu trên đều sai."
   ],answer:1,
   explanation:"default: a=b--=4 (b=3). fallthrough case 2: a--=3. KQ: a=1, b=3.<br><b>Đáp án: B</b>"},

  {id:210,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>int i=1,n=0;\nwhile(i&gt;n){\n   while(i&lt;4) i+=2;\n   n++; i-=3;\n}\ncout&lt;&lt;i&lt;&lt;\" \"&lt;&lt;n;</code></pre>",
   options:[
       "1 2 (đúng)",
       "0 1",
       "Cả 2 câu trên đều sai.",
       "Chương trình bị lỗi."
   ],answer:0,
   explanation:"Chạy: i=1→5→2 (n=1)→4→1 (n=2). i=1, n=2.<br><b>Đáp án: A</b>"},

  {id:211,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>void doi(int *a,int b){\n   *a=b; *a+=b++;\n}\ndoi(&amp;x, y=2); cout&lt;&lt;x&lt;&lt;\" \"&lt;&lt;y;</code></pre>",
   options:[
       "4 2",
       "2 4",
       "Cả 2 câu trên đều sai.",
       "Chương trình bị lỗi."
   ],answer:0,
   explanation:"*a=b=2 (x=2); *a+=b++ → x=2+2=4, b=3 (local). y=2.<br><b>Đáp án: A</b>"},

  {id:212,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>int f(unsigned so){\n   cout&lt;&lt;so%10;\n   if(so/10==0) return;\n   else return f(so/10);\n}\nf(123);</code></pre>",
   options:[
       "123",
       "321",
       "Cả hai câu trên đều sai.",
       "Lời gọi hàm sai."
   ],answer:1,
   explanation:"In chữ số cuối trước, đệ quy phần còn lại: 3 rồi 2 rồi 1.<br><b>Đáp án: B</b>"},

  {id:213,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>double m=3.4, *p=&amp;m;\ndouble r=5.6, *q=&amp;r;\ndouble *&amp;v=q;\ncout&lt;&lt;*p&lt;&lt;' '&lt;&lt;*v;</code></pre>",
   options:[
       "3.4 5.6",
       "5.6 3.4",
       "Cả hai câu trên đều sai.",
       "Không có kết quả."
   ],answer:0,
   explanation:"v là tham chiếu đến con trỏ q. *v=*q=5.6. *p=3.4.<br><b>Đáp án: A</b>"},

  {id:214,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>char name[15]=\"Trung Tam Tin Hoc CCS\";\ncout&lt;&lt;name+10;</code></pre>",
   options:[
       "Trung Tam",
       "Tin Hoc CCS",
       "Trung Tam Tin Hoc CCS10",
       "Chương trình báo lỗi."
   ],answer:1,
   explanation:"name+10 trỏ đến \"Tin Hoc CCS\" (bỏ qua \"Trung Tam \").<br><b>Đáp án: B</b>"},

  {id:215,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (đảo case ký tự):<br><pre><code>char s[]=\"Good Luck\";\nwhile(s[i]!=0){\n   if(isalpha(s[i])){\n      if(s[i]&lt;97) s[i]+=32;\n      else s[i]-=32;\n   }\n   i++;\n}\ncout&lt;&lt;s;</code></pre>",
   options:[
       "Good Luck",
       "gOOD lUCK",
       "GOOD LUCK",
       "good luck"
   ],answer:1,
   explanation:"Đảo case: G→g, o→O, o→O, d→D, L→l, u→U, c→C, k→K.<br><b>Đáp án: B</b>"},

  {id:216,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>for(int num=2;num&lt;=60;num+=((num+10)%20==0)?10:2)\n   cout&lt;&lt;num&lt;&lt;\" \";</code></pre>",
   options:[
       "2 4 6 8 10 20 22 24 26 28 30 40 42 44 46 48 50 60",
       "4 6 8 10 12 14 16 18 20 22 24 26 28 30 40 50 60",
       "4 6 8 10 12 14 16 18 20 30 32 34 36 38 40 50 60",
       "4 6 8 10 20 30 32 34 36 38 40 50 52 54 56 58 60"
   ],answer:0,
   explanation:"num=2,4,6,8,10,20,22,...,30,40,42,...,50,60.<br><b>Đáp án: A</b>"},

  {id:217,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>int a=5,b=6,c=7;\nif(a&gt;b)\n   if(b&lt;c) c=a;\nelse\n   c=b;\ncout&lt;&lt;\"c=\"&lt;&lt;c;</code></pre>",
   options:[
       "6",
       "7",
       "Cả 2 câu trên đều sai.",
       "Không có kết quả."
   ],answer:1,
   explanation:"a&gt;b false, else gắn với if(b&lt;c) nên không chạy. c=7.<br><b>Đáp án: B</b>"},

  {id:218,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (có { }):<br><pre><code>int a=5,b=6,c=7;\nif(a&gt;b){\n   if(b&lt;c) c=a;\n}\nelse c=b;\ncout&lt;&lt;\"c=\"&lt;&lt;c;</code></pre>",
   options:[
       "6",
       "7",
       "Cả 2 câu trên đều sai.",
       "Không có kết quả."
   ],answer:0,
   explanation:"a&gt;b false, else c=b=6 (else thuộc if ngoài).<br><b>Đáp án: A</b>"},

  {id:219,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (cast double* sang int*):<br><pre><code>double v=12;\ndouble *pv=&amp;v;\nf((int*)pv); // in *pd</code></pre>",
   options:[
       "12",
       "0",
       "Cả 2 câu trên đều sai.",
       "Không có kết quả."
   ],answer:1,
   explanation:"Reinterpret double (8 bytes) thành int (4 bytes) → giá trị rác (thường 0).<br><b>Đáp án: B</b>"},

  {id:220,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>static int a[]={1,2,3,4,5};\nint i=3; bool swap=true;\nif(swap) tmp=a[i];\na[i]=a[i+1]; a[i+1]=tmp;\nfor(i=0;i&lt;5;i++) cout&lt;&lt;a[i]&lt;&lt;' ';</code></pre>",
   options:[
       "2 3 4 5",
       "2 3 5 4",
       "4 3 2 1",
       "Cả 3 câu trên đều sai."
   ],answer:3,
   explanation:"swap=true: tmp=a[3]=4. Unconditional: a[3]=a[4]=5, a[4]=4. KQ: {1,2,3,5,4}.<br><b>Đáp án: D</b>"},

  {id:221,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>double m=3.4, *p,*q;\ndouble r=5.6;\np=&amp;m; q=&amp;r;\ndouble *&amp;v=q;\ncout&lt;&lt;*p&lt;&lt;\"\"&lt;&lt;*v;</code></pre>",
   options:[
       "3.45.6",
       "5.6 3.4",
       "Cả 2 câu trên đều sai.",
       "Không có kết quả."
   ],answer:0,
   explanation:"*p=3.4, *v=*q=5.6. In liền \"3.45.6\".<br><b>Đáp án: A</b>"},

  {id:222,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"So sánh switch-case và if-else (cùng chức năng):",
   options:[
       "Có cùng 1 kết quả",
       "Có 2 kết quả khác nhau",
       "2 câu trên đều sai",
       "2 đoạn chương trình bị lỗi"
   ],answer:0,
   explanation:"Cả 2 đoạn đều kiểm tra x và in ra cùng kết quả.<br><b>Đáp án: A</b>"},

  {id:223,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>int divide(int a, int b=2){return a/b;}\ncout&lt;&lt;divide(12)&lt;&lt;\" \"&lt;&lt;divide(20,4);</code></pre>",
   options:[
       "12 5",
       "6 5",
       "Cả 2 câu trên đều sai",
       "Chương trình bị lỗi"
   ],answer:1,
   explanation:"divide(12)=12/2=6. divide(20,4)=20/4=5.<br><b>Đáp án: B</b>"},

  {id:224,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả:<br><pre><code>int divide(int a, int b=2){return a/b;}\ncout&lt;&lt;divide(12)&lt;&lt;\" \"&lt;&lt;divide(20,4);</code></pre>",
   options:[
       "12 5",
       "6 5",
       "Cả 2 câu trên đều sai",
       "Chương trình bị lỗi"
   ],answer:1,
   explanation:"divide(12)=12/2=6. divide(20,4)=20/4=5.<br><b>Đáp án: B</b>"},

  {id:225,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (overloaded divide):<br><pre><code>int divide(int a,int b){return a/b;}\nfloat divide(float a,float b){return a/b;}\nint x=5,y=2; float n=5.0,m=2.0;\ncout&lt;&lt;divide(x,y)&lt;&lt;\" \"&lt;&lt;divide(n,m);</code></pre>",
   options:[
       "2.5 2.5",
       "2 2.5",
       "Error 'Overloaded function'",
       "Cả 3 câu trên đều sai."
   ],answer:1,
   explanation:"int: 5/2=2. float: 5.0/2.0=2.5.<br><b>Đáp án: B</b>"},

  {id:226,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (increase void* data):<br><pre><code>char a=5; short b=9; long c=12;\nincrease(&amp;a,sizeof(a));\nincrease(&amp;b,sizeof(b));\nincrease(&amp;c,sizeof(c));\ncout&lt;&lt;(int)a&lt;&lt;\",\"&lt;&lt;b&lt;&lt;\",\"&lt;&lt;c;</code></pre>",
   options:[
       "5,9,12",
       "6,10,13",
       "Cả 2 câu trên đều sai",
       "Lỗi chương trình"
   ],answer:1,
   explanation:"Mỗi biến tăng lên 1: 5+1=6, 9+1=10, 12+1=13.<br><b>Đáp án: B</b>"},

  {id:227,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả Test(36,21) - GCD:<br><pre><code>int Test(int a,int b){\n   if(a==b) return a;\n   else if(a&lt;b) return Test(a,b-a);\n   else return Test(a-b,b);\n}</code></pre>",
   options:[
       "1",
       "2",
       "3",
       "Không có câu nào đúng"
   ],answer:2,
   explanation:"Giải thuật Euclid: GCD(36,21)=3.<br><b>Đáp án: C</b>"},

  {id:228,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả Test(8) - tính tổng 1..n:<br><pre><code>int Test(int n){\n   if(n==1) return 1;\n   else return Test(n-1)+n;\n}</code></pre>",
   options:[
       "12",
       "16",
       "24",
       "36"
   ],answer:3,
   explanation:"1+2+...+8 = 8*9/2 = 36.<br><b>Đáp án: D</b>"},

  {id:229,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (đảo số 7317):<br><pre><code>int number=7317, convert=0;\nfor(;number&gt;0;number/=10)\n   convert=convert*10+number%10;\ncout&lt;&lt;convert;</code></pre>",
   options:[
       "7337",
       "7137",
       "Cả 2 câu trên đều sai",
       "Lỗi chương trình"
   ],answer:1,
   explanation:"Đảo ngược 7317 thành 7137.<br><b>Đáp án: B</b>"},

  {id:230,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (kiểm tra mảng đối xứng):<br><pre><code>int a[]={-9,-1,0,3,0,-1,-9};\ncout&lt;&lt;f(a,7);</code></pre>",
   options:[
       "0",
       "1",
       "Cả 2 câu trên đều sai",
       "Lỗi chương trình"
   ],answer:1,
   explanation:"Mảng đối xứng, trả về 1.<br><b>Đáp án: B</b>"},

  {id:231,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (tìm số chẵn nhỏ nhất?):<br><pre><code>int a[]={1,25,-9,20,0,37,-18,3};\nf(a,8); // tìm số chẵn đầu, rồi tìm chẵn lớn hơn</code></pre>",
   options:[
       "25",
       "27",
       "37",
       "20"
   ],answer:3,
   explanation:"Số chẵn đầu: 20. Không có chẵn &gt;20.<br><b>Đáp án: D</b>"},

  {id:232,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (tổng đường chéo chính):<br><pre><code>int a[3][3]={{1,2,3},{4,5,6},{7,8,9}};\nint f(){for(i=0;i&lt;3;i++) t+=a[i][i]; return t;}</code></pre>",
   options:[
       "10",
       "13",
       "15",
       "16",
       "Cả 4 câu trên đều sai."
   ],answer:2,
   explanation:"a[0][0]+a[1][1]+a[2][2] = 1+5+9 = 15.<br><b>Đáp án: C</b>"},

  {id:233,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (tổng đường chéo phụ):<br><pre><code>int a[3][3]={{5,-2,3},{4,0,-6},{7,8,-3}};\nint f(){for(i=0;i&lt;3;i++) t+=a[i][rows-i-1]; return t;}</code></pre>",
   options:[
       "6",
       "12",
       "7",
       "10",
       "Cả 4 câu trên đều sai"
   ],answer:3,
   explanation:"a[0][2]=3, a[1][1]=0, a[2][0]=7. Tổng=10.<br><b>Đáp án: D</b>"},

  {id:234,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (tổng hàng k=1):<br><pre><code>int a[3][3]={{1,5,0},{-9,7,12},{3,15,6}};\ncout&lt;&lt;f(a,1); // tổng hàng 1</code></pre>",
   options:[
       "6",
       "10",
       "23",
       "24"
   ],answer:1,
   explanation:"a[1][0]+a[1][1]+a[1][2] = -9+7+12 = 10.<br><b>Đáp án: B</b>"},

  {id:235,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Chức năng của hàm strlen(char *s)?",
   options:[
       "Đếm số kí tự trắng trong chuỗi s",
       "Trả về độ dài của chuỗi s",
       "Trả về chỉ số của kí tự NULL trong chuỗi",
       "Cả (B) và (C) đều đúng"
   ],answer:3,
   explanation:"strlen trả về số kí tự trước null, tương đương chỉ số của null.<br><b>Đáp án: D</b>"},

  {id:236,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Hàm strcat(char s1, char s2) dùng để?",
   options:[
       "Tìm vị trí của chuỗi s2 trong s1",
       "Tìm vị trí của chuỗi s1 trong s2",
       "Nối chuỗi s2 vào cuối chuỗi s1",
       "Trả về chỉ số của kí tự null trong chuỗi"
   ],answer:2,
   explanation:"strcat(s1,s2) nối s2 vào cuối s1.<br><b>Đáp án: C</b>"},

  {id:237,ky:"ktlt_vuong",label:"KTLT trắc nghiệm thầy Vượng",
   text:"Kết quả (chương trình lỗi):<br><pre><code>int sum,value,inct;\nfor(i==0,i&lt;=10,i++){\n   value++; sum+=value; inct++;\n}\ncout&gt;&gt;sum/inct&gt;&gt;endl;</code></pre>",
   options:[
       "10",
       "4",
       "44",
       "Đoạn mã bị lỗi"
   ],answer:3,
   explanation:"Nhiều lỗi: biến chưa khởi tạo, for dùng , thay ;, dùng == thay =, cout dùng &gt;&gt;.<br><b>Đáp án: D</b>"}

];
