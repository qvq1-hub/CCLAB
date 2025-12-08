let chatshaking = false;
let tiktokshaking = false;
let homescreen = 0;
let cam;

let chapter1Screen = 0;
let chapter2Screen = 0;
let chapter3Screen = 0;
let chapter4Screen = 0;
let chapter5Screen = 0;
let chapter6Screen = 0;
let chapter7Screen = 0;

let img1, img2, img3, img4, img5;
let img6, img7, img8, img9, img10;
let img11, img12, img13, img14, img15, img16;
let img17, img18, img19;
let img20, img21, img22, img23;
let img24, img25, img26, img27;
let img28, img29, img30, img31;
let img32;

let clickSound;
let chap1Music;
let chap2Music;
let chap5Music;
let badEndMusic;
let chap1GoodEndSound;
let chap1goodend2Sound;

function preload() {
  // Apps
  img1 = loadImage("camera.png");
  img2 = loadImage("tutorial.png");
  img3 = loadImage("story.png");
  img4 = loadImage("chat.png");
  img5 = loadImage("tiktok.png");

  // Chapter 1
  img6 = loadImage("Chap1page1.png");
  img7 = loadImage("chap1badend1.png");
  img8 = loadImage("chap1badend2.png");
  img9 = loadImage("chap1goodend1.png");
  img10 = loadImage("chap1goodend2.png");

  // Chapter 2
  img11 = loadImage("chap2.png");
  img12 = loadImage("chap2goodend.png");
  img13 = loadImage("chap2badend.png");
  
  // Chapter 3
  img14 = loadImage("chap3.png");
  img15 = loadImage("chap3goodend.png");
  img16 = loadImage("chap3badend.png");
  
  // Chapter 4
  img17 = loadImage("chap4.png");
  img18 = loadImage("chap4goodend.png");
  img19 = loadImage("chap4badend.png");
  
  // Chapter 5
  img20 = loadImage("chap5.png");
  img21 = loadImage("chap5goodend.png");
  img22 = loadImage("chap5badend1.png");
  img23 = loadImage("chap5badend2.png");
  
  // Chapter 6
  img24 = loadImage("chap6page1.png");
  img25 = loadImage("chap6page2.png");
  img26 = loadImage("chap6badend.png");
  img27 = loadImage("chap6badend.png");
  img32 = loadImage("chap6goodend.png");

  // Chapter 7
  img28 = loadImage("chap7page1.png");
  img29 = loadImage("chap7page2.png");
  img30 = loadImage("chap7page3.png");
  img31 = loadImage("lastpage.png");

  // Sounds
  clickSound = loadSound("whenmouseisclicked.mp3");
  chap1Music = loadSound("chap1music.mp3", soundLoaded);
  chap2Music = loadSound("chap2.mp3", soundLoaded);
  chap5Music = loadSound("chap5music.mp3", soundLoaded);
  badEndMusic = loadSound("allbadendmusic.mp3", soundLoaded);
  chap1GoodEndSound = loadSound("chap1goodend1.mp3", soundLoaded);
  chap1goodend2Sound = loadSound("chap1goodend2.mp3", soundLoaded);
}

function soundLoaded() {
  console.log("A sound file has been successfully loaded.");
}

function setup() {
  createCanvas(550, 800);
  cam = createCapture(VIDEO);
  cam.hide();

  chap1Music.loop();
  chap1Music.pause();
  chap2Music.loop();
  chap2Music.pause();
  chap5Music.loop();
  chap5Music.pause();
  badEndMusic.loop();
  badEndMusic.pause();
}

function draw() {
  background(200);
  drawPhoneFrame();
  drawPhoneScreen();

  if (homescreen === 0) drawApps();
  else if (homescreen === 1) drawTutorialLayer();
  else if (homescreen === 2) drawCameraLayer();
  else if (homescreen === 3) drawStoryLayer();
  else if (homescreen === 4) drawChapter1Layer();
  else if (homescreen === 5) drawChapter2Layer();
  else if (homescreen === 6) drawChapter3Layer();
  else if (homescreen === 7) drawChapter4Layer();
  else if (homescreen === 8) drawChapter5Layer();
  else if (homescreen === 9) drawChapter6Layer();
  else if (homescreen === 10) drawChapter7Layer();

  drawHomeButton();
  handleMusic();
  
  drawStatusBar();
}

function drawStatusBar() {
  let currentTime = "18:02";
  let currentBattery = "100%";

  if (homescreen === 4) {
    if (chapter1Screen === 0 || chapter1Screen === 1 || chapter1Screen === 2) {
      currentTime = "18:15";
      currentBattery = "97%";
    } else if (chapter1Screen === 3) {
      currentTime = "19:30";
      currentBattery = "85%";
    } else if (chapter1Screen === 4) {
      currentTime = "20:10";
      currentBattery = "80%";
    }
  }
  else if (homescreen === 5) {
    if (chapter2Screen === 0 || chapter2Screen === 1) {
      currentTime = "21:10";
      currentBattery = "78%";
    } else if (chapter2Screen === 2) {
      currentTime = "07:10";
      currentBattery = "65%";
    }
  }
  else if (homescreen === 6) {
    if (chapter3Screen === 0 || chapter3Screen === 2) {
      currentTime = "07:50";
      currentBattery = "60%";
    } else if (chapter3Screen === 1) {
      currentTime = "08:00";
      currentBattery = "59%";
    }
  }
  else if (homescreen === 7) {
    if (chapter4Screen === 0 || chapter4Screen === 2) {
      currentTime = "08:15";
      currentBattery = "58%";
    } else if (chapter4Screen === 1) {
      currentTime = "08:20";
      currentBattery = "57%";
    }
  }
  else if (homescreen === 8) {
    if (chapter5Screen === 0) {
      currentTime = "08:50";
      currentBattery = "55%";
    } else if (chapter5Screen === 1 || chapter5Screen === 2) {
      currentTime = "09:15";
      currentBattery = "50%";
    } else if (chapter5Screen === 3) {
      currentTime = "16:10";
      currentBattery = "40%";
    }
  }
  else if (homescreen === 9) {
    if (chapter6Screen === 0) {
      currentTime = "17:15";
      currentBattery = "38%";
    } else if (chapter6Screen === 1) {
      currentTime = "17:30";
      currentBattery = "37%";
    } else if (chapter6Screen === 2 || chapter6Screen === 3) {
      currentTime = "17:40";
      currentBattery = "36%";
    }
  }
  else if (homescreen === 10) {
    if (chapter7Screen === 0) {
      currentTime = "18:30";
      currentBattery = "25%";
    } else if (chapter7Screen === 1) {
      currentTime = "19:40";
      currentBattery = "15%";
    } else if (chapter7Screen === 2) {
      currentTime = "20:30";
      currentBattery = "2%";
    } else if (chapter7Screen === 3) {
      currentTime = "21:00";
      currentBattery = "0%";
    }
  }

  fill(0);
  textSize(18);
  text("No connection", 60, 73);
  text(currentTime, 250, 73);
  text(currentBattery, 410, 73);
  textSize(25);
  text("𓈚", 460, 70);
}

function handleMusic() {
  let isBadEndScreen = 
    (homescreen === 4 && (chapter1Screen === 1 || chapter1Screen === 2)) ||
    (homescreen === 5 && chapter2Screen === 1) ||
    (homescreen === 6 && chapter3Screen === 2) ||
    (homescreen === 7 && chapter4Screen === 2) ||
    (homescreen === 8 && (chapter5Screen === 1 || chapter5Screen === 2)) ||
    (homescreen === 9 && chapter6Screen === 2);

  if (isBadEndScreen) {
    if (!badEndMusic.isPlaying()) {
      stopAllMusic();
      badEndMusic.play();
    }
  } 
  else if (homescreen === 4 && chapter1Screen === 0) {
    if (!chap1Music.isPlaying()) {
      stopAllMusic();
      chap1Music.play();
    }
  }
  else if (homescreen === 5 && chapter2Screen === 0) {
    if (!chap2Music.isPlaying()) {
      stopAllMusic();
      chap2Music.play();
    }
  }
  else if (homescreen === 8 && chapter5Screen === 0) {
    if (!chap5Music.isPlaying()) {
      stopAllMusic();
      chap5Music.play(); 
    }
  }
  else if (homescreen === 4 && chapter1Screen === 3) {
    if (!chap1goodend2Sound.isPlaying()) {
      stopAllMusic();
      chap1goodend2Sound.play();
    }
  }
  else if (homescreen === 10 && chapter7Screen === 3) {
    stopAllMusic();
  }
  else {
    stopAllMusic();
  }
}

function stopAllMusic() {
  chap1Music.pause();
  chap2Music.pause();
  chap5Music.pause(); 
  badEndMusic.pause();
  chap1GoodEndSound.pause();
  chap1goodend2Sound.pause();
}

function drawPhoneFrame() {
  rectMode(CENTER);
  fill(0);
  rect(275, 380, 460, 660);
  rect(255, 30, 50, 8);
  circle(300, 30, 8);
}

function drawPhoneScreen() {
  fill(220);
  rect(275, 380, 455, 655);
}

function drawHomeButton() {
  fill(200);
  strokeWeight(3);
  circle(275, 755, 60);
}

function drawApps() {
  fill(0);
  textSize(18);
  text("camera", 84, 218);
  text("tutorial", 246, 218);
  text("story", 410, 218);
  text("chat", 95, 368);
  text("tiktok", 254, 368);

  image(img1, 40, 70, 150, 150);
  image(img2, 200, 70, 150, 150);
  image(img3, 350, 70, 150, 150);

  let u1 = chatshaking ? 5 * cos(frameCount * 0.8) : 0;
  let v1 = chatshaking ? 4.5 * sin(frameCount) : 0;
  image(img4, 40 + u1, 220 + v1, 150, 150);

  let u2 = tiktokshaking ? 5 * cos(frameCount * 0.8) : 0;
  let v2 = tiktokshaking ? 4.5 * sin(frameCount) : 0;
  image(img5, 200 + u2, 220 + v2, 150, 150);

  if (!mouseIsPressed) {
    chatshaking = false;
    tiktokshaking = false;
  }
}

function drawTutorialLayer() {
  fill(255);
  rect(275, 380, 455, 655);
  fill(0);
  textSize(25);
  text("Hello users!😊", 90, 150);
  textSize(25);
  text("Welcome to another world.Through ", 80, 180);
  text("this phone you can experience", 80, 210);
  text("journey of being reincarnated. ", 80, 240);

  text("As you can see there are some apps ", 80, 300);
  text("on the phone screen but dear my ", 80, 330);
  text("users. I'm really sorry to say, in ", 80, 360);
  text("this world you can only access the", 80, 390);
  text("story app. Tap on the app now to ", 80, 420);
  text("experience this journey.", 80, 450);
  text("and remember. ", 80, 480);
  text(" ALWAYS FOLLOW YOUR GUT! ", 105, 515);
}

function drawStoryLayer() {
  fill(255);
  rect(275, 380, 455, 655);
  fill(0);
  rect(275, 250, 350, 200);
  fill(255);
  textSize(70);
  text("START", 170, 270);
}

function drawCameraLayer() {
  fill(0);
  rect(275, 380, 455, 655);
  fill(255);
  rectMode(CENTER);
  rect(width / 2, 630, 450, 5);
  fill(180);
  circle(width / 2, 670, 60);
  fill(0);
  circle(width / 2, 670, 50);
  image(cam, 50, 55, 450, 570);
}

function drawChapter1Layer() {
  push();
  if (chapter1Screen === 0) {
    image(img6, 48, 52, 455, 655); 
    fill(235); 
    rect(180, 400, 200, 60); 
    rect(180, 500, 200, 60); 
    fill(0); 
    textSize(27); 
    text("Call mom", 128, 410); 
    text("Explore", 130, 510);
  } else if (chapter1Screen === 1) {
    image(img7, 48, 52, 455, 655);
  } else if (chapter1Screen === 2) {
    image(img8, 48, 52, 455, 655);
  } else if (chapter1Screen === 3) {
    image(img9, 48, 52, 455, 655);
  } else if (chapter1Screen === 4) {
    image(img10, 48, 52, 455, 655);
  }
  pop();
}

function drawChapter2Layer() {
  if (chapter2Screen === 0) {
    image(img11, 48, 52, 455, 655); 
    fill(235); 
    rect(330, 400, 200, 60);
    rect(330, 500, 200, 60); 
    fill(0); 
    textSize(27); 
    text("Escape", 290, 410); 
    text("Sleep", 290, 510);
  } else if (chapter2Screen === 1) {
    image(img13, 48, 52, 455, 655);
  } else if (chapter2Screen === 2) {
    image(img12, 48, 52, 455, 655);
  }
}

function drawChapter3Layer() {
  if (chapter3Screen === 0) {
    image(img14, 48, 52, 455, 655); 
    fill(235); 
    rect(380, 500, 200, 60); 
    rect(380, 600, 200, 60); 
    fill(0); 
    textSize(27); 
    text("Say Yes", 328, 510); 
    text("Runaway", 328, 610);
  } else if (chapter3Screen === 1) {
    image(img15, 48, 52, 455, 655);
  } else if (chapter3Screen === 2) {
    image(img16, 48, 52, 455, 655);
  }
}

function drawChapter4Layer() {
  if (chapter4Screen === 0) {
    image(img17, 48, 52, 455, 655); 
    fill(235); 
    rect(180, 550, 200, 60); 
    rect(180, 650, 200, 60); 
    fill(0); 
    textSize(27); 
    text("say no", 128, 560); 
    text("do it", 128, 660);
  } else if (chapter4Screen === 1) {
    image(img18, 48, 52, 455, 655);
  } else if (chapter4Screen === 2) {
    image(img19, 48, 52, 455, 655);
  }
}

function drawChapter5Layer() {
  if (chapter5Screen === 0) {
    image(img20, 48, 52, 455, 655); 
    fill(235); 
    rect(380, 450, 200, 60); 
    rect(380, 550, 200, 60); 
    fill(0); 
    textSize(27); 
    text("escape", 328, 460); 
    text("pick fruit", 328, 560);
  } else if (chapter5Screen === 1) {
    image(img22, 48, 52, 455, 655);
  } else if (chapter5Screen === 2) {
    image(img23, 48, 52, 455, 655);
  } else if (chapter5Screen === 3) {
    image(img21, 48, 52, 455, 655);
  }
}

function drawChapter6Layer() {
  if (chapter6Screen === 0) {
    image(img24, 48, 52, 455, 655);
  } else if (chapter6Screen === 1) {
    image(img25, 48, 52, 455, 655);
    fill(235); 
    rect(180, 500, 200, 60); 
    rect(180, 600, 200, 60); 
    fill(0); 
    textSize(27); 
    text("convince them", 115, 510); 
    text("say just kidding", 110, 610);
  } else if (chapter6Screen === 2) {
    image(img26, 48, 52, 455, 655);
  } else if (chapter6Screen === 3) {
    image(img32, 48, 52, 455, 655);
  }
}

function drawChapter7Layer() {
  if (chapter7Screen === 0) {
    image(img28, 48, 52, 455, 655);
  } else if (chapter7Screen === 1) {
    image(img29, 48, 52, 455, 655);
  } else if (chapter7Screen === 2) {
    image(img30, 48, 52, 455, 655);
  } else if (chapter7Screen === 3) {
    image(img31, 48, 52, 455, 655);
  }
}

function mousePressed() {
  if (clickSound && !clickSound.isPlaying()) clickSound.play();

  // HOME BUTTON
  let d = dist(mouseX, mouseY, 275, 755);
  if (d < 30) {
    homescreen = 0; 
    chapter1Screen = 0; 
    chapter2Screen = 0; 
    chapter3Screen = 0; 
    chapter4Screen = 0; 
    chapter5Screen = 0;
    chapter6Screen = 0;
    chapter7Screen = 0;
    stopAllMusic();
    return;
  }

  // HOME SCREEN
  if (homescreen === 0) {
    if (mouseX > 40 && mouseX < 190 && mouseY > 220 && mouseY < 370) chatshaking = true;
    if (mouseX > 200 && mouseX < 350 && mouseY > 220 && mouseY < 370) tiktokshaking = true;
    if (mouseX > 200 && mouseX < 350 && mouseY > 70 && mouseY < 220) homescreen = 1;
    if (mouseX > 40 && mouseX < 190 && mouseY > 70 && mouseY < 220) homescreen = 2;
    if (mouseX > 360 && mouseX < 510 && mouseY > 70 && mouseY < 220) homescreen = 3;
  }

  // STORY → CHAPTER 1
  if (homescreen === 3 && mouseX > 100 && mouseX < 450 && mouseY > 150 && mouseY < 350) { homescreen = 4; chapter1Screen = 0; }

  if (homescreen === 4) {
    if (chapter1Screen === 0) {
      if (mouseX > 80 && mouseX < 280 && mouseY > 370 && mouseY < 430) { chapter1Screen = 1; return; }
      if (mouseX > 80 && mouseX < 280 && mouseY > 470 && mouseY < 530) { chapter1Screen = 3; return; }
    }
    if (chapter1Screen === 1) { chapter1Screen = 2; return; }
    if (chapter1Screen === 3) { chapter1Screen = 4; return; }
    if (chapter1Screen === 4) { homescreen = 5; chapter2Screen = 0; return; }
  }

  if (homescreen === 5) {
    if (chapter2Screen === 0) {
      if (mouseX > 230 && mouseX < 430 && mouseY > 370 && mouseY < 430) chapter2Screen = 1;
      if (mouseX > 230 && mouseX < 430 && mouseY > 470 && mouseY < 530) chapter2Screen = 2;
    } else if (chapter2Screen === 2) { homescreen = 6; chapter3Screen = 0; }
  }

  if (homescreen === 6) {
    if (chapter3Screen === 0) {
      if (mouseX > 280 && mouseX < 480 && mouseY > 470 && mouseY < 530) { chapter3Screen = 1; return; }
      if (mouseX > 280 && mouseX < 480 && mouseY > 570 && mouseY < 630) { chapter3Screen = 2; return; }
    } else if (chapter3Screen === 1) { homescreen = 7; chapter4Screen = 0; }
  }

  if (homescreen === 7) {
    if (chapter4Screen === 0) {
      if (mouseX > 80 && mouseX < 280 && mouseY > 520 && mouseY < 580) { chapter4Screen = 1; return; }
      if (mouseX > 80 && mouseX < 280 && mouseY > 620 && mouseY < 680) { chapter4Screen = 2; return; }
    } 
    else if (chapter4Screen === 1) { homescreen = 8; chapter5Screen = 0; }
  }

  if (homescreen === 8) {
    if (chapter5Screen === 0) {
      if (mouseX > 280 && mouseX < 480 && mouseY > 420 && mouseY < 480) { chapter5Screen = 3; return; }
      if (mouseX > 280 && mouseX < 480 && mouseY > 520 && mouseY < 580) { chapter5Screen = 1; return; }
    }
    else if (chapter5Screen === 1) { chapter5Screen = 2; }
    else if (chapter5Screen === 3) { homescreen = 9; chapter6Screen = 0; return; }
  }

  if (homescreen === 9) {
    if (chapter6Screen === 0) {
      chapter6Screen = 1;
      return;
    } else if (chapter6Screen === 1) {
      if (mouseX > 80 && mouseX < 280 && mouseY > 470 && mouseY < 530) {
        chapter6Screen = 2;
        return;
      }
      if (mouseX > 80 && mouseX < 280 && mouseY > 570 && mouseY < 630) {
        chapter6Screen = 3;
        return;
      }
    } else if (chapter6Screen === 3) {
      homescreen = 10; chapter7Screen = 0;
      return;
    }
  }

  if (homescreen === 10) {
    if (chapter7Screen === 0) {
      chapter7Screen = 1;
      return;
    } else if (chapter7Screen === 1) {
      chapter7Screen = 2;
      return;
    } else if (chapter7Screen === 2) {
      chapter7Screen = 3;
      return;
    }
  }
}