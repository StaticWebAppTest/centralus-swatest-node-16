module.exports = async function (context, req) {
  const date = "2022-11-29T07:09:36.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

