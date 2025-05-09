module.exports = async function (context, req) {
  const date = "2025-05-09T14:12:58.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

