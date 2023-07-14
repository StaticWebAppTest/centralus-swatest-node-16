module.exports = async function (context, req) {
  const date = "2023-07-14T05:09:39.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

