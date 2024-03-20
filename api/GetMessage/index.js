module.exports = async function (context, req) {
  const date = "2024-03-20T02:15:02.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

