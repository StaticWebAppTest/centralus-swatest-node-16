module.exports = async function (context, req) {
  const date = "2023-08-20T08:09:37.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

