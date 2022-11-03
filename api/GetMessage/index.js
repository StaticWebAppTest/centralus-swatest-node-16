module.exports = async function (context, req) {
  const date = "2022-11-03T05:17:41.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

