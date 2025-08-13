import React, { useState, useEffect } from "react";
import "./App.css";
import CameraView from "./components/CameraView/CameraView";
import PTZControls from "./components/PTZControl/PTZControls";
import { enviarComandoPTZ, verificarStatus } from "./utils/enviarComandoPTZ";
import { TooltipProvider } from "@radix-ui/react-tooltip";

function App() {
  const CAMERA_ID = "Quarto";
  const [backendStatus, setBackendStatus] = useState("checking");

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        console.log('Checking backend...');
        const status = await verificarStatus();
        console.log('Backend OK:', status);
        setBackendStatus("connected");
      } catch (error) {
        console.error('Backend error:', error.message);
        setBackendStatus("disconnected");
      }
    };

    checkBackendStatus();
  }, []);

  const handlePTZCommand = async (operacao, velocidade = 100) => {
    console.log('Sending:', operacao, 'to camera:', CAMERA_ID);
    
    try {
      const result = await enviarComandoPTZ({
        camera: CAMERA_ID,
        operacao: operacao,
        velocidade: velocidade
      });
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <TooltipProvider>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#111",
          color: "#fff",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Imagem da câmera ocupando toda a tela */}
        <CameraView cameraName={CAMERA_ID} />
        
        {/* Overlay PTZ sempre no canto inferior direito */}
        <PTZControls
          onPTZCommand={handlePTZCommand}
          disabled={backendStatus !== 'connected'}
        />
      </div>
    </TooltipProvider>
  );
}
export default App;
