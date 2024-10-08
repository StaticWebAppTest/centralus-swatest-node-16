module.exports = async function (context, req) {
  const date = "2024-10-08T10:12:17.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

