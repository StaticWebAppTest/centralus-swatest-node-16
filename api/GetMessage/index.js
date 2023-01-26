module.exports = async function (context, req) {
  const date = "2023-01-26T17:08:45.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

