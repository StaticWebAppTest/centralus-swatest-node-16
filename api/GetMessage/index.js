module.exports = async function (context, req) {
  const date = "2024-01-08T17:08:37.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

