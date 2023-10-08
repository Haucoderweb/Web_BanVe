function send() {
    var arr = document.getElementsByTagName('input');
    var mssv = arr[0].value;
    var ht = arr[1].value;
    var email = arr[2].value;
    var gioiTinh = document.querySelector('input[name="gender"]:checked');
    var soThich = document.querySelectorAll('input[type="checkbox"]:checked');
    var quocTich = document.querySelector('.Quoctich select').value;
    var ghiChu = document.getElementById("note").value;

    var error = false;

    if (mssv === "") {
        arr[0].style.backgroundColor = "yellow";
        error = true;
        alert("Không được để trống mssv");
    } else {
        arr[0].style.backgroundColor = "";
    }

    if (ht === "") {
        arr[1].style.backgroundColor = "yellow";
        error = true;
        alert("Không được để trống họ và tên");
    } else {
        arr[1].style.backgroundColor = "";
    }

    if (email === "" || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        arr[2].style.backgroundColor = "yellow";
        error = true;
        alert("Không được để trống email");
    } else {
        arr[2].style.backgroundColor = "";
    }

    if (!gioiTinh) {
        document.querySelector('.gioitinh').style.backgroundColor = "yellow";
        error = true;
    } else {
        document.querySelector('.gioitinh').style.backgroundColor = "";
    }

    if (soThich.length === 0) {
        document.querySelector('.sothich').style.backgroundColor = "yellow";
        error = true;
    } else {
        document.querySelector('.sothich').style.backgroundColor = "";
    }

    if (quocTich === "1") {
        document.querySelector('.Quoctich').style.backgroundColor = "yellow";
        error = true;
    } else {
        document.querySelector('.Quoctich').style.backgroundColor = "";
    }

    if (ghiChu.length > 200) {
        document.querySelector('.ghichu').style.backgroundColor = "yellow";
        error = true;
    } else {
        document.querySelector('.ghichu').style.backgroundColor = "";
    }

    if (!error) {
       
        alert("Dữ liệu hợp lệ, tiến hành gửi hoặc xử lý");
    }
}