module.exports = async function (context, req) {
  const date = "2025-06-21T10:12:50.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

