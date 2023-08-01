module.exports = async function (context, req) {
  const date = "2023-08-01T12:17:24.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

