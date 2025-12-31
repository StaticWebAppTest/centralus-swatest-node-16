module.exports = async function (context, req) {
  const date = "2025-12-31T16:18:21.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

