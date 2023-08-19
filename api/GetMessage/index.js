module.exports = async function (context, req) {
  const date = "2023-08-19T10:07:41.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

