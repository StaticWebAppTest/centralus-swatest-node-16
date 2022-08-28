module.exports = async function (context, req) {
  const date = "2022-08-28T05:25:03.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

