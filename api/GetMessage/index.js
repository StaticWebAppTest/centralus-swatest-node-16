module.exports = async function (context, req) {
  const date = "2025-03-17T16:16:23.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

