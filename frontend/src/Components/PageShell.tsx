import React from 'react';
import './PageShell.css';

interface PageShellProps {
  children: React.ReactNode;
}

function PageShell(props: PageShellProps) {
  return <main className="page-shell">{props.children}</main>;
}

export default PageShell;
