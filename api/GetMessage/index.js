module.exports = async function (context, req) {
  const date = "2023-09-25T03:09:29.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

