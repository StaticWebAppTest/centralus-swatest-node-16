module.exports = async function (context, req) {
  const date = "2024-12-14T16:13:35.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

