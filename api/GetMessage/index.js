module.exports = async function (context, req) {
  const date = "2025-12-31T14:14:48.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

