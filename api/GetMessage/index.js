module.exports = async function (context, req) {
  const date = "2023-04-24T12:16:59.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

