module.exports = async function (context, req) {
  const date = "2022-12-21T05:08:56.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

