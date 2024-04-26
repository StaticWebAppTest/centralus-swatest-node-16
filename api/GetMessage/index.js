module.exports = async function (context, req) {
  const date = "2024-04-26T06:13:39.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

