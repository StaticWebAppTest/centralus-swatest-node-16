module.exports = async function (context, req) {
  const date = "2025-04-02T19:10:29.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

