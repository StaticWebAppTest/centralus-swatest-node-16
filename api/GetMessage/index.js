module.exports = async function (context, req) {
  const date = "2022-06-22T16:14:43.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

