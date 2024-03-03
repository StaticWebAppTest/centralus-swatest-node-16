module.exports = async function (context, req) {
  const date = "2024-03-03T22:07:38.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

