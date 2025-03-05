export const fromIsoDate = (isoDate) => {
  let date = new Date(isoDate);

  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });


  return formattedDate;
}


export const fromIsoDateLong = (isoDate) => {

  let date = new Date(isoDate);

  const longFormattedDate = date.toLocaleString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return longFormattedDate;
}