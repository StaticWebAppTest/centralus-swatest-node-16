module.exports = async function (context, req) {
  const date = "2023-07-01T20:09:22.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

