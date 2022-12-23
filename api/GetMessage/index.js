module.exports = async function (context, req) {
  const date = "2022-12-23T04:11:21.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

