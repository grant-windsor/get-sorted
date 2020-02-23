document.getElementById("button").addEventListener('click', function(event) {
  event.preventDefault();


  let values = [];
  let questions = document.querySelectorAll("form");
  for(let i = 0; i<questions.length; i++) {
    let answers = document.getElementsByName(questions[i].id);
    for (let j = 0; j<answers.length; j++) {
      if(answers[j].checked) {
        values.push(answers[j].value);
      }
    }
  }

  console.log(values);

  let g = 0;
  let r = 0;
  let h = 0;
  let s = 0;

  for (let value of values) {    //s:
    switch (value) {
      case 'minister':
        s += 3;
        h+=2;
        r+=2;
        g+=1;
        break;
      case 'professional':
        g+=2;
        break;
      case 'auror':
        g+=2;
        s+=2;
        h+=1;
        break;
      case 'professor':
        r+=4;
        h+=2;
        g+=2;
        break;
      case 'deluminator':
        r+=3;
        s+=1;
        g+=1;
        break;
      case "pensieve":
        r+=2;
        h+=2;
        s+=2;
        break;
      case "cloak":
        g+=2;
        s+=3;
        break;
      case "wand":
        s+=3;
        g+=3;
        break;
      case 'car':
        g+=3;
        h+=2;
        break;
      case 'pheonix':
        h+=3;
        break;
      case 'dragon':
        g+=3;
        s+=2;
        h+=1;
        break;
      case 'hippogriff':
        r+=3;
        g+=2;
        break;
      case 'basilisk':
        s+=2;
        r+=2;
        g+=1;
        break;
      case 'unicorn':
        h+=3;
        r+=2;
        g+=3;
        break;
      case 'acromantula':
        g+=3;
        r+=2;
      case 'beater':
        g+=2;
        h+=2;
        r+=1;
        break;
      case 'seeker':
        s+=3;
        g+=1;
        r+=1;
        break;
      case 'Chaser':
        h+=3;
        g+=2;
        r+=2;
        break;
      case 'keeper':
        h+=2;
        r+=1;
        s+=2;
        break;

      default:

      console.log(g);
      console.log(r);
      console.log(h);
      console.log(s);

    }
  }
  let house = [];
  let highestScore = Math.max(g,r,h,s);
  if (g == highestScore) {
    house.push("Gryffindor");
  }
  if (r == highestScore) {
    house.push("Ravenclaw");
  }
  if (h == highestScore) {
    house.push("Hufflepuff");
  }
  if (s == highestScore) {
    house.push('Slytherin');
  }

  if(house.length > 1) {
    house = house[Math.floor(Math.random() * house.length)];
  } else {
    house = house[0];
  }

  let vals = "";
  let colors = [];
  switch (house) {
    case "Gryffindor":
      vals= "courage, bravery, nerve, and chivalry.";
      colors = ["#7F0909", "#FFC500"];
      break;
    case "Ravenclaw":
      vals = "intelligence, creativity, learning, and wit.";
      colors = ["#000A90", "#946B2D"];
      break;
    case "Hufflepuff":
      vals = "hard work, patience, justice, and loyalty.";
      colors = ["#000000", "#EEE117"];
      break;
    case "Slytherin":
      vals = "ambition, cunning, leadership, and resourcefulness.";
      colors = ["#0D6217", "#AAAAAA"]
      break;
    default:
      vals = 'error';
  }

  border = document.getElementById('border').style = "background-color:" + colors[1] + ";";

  result = document.getElementById("results");
  result.style = "padding:30px; background-color:" + colors[0] + ";";

  result.innerHTML = "<div class='divider' id='line1'></div> <h1>"+ house + "!</h1>" +
    "<h2>House " + house + " values " + vals + "</h2> <div class='divider' id='line2'></div>";

  const key = "$2a$10$W32sdEzo4AIEayoAXScX5uIvnonUebF8pPESN2CbNX78mRUN1Vcg2";
  const url = 'https://www.potterapi.com/v1/' + "houses/" + house + "?key=" + key;

fetch('http://hp-api.herokuapp.com/api/characters/house/' + house)
  .then((response) => {
    return response.json();
  }).then((houseInfo) => {
    console.log(houseInfo);

    let results = "";
    results += "<h2>Other Members of house " + house + " include: </h2>";
    for (let i=0; i < houseInfo.length; i++) {
      results += "<p>" + houseInfo[i].name + "</p>";
    }

    document.getElementById("line1").style = "background-color:" + colors[1] + ";";
    document.getElementById("line2").style = "background-color:" + colors[1] + ";";
    let other = document.getElementById("houseMembers");
    other.style = "padding-bottom: 30px; min-height:600px; background-color:" + colors[0] + ";";
    other.innerHTML = results;
  });
});
