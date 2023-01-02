import "./Card.scss";

interface CardInterface {
  className?: string;
  children: React.ReactNode;
}

const Card = (props: CardInterface) => {
  const { children, className } = props;
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
