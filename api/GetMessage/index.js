module.exports = async function (context, req) {
  const date = "2022-07-29T08:13:41.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

