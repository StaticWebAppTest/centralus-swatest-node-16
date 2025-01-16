module.exports = async function (context, req) {
  const date = "2025-01-16T15:11:38.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

