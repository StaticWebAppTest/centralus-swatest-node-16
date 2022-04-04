module.exports = async function (context, req) {
  const date = "2022-04-04T10:11:41.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

