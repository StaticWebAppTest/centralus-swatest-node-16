module.exports = async function (context, req) {
  const date = "2022-11-29T02:23:20.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

