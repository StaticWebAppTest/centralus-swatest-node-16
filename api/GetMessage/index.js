module.exports = async function (context, req) {
  const date = "2025-01-08T00:57:27.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

