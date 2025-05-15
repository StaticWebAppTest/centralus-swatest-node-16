module.exports = async function (context, req) {
  const date = "2025-05-15T18:18:29.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

