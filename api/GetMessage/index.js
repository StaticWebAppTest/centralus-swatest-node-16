module.exports = async function (context, req) {
  const date = "2022-05-03T02:59:16.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

