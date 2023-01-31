module.exports = async function (context, req) {
  const date = "2023-01-31T00:54:07.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

