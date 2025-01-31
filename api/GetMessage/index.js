module.exports = async function (context, req) {
  const date = "2025-01-31T16:13:56.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

