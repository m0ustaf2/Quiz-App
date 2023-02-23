import{Quiz}from './Quiz.js'
export class Settings
{
    constructor ()
    {
      this.categoryElement=document.getElementById('category');
      this.difficulty=document.getElementsByName('difficulty');
      this.numberOfQues=document.getElementById('numOfQuestions');

      this.startBtn=document.getElementById('startBtn');
      this.startBtn.addEventListener('click',this.getData.bind(this));
        
    }

   async getData()
    {
      if(this.numberOfQues.value>=0&&this.numberOfQues.value!=""){
        let categoryValue=this.categoryElement.value;
        let numberOfQuesValue=this.numberOfQues.value;
        let difficultyValue=[...this.difficulty].filter((element)=>{return element.checked ==true})[0].value;
        let myUrl=` https://opentdb.com/api.php?amount=${numberOfQuesValue}&category=${categoryValue}&difficulty=${difficultyValue}`
        let myResults=await this.getApi(myUrl);
        $('#setting').fadeOut(1000,function(){
          $('#quiz').fadeIn(1000);
             let myQuiz=new Quiz(myResults)



        })
      }else{
        $('#formAlert').fadeIn(1000);
      }
       

    }
    async getApi(newUrl){
      let getData=await fetch(newUrl);
      let myResponse=await getData.json();
      return myResponse.results;
    }

}