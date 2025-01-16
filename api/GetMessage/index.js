module.exports = async function (context, req) {
  const date = "2025-01-16T16:13:45.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

