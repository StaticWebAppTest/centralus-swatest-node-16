module.exports = async function (context, req) {
  const date = "2022-06-20T12:21:18.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

