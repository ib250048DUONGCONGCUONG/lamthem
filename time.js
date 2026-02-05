function calculate() {
  const hours = document.getElementById("hours").value;
  const wage = document.getElementById("wage").value;

  if (hours === "" || wage === "") {
    alert("勤務時間と時給を入力してください");
    return;
  }

  const total = hours * wage;
  document.getElementById("total").textContent = total;
}
