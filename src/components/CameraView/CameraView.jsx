
import "./CameraView.css";

function CameraView({ cameraName }) {
  return (
    <div className="camera-view">
      <div className="camera-feed">
        {cameraName ? (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            backgroundImage: 'url(https://via.placeholder.com/1920x1080/1a1a1a/ffffff?text=Camera+Feed)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            Câmera: {cameraName}
          </div>
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            backgroundImage: 'url(https://via.placeholder.com/1920x1080/1a1a1a/ffffff?text=No+Camera+Selected)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            Nenhuma câmera selecionada
          </div>
        )}
      </div>
    </div>
  );
}
export default CameraView;
