module.exports = async function (context, req) {
  const date = "2023-01-05T16:14:42.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

