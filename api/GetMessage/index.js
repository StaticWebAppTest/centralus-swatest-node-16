module.exports = async function (context, req) {
  const date = "2022-06-22T07:09:58.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

