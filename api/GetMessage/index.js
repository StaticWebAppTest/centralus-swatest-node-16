module.exports = async function (context, req) {
  const date = "2025-12-16T23:13:27.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

