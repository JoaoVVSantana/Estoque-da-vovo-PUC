import cron from 'node-cron';
import axios from 'axios';

// Ver com a gerente qual o melhor perído de tempo pra rodar a rotina
cron.schedule('0 0 */7 * *', async () => { // Executa a cada 7 dias
  console.log('Executando rotina de geração de relatório de consumo. ');
  try {
    const response = await axios.get('http://localhost:5000/api/itensPertoDoVencimento'); 
    // Essa é a API que roda o banco procurando os itens que estão vencendo

    console.log(response.data);

  } catch (error) {
    console.error('Erro na rotina de itens perto do vencimento: ', error.message);
  }
});

export default cron.schedule();