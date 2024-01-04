module.exports = async function (context, req) {
  const date = "2024-01-04T17:08:34.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

