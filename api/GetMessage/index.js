module.exports = async function (context, req) {
  const date = "2025-04-25T12:25:48.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

