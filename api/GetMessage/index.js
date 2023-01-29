module.exports = async function (context, req) {
  const date = "2023-01-29T22:08:20.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

