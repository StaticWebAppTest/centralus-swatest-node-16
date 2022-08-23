module.exports = async function (context, req) {
  const date = "2022-08-23T21:09:58.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

