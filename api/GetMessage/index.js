module.exports = async function (context, req) {
  const date = "2025-12-05T16:18:16.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

