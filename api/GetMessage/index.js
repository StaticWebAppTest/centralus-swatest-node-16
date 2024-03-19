module.exports = async function (context, req) {
  const date = "2024-03-19T22:08:34.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

