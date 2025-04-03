module.exports = async function (context, req) {
  const date = "2025-04-03T13:22:42.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

