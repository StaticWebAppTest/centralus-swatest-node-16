module.exports = async function (context, req) {
  const date = "2022-04-29T20:11:58.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

