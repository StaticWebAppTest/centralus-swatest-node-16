module.exports = async function (context, req) {
  const date = "2025-09-05T12:25:11.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

