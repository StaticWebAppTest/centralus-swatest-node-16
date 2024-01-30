module.exports = async function (context, req) {
  const date = "2024-01-30T23:09:05.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

