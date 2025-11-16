document.getElementById("fileInput").addEventListener("change", async function(event) {
  const file = event.target.files[0];
  if (!file) return;

  // 미리보기
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.getElementById("previewImg");
    img.src = e.target.result;
    img.style.display = "block";
  };
  reader.readAsDataURL(file);

  document.getElementById("loading").style.display = "block";

  // AWS 분석 호출
  await analyzeWithAWS(file);

  document.getElementById("loading").style.display = "none";
});

async function analyzeWithAWS(file) {
  try {
    const upload = await s3.upload({
      Bucket: BUCKET_NAME,
      Key: `uploads/${Date.now()}_${file.name}`,
      Body: file,
      ContentType: file.type,
    }).promise();

    const result = await lambda.invoke({
      FunctionName: LAMBDA_NAME,
      Payload: JSON.stringify({ imageUrl: upload.Location })
    }).promise();

    const data = JSON.parse(result.Payload);

    document.getElementById("trashType").textContent = `쓰레기 종류: ${data.type}`;
    document.getElementById("recycleType").textContent = `재활용 여부: ${data.recycle}`;
  } catch (err) {
    console.error("AWS 분석 오류:", err);
    alert("분석 중 오류가 발생했습니다.");
  }
}
