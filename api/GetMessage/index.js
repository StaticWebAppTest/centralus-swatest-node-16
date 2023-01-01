module.exports = async function (context, req) {
  const date = "2023-01-01T00:56:35.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

