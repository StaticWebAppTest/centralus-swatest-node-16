module.exports = async function (context, req) {
  const date = "2023-06-24T07:08:47.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

