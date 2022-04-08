module.exports = async function (context, req) {
  const date = "2022-04-08T04:12:48.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

