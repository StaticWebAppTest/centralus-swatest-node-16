module.exports = async function (context, req) {
  const date = "2025-05-22T18:18:36.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

