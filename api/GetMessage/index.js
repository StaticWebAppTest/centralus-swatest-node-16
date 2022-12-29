module.exports = async function (context, req) {
  const date = "2022-12-29T20:10:04.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

