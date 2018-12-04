function getRecordFromTxtFile(){
    
    //read from txt file
    const fs = require('fs');
    let txtFile = "AGL_001.TXT";
    let str = fs.readFileSync(txtFile,'utf8');
    

    //turn the followings into hypen
    // charcode: 9 = tab, 32 = space ,13 = enter ,10 = nothing
    let tempString =[];
    for(let i =0;i<str.length;i++){
        let x = str.charCodeAt(i);
        if( x === 9 || x === 32 || x === 13 || x ==="\n"){
            tempString += "-";
        } else{
            tempString += str.charAt(i);
        }
    }
  
    //extract useful elements to cleanSet
    let tempArray = tempString.split('-');
    let cleanSet = new Array();
    let element =0;
    console.log(tempArray[7].substring(1));
    for(let i =7;i<tempArray.length;i++){
        if(i%8 === 7){
            tempArray[i] = tempArray[i].substring(1);
            cleanSet[element] = tempArray[i];       
            element += 1;
        } else if(i%8 === 1){
            cleanSet[element] = tempArray[i];       
            element += 1;
        }else if(i%8 === 5){
            cleanSet[element] = tempArray[i];       
            element += 1;
        }else if(i%8 === 6){
            cleanSet[element] = tempArray[i];       
            element += 1; 
        }
    }

    //recombine elements into record[indexID, studentID,Date,Time]
    let record = [];
    let index =0;
    for ( let i =0;i<(cleanSet.length/4);i++){
        for( let j =0;j< 4;j++)
        {
            if(j === 0){
                record[i] = new Array(4);    
            }
            record[i][j] = cleanSet[index];
            index += 1;
        }
    }
    //test result
    console.log(record[1]);
}
function setUpTeacherData(){
    let Teacher = function (id, name,salaryType){
        this.id = id;
        this.name = name;
        this.salaryType = salaryType;
        //console.log([this.id,this.name,this.salaryType]);
    
    }
    Teacher.prototype.salaryInit = function(salaryHourly,salaryMonthly,){
        this.salaryHourly = salaryHourly;
        this.salaryMonthly = salaryMonthly;
        //console.log([this.salaryHourly,this.salaryMonthly]);
    }
    
    Teacher.prototype.varDeclear = function(){
        this.yearMonth ='2018.11';
        this.hourSum ='';
        this.minuteSum ='';
        this.salarySum = '';
        this.records = '';
    }
    
    let teacher1 = new Teacher(0,'jack','monthly');
    teacher1.salaryInit(0,25000);
    teacher1.varDeclear();
    
    let teacher2 = new Teacher(1,'test1','hourly');
    teacher2.salaryInit(150,0);

}

getRecordFromTxtFile();
setUpTeacherData();




