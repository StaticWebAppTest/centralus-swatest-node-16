module.exports = async function (context, req) {
  const date = "2023-09-20T03:09:10.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

