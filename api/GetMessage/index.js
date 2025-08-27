module.exports = async function (context, req) {
  const date = "2025-08-27T14:12:48.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

