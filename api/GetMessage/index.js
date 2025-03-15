module.exports = async function (context, req) {
  const date = "2025-03-15T19:08:42.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

