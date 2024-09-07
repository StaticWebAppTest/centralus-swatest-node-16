module.exports = async function (context, req) {
  const date = "2024-09-07T02:05:23.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

