function generate() {
var project = document.getElementById('project');
var projects=["Are Childproof Containers Really Childproof?", "Is Smiling Contagious?", "Does temperature increase with stress?"];
var random=Math.floor(Math.random()*3);
  project.innerHTML=projects[random];
}
