module.exports = async function (context, req) {
  const date = "2022-06-22T05:15:14.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

