module.exports = async function (context, req) {
  const date = "2022-04-29T19:08:39.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

