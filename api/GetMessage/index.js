module.exports = async function (context, req) {
  const date = "2023-09-08T05:08:10.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

