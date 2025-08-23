module.exports = async function (context, req) {
  const date = "2025-08-23T12:23:47.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

