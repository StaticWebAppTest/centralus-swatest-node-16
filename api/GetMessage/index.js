module.exports = async function (context, req) {
  const date = "2023-02-19T02:19:33.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

