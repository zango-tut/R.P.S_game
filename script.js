        let playerScore = 0;
        let computerScore = 0;
        let drawScore = 0;
        
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 5 + 3;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                particle.style.animationDelay = `${Math.random() * 15}s`;
                particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Game logic
        function GameStarter(playerChoice) {
            const playerDisplay = document.getElementById('player');
            const computerDisplay = document.getElementById('computer');
            const resultDisplay = document.getElementById('result');
            
            playerDisplay.classList.add('animated');
            computerDisplay.classList.add('animated');
            resultDisplay.classList.remove('win', 'lose', 'draw');
            
            playerDisplay.textContent = '?';
            computerDisplay.textContent = '?';
            resultDisplay.textContent = 'Deciding...';
            
            setTimeout(() => {
                const choices = ['✊', '✋', '✌️'];
                const computerChoice = choices[Math.floor(Math.random() * 3)];
                
                playerDisplay.textContent = playerChoice;
                computerDisplay.textContent = computerChoice;
                
                let result = '';
                
                if (playerChoice === computerChoice) {
                    result = "It's a Draw!";
                    drawScore++;
                    resultDisplay.classList.add('draw');
                } else if (
                    (playerChoice === '✊' && computerChoice === '✌️') ||
                    (playerChoice === '✋' && computerChoice === '✊') ||
                    (playerChoice === '✌️' && computerChoice === '✋')
                ) {
                    result = "You Win!";
                    playerScore++;
                    resultDisplay.classList.add('win');
                } else {
                    result = "Computer Wins!";
                    computerScore++;
                    resultDisplay.classList.add('lose');
                }
                
                resultDisplay.textContent = result;
                
                document.getElementById('ScorePlayer').textContent = playerScore;
                document.getElementById('ScoreComp').textContent = computerScore;
                document.getElementById('ScoreDrow').textContent = drawScore;
                
                setTimeout(() => {
                    playerDisplay.classList.remove('animated');
                    computerDisplay.classList.remove('animated');
                }, 1000);
            }, 800);
        }
        
        function ResetScore() {
            playerScore = 0;
            computerScore = 0;
            drawScore = 0;
            
            document.getElementById('ScorePlayer').textContent = playerScore;
            document.getElementById('ScoreComp').textContent = computerScore;
            document.getElementById('ScoreDrow').textContent = drawScore;
            
            document.getElementById('player').textContent = '?';
            document.getElementById('computer').textContent = '?';
            
            const resultDisplay = document.getElementById('result');
            resultDisplay.textContent = 'Scores Reset! Choose again!';
            resultDisplay.classList.remove('win', 'lose', 'draw');
            
            resultDisplay.classList.add('draw');
            setTimeout(() => {
                resultDisplay.classList.remove('draw');
            }, 2000);
        }
        
        window.onload = createParticles;