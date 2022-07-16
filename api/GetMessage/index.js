module.exports = async function (context, req) {
  const date = "2022-07-16T15:10:12.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

