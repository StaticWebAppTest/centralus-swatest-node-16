module.exports = async function (context, req) {
  const date = "2025-04-25T20:14:00.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

