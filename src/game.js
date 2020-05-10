


  document.addEventListener('DOMContentLoaded', (event) => {
    var app = new Vue({
        el: '#app',
        data: {
          questions: questions,
          currentQuestionIndex: 0,
          score: 0,
          gameFinished: false

        },
        methods: {
        handleAnswerSubmission(ans){
            if(this.questions[this.currentQuestionIndex].answers[ans].correct)
                this.score ++;

            
            this.currentQuestionIndex ++;
            if(this.currentQuestionIndex === this.questions.length){
              this.currentQuestionIndex = 0;
              this.gameFinished = true;
            }
        }
    },
    computed: {
      currentQuestion(){
        return this.questions[this.currentQuestionIndex];
      }
    }
      })
  })