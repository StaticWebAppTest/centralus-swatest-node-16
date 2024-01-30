module.exports = async function (context, req) {
  const date = "2024-01-30T19:07:38.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

