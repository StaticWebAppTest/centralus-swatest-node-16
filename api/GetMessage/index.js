module.exports = async function (context, req) {
  const date = "2023-03-26T00:53:43.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

