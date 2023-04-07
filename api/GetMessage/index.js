module.exports = async function (context, req) {
  const date = "2023-04-07T04:10:43.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

