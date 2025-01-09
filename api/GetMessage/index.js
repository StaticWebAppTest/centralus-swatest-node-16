module.exports = async function (context, req) {
  const date = "2025-01-09T02:46:48.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

