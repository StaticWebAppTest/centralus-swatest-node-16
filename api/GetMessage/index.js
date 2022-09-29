module.exports = async function (context, req) {
  const date = "2022-09-29T22:12:47.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

