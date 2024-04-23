module.exports = async function (context, req) {
  const date = "2024-04-23T21:08:34.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

