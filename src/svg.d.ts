//TODO: декларация о том что svg элементы принимаю Html атрибуты
declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGElement>>;
    export default content;
}
