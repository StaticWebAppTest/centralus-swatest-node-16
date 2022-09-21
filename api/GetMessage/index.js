module.exports = async function (context, req) {
  const date = "2022-09-21T19:14:26.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

