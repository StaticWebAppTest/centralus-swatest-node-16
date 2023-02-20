module.exports = async function (context, req) {
  const date = "2023-02-20T07:09:43.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

