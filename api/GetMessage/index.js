module.exports = async function (context, req) {
  const date = "2025-08-19T12:27:30.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

