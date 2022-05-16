module.exports = async function (context, req) {
  const date = "2022-05-16T04:16:49.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

