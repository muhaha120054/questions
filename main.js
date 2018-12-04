function getRecordFromTxtFile(){
    const fs = require('fs');
    let txtFile = "AGL_001.TXT";
    let str = fs.readFileSync(txtFile,'utf8');
    let newString =[];

    // 9 = tab, 32 = space ,13 = enter ,10 = nothing
    for(let i =0;i<str.length;i++){
        let x = str.charCodeAt(i);
        if( x === 9 || x === 32 || x === 13 || x ==="\n"){
            newString += "-";
        } else{
          newString += str.charAt(i);
        }
    }
    let records = newString.split('-');
    let record = new Array();
    let row = 0;

    let element =0;
    for(let i =7;i<records.length;i++){
        if(i%8 === 7){
            records[i] = records[i].substring(1);    
            //console.log(typeof records[i]);
            //console.log(record[row][element]);
            record[element] = records[i];       
            element += 1;
        } else if(i%8 === 1){
            record[element] = records[i];       
            element += 1;
        }else if(i%8 === 5){
            record[element] = records[i];       
            element += 1;
        }else if(i%8 === 6){
            record[element] = records[i];       
            element += 1; 
        }
    }
    let data = [];
    let index =0;
    
    for ( let i =0;i<(record.length/4);i++){
        for( let j =0;j< 4;j++)
        {
            if(j === 0){
                data[i] = new Array(4);    
            }
            data[i][j] = record[index];
            index += 1;
        }
    }
    //test result
    console.log(data[1313]);
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




