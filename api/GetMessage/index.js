module.exports = async function (context, req) {
  const date = "2024-03-26T00:41:38.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

