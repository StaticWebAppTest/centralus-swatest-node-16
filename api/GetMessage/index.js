module.exports = async function (context, req) {
  const date = "2022-12-14T03:14:41.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

