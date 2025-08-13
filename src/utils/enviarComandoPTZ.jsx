import { buildApiUrl, API_CONFIG } from '../config/api';

// Função para enviar comando PTZ através do backend
export async function enviarComandoPTZ({
  camera,
  operacao,
  velocidade = 100,
}) {
  console.log('API Request:', operacao, 'camera:', camera);
  
  const params = new URLSearchParams({
    camera: camera,
    operation: operacao,
    speed: velocidade.toString(),
  });

  const url = `${buildApiUrl(API_CONFIG.ENDPOINTS.PTZ)}?${params.toString()}`;

  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `HTTP ${res.status}`);
    }
    
    const data = await res.json();
    console.log('API Response:', data);
    return data;
  } catch (err) {
    console.error('API Error:', err.message);
    throw err;
  }
}

// Função para obter lista de câmeras
export async function obterCameras() {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.CAMERAS);

  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error(`Erro ${res.status}: ${res.statusText}`);
    }
    
    const data = await res.json();
    console.log("Câmeras obtidas:", data);
    return data;
  } catch (err) {
    console.error("Erro ao obter câmeras:", err.message);
    throw err;
  }
}

// Função para verificar status do serviço
export async function verificarStatus() {
  const url = buildApiUrl(API_CONFIG.ENDPOINTS.STATUS);

  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error(`Erro ${res.status}: ${res.statusText}`);
    }
    
    const data = await res.json();
    console.log("Status do serviço:", data);
    return data;
  } catch (err) {
    console.error("Erro ao verificar status:", err.message);
    throw err;
  }
}
