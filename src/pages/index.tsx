import SafeEnvironment from "ui/components/feedback/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua cidade"
        }
      />

      <UserInformation
        name={"Victor Souza"}
        picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
        rating={4}
        description={"Aracaju"}
      />

      <UserInformation
        name={"Eduardo Costa"}
        picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
        rating={2}
        description={"Minas Gerais"}
      />

      <UserInformation
        name={"Axl Rose"}
        picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
        rating={5}
        description={"Porto Velho"}
      />
      <UserInformation
        name={"Axl Rose"}
        picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
        rating={5}
        description={"Porto Velho"}
      />
      <UserInformation
        name={"Axl Rose"}
        picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
        rating={5}
        description={"Porto Velho"}
      />
      <UserInformation
        name={"Axl Rose"}
        picture={"https://avatars.githubusercontent.com/u/38059087?v=4"}
        rating={5}
        description={"Porto Velho"}
      />
    </div>
  );
}
