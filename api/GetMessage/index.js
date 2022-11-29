module.exports = async function (context, req) {
  const date = "2022-11-29T22:09:28.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

