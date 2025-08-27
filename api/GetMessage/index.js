module.exports = async function (context, req) {
  const date = "2025-08-27T08:17:22.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

