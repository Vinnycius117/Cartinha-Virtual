
export default function Poems() {
  const poems = [
    {
      title: 'Teu Olhar',
      content: 'Teu olhar é como o céu estrelado,\nOnde me perco e me encontro ao mesmo tempo...',
      background: '/images/abraçadin.jpg' // Caminho relativo à raiz do site
    },
    {
      title: 'Nosso Amor',
      content: 'Como pétalas ao vento,\nNosso amor dança livre e leve...',
      background: '/images/Bjin_no_pescoço.jpg' // Caminho relativo à raiz do site
    },
    {
      title: 'Entre Risos e Amor',
      content: 'Nossas brincadeiras enchem o dia, \nDe amor, de paz e de alegria...',
      background: '/images/crias.jpg' // Caminho relativo à raiz do site
    },
    {
      title: 'Dois Corações, Uma Alma',
      content: 'Dois caminhos que se unem em uma só direção, \nDois corações que batem em perfeita sintonia e emoção...',
      background: '/images/NWY.jpg' // Caminho relativo à raiz do site
    }
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {poems.map((poem, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${poem.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="p-8 min-h-[350px] flex flex-col justify-center">
              <h3 className="text-3xl font-great-vibes text-white mb-4">
                {poem.title}
              </h3>
              <p className="text-white/90 whitespace-pre-line font-playfair leading-relaxed">
                {poem.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}