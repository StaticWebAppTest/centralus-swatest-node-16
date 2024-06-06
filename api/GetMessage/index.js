module.exports = async function (context, req) {
  const date = "2024-06-06T13:12:21.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

