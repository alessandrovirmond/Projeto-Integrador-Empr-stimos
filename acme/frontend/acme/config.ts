import { Cliente } from './src/model/cliente';
import { User } from './src/model/user';

export function setCliente(cliente: Cliente) {
  localStorage.setItem('cliente', JSON.stringify(cliente));
}

export function getCliente(): Cliente | null {
  const clienteString = localStorage.getItem('cliente');
  if (clienteString) {
    const clienteObj = JSON.parse(clienteString);
    const cliente = new Cliente(
      Number(clienteObj.id),
      clienteObj.nome,
      clienteObj.cpf,
        new Date(clienteObj.dataNascimento),
      clienteObj.telefone,
      clienteObj.email,
      clienteObj.endereco,
    );

    console.log(cliente.id);
    return cliente;
  }
  return null;
}

export function setUser(user: User) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser(): User | null {
  const userString = localStorage.getItem('user');
  if (userString) {
    const userObj = JSON.parse(userString);
    const user = new User(
      Number(userObj.id),
      userObj.nome,
      userObj.email,
      userObj.senha,
      Number(userObj.admin)
    );

    console.log(user.id);
    return user;
  }
  return null;
}

export function limpar() {
    localStorage.removeItem('user');
    localStorage.removeItem('cliente');
  }
  
