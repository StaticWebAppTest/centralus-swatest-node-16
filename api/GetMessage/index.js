module.exports = async function (context, req) {
  const date = "2022-08-19T10:13:38.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

