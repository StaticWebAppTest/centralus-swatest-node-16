module.exports = async function (context, req) {
  const date = "2022-05-29T16:14:03.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

