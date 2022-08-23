module.exports = async function (context, req) {
  const date = "2022-08-23T12:21:56.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

