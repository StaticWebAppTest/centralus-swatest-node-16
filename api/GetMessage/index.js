module.exports = async function (context, req) {
  const date = "2025-04-09T16:16:23.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

