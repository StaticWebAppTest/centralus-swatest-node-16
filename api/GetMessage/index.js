module.exports = async function (context, req) {
  const date = "2024-01-01T22:09:05.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

