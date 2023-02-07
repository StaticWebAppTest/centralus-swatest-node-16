module.exports = async function (context, req) {
  const date = "2023-02-07T16:12:53.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

