import React from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/components/Screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  // const [db, setDb] React.useState({});

  // React.useEffect(() => {

  // });

  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen external={dbExterno} />
      {/* <pre style={{ color: 'black' }}>
  //   {JSON.stringify(dbExterno.questions, null, 4)}
  // </pre> */}
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');
  const dbExterno = await axios.get(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.data.status !== false) {
        return respostaDoServer.data;
      }
      throw new Error('Falha em pegar os dados');
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      dbExterno,
    },
  };
}
