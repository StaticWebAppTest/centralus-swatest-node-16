module.exports = async function (context, req) {
  const date = "2023-04-01T03:09:27.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

