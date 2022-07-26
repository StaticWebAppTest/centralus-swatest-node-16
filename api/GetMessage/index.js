module.exports = async function (context, req) {
  const date = "2022-07-26T19:09:10.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

