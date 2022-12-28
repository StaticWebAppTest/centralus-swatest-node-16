module.exports = async function (context, req) {
  const date = "2022-12-28T05:08:41.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

