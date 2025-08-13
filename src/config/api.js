// Configuração da API
export const API_CONFIG = {
  // URL base da API (backend)
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8080',


  // Timeout das requisições (em ms)
  TIMEOUT: 5000,

  // Headers padrão
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  },

  // Endpoints
  ENDPOINTS: {
    STATUS: '/status',
    CAMERAS: '/cameras',
    PTZ: '/ptz',
  }
};

// Função para verificar se estamos em desenvolvimento
export const isDevelopment = () => {
  return import.meta.env.DEV || process.env.NODE_ENV === 'development';
};

// Função para construir URLs completas
export const buildApiUrl = (endpoint) => {
  if (isDevelopment()) {
    return `/mock${endpoint}`; // <- redireciona para rotas falsas
  }
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Mock de respostas locais para desenvolvimento
export const mockFetch = async (endpoint) => {
  // Simula respostas dependendo do endpoint
  switch (endpoint) {
    case '/status':
      return {
        status: 'ok',
        message: 'Mocked status ok',
      };

    case '/cameras':
      return [
        { id: 1, name: 'Camera 1', online: true },
        { id: 2, name: 'Camera 2', online: false },
        { id: 3, name: 'Camera 3', online: true },
      ];

    case '/ptz':
      return {
        success: true,
        message: 'PTZ action simulated (mock)',
      };

    default:
      return { error: 'Mock endpoint not found' };
  }
};
