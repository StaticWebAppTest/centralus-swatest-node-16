module.exports = async function (context, req) {
  const date = "2025-09-22T13:24:00.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

