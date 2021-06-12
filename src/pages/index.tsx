import Head from 'next/head';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua cidade'}
      />
    </div>
  )
}
