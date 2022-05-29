module.exports = async function (context, req) {
  const date = "2022-05-29T22:11:05.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

