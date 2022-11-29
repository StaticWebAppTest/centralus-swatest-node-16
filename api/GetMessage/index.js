module.exports = async function (context, req) {
  const date = "2022-11-29T20:10:43.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

