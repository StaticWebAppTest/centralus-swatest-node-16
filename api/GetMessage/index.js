module.exports = async function (context, req) {
  const date = "2025-08-02T19:10:48.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

