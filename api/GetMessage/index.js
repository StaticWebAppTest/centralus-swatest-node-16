module.exports = async function (context, req) {
  const date = "2024-09-25T02:17:00.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

