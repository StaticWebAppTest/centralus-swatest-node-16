module.exports = async function (context, req) {
  const date = "2022-06-29T10:11:39.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

