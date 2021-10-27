const countdown =() =>{
   const endDate= new Date ("October 27, 2021, 23:02:00").getTime()
   const now = new Date ().getTime()

   const difference = now-endDate

   const seconds= 1000
   const minutes= seconds*60
   const hours= minutes*60
   const days= hours*24


   

   const timeDays=Math.floor(difference / days)
    const timeHours=Math.floor((difference % days) / hours)
    const timeMinutes= Math.floor((difference % hours)/ minutes)
     const timeSeconds= Math.floor((difference % minutes)/  seconds)

   

   document.getElementById("days").innerHTML = timeDays
   document.getElementById("hours").innerHTML = timeHours
   document.getElementById("minutes").innerHTML = timeMinutes
   document.getElementById("seconds").innerHTML = timeSeconds
  


}
setInterval(countdown,1000)
