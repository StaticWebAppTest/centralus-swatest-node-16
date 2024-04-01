module.exports = async function (context, req) {
  const date = "2024-04-01T12:17:49.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

