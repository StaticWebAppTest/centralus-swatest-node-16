module.exports = async function (context, req) {
  const date = "2022-05-24T05:17:13.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

