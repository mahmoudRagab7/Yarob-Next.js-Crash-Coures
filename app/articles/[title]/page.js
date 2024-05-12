export default function ShowArticlesPage(props) {
  console.log(props);
  return (
    <div>
      <h1>Show Articles Page Title</h1>
      <h2>{props.params.title}</h2>
    </div>
  );
}
