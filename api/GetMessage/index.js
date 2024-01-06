module.exports = async function (context, req) {
  const date = "2024-01-06T00:43:04.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

