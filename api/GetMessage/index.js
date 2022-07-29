module.exports = async function (context, req) {
  const date = "2022-07-29T17:15:17.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

