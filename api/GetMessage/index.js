module.exports = async function (context, req) {
  const date = "2023-01-09T04:12:02.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

