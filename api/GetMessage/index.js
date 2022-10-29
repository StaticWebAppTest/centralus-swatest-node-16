module.exports = async function (context, req) {
  const date = "2022-10-29T19:08:55.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

