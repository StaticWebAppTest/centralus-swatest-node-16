module.exports = async function (context, req) {
  const date = "2025-01-12T10:11:21.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

