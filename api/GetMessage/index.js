module.exports = async function (context, req) {
  const date = "2025-05-01T14:12:15.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

