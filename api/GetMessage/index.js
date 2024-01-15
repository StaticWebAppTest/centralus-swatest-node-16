module.exports = async function (context, req) {
  const date = "2024-01-15T21:08:59.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

