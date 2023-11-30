import { ReactNode } from 'react';

interface Button {
  children: ReactNode;
  isDisabled?: boolean;
  version?: string;
  type?: string;
}

function Button({
  children,
  isDisabled = false,
  version = 'primary',
  type = 'button',
}: Button) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Button;
