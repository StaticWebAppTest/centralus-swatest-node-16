module.exports = async function (context, req) {
  const date = "2025-07-27T12:27:21.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

