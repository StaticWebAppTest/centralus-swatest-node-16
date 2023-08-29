module.exports = async function (context, req) {
  const date = "2023-08-29T15:08:54.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

