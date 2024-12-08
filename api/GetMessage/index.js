module.exports = async function (context, req) {
  const date = "2024-12-08T09:12:05.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

