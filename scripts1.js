function generate() {
var project = document.getElementById('project');
var projects=["5 second rule", "caffeine's effects on plants", "dichotomous key"];
var random=Math.floor(Math.random()*3);
  project.innerHTML=projects[random];
}
