module.exports = async function (context, req) {
  const date = "2024-08-20T16:12:34.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

