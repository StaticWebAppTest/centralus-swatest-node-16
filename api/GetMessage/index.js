module.exports = async function (context, req) {
  const date = "2025-01-05T13:15:01.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

