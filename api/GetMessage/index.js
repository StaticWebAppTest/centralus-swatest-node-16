module.exports = async function (context, req) {
  const date = "2024-11-19T16:15:26.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

