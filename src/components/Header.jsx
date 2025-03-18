import Button from "./Button";
export default function Header({ toggleModal }) {
  return (
    <header className="header-container">
      <img src="/pocket-chef/chefClaudeIcon.png" alt="Logo" />
      <h1>Pocket Chef</h1>
      <Button toggleModal={toggleModal} />
    </header>
  );
}
