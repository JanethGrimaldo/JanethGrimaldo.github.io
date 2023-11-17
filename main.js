let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #8fa9a9;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #1c5f6f;">Estudiante de Ingeniería Biomédica y Fisioterapeuta.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
