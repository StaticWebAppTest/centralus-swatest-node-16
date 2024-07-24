module.exports = async function (context, req) {
  const date = "2024-07-24T19:08:34.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

