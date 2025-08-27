module.exports = async function (context, req) {
  const date = "2025-08-27T18:18:29.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

