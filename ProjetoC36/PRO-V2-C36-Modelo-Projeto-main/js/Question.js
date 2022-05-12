class Question {

  constructor() {

    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Digite Seu Nome Aqui....");
    this.input2 = createInput("").attribute("placeholder", "Digite a alternativa correta.");
    this.input3 = createInput("").attribute("placeholder", "Digite a alternativa correta.");
    this.button = createButton("Enviar");
    this.question1 = createElement('h3');
    this.question2 = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement('h2');

  }

  hide() {

    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
    this.button.hide();
    this.message.hide();

  }

  display() {

    this.title.html("Meu Questionário");
    this.title.position(350, 0);
    
    this.question1.html("1.Se o pato perde a pata, ele fica...");
    this.question1.position(150, 80);
    this.option1.html("A.Viúvo");
    this.option1.position(150, 100);
    this.option2.html("B.Manco");
    this.option2.position(150, 120);

    this.question2.html("2.Laranja é uma...");
    this.question2.position(150, 200);
    this.option3.html("A.Fruta");
    this.option3.position(150, 220);
    this.option4.html("B.Cor");
    this.option4.position(150, 240);

    this.input1.position(25, 375);
    this.input2.position(150, 160);
    this.input3.position(150, 280);
    this.button.position(795, 375);

    this.button.mousePressed( () => {
      
    this.message.html("Obrigado! Sua resposta foi enviada.");
    this.message.position(325, 350);

    });

  }
  
}
