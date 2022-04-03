import React from 'react';

type Props = {
  Component: JSX.Element;
};

export default function BaseComponent({ Component }: Props) {
  return <React.Fragment>{Component}</React.Fragment>;
}
