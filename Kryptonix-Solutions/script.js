const productos = [
    {
      id: 1,
      nombre: 'Servidor Cloud Ultra',
      precio: 4500,
      imagen: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Potente servidor en la nube para aplicaciones empresariales críticas.'
    },
    {
      id: 2,
      nombre: 'Router WiFi de Alta Velocidad',
      precio: 650,
      imagen: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Conectividad inalámbrica ultra rápida y segura para tu oficina.'
    },
    {
      id: 3,
      nombre: 'Laptop Gamer Profesional',
      precio: 4200,
      imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Máquina potente para diseño, programación y gaming de alto nivel.'
    },
    {
      id: 4,
      nombre: 'Monitor 4K Ultra HD',
      precio: 1300,
      imagen: 'https://images.unsplash.com/photo-1527434002309-32b0f4a23955?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Resolución nítida para trabajos de precisión y entretenimiento.'
    },
    {
      id: 5,
      nombre: 'Sistema de Seguridad IoT',
      precio: 850,
      imagen: 'https://images.unsplash.com/photo-1596495578063-9d17a8a4e8ec?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Vigilancia inteligente y control remoto para tu empresa.'
    },
    {
      id: 6,
      nombre: 'Estación de Trabajo All-in-One',
      precio: 3800,
      imagen: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Equipo compacto y potente para productividad sin límites.'
    },
    {
      id: 7,
      nombre: 'Disco SSD Empresarial 2TB',
      precio: 720,
      imagen: 'https://images.unsplash.com/photo-1581092334311-9e0aa13c4a90?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Almacenamiento rápido y seguro para datos críticos.'
    },
    {
      id: 8,
      nombre: 'Impresora 3D Industrial',
      precio: 5500,
      imagen: 'https://images.unsplash.com/photo-1551033406-c4e1ef04f81f?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Fabricación rápida de prototipos y piezas a medida.'
    },
    {
      id: 9,
      nombre: 'Auriculares con Cancelación de Ruido',
      precio: 400,
      imagen: 'https://images.unsplash.com/photo-1512499617640-c2f9990b4741?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Concentración total para ambientes de trabajo ruidosos.'
    },
    {
      id: 10,
      nombre: 'Tableta Gráfica Profesional',
      precio: 900,
      imagen: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Herramienta creativa para diseñadores y artistas digitales.'
    },
    {
      id: 11,
      nombre: 'Servidor NAS 10TB',
      precio: 2100,
      imagen: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Almacenamiento en red seguro para compartir y respaldar archivos.'
    },
    {
      id: 12,
      nombre: 'Smartwatch Corporativo',
      precio: 320,
      imagen: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
      descripcion: 'Tecnología portátil para la salud y productividad laboral.'
    }
  ];

  const productList = document.getElementById('product-list');

  productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-pink-500 transition transform hover:-translate-y-2 cursor-pointer fadeInUp';

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="rounded-md mb-6 max-h-48 w-full object-cover" />
      <h4 class="text-xl font-bold mb-1 text-pink-400">${producto.nombre}</h4>
      <p class="text-gray-300 mb-3">${producto.descripcion}</p>
      <p class="text-pink-400 font-semibold text-lg mb-4">$${producto.precio.toFixed(2)}</p>
      <div id="paypal-button-container-${producto.id}"></div>
    `;

    productList.appendChild(card);
  });

  productos.forEach(producto => {
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
      },
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: { value: producto.precio.toFixed(2) },
            description: producto.nombre
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(details => {
          alert(`Gracias por comprar ${producto.nombre}, ${details.payer.name.given_name}!`);
        });
      },
      onError: function(err) {
        console.error(err);
        alert('Hubo un error en el pago. Intenta nuevamente.');
      }
    }).render(`#paypal-button-container-${producto.id}`);
  });

  document.getElementById('btn-contact').addEventListener('click', () => {
    window.open('https://wa.me/1234567890?text=Hola,%20quiero%20más%20info%20de%20sus%20productos', '_blank');
  });