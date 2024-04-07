module.exports = async function (context, req) {
  const date = "2024-04-07T05:10:17.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

