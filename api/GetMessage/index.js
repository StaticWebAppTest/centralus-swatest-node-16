module.exports = async function (context, req) {
  const date = "2022-06-05T05:10:33.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

