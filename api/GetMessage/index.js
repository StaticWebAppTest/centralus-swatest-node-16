module.exports = async function (context, req) {
  const date = "2025-01-05T03:20:05.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

