module.exports = async function (context, req) {
  const date = "2022-09-05T05:57:57.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

