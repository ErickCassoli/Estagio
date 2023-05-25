package contaBanco;

import java.util.Scanner;

public class ContaTerminal {

	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		int numero;
		double saldo;
		String agencia, nomeCliente;
		
		System.out.println("Por favor, seu nome !");
		nomeCliente = sc.next();
		System.out.println("Por favor, digite o número da Agência !");
		agencia = sc.next();
		System.out.println("Por favor, digite o número da Conta !");
		numero = sc.nextInt();
		System.out.println("Por favor, insira o valor do saldo que deseja retirar!");
		saldo = sc.nextDouble();
		System.out.println("Olá " + nomeCliente + ", obrigado por criar uma conta em nosso banco, sua agência é " + agencia +", conta " + numero +" e seu saldo " + saldo + " já está disponível para saque");
		

	}

}