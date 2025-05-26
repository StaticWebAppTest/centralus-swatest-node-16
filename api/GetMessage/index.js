module.exports = async function (context, req) {
  const date = "2025-05-26T12:26:07.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

