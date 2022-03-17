module.exports = async function (context, req) {
  const date = "2022-03-17T21:08:51.580Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

