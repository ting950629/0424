let circles = [];
let subMenuItems = ["第一周", "第二周", "第三周", "第四周"]; // 作品集的子選單
let subMenuHoverIndex = -1; // 用於追蹤滑鼠懸停的子選單項目索引
let iframeURL = ""; // 用於儲存當前 iframe 的網址
let introText = ""; // 用於儲存自我介紹的文字

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#e3d5ca'); // 設定背景顏色

  // 生成 40 個圓的初始位置和顏色
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      color: color(random(255), random(255), random(255)), // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background('#e3d5ca'); // 每次重繪背景

  let size = map(mouseX, 0, width, 10, 120); // 根據滑鼠 X 軸位置調整圓的大小

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, size, size);
  }

  // 如果 iframeURL 不為空，繪製 iframe
  if (iframeURL !== "") {
    drawIframe();
  }

  // 如果 introText 不為空，顯示自我介紹文字
  if (introText !== "") {
    drawIntroText();
  }
}

function resetHome() {
  iframeURL = ""; // 清空 iframe
  introText = ""; // 清空自我介紹文字
  circles = []; // 重置圓的陣列
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      color: color(random(255), random(255), random(255)), // 隨機鮮豔顏色
    });
  }
  // 移除所有 iframe 元素
  let iframes = selectAll('iframe');
  for (let iframe of iframes) {
    iframe.remove();
  }
}

function showIntro() {
  introText = "我是黃子庭"; // 顯示自我介紹文字
  iframeURL = ""; // 清空 iframe
}

function showPortfolio() {
  // 顯示作品集子選單邏輯
}

function showVideos() {
  iframeURL = "https://cfchen58.synology.me/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%882024/A2/week3/20250307_092233.mp4"; // 設定 iframe 的網址

  // 移除現有的 iframe，避免重複創建
  let iframes = selectAll('iframe');
  for (let iframe of iframes) {
    iframe.remove();
  }

  // 創建新的 iframe 元素
  let iframeWidth = width * 0.8; // iframe 寬度佔畫面 80%
  let iframeHeight = height * 0.8; // iframe 高度佔畫面 80%
  let iframeX = (width - iframeWidth) / 2; // 計算 iframe 的 X 座標
  let iframeY = (height - iframeHeight) / 2; // 計算 iframe 的 Y 座標

  let iframe = createElement('iframe');
  iframe.attribute('src', iframeURL);
  iframe.attribute('frameborder', '0'); // 移除邊框
  iframe.attribute('allow', 'autoplay; fullscreen'); // 允許自動播放與全螢幕
  iframe.style('object-fit', 'cover'); // 確保影片填滿 iframe
  iframe.position(iframeX, iframeY);
  iframe.size(iframeWidth, iframeHeight);
  iframe.attribute('allowfullscreen', true); // 允許全螢幕
}

function drawIframe() {
  let iframeWidth = width * 0.8; // iframe 寬度佔畫面 80%
  let iframeHeight = height * 0.8; // iframe 高度佔畫面 80%
  let iframeX = (width - iframeWidth) / 2; // 計算 iframe 的 X 座標
  let iframeY = (height - iframeHeight) / 2; // 計算 iframe 的 Y 座標

  // 設定 iframe 背景
  fill('#ffffff');
  stroke('#cccccc');
  strokeWeight(2);
  rect(iframeX, iframeY, iframeWidth, iframeHeight);

  // 嵌入 iframe
  let iframe = createElement('iframe');
  iframe.attribute('src', iframeURL);
  iframe.position(iframeX, iframeY);
  iframe.size(iframeWidth, iframeHeight);
}

function drawIntroText() {
  let boxWidth = 300; // 方框寬度
  let boxHeight = 100; // 方框高度
  let boxX = (width - boxWidth) / 2; // 方框 X 座標
  let boxY = (height - boxHeight) / 2; // 方框 Y 座標

  // 繪製方框
  fill('#ffffff');
  stroke('#3a5a40');
  strokeWeight(2);
  rect(boxX, boxY, boxWidth, boxHeight, 10); // 圓角方框

  // 繪製文字
  textSize(30);
  textAlign(CENTER, CENTER);
  fill('#3a5a40');
  text(introText, width / 2, height / 2); // 在方框中央顯示文字
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}