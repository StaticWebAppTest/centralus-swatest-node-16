module.exports = async function (context, req) {
  const date = "2022-09-20T09:17:37.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

