export interface Member {
  name: string;
  rm: string;
  description: string;
  quote: string;
  image: string; // O tipo 'string' é suficiente para o caminho da imagem importada
  linkedin: string;
  github: string;
  layout: 'image-left' | 'image-right';
}