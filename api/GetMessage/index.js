module.exports = async function (context, req) {
  const date = "2023-01-14T18:10:29.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

