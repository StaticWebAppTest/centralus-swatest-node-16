module.exports = async function (context, req) {
  const date = "2024-08-17T21:08:47.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

