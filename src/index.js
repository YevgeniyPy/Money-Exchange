// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money={}
    let H;
    let Q;
    let D;
    let N;
    if (currency<=0){
        return money;     
    }
    if (currency>10000){
        return money= {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
     if (currency<5){
        money.P=currency;
        return money;
    }
     if (currency>=5 && currency<10){
        N=Math.floor(currency/5);
        money.N=N;
        if (currency%5 ==0){return money;}
        money.P=(currency%5);
        return money;
    }
     if (currency>=10 && currency<25){
        D=Math.floor(currency/10);
        money.D=D;
         if((currency%10)==0){
             return money;
         }
           if((currency%10)<5){
            money.P=(currency%10);
            return money;
        }
        else 
        N=Math.floor((currency%10)/5);
        money.N=N;
        if ((currency%10)%5 ==0){return money;}
        money.P=((currency%10)%5);
        return money;   
    }
     if (currency>=25 && currency<50) {
         Q=Math.floor(currency/25);
         money.Q=Q;
         if ((currency%25)==0){
             return money;
         }
         
         if((currency%25)<5){
            money.P=(currency%25);
            return money;
        }
         if ((currency%25)>=5 && (currency%25)<10){
             N=Math.floor((currency%25)/5)
             money.N=N
            money.P=((currency%25)%5);
            return money;

        }
        else 
          D=Math.floor((currency%25)/10);
         money.D=D;
            if ((currency%25)%10==0){
                return money;
            }
           if((currency%25)%10<5){
               money.P=((currency%25)%10);
               return money;
           }
           else 
             N=Math.floor(((currency%25)%10)/5)
             money.N=N;
             money.P=(((currency%25)%10)%5);
        return money;
             
     }
    else H=Math.floor(currency/50);
     money.H=H;
         if ((currency%50)==0){
             return money;
         }
         if ((currency%50)<5){
        money.P=(currency%50);
        return money;
        }
        
         if ((currency%50)>=5 && (currency%50)<10){
         N=Math.floor((currency%50)/5)
         money.N=N
         if ((currency%50)%5 ==0){ return money;}
         money.P=((currency%50)%5);
         return money;
          }
         if ((currency%50)>=10 &&(currency%50)<25){
          D=Math.floor((currency%50)/10)
          money.D=D;
           if (((currency%50)%10)==0){
               return money;
           }
           if(((currency%50)%10)<5){
            money.P=((currency%50)%10);
            return money;
            }
            else 
            N=Math.floor(((currency%50)%10)/5);
            money.N=N;
            if (((currency%50)%10)%5 ==0){return money;}
            money.P=(((currency%50)%10)%5);
            return money;
            }
        else  Q=Math.floor((currency%50)/25);
            money.Q=Q;
            if (((currency%50)%25)==0){
                return money;
            }
            if(((currency%50)%25)<5){
              money.P=((currency%50)%25);
              return money;
             }
             if (((currency%50)%25)>=5 && ((currency%50)%25)<10){
                N=Math.floor(((currency%50)%25)/5)
                money.N=N
                money.P=(((currency%50)%25)%5);
                return money;

            }
            else 
            D=Math.floor(((currency%50)%25)/10);
            money.D=D;
                if(((currency%50)%25)%10<5 && ((currency%50)%25)%10<5){
                money.P=(((currency%50)%25)%10);
                return money;
                }
                else 
                N=Math.floor((((currency%50)%25)%10)/5)
                money.N=N;
                money.P=((((currency%50)%25)%10)%5);
                return money;
      
  
}
