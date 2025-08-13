module.exports = async function (context, req) {
  const date = "2025-08-13T22:13:57.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

