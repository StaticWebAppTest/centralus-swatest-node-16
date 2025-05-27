module.exports = async function (context, req) {
  const date = "2025-05-27T16:17:05.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

