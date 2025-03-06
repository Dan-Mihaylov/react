export const fromIsoDate = (isoDate) => {
  let date = new Date(isoDate);

  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });


  return formattedDate;
}
