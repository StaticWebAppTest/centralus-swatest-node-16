module.exports = async function (context, req) {
  const date = "2023-08-06T02:17:48.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

