module.exports = async function (context, req) {
  const date = "2022-09-05T06:46:41.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

