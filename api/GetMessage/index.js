module.exports = async function (context, req) {
  const date = "2025-01-09T08:15:18.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

