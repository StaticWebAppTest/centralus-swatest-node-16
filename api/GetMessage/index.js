module.exports = async function (context, req) {
  const date = "2022-07-29T23:10:37.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

