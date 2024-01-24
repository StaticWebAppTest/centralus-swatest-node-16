module.exports = async function (context, req) {
  const date = "2024-01-24T00:45:32.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

