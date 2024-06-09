module.exports = async function (context, req) {
  const date = "2024-06-09T04:12:05.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

