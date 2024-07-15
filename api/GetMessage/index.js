module.exports = async function (context, req) {
  const date = "2024-07-15T19:09:13.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

