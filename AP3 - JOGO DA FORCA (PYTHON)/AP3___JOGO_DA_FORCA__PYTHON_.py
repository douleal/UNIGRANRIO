"""
UNIVERSIDADE UNIGRANRIO
AVALIAÇÃO AP3 - PRÁTICA DE PROGRAMAÇÃO EM SISTEMAS DE INFORMAÇÃO
ALUNO = DOUGLAS LEAL (5405603)

PROJETO JOGO DA FORCA (Hangman Game) EM PYTHON

"""


import json, random
from functions import *


#Abertura e leitura do arquivo com as palavras
palavra = list()
dica = list()
conta = list()

with open('palavras.json') as p:
    plv = json.load(p)

for k,v in plv.items():
    palavra.append(k)
    dica.append(v)

    conta.append(k)

cont = len(conta) 
#--------------------------------------------#




#Captura as tentativas
digitadas = []
acertos = []

#Controle de partida
partida = vitorias = derrotas = 0
jogando = True

jogador = input('Olá Jogador, para começar digite o seu nome:  ')
title = 'JOGO DA FORCA EM PYTHON'
painel = 'JOGADOR: {}                || VITÓRIAS: {} ||   || DERROTAS: {} ||   || PARTIDA: {} ||'


print('\n'*15) # limpa a tela


while jogando == True:

    #Captura a palavra e dica sorteada
    index = random.randint(0, (cont-1))
    word = palavra[index]
    pista = dica[index]

    digitadas.clear()
    acertos.clear()

    erros = 0
    partida += 1

    show = painel.format(jogador, vitorias, derrotas, partida)


    while True:
        
        print('{0:^100}'.format(title))
        print('{0:^100}'.format('=-'*15))
        print('\n')
    
        print('{0:^100}'.format('-'*90))
        print('{0:^100}'.format(show))
        print('{0:^100}'.format('-'*90))
        print('\n'*2)

        forca(erros) #imprime o desenho da forca

        temp = ""

        for letra in word:
            temp += letra if letra in acertos else "   -   "

        print('{0:>30}'.format('DICA: '), end="")
        print(pista, '|     ', end="")
        print(temp)


        if temp == word:
            vitorias += 1
            print('\n'*2)
            print("Parabéns, Você acertou!")
            print('\n'*5)

            resp = str(input('Deseja continuar jogando? [S/N] ')).upper().strip()[0]
            print('\n'*4)

            if resp == 'N':
                jogando = False
                
            break
    
        print('\n'*3)
        tentativa = input("Digite uma letra: ").upper()
        print('\n'*2)
    
        if tentativa in digitadas:
            print("( X ) Você já tentou esta letra!")
            print('\n'*2)
    
        else:
            digitadas += tentativa
        
            if tentativa in word:
                acertos += tentativa
                print("( O ) Acertou uma letra!")
                print('\n'*2)
            
            else:
                erros += 1
                print("( X ) Letra Errada!")
                print('\n'*2)


        if erros == 6:
            derrotas += 1
            print('Enforcado. Você perdeu!')
            print('\n'*5)

            resp = str(input('Deseja continuar jogando? [S/N] ')).upper().strip()[0]
            print('\n'*4)

            if resp == 'N':
                jogando = False
                
            break