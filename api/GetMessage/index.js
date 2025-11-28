module.exports = async function (context, req) {
  const date = "2025-11-28T20:14:45.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

