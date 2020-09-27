import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title = 'Motivational quotes';
  quotes:Quote[] = [
    new Quote (1,'Alex','Monday Motivation Quotes','So. Monday. We meet again. We will never be friends, but maybe we can move past our mutual enmity toward a more-positive partnership.','Julio-Alexi Genao', new Date(2029,7,27),0,0),
    new Quote (2,'Michael','Hustle Quotes','Hustle in silence and let your success make the noise.','Unknown',new Date(2020,7,14),0,0),
    new Quote (3,'James','Motivational Quotes for Employees','I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.','Marissa Mayer',new Date(2020,6,9),0,0),
    new Quote (4,'Nicole','Motivational Quotes for Work','Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo Da Vinci, Thomas Jefferson, and Albert Einstein.','H. Jackson Brown Jr.',new Date(2020,3,7),0,0),
    new Quote (5,'Charles','Encouraging Quotes to Motivate You','Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.','Christine Caine',new Date(2020,4,17),0,0),
    new Quote (6,'Rustique','Motivational Quotes for Success','Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.','Pele',new Date(2020,2,15),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit() {
  }

}
