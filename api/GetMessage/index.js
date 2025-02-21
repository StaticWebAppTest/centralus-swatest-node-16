module.exports = async function (context, req) {
  const date = "2025-02-21T12:22:39.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

