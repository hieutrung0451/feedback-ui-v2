import React, { ReactNode } from 'react';

interface Card {
  children: ReactNode;
  reverse?: string;
}

function Card({ children, reverse }: Card) {
  return <div className={`card ${reverse ? 'reverse' : ''}`}>{children}</div>;
}

export default Card;
