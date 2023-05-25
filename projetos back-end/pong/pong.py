import turtle
import os

#setup da janela
wn = turtle.Screen()
wn.title("Pong")
wn.bgcolor("black")
wn.setup(width=800, height=600)
wn.tracer(0)

# pontos
score_a = 0
score_b = 0

# pad A:
paddle_A = turtle.Turtle()
paddle_A.speed(0)
paddle_A.shape("square")
paddle_A.shapesize(stretch_wid=6, stretch_len=1)
paddle_A.color("white")
paddle_A.penup()
paddle_A.goto(-350, 0)

# pad B:
paddle_B = turtle.Turtle()
paddle_B.speed(0)
paddle_B.shape("square")
paddle_B.shapesize(stretch_wid=6, stretch_len=1)
paddle_B.color("white")
paddle_B.penup()
paddle_B.goto(350, 0)

# bola:
ball = turtle.Turtle()
ball.speed(0)
ball.shape("square")
ball.color("white")
ball.penup()
ball.goto(0, 0)
ball.dx = 1
ball.dy = 1

# Placar
placar = turtle.Turtle()
placar.speed(0)
placar.shape("square")
placar.color("white")
placar.penup()
placar.hideturtle()
placar.goto(0, 260)
placar.write("Player A: 0  Player B: 0", align="center", font=("Courier", 24, "normal"))


#funções
def paddle_a_up():
    y = paddle_A.ycor()
    y += 20
    paddle_A.sety(y)

def paddle_a_down():
    y = paddle_A.ycor()
    y -= 20
    paddle_A.sety(y)

def paddle_b_up():
    y = paddle_B.ycor()
    y += 20
    paddle_B.sety(y)

def paddle_b_down():
    y = paddle_B.ycor()
    y -= 20
    paddle_B.sety(y)

#stando as teclas
wn.listen()
wn.onkeypress(paddle_a_up, "w")
wn.onkeypress(paddle_a_down, "s")
wn.onkeypress(paddle_b_up, "Up")
wn.onkeypress(paddle_b_down, "Down")

#roda o game
while True:
    wn.update()

    #movimento da bola
    ball.setx(ball.xcor()+ball.dx)
    ball.sety(ball.ycor()+ball.dy)

    #checando as bordas
 
        # topo e chão
    if ball.ycor() > 290:
        ball.sety(290)
        ball.dy *= -1
        os.system("afplay bounce.wav&")
    
    elif ball.ycor() < -290:
        ball.sety(-290)
        ball.dy *= -1
        os.system("afplay bounce.wav&")

    # direita e esquerda
    if ball.xcor() > 350:
        score_a += 1
        placar.clear()
        placar.write("Player A: {}  Player B: {}".format(score_a, score_b), align="center", font=("Courier", 24, "normal"))
        ball.goto(0, 0)
        ball.dx *= -1

    elif ball.xcor() < -350:
        score_b += 1
        placar.clear()
        placar.write("Player A: {}  Player B: {}".format(score_a, score_b), align="center", font=("Courier", 24, "normal"))
        ball.goto(0, 0)
        ball.dx *= -1

        # Colisão
    if ball.xcor() < -340 and ball.ycor() < paddle_A.ycor() + 50 and ball.ycor() > paddle_A.ycor() - 50:
        ball.dx *= -1 
        os.system("afplay bounce.wav&")
    
    elif ball.xcor() > 340 and ball.ycor() < paddle_B.ycor() + 50 and ball.ycor() > paddle_B.ycor() - 50:
        ball.dx *= -1
        os.system("afplay bounce.wav&")
    
