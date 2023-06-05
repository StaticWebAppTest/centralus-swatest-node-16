module.exports = async function (context, req) {
  const date = "2023-06-05T14:08:14.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

