class WhatsAppProtector {
    constructor() {
        this.numeroProtegido = this.generarNumero();
        this.inicializado = false;
    }

    // Generar el número de forma segura
    generarNumero() {
        // Dividir el número en partes y combinarlo
        const partes = [
            String.fromCharCode(53, 50), // "52"
            String.fromCharCode(55, 55, 55), // "777"
            String.fromCharCode(52, 52, 52), // "444"
            String.fromCharCode(57, 49, 48, 55) // "9107"
        ];
        return partes.join('');
    }

    // Crear el botón de WhatsApp
    crearBoton() {
        const boton = document.getElementById('btn-whatsapp');
        boton.className = 'float-wa';
        boton.target = '_blank';
        boton.rel = 'noopener noreferrer'; // Seguridad adicional
        
        // Solo asignar el enlace cuando sea necesario
        boton.addEventListener('click', (e) => {
            if (!boton.href) {
                boton.href = `https://wa.me/${this.numeroProtegido}?text=Hola,%20me%20gustaría%20solicitar%20más%20información.`;
            }
        });
        boton.innerHTML = '<i class="fab fa-whatsapp"></i>';
        return boton;
    }

    // Inicializar la protección
    inicializar() {
        if (this.inicializado) return;
        let botonExistente = document.querySelector('.float-wa');
        
        if (botonExistente) {
            // Reemplazar el enlace existente
            botonExistente.addEventListener('click', (e) => {
                if (!botonExistente.href.includes('wa.me')) {
                    botonExistente.href = `https://wa.me/${this.numeroProtegido}?text=Hola,%20me%20gustaría%20solicitar%20más%20información.`;
                }
            });
        } else {
            // Crear nuevo botón
            const nuevoBoton = this.crearBoton();
            document.body.appendChild(nuevoBoton);
        }
        this.inicializado = true;
    }
}

// Uso del protector
document.addEventListener('DOMContentLoaded', () => {
    const protector = new WhatsAppProtector();
    protector.inicializar();
});