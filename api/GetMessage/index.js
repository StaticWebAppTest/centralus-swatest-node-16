module.exports = async function (context, req) {
  const date = "2022-07-29T20:11:35.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

