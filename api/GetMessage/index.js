module.exports = async function (context, req) {
  const date = "2025-12-22T23:13:46.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

