module.exports = async function (context, req) {
  const date = "2023-11-29T05:08:54.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

