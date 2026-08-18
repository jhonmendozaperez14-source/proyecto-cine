import React from 'react';
import '../estilos-css/boton.css';

export default function Boton({
  children,
  variante = 'primario',
  tamano = 'normal',
  href,
  tipo = 'button',
  className = '',
  ...props
}) {
  const clases = [
    'boton',
    `boton-${variante}`,
    tamano !== 'normal' ? `boton-${tamano}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a className={clases} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={clases} type={tipo} {...props}>
      {children}
    </button>
  );
}
