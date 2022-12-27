module.exports = async function (context, req) {
  const date = "2022-12-27T05:08:41.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

