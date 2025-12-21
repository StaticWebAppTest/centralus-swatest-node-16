module.exports = async function (context, req) {
  const date = "2025-12-21T05:15:29.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

