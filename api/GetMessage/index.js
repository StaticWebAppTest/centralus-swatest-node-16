module.exports = async function (context, req) {
  const date = "2022-02-25T16:13:17.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

