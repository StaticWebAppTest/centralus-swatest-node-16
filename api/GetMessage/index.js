module.exports = async function (context, req) {
  const date = "2023-10-29T15:07:48.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

