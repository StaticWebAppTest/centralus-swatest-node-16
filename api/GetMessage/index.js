module.exports = async function (context, req) {
  const date = "2023-01-07T12:15:34.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

