module.exports = async function (context, req) {
  const date = "2024-05-19T19:07:00.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

