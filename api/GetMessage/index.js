module.exports = async function (context, req) {
  const date = "2025-01-06T03:20:20.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

