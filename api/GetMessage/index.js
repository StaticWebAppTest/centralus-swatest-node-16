module.exports = async function (context, req) {
  const date = "2025-01-09T11:09:50.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

