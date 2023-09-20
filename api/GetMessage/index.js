module.exports = async function (context, req) {
  const date = "2023-09-20T16:11:29.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

