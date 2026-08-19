import React from 'react';
import { Link } from 'react-router-dom';
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
    // Use react-router Link for internal routes (starting with '/') to avoid full page reload
    if (href.startsWith('/')) {
      return (
        <Link className={clases} to={href} {...props}>
          {children}
        </Link>
      );
    }

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
