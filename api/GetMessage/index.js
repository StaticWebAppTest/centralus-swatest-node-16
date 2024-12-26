module.exports = async function (context, req) {
  const date = "2024-12-26T12:22:22.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

