
export class Quiz{
    constructor(questions){
     this.questions=questions;
     this.numberOfQues=questions.length;

     document.getElementById('totalAmount').innerHTML=this.numberOfQues;
     this.currentQues=0;
     this.score=0;
     this.nextBtn=document.getElementById('next');
     this.nextBtn.addEventListener('click',this.checkAnswer.bind(this))
     this.showData();


     let tryBtn=document.getElementById('tryBtn');
     tryBtn.addEventListener('click',function(){
         location.reload();
     })
    }

    checkAnswer(){
      let correctAnswer=this.questions[this.currentQues].correct_answer;
      let allanswers=Array.from(document.getElementsByName('answers'));
      let userAnswer=allanswers.filter((ele)=>{return ele.checked == true })[0].value;
       
      if(userAnswer == correctAnswer){

        $('#Correct').fadeIn(500).fadeOut(500);
        this.score++;
       
      }else{
        $('#inCorrect').fadeIn(500).fadeOut(500);
      }
      this.currentQues++;
      if(this.currentQues>=this.numberOfQues){
        $('#quiz').fadeOut(10);
        $('#finish').fadeIn(1000);
        $('#score').html(this.score)

      }else{
        this.showData();
      }
    }
    showData(){
        document.getElementById('question').innerHTML=this.questions[this.currentQues].question;
        document.getElementById('current').innerHTML=this.currentQues+1;
        this.allAnswers=[this.questions[this.currentQues].correct_answer, ...this.questions[this.currentQues].incorrect_answers];
        this.shuffle(this.allAnswers);
        let cartoona=``;
        for(let i=0;i<this.allAnswers.length;i++){
            cartoona+=`
           
         <div class="form-check">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="answers" value="${this.allAnswers[i]}">
                                ${this.allAnswers[i]}
                            </label>
                        </div>
            `
        }
        
        document.getElementById('rowAnswer').innerHTML=cartoona;
    }
     shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
}