module.exports = async function (context, req) {
  const date = "2025-04-24T12:26:28.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

