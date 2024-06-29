module.exports = async function (context, req) {
  const date = "2024-06-29T15:09:20.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

