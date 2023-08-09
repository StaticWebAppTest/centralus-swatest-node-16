module.exports = async function (context, req) {
  const date = "2023-08-09T04:10:36.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

