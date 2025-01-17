module.exports = async function (context, req) {
  const date = "2025-01-17T07:10:54.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

