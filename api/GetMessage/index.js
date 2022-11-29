module.exports = async function (context, req) {
  const date = "2022-11-29T16:14:11.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

