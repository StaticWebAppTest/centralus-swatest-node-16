module.exports = async function (context, req) {
  const date = "2025-12-25T15:14:24.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

