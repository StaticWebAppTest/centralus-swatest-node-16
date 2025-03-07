module.exports = async function (context, req) {
  const date = "2025-03-07T12:23:00.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

