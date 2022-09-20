module.exports = async function (context, req) {
  const date = "2022-09-20T15:13:29.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

