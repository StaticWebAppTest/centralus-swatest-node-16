module.exports = async function (context, req) {
  const date = "2024-06-29T03:11:53.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

