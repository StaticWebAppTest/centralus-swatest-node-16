module.exports = async function (context, req) {
  const date = "2022-09-15T16:16:41.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

