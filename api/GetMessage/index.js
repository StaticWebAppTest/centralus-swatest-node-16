module.exports = async function (context, req) {
  const date = "2024-01-12T21:07:57.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

