module.exports = async function (context, req) {
  const date = "2023-12-29T07:08:29.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

