module.exports = async function (context, req) {
  const date = "2022-12-20T20:09:57.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

