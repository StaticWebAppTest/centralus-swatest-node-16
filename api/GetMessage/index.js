module.exports = async function (context, req) {
  const date = "2025-12-15T10:18:37.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

