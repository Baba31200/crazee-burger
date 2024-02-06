function EmptyMenuAdmin({ onReset }) {
  return (
    <div>
      <span>pas de produit</span>
      <button onClick={onReset}>Générer de nouveaux produit</button>
    </div>
  );
}

export default EmptyMenuAdmin;
