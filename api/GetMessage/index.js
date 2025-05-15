module.exports = async function (context, req) {
  const date = "2025-05-15T21:12:29.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

