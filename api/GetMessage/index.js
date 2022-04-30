module.exports = async function (context, req) {
  const date = "2022-04-30T05:10:37.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

