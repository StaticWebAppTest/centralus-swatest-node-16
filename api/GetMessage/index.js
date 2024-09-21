module.exports = async function (context, req) {
  const date = "2024-09-21T05:10:34.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

