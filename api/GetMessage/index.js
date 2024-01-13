module.exports = async function (context, req) {
  const date = "2024-01-13T00:43:42.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

