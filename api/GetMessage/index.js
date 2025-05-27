module.exports = async function (context, req) {
  const date = "2025-05-27T10:14:55.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

