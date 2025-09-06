module.exports = async function (context, req) {
  const date = "2025-09-06T08:14:24.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

