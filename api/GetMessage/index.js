module.exports = async function (context, req) {
  const date = "2023-01-26T13:18:32.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

