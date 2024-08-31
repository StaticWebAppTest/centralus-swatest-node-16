module.exports = async function (context, req) {
  const date = "2024-08-31T02:05:48.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

