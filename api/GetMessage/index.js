module.exports = async function (context, req) {
  const date = "2022-12-29T05:08:52.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

