module.exports = async function (context, req) {
  const date = "2025-01-08T07:11:17.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

