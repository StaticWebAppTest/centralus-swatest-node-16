module.exports = async function (context, req) {
  const date = "2022-08-15T05:35:11.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

