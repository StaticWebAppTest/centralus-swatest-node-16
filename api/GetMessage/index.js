module.exports = async function (context, req) {
  const date = "2022-04-03T16:13:03.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

