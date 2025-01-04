module.exports = async function (context, req) {
  const date = "2025-01-04T20:11:40.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

