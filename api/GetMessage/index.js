module.exports = async function (context, req) {
  const date = "2022-08-04T21:09:25.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

