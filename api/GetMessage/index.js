module.exports = async function (context, req) {
  const date = "2024-09-16T12:22:56.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

