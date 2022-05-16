module.exports = async function (context, req) {
  const date = "2022-05-16T10:13:48.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

