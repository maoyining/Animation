let nowTime=new Date();
let nowYear=nowTime.getFullYear();
let nowMonth=nowTime.getMonth();

//根据年份和月份来获取一个月在表格里应该有的数据
//注意月份的传入应该先减一再传入
function getMonthData(year,month){
    let res=[];
    //本月的第一天
    let firstDay=new Date(year,month,1);
    let firstDayWeek=firstDay.getDay();
    if(firstDayWeek==0){ //处理周日为0的情况
        firstDayWeek=7;
    }
    //上个月的最后一天
    let lastDayLM=new Date(year,month,0);
    let lastDayLMWeek=lastDayLM.getDay();
    if(lastDayLMWeek==0){//处理周日为0的情况
        lastDayLMWeek=7;
    }
    //把上个月的部分日期放入数组
    let lastDayLMDate=lastDayLM.getDate();
    for(let i=firstDayWeek-1;i>=1;i--){
        let realMonth;
        let realYear;
        if(month==0){
            realMonth=11;
            realYear=year-1;
        }else{
            realMonth=month-1;
            realYear=year;
        }
        let date=new Date(realYear,realMonth,lastDayLMDate);
        res.unshift(date);
        lastDayLMDate--;
    }

    //本月最后一天
    let lastDay=new Date(year,month+1,0);
    let lastDayWeek=lastDay.getDay();
    if(lastDayWeek==0){
        lastDayWeek=7;
    }
    //把本月的所有天数放入数组
    for(let i=1;i<=lastDay.getDate();i++){
        let date=new Date(year,month,i);
        res.push(date);
    }
    //把下个月应该放的天数都放进数组
    for(let i=1;i<=7-lastDayWeek;i++){
        let realMonth;
        let realYear;
        if(month==11){
            realMonth=0;
            realYear=year+1;
        }else{
            realMonth=month+1;
            realYear=year;
        }
        let date=new Date(realYear,realMonth,i);
        res.push(date);
    }
   
    return res;
}

//渲染函数，获取数据并渲染
function render(year,month){
    //获取数据
    let arr=getMonthData(year,month);
    
    //渲染表格头
    let head=document.getElementsByClassName("ui-datepicker-curr-month")
    head[0].textContent=year+"-"+(month+1);
    
    //渲染表格内容
    let table=(document.getElementsByTagName("table"))[0];
    let father=(table.getElementsByTagName("tbody"))[0];
    let tr;
    //如果已有子元素要删除
    while(father.hasChildNodes()){
        father.removeChild(father.firstChild);
    }
    for(let i=0;i<arr.length;i++){
        if(i%7==0){
            tr=document.createElement("TR");
        }
        let td=document.createElement("TD");
        td.textContent=arr[i].getDate();
        td.setAttribute("date",arr[i].getFullYear()+"-"+(arr[i].getMonth()+1));
        tr.appendChild(td);
        if((i+1)%7==0){
            father.appendChild(tr)
        }
    }
}

function nextMonth(){
    if(nowMonth!=11){
        nowMonth++;
    }else{
        nowYear++;
        nowMonth=0;
    }
    render(nowYear,nowMonth);
}

function prevMonth(){
    if(nowMonth!=0){
        nowMonth--;
    }else{
        nowYear--;
        nowMonth=11;
    }
    render(nowYear,nowMonth);
}

function getDate(event){
    let node=event.target;
    let ym=node.getAttribute("date");
    let day=node.innerText
   alert(ym+"-"+day)
    //alert("这是"+nowYear+"-"+(nowMonth+1)+"-"+day);
}

render(nowYear,nowMonth);



