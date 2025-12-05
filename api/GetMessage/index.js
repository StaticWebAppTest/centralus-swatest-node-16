module.exports = async function (context, req) {
  const date = "2025-12-05T10:15:33.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

