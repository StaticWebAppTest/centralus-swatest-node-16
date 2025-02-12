module.exports = async function (context, req) {
  const date = "2025-02-12T16:15:00.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

