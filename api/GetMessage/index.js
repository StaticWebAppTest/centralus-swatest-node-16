module.exports = async function (context, req) {
  const date = "2022-08-19T05:21:55.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

