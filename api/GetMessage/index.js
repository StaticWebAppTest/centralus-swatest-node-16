module.exports = async function (context, req) {
  const date = "2022-05-29T05:14:55.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

