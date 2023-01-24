module.exports = async function (context, req) {
  const date = "2023-01-24T00:53:35.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

