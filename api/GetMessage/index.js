module.exports = async function (context, req) {
  const date = "2025-06-17T12:28:36.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

