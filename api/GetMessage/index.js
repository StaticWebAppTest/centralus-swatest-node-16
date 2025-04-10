module.exports = async function (context, req) {
  const date = "2025-04-10T01:02:00.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

