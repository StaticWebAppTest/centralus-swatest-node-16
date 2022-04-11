module.exports = async function (context, req) {
  const date = "2022-04-11T15:11:41.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

