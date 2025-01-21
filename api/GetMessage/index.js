module.exports = async function (context, req) {
  const date = "2025-01-21T19:09:08.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

