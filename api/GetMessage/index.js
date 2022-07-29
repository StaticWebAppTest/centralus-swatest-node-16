module.exports = async function (context, req) {
  const date = "2022-07-29T15:13:27.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

