module.exports = async function (context, req) {
  const date = "2024-01-15T22:08:49.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

