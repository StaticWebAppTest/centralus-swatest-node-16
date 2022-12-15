module.exports = async function (context, req) {
  const date = "2022-12-15T16:13:35.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

