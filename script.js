// 19/04/2023

function palindrome()
{
 let a=(document.getElementById("pal").value) 
 b=a.split("")
 console.log(b)
 d=b.reverse()
 e=d.join()
 console.log(a)
 console.log(e)
 f=e.replaceAll(",","")
 console.log(f)
 let c=document.getElementById("result")
 if (a==f)
  c.innerHTML="The given string is palindrome"
 else
  c.innerHTML="The given string is not a palindrome"
}