module.exports = async function (context, req) {
  const date = "2025-05-11T08:15:58.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

