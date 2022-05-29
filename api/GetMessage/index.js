module.exports = async function (context, req) {
  const date = "2022-05-29T23:10:59.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

