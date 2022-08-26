module.exports = async function (context, req) {
  const date = "2022-08-26T05:54:17.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

