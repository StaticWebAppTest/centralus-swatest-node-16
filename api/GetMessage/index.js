module.exports = async function (context, req) {
  const date = "2022-11-08T19:17:11.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

