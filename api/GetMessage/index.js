module.exports = async function (context, req) {
  const date = "2023-11-17T12:17:04.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

