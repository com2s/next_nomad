export const metadata = {
    title: 'Movie',
    description: 'The Best Movie on the Best Framework',
}

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Movie {id}!</h1>
      <h2>Movie with Id number</h2>
    </div>
  );
}
