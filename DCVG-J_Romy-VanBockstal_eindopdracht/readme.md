<!-- Mijn concept idee was om een raadselpagina te maken, dit kan een orginele manier zijn om jezelf voor te stellen.
Dit concept heb ik gekozen omdat ik graag bezig ben met onder andere sudoku's en op deze manier wou ik mijzelf voorstellen. 
Het eerste raadsel is een rebus en hiervan is het antwoord mijn naam. Vervolgens hebben we de sudoku, hiervan is het antwoord 24.12 dit staat voor mij verjaardag 24 december. Ten slotte hebben we een logo die ze moeten raden en dit is de school waaraan wij studeren. 
Als alles correct is, dan komt de score erop namelijk geslaagd! -->

<!-- ik heb gebruik gemaakt van de klasopdracht van week 4, de escaperoom. Hieruit heb ik de css grotendeels gehaald. -->
<!-- Op deze website hbe ik de sudoku gehaald: https://codepen.io/pavlovsk/pen/XmjPOE -->
<!-- Op deze website heb ik mijn eigen rebus gemaakt: https://www.festisite.nl/rebus/ -->
<!-- Op deze website heb ik geijken hoe ik flexbox gebruik: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ -->
<!-- Op deze website heb ik verschillende vragen gesteld over bepaalde termen in javascript: https://www.w3schools.com/ -->
<!-- op deze website heb ik opgezocht hoe ik het volgende deed (zelf nog aangepast naar mijn code): https://chatgpt.com/
function checkAllSolved() {
    if (opl1Solved && opl2Solved && opl3Solved) {
        const resultaat = document.querySelector('#score');

        resultaat.innerHTML = `
            <h3 class="h3">Score</h3>
            <p>Goed gedaan geslaagd! ${score1.textContent} ${score2.textContent} ${score3.textContent}</p>
            `;
    }
} -->

<!-- assets:
favicon:
https://www.google.com/search?sca_esv=cd731438e95bc999&sxsrf=AHTn8zpBrSL5ytPcwhKY8pWC3QUNWl_A9w:1743537478671&q=raadsels+achtergrond&udm=2&fbs=ABzOT_AtSsJ0unX8PR-4V5_ssPpSKPsWm3zL3SLFX1pKve8l7ejMa_jiMPetp6CRnz5XsVgWXQwTqFjT8dBn7IMW3tIaTKDEXbxUfp-ZodNJx4gLUq9epwjJaQcnDRIuuU-CUpyqKAHdAa0yxE97ESAxrFDWse07_ecp-KD4YxnJQyHUdRBI4QhRov06XktlSlAdbaYRHRr83mC4KJodeqffMKrSzBmILw&sa=X&ved=2ahUKEwjLjMagz7eMAxWaRKQEHVt4A4YQtKgLegQIERAB&biw=1707&bih=772&dpr=1.13#vhid=vjOcZ7Hj8etjXM&vssid=mosaic 

artevelde logo:
https://www.google.com/search?sca_esv=cd731438e95bc999&sxsrf=AHTn8zprZmsP6vnbkoBJ4rN11RaWMzjLCg:1743537652809&q=artevelde+logo&udm=2&fbs=ABzOT_CucqjzeqoF57Lsz-_gmNX4zkZ6_R8rMjnzfGC3TfYHYurJdRD4KZr84eli4X2lKahksXXVS3dIrJU6LrHKFo76tue7yybGXLo48fJD-O4ydeYYKnn31ABRbiqYVdwrxhUUOUI2zo3UUiCKr7stASdK0hyBvQdefPI4QjMhuVEmINiFCpcn7EBY6oOhugrHolWFJa-w&sa=X&sqi=2&ved=2ahUKEwif3crzz7eMAxURSaQEHU3yE8UQtKgLegQIEBAB&biw=1707&bih=772&dpr=1.13#vhid=H24cGM0uDD3DZM&vssid=mosaic

gifs: van het internet ook gewoon gehaald
-->

<!-- link naar figma:
https://www.figma.com/design/j27qxS926oKUglZH5N914S/Untitled?node-id=0-1&t=O2KlNMn2Qtlsm6dM-1
 -->
<!-- link naar github:
 -->