module.exports = async function (context, req) {
  const date = "2024-08-29T16:13:08.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

