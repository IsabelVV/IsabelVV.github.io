function generate() {
project = document.getElementById('project');
projects=["Are Childproof Containers Really Childproof?", "Is Smiling Contagious?", "Does temperature increase with stress?"];
random=Math.floor(Math.random()*3);
  project.innerHTML=projects[random];
}
