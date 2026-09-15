import { useState } from 'react';

export default function DirectMessageModal({ isOpen, onClose, destinatario }) {
  const [mensajeDM, setMensajeDM] = useState('');
  const [dmEnviado, setDmEnviado] = useState(false);

  if (!isOpen) return null;

  const handleEnviar = () => {
    if (mensajeDM.trim()) {
      setDmEnviado(true);
      setTimeout(() => {
        setDmEnviado(false);
        setMensajeDM('');
        onClose();
      }, 1800);
    }
  };

  const handleCerrar = () => {
    setDmEnviado(false);
    setMensajeDM('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1a222f] border border-gray-700 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between border-b border-gray-700 pb-3">
          <h3 className="font-bold text-white text-base flex items-center gap-2">
            <span>💬</span> Mensaje Directo para {destinatario.nombre}
          </h3>
          <button
            onClick={handleCerrar}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            ✕
          </button>
        </div>

        {dmEnviado ? (
          <div className="py-6 text-center space-y-2">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl">
              ✓
            </div>
            <p className="font-bold text-white">¡Mensaje enviado con éxito!</p>
            <p className="text-xs text-gray-400">{destinatario.nombre} recibirá tu notificación.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <textarea
              rows={4}
              value={mensajeDM}
              onChange={(e) => setMensajeDM(e.target.value)}
              placeholder={`Escribe tu mensaje para ${destinatario.tag}...`}
              className="w-full bg-[#141922] border border-gray-700 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d92759] resize-none"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCerrar}
                className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleEnviar}
                className="px-5 py-2 text-xs font-bold bg-[#d92759] hover:bg-[#eb3369] text-white rounded-xl transition cursor-pointer"
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
