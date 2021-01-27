import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../../../db.json';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.75em 0 0.75em 0;
  width: 100%;
  background-color: ${db.theme.colors.mainBg};
  color: #FFF;
  border-radius: 4px;
  border: 1px solid #8C8C8C;
`;

const Button = styled.button`
  padding: 0.5em;
  margin: 0.75em 0 0.75em 0;
  width: 100%;
  background-color: ${db.theme.colors.secondary};
  color: #FFF;
  border: none;
  border-radius: 4px;
`;

export default function InputField() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <form onSubmit={(infosDoEvento) => {
      infosDoEvento.preventDefault();
      router.push({
        pathname: '/quiz',
        query: { name },
      });
    }}
    >
      <Input
        onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
        placeholder="Diz ai seu nome"
      />
      <Button type="submit" disabled={name.length === 0}>
        <p>
          JOGAR
          {' '}
          {name}
        </p>
      </Button>
    </form>
  );
}
