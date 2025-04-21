module.exports = async function (context, req) {
  const date = "2025-04-21T13:22:16.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

