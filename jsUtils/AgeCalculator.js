export class AgeCalculator{
    constructor (bornDate) {
        this.born = new Date(bornDate);
        this.bornYear = this.born.getFullYear();

        this.ageinMilliseconds = Date.now() - this.born.getTime();
        this.ageinDays = this.ageinMilliseconds /1000 /60 /60 /24
        this.ageinYears = this.#ageInYearsCalulator(this.bornYear, this.ageinDays).ageinYears;
    };

    // private func with "#" char
    #ageInYearsCalulator(bornYear, ageinDays){
        let year = bornYear;
        let ageinYears = 0;
        for (let i = 0; ageinDays >= 365  ; i++){
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
                //this year is a leap year
                ageinDays = ageinDays - 366;
            } else {
                //this year is not a leap year
                ageinDays = ageinDays - 365;
            }
            year++;
            ageinYears++;
        }
        //GET DECIMAL VALUE
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            ageinYears += ageinDays/366;
        } else {
            ageinYears += ageinDays/365;
        }

        return {ageinYears: ageinYears, remainingDays: ageinDays};        
    }



    getAgeInMilliseconds(){
        return this.ageinMilliseconds
    }

    getAgeInDays(){
        return this.ageinDays;
    }

    getAgeInYears(){
        return this.ageinYears;
    }

    getFullAge(){
        let years = Math.floor(this.getAgeInYears());
        let months=0, days=0, hours=0, minutes=0, seconds=0;
        
        //---- days ----
        days = Math.floor(this.#ageInYearsCalulator(this.bornYear, this.ageinDays).remainingDays);

        //---- seconds ----
        seconds = Math.floor(this.getAgeInMilliseconds() /1000);
        seconds = seconds - (Math.floor(this.getAgeInDays())*24*60*60);

        //---- minutes ----
        for (let i = 1; seconds >= 60; i++){
            seconds -= 60;
            minutes = i;
        }


        //---- hours ----
        for (let i = 1; minutes >= 60; i++){
            minutes -= 60;
            hours = i;
        }

        //---- months ----
        for (let i = 1; days >= 30; i++){
            days -= 30;
            months = i;
        }

        return {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }
    }
    
}