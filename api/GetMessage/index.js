module.exports = async function (context, req) {
  const date = "2025-08-20T15:14:08.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

