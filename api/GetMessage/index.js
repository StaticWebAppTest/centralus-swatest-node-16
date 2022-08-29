module.exports = async function (context, req) {
  const date = "2022-08-29T12:23:23.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

