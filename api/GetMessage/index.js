module.exports = async function (context, req) {
  const date = "2025-11-27T22:13:00.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

