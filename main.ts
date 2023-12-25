import inquirer from "inquirer";
let answer=await inquirer.prompt([{
  type:"input",
  name:"userID",
  message:"Enter your ID"
},
{
  type:"number",
  name:"userPIN",
  message:"Enter your PIN"
},{
  type:"list",
  name:"accountType",
  message:"Select your account type",
  choices:["Current","Saving"]
},{
  type:"list",
  name:"transactionType",
  message:"Enter your transaction",
  choices:["Fastcash","Withdraw"],
  when(answer){
    return answer.accountType
  }
},
{
  type:"list",
  name:"amount",
  message:"Select your amount",
  choices:[10000,20000,30000,4000],
  when(answer){
    return answer.transactionType == "Fastcash"
  }
},{
  type:"number",
  name:"amount",
  message:"Select your amount ",
  when(answer){
    return answer.transactionType == "Withdraw"
  }

}

])
if(answer.userID && answer.userPIN){
  let balanced = 50000;
  console.log("Previous balanced:", balanced)
  let enteredamount = answer.amount
  if(balanced>=enteredamount){
    let remaining = balanced - enteredamount
    console.log("Your remaining balanced is :",remaining);
    
  }
}
else {
  console.log("Insufficient Balanced");
  
}

