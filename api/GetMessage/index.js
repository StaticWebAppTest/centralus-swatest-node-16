module.exports = async function (context, req) {
  const date = "2022-03-31T14:10:41.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

