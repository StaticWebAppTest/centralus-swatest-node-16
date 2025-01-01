module.exports = async function (context, req) {
  const date = "2025-01-01T13:16:59.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

