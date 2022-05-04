var score=0;
let buttonElement=document.getElementById('btn');
buttonElement.addEventListener('click',button);
function button()
  {
    buttonElement.setAttribute('disabled','disabled')
    value=die_value()
    add_score(value)
    score=check_for_snake(score)
    score=check_for_ladder(score)
    if(value==6)
    {
      button()
    }
    if(score>=100)
    {
      console.log("You won");
      buttonElement.setAttribute('disabled','disabled')      
    }
    buttonElement.querySelector('btn')
    buttonElement.disabled = false
  }
function die_value()
      {
          let die=Math.floor(Math.random()*6)+1;
          return die;
}
function add_score(val)
{
  score+=val
  console.log('score',score);
}
function check_for_snake()
{
  let snake_head=[98,95,92,83,73,64,69]
  let snake_tail=[28,24,51,19,2,36,33]
  var len_snake=snake_head.length
  for(i=0;i<=len_snake-1;i++)
  {
      if(snake_head[i]==score)
      {
        console.log("Bitten by Snake");
        score=snake_tail[i]
        console.log(score);
      }
  }
      return score
}
function check_for_ladder(score)
{
  let ladder_bottom=[8,10,13,18,20,22,43,49,55,62,66,80]
  let ladder_top=[26,29,50,45,60,44,77,91,85,96,87,99]
  var len_ladder=ladder_bottom.length
  for(i=0;i<=len_ladder-1;i++)
  {
      if(ladder_bottom[i]==score)
      {
      console.log("Climbed in ladder");
      score=ladder_top[i]
      console.log("score",score);
      }
  }
      return score
}