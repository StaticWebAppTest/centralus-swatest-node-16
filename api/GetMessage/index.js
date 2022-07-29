module.exports = async function (context, req) {
  const date = "2022-07-29T10:11:44.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

