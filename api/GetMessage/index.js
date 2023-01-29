module.exports = async function (context, req) {
  const date = "2023-01-29T14:08:01.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

