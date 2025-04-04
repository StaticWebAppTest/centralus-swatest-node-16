module.exports = async function (context, req) {
  const date = "2025-04-04T11:12:00.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

