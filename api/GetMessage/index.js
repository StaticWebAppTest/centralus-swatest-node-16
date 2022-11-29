module.exports = async function (context, req) {
  const date = "2022-11-29T14:09:24.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

