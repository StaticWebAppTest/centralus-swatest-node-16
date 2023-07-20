module.exports = async function (context, req) {
  const date = "2023-07-20T11:07:38.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

