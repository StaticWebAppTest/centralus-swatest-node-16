module.exports = async function (context, req) {
  const date = "2024-08-16T16:14:35.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

