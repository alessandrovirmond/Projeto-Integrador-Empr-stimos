

export async function verificarPermissao() {
    try {
      const response = await fetch('http://localhost/2023-2-pis-g3/acme/acme/backend/verificarPermissao.php', {
        method: 'GET',
        credentials: 'include'
      });
  
      if (response.status === 200) {
        return true ;
      } else {
        console.log("Sessão não encontrada ou expirada");
        throw new Error(`Usuário sem permissão`);
      }
    } catch (error) {
      console.error('Erro ao verificar a sessão:', error);
      throw new Error(`Usuário sem permissão`);
    }
  }
  
  