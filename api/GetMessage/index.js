module.exports = async function (context, req) {
  const date = "2022-12-05T20:10:24.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

