module.exports = async function (context, req) {
  const date = "2022-03-04T10:10:44.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

