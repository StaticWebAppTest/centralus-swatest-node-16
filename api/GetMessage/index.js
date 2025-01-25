module.exports = async function (context, req) {
  const date = "2025-01-25T04:13:29.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

