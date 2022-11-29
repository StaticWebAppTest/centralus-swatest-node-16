module.exports = async function (context, req) {
  const date = "2022-11-29T11:08:48.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

