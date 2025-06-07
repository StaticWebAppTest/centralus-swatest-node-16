module.exports = async function (context, req) {
  const date = "2025-06-07T11:10:05.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

