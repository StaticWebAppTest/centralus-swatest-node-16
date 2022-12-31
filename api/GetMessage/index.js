module.exports = async function (context, req) {
  const date = "2022-12-31T21:07:46.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

