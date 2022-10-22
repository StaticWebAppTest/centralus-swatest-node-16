module.exports = async function (context, req) {
  const date = "2022-10-22T08:17:12.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

