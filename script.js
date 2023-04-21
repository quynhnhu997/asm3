function handleSubmit() {
  //Lấy giá trị input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  //Lấy elenmen của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");

  //Điều kiện là email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //Dùng match kiểm tra email vừa nhập
  const checkEmail = emailValue.match(regex);

  const hiDe = document.querySelector("#personal-info .hide");

  const submitControl = document.querySelector(".submit-emai");
  if (checkEmail) {
    hiDe.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Hãy xác thực email";
  }
}

//Ẩn nút view-more và view-less khi trỏ chuột element hiện lên
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("view-less")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const hiDe = parentElement.querySelectorAll(".hide");
  if (viewMore.classList.value.includes("view-more")) {
    hiDe.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("view-less");
    viewMore.innerHTML = "View less";
  } else {
    hiDe.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more";
  }
}
