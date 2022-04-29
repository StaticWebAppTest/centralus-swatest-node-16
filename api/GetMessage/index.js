module.exports = async function (context, req) {
  const date = "2022-04-29T08:17:38.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

