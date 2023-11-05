/* Considere que: 
- os produtos devem implementar uma interface comum; 
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface; 
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type; 
- há dois tipos de computadores: pc e server; 
- RAM e HD devem estar em GB; 
- CPU deve estar em GHz; 
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar; 
- quando o método .toString()  for aplicado a um computador, ele deve imprimir seus atributos.  */

// Interface comum para os produtos
interface Computer {
  ram: number;
  hdd: number;
  cpu: number;
  type: string;

  toString(): string;
}

// Interface para a fábrica
interface ComputerFactory {
  createComputer(ram: number, hdd: number, cpu: number): Computer;
}

// Implementação da fábrica para PCs
class PCFactory implements ComputerFactory {
  createComputer(ram: number, hdd: number, cpu: number): Computer {
    return new PC(ram, hdd, cpu);
  }
}

// Implementação da fábrica para Servidores
class ServerFactory implements ComputerFactory {
  createComputer(ram: number, hdd: number, cpu: number): Computer {
    return new Server(ram, hdd, cpu);
  }
}

// Implementação para PCs
class PC implements Computer {
  constructor(public ram: number, public hdd: number, public cpu: number) {
    this.type = 'PC';
  }

  toString(): string {
    return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}

// Implementação para Servidores
class Server implements Computer {
  constructor(public ram: number, public hdd: number, public cpu: number) {
    this.type = 'Server';
  }

  toString(): string {
    return `Type: ${this.type}, RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}

// Uso da fábrica para criar instâncias de computadores
const pcFactory = new PCFactory();
const serverFactory = new ServerFactory();

const myPC: Computer = pcFactory.createComputer(8, 256, 3.2);
const myServer: Computer = serverFactory.createComputer(16, 512, 2.8);

console.log(myPC.toString()); // Exemplo de saída: Type: PC, RAM: 8GB, HDD: 256GB, CPU: 3.2GHz
console.log(myServer.toString()); // Exemplo de saída: Type: Server, RAM: 16GB, HDD: 512GB, CPU: 2.8GHz
